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

export interface KwentaStakingInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'earned(address)': FunctionFragment;
    'escrowedBalanceOf(address)': FunctionFragment;
    'exit()': FunctionFragment;
    'getReward()': FunctionFragment;
    'getRewardForDuration()': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'nonEscrowedBalanceOf(address)': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'pauseStakingRewards()': FunctionFragment;
    'paused()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'recoverERC20(address,uint256)': FunctionFragment;
    'rewardEscrow()': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStored()': FunctionFragment;
    'rewardRate()': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'rewardsDuration()': FunctionFragment;
    'setRewardsDuration(uint256)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakeEscrow(address,uint256)': FunctionFragment;
    'supplySchedule()': FunctionFragment;
    'token()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'unpauseStakingRewards()': FunctionFragment;
    'unstake(uint256)': FunctionFragment;
    'unstakeEscrow(address,uint256)': FunctionFragment;
    'userRewardPerTokenPaid(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'balanceOf'
      | 'earned'
      | 'escrowedBalanceOf'
      | 'exit'
      | 'getReward'
      | 'getRewardForDuration'
      | 'lastTimeRewardApplicable'
      | 'lastUpdateTime'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'nonEscrowedBalanceOf'
      | 'notifyRewardAmount'
      | 'owner'
      | 'pauseStakingRewards'
      | 'paused'
      | 'periodFinish'
      | 'recoverERC20'
      | 'rewardEscrow'
      | 'rewardPerToken'
      | 'rewardPerTokenStored'
      | 'rewardRate'
      | 'rewards'
      | 'rewardsDuration'
      | 'setRewardsDuration'
      | 'stake'
      | 'stakeEscrow'
      | 'supplySchedule'
      | 'token'
      | 'totalSupply'
      | 'unpauseStakingRewards'
      | 'unstake'
      | 'unstakeEscrow'
      | 'userRewardPerTokenPaid',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'escrowedBalanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'exit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRewardForDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nominateNewOwner', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nonEscrowedBalanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'notifyRewardAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pauseStakingRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'recoverERC20',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'rewardEscrow', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardsDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setRewardsDuration', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'stakeEscrow',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'supplySchedule', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unpauseStakingRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unstake', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'unstakeEscrow',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'userRewardPerTokenPaid', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'escrowedBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRewardForDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nonEscrowedBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pauseStakingRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverERC20', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardEscrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardsDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardsDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeEscrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supplySchedule', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpauseStakingRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unstake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unstakeEscrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userRewardPerTokenPaid', data: BytesLike): Result;

  events: {
    'EscrowStaked(address,uint256)': EventFragment;
    'EscrowUnstaked(address,uint256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'Paused(address)': EventFragment;
    'Recovered(address,uint256)': EventFragment;
    'RewardAdded(uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'RewardsDurationUpdated(uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
    'Unstaked(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'EscrowStaked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EscrowUnstaked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Recovered'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardsDurationUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unstaked'): EventFragment;
}

export interface EscrowStakedEventObject {
  user: string;
  amount: BigNumber;
}
export type EscrowStakedEvent = TypedEvent<[string, BigNumber], EscrowStakedEventObject>;

export type EscrowStakedEventFilter = TypedEventFilter<EscrowStakedEvent>;

export interface EscrowUnstakedEventObject {
  user: string;
  amount: BigNumber;
}
export type EscrowUnstakedEvent = TypedEvent<[string, BigNumber], EscrowUnstakedEventObject>;

export type EscrowUnstakedEventFilter = TypedEventFilter<EscrowUnstakedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RecoveredEventObject {
  token: string;
  amount: BigNumber;
}
export type RecoveredEvent = TypedEvent<[string, BigNumber], RecoveredEventObject>;

export type RecoveredEventFilter = TypedEventFilter<RecoveredEvent>;

export interface RewardAddedEventObject {
  reward: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<[string, BigNumber], RewardPaidEventObject>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface RewardsDurationUpdatedEventObject {
  newDuration: BigNumber;
}
export type RewardsDurationUpdatedEvent = TypedEvent<[BigNumber], RewardsDurationUpdatedEventObject>;

export type RewardsDurationUpdatedEventFilter = TypedEventFilter<RewardsDurationUpdatedEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UnstakedEventObject {
  user: string;
  amount: BigNumber;
}
export type UnstakedEvent = TypedEvent<[string, BigNumber], UnstakedEventObject>;

export type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;

export interface KwentaStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KwentaStakingInterface;

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
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    escrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getRewardForDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    nonEscrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rewardEscrow(overrides?: CallOverrides): Promise<[string]>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    setRewardsDuration(
      _rewardsDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    supplySchedule(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    unstake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    unstakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  escrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getRewardForDuration(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  nonEscrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  recoverERC20(
    tokenAddress: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rewardEscrow(overrides?: CallOverrides): Promise<string>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

  setRewardsDuration(
    _rewardsDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stake(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stakeEscrow(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  supplySchedule(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  unpauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  unstake(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  unstakeEscrow(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    escrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    getRewardForDuration(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    nonEscrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(reward: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pauseStakingRewards(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    rewardEscrow(overrides?: CallOverrides): Promise<string>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardsDuration(_rewardsDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    stake(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    stakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    supplySchedule(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    unpauseStakingRewards(overrides?: CallOverrides): Promise<void>;

    unstake(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    unstakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'EscrowStaked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): EscrowStakedEventFilter;
    EscrowStaked(user?: PromiseOrValue<string> | null, amount?: null): EscrowStakedEventFilter;

    'EscrowUnstaked(address,uint256)'(user?: null, amount?: null): EscrowUnstakedEventFilter;
    EscrowUnstaked(user?: null, amount?: null): EscrowUnstakedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'Recovered(address,uint256)'(token?: null, amount?: null): RecoveredEventFilter;
    Recovered(token?: null, amount?: null): RecoveredEventFilter;

    'RewardAdded(uint256)'(reward?: null): RewardAddedEventFilter;
    RewardAdded(reward?: null): RewardAddedEventFilter;

    'RewardPaid(address,uint256)'(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;
    RewardPaid(user?: PromiseOrValue<string> | null, reward?: null): RewardPaidEventFilter;

    'RewardsDurationUpdated(uint256)'(newDuration?: null): RewardsDurationUpdatedEventFilter;
    RewardsDurationUpdated(newDuration?: null): RewardsDurationUpdatedEventFilter;

    'Staked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: null): StakedEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    'Unstaked(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): UnstakedEventFilter;
    Unstaked(user?: PromiseOrValue<string> | null, amount?: null): UnstakedEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    escrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getRewardForDuration(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    nonEscrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rewardEscrow(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsDuration(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardsDuration(
      _rewardsDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    supplySchedule(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    unpauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    unstake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    unstakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    escrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getRewardForDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonEscrowedBalanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rewardEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardsDuration(
      _rewardsDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    supplySchedule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpauseStakingRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    unstake(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    unstakeEscrow(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
