import { Inject } from '@nestjs/common';
import { ethers } from 'ethers';
import { formatEther, parseEther } from 'ethers/lib/utils';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import {
  buildDollarDisplayItem,
  buildPercentageDisplayItem,
} from '~app-toolkit/helpers/presentation/display-item.present';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetAddressesParams,
  GetUnderlyingTokensParams,
  DefaultAppTokenDataProps,
  GetPricePerShareParams,
  GetDataPropsParams,
  GetDisplayPropsParams,
  GetTokenPropsParams,
  GetPriceParams,
} from '~position/template/app-token.template.types';

import { DefiedgeContractFactory, Strategy } from '../contracts';
import { expandTo18Decimals } from '../utils';

import { DefiedgeStrategyDefinitionsResolver } from './defiedge.strategy.definitions-resolver';

export type DefiedgeStrategyDefinition = {
  address: string;
  title: string;
  subTitle: string | null;
  token0Address: string;
  token1Address: string;
};

export type DefiedgeStrategyTokenDataProps = DefaultAppTokenDataProps & {
  sinceInception: number;
  sharePrice: number;
  aum: number;
};

export abstract class DefiedgeStrategyTokenFetcher extends AppTokenTemplatePositionFetcher<
  Strategy,
  DefiedgeStrategyTokenDataProps,
  DefiedgeStrategyDefinition
> {
  groupLabel = 'Strategies';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(DefiedgeContractFactory) protected readonly contractFactory: DefiedgeContractFactory,
    @Inject(DefiedgeStrategyDefinitionsResolver)
    protected readonly definitionResolver: DefiedgeStrategyDefinitionsResolver,
  ) {
    super(appToolkit);
  }

  getContract(address: string): Strategy {
    return this.contractFactory.strategy({ address, network: this.network });
  }

  async getDefinitions() {
    const apiDefinitions = await this.definitionResolver.getStrategies(this.network);

    const definitions = apiDefinitions.map(v => ({
      address: v.id.toLowerCase(),
      title: v.title,
      subTitle: v.subTitle,
      token0Address: v.token0.id.toLowerCase(),
      token1Address: v.token1.id.toLowerCase(),
    }));

    return definitions;
  }

  async getAddresses({ definitions }: GetAddressesParams<DefiedgeStrategyDefinition>) {
    return definitions.map(v => v.address);
  }

  async getSymbol({ contract }: GetTokenPropsParams<Strategy>) {
    return ethers.utils.parseBytes32String(await contract.symbol());
  }

  async getUnderlyingTokenDefinitions({ definition }: GetUnderlyingTokensParams<Strategy, DefiedgeStrategyDefinition>) {
    return [
      { address: definition.token0Address, network: this.network },
      { address: definition.token1Address, network: this.network },
    ];
  }

  async getPrice({
    contract,
    appToken,
  }: GetPriceParams<Strategy, DefiedgeStrategyTokenDataProps, DefiedgeStrategyDefinition>): Promise<number> {
    const [aumWithFee, totalSupplyBN] = await Promise.all([
      contract.callStatic.getAUMWithFees(false),
      contract.totalSupply(),
    ]);

    const { amount0, amount1 } = aumWithFee;
    const [token0, token1] = appToken.tokens;

    const t0Price = parseEther(token0.price.toString());
    const t1Price = parseEther(token1.price.toString());
    const aumBN = expandTo18Decimals(amount0, token0.decimals)
      .mul(t0Price)
      .add(expandTo18Decimals(amount1, token1.decimals).mul(t1Price));

    const sharePrice = totalSupplyBN.eq(0) ? 0 : +Number(+formatEther(aumBN.div(totalSupplyBN))).toFixed(8) || 100;

    return sharePrice;
  }

  async getPricePerShare({
    contract,
    appToken,
  }: GetPricePerShareParams<Strategy, DefiedgeStrategyTokenDataProps, DefiedgeStrategyDefinition>) {
    const [aumWithFee, totalSupplyBN] = await Promise.all([
      contract.callStatic.getAUMWithFees(false),
      contract.totalSupply(),
    ]);

    if (totalSupplyBN.eq(0)) return [0, 0];

    const { amount0, amount1 } = aumWithFee;
    const [token0, token1] = appToken.tokens;

    const totalSupply = +formatEther(totalSupplyBN);

    const pricePerShare = [
      +formatEther(expandTo18Decimals(amount0, token0.decimals)) / totalSupply,
      +formatEther(expandTo18Decimals(amount1, token1.decimals)) / totalSupply,
    ];

    return pricePerShare;
  }

  async getDataProps(
    params: GetDataPropsParams<Strategy, DefiedgeStrategyTokenDataProps, DefiedgeStrategyDefinition>,
  ): Promise<DefiedgeStrategyTokenDataProps> {
    const defaultDataProps = await super.getDataProps(params);

    const { contract, appToken } = params;
    const totalSupplyBN = await contract.totalSupply();
    const sharePrice = appToken.price;
    const liquidity = +formatEther(totalSupplyBN) * appToken.price;

    return { ...defaultDataProps, liquidity, sharePrice, sinceInception: sharePrice - 100 };
  }

  async getLabel({
    definition,
  }: GetDisplayPropsParams<Strategy, DefiedgeStrategyTokenDataProps, DefiedgeStrategyDefinition>) {
    return definition.subTitle ?? definition.title;
  }

  async getSecondaryLabel({
    definition,
  }: GetDisplayPropsParams<Strategy, DefiedgeStrategyTokenDataProps, DefiedgeStrategyDefinition>) {
    return definition.subTitle ?? '';
  }

  async getStatsItems({
    appToken,
  }: GetDisplayPropsParams<Strategy, DefiedgeStrategyTokenDataProps, DefiedgeStrategyDefinition>) {
    const { liquidity, apy, reserves, sinceInception } = appToken.dataProps;
    const reservesDisplay = reserves.map(v => (v < 0.01 ? '<0.01' : v.toFixed(2))).join(' / ');

    return [
      { label: 'Liquidity', value: buildDollarDisplayItem(liquidity) },
      { label: 'Reserves', value: reservesDisplay },
      { label: 'APY', value: buildPercentageDisplayItem(apy) },
      { label: 'Since inception', value: buildPercentageDisplayItem(sinceInception) },
    ];
  }
}
