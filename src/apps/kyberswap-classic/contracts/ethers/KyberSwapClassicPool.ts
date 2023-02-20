/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface KyberSwapClassicPoolInterface extends utils.Interface {
  functions: {
    'MINIMUM_LIQUIDITY()': FunctionFragment;
    'PERMIT_TYPEHASH()': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'ampBps()': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(address)': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'domainSeparator()': FunctionFragment;
    'factory()': FunctionFragment;
    'getReserves()': FunctionFragment;
    'getTradeInfo()': FunctionFragment;
    'getVolumeTrendData()': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'initialize(address,address,uint32)': FunctionFragment;
    'kLast()': FunctionFragment;
    'mint(address)': FunctionFragment;
    'name()': FunctionFragment;
    'nonces(address)': FunctionFragment;
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'skim(address)': FunctionFragment;
    'swap(uint256,uint256,address,bytes)': FunctionFragment;
    'symbol()': FunctionFragment;
    'sync()': FunctionFragment;
    'token0()': FunctionFragment;
    'token1()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MINIMUM_LIQUIDITY'
      | 'PERMIT_TYPEHASH'
      | 'allowance'
      | 'ampBps'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'decimals'
      | 'decreaseAllowance'
      | 'domainSeparator'
      | 'factory'
      | 'getReserves'
      | 'getTradeInfo'
      | 'getVolumeTrendData'
      | 'increaseAllowance'
      | 'initialize'
      | 'kLast'
      | 'mint'
      | 'name'
      | 'nonces'
      | 'permit'
      | 'skim'
      | 'swap'
      | 'symbol'
      | 'sync'
      | 'token0'
      | 'token1'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MINIMUM_LIQUIDITY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'PERMIT_TYPEHASH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'ampBps', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'domainSeparator', values?: undefined): string;
  encodeFunctionData(functionFragment: 'factory', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReserves', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getTradeInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getVolumeTrendData', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'kLast', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nonces', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'permit',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'skim', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sync', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token0', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token1', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: 'MINIMUM_LIQUIDITY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'PERMIT_TYPEHASH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ampBps', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'domainSeparator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReserves', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTradeInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVolumeTrendData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'kLast', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'skim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sync', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token0', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token1', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'Burn(address,uint256,uint256,address)': EventFragment;
    'Mint(address,uint256,uint256)': EventFragment;
    'Swap(address,uint256,uint256,uint256,uint256,address,uint256)': EventFragment;
    'Sync(uint256,uint256,uint256,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'UpdateEMA(uint256,uint256,uint128,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Swap'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Sync'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateEMA'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface BurnEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
  to: string;
}
export type BurnEvent = TypedEvent<[string, BigNumber, BigNumber, string], BurnEventObject>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface MintEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SwapEventObject {
  sender: string;
  amount0In: BigNumber;
  amount1In: BigNumber;
  amount0Out: BigNumber;
  amount1Out: BigNumber;
  to: string;
  feeInPrecision: BigNumber;
}
export type SwapEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, string, BigNumber],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface SyncEventObject {
  vReserve0: BigNumber;
  vReserve1: BigNumber;
  reserve0: BigNumber;
  reserve1: BigNumber;
}
export type SyncEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], SyncEventObject>;

export type SyncEventFilter = TypedEventFilter<SyncEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UpdateEMAEventObject {
  shortEMA: BigNumber;
  longEMA: BigNumber;
  lastBlockVolume: BigNumber;
  skipBlock: BigNumber;
}
export type UpdateEMAEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], UpdateEMAEventObject>;

export type UpdateEMAEventFilter = TypedEventFilter<UpdateEMAEvent>;

export interface KyberSwapClassicPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KyberSwapClassicPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    ampBps(overrides?: CallOverrides): Promise<[number]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getReserves(
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { _reserve0: BigNumber; _reserve1: BigNumber }>;

    getTradeInfo(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _vReserve0: BigNumber;
        _vReserve1: BigNumber;
        feeInPrecision: BigNumber;
      }
    >;

    getVolumeTrendData(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _shortEMA: BigNumber;
        _longEMA: BigNumber;
        _currentBlockVolume: BigNumber;
        _lastTradeBlock: BigNumber;
      }
    >;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _ampBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    kLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      callbackData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  ampBps(overrides?: CallOverrides): Promise<number>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  getReserves(
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { _reserve0: BigNumber; _reserve1: BigNumber }>;

  getTradeInfo(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      _reserve0: BigNumber;
      _reserve1: BigNumber;
      _vReserve0: BigNumber;
      _vReserve1: BigNumber;
      feeInPrecision: BigNumber;
    }
  >;

  getVolumeTrendData(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      _shortEMA: BigNumber;
      _longEMA: BigNumber;
      _currentBlockVolume: BigNumber;
      _lastTradeBlock: BigNumber;
    }
  >;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    _ampBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  kLast(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  permit(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  skim(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  swap(
    amount0Out: PromiseOrValue<BigNumberish>,
    amount1Out: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    callbackData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    ampBps(overrides?: CallOverrides): Promise<number>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    getReserves(
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { _reserve0: BigNumber; _reserve1: BigNumber }>;

    getTradeInfo(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _vReserve0: BigNumber;
        _vReserve1: BigNumber;
        feeInPrecision: BigNumber;
      }
    >;

    getVolumeTrendData(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        _shortEMA: BigNumber;
        _longEMA: BigNumber;
        _currentBlockVolume: BigNumber;
        _lastTradeBlock: BigNumber;
      }
    >;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _ampBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    kLast(overrides?: CallOverrides): Promise<BigNumber>;

    mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    skim(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      callbackData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    sync(overrides?: CallOverrides): Promise<void>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    'Burn(address,uint256,uint256,address)'(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      to?: PromiseOrValue<string> | null,
    ): BurnEventFilter;
    Burn(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      to?: PromiseOrValue<string> | null,
    ): BurnEventFilter;

    'Mint(address,uint256,uint256)'(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
    ): MintEventFilter;
    Mint(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;

    'Swap(address,uint256,uint256,uint256,uint256,address,uint256)'(
      sender?: PromiseOrValue<string> | null,
      amount0In?: null,
      amount1In?: null,
      amount0Out?: null,
      amount1Out?: null,
      to?: PromiseOrValue<string> | null,
      feeInPrecision?: null,
    ): SwapEventFilter;
    Swap(
      sender?: PromiseOrValue<string> | null,
      amount0In?: null,
      amount1In?: null,
      amount0Out?: null,
      amount1Out?: null,
      to?: PromiseOrValue<string> | null,
      feeInPrecision?: null,
    ): SwapEventFilter;

    'Sync(uint256,uint256,uint256,uint256)'(
      vReserve0?: null,
      vReserve1?: null,
      reserve0?: null,
      reserve1?: null,
    ): SyncEventFilter;
    Sync(vReserve0?: null, vReserve1?: null, reserve0?: null, reserve1?: null): SyncEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;

    'UpdateEMA(uint256,uint256,uint128,uint256)'(
      shortEMA?: null,
      longEMA?: null,
      lastBlockVolume?: null,
      skipBlock?: null,
    ): UpdateEMAEventFilter;
    UpdateEMA(shortEMA?: null, longEMA?: null, lastBlockVolume?: null, skipBlock?: null): UpdateEMAEventFilter;
  };

  estimateGas: {
    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    ampBps(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(to: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    getTradeInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getVolumeTrendData(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _ampBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    kLast(overrides?: CallOverrides): Promise<BigNumber>;

    mint(to: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    skim(to: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      callbackData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    ampBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTradeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVolumeTrendData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _ampBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    kLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    skim(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      callbackData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
