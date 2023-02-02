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
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface CCPayInterface extends utils.Interface {
  functions: {
    "CORE_BRIDGE_ADDRESS()": FunctionFragment;
    "TOKEN_BRIDGE()": FunctionFragment;
    "TOKEN_BRIDGE_ADDRESS()": FunctionFragment;
    "changePaymentToken(address)": FunctionFragment;
    "makePaymentFromSource(address,address,uint256,uint256,uint8,bytes32,bytes32,uint16,bytes32,bytes32,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "paymentToken()": FunctionFragment;
    "receivePaymentOnTarget(bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CORE_BRIDGE_ADDRESS"
      | "TOKEN_BRIDGE"
      | "TOKEN_BRIDGE_ADDRESS"
      | "changePaymentToken"
      | "makePaymentFromSource"
      | "owner"
      | "paymentToken"
      | "receivePaymentOnTarget"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CORE_BRIDGE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_BRIDGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_BRIDGE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changePaymentToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "makePaymentFromSource",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivePaymentOnTarget",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "CORE_BRIDGE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_BRIDGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_BRIDGE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makePaymentFromSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePaymentOnTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PaymentReceived(uint16,bytes32,address,uint256,bytes32)": EventFragment;
    "PaymentSent(uint16,bytes32,address,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentSent"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PaymentReceivedEventObject {
  _recipientChainId: number;
  _recipientContractAddress: string;
  _paymentToken: string;
  _amount: BigNumber;
  _receiptId: string;
}
export type PaymentReceivedEvent = TypedEvent<
  [number, string, string, BigNumber, string],
  PaymentReceivedEventObject
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export interface PaymentSentEventObject {
  _recipientChainId: number;
  _recipientContractAddress: string;
  _paymentToken: string;
  _amount: BigNumber;
  _receiptId: string;
}
export type PaymentSentEvent = TypedEvent<
  [number, string, string, BigNumber, string],
  PaymentSentEventObject
>;

export type PaymentSentEventFilter = TypedEventFilter<PaymentSentEvent>;

export interface CCPay extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CCPayInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CORE_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_BRIDGE(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    changePaymentToken(
      newPaymentToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makePaymentFromSource(
      token: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      recipientChainId: PromiseOrValue<BigNumberish>,
      recipientCCPayAddress: PromiseOrValue<BytesLike>,
      receiptId: PromiseOrValue<BytesLike>,
      optionalTag: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paymentToken(overrides?: CallOverrides): Promise<[string]>;

    receivePaymentOnTarget(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CORE_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<string>;

  TOKEN_BRIDGE(overrides?: CallOverrides): Promise<string>;

  TOKEN_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<string>;

  changePaymentToken(
    newPaymentToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makePaymentFromSource(
    token: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    permitValue: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    recipientChainId: PromiseOrValue<BigNumberish>,
    recipientCCPayAddress: PromiseOrValue<BytesLike>,
    receiptId: PromiseOrValue<BytesLike>,
    optionalTag: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paymentToken(overrides?: CallOverrides): Promise<string>;

  receivePaymentOnTarget(
    encodedVm: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CORE_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<string>;

    TOKEN_BRIDGE(overrides?: CallOverrides): Promise<string>;

    TOKEN_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<string>;

    changePaymentToken(
      newPaymentToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    makePaymentFromSource(
      token: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      recipientChainId: PromiseOrValue<BigNumberish>,
      recipientCCPayAddress: PromiseOrValue<BytesLike>,
      receiptId: PromiseOrValue<BytesLike>,
      optionalTag: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paymentToken(overrides?: CallOverrides): Promise<string>;

    receivePaymentOnTarget(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PaymentReceived(uint16,bytes32,address,uint256,bytes32)"(
      _recipientChainId?: null,
      _recipientContractAddress?: null,
      _paymentToken?: null,
      _amount?: null,
      _receiptId?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(
      _recipientChainId?: null,
      _recipientContractAddress?: null,
      _paymentToken?: null,
      _amount?: null,
      _receiptId?: null
    ): PaymentReceivedEventFilter;

    "PaymentSent(uint16,bytes32,address,uint256,bytes32)"(
      _recipientChainId?: null,
      _recipientContractAddress?: null,
      _paymentToken?: null,
      _amount?: null,
      _receiptId?: null
    ): PaymentSentEventFilter;
    PaymentSent(
      _recipientChainId?: null,
      _recipientContractAddress?: null,
      _paymentToken?: null,
      _amount?: null,
      _receiptId?: null
    ): PaymentSentEventFilter;
  };

  estimateGas: {
    CORE_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_BRIDGE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    changePaymentToken(
      newPaymentToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makePaymentFromSource(
      token: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      recipientChainId: PromiseOrValue<BigNumberish>,
      recipientCCPayAddress: PromiseOrValue<BytesLike>,
      receiptId: PromiseOrValue<BytesLike>,
      optionalTag: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paymentToken(overrides?: CallOverrides): Promise<BigNumber>;

    receivePaymentOnTarget(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CORE_BRIDGE_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_BRIDGE_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changePaymentToken(
      newPaymentToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makePaymentFromSource(
      token: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      recipientChainId: PromiseOrValue<BigNumberish>,
      recipientCCPayAddress: PromiseOrValue<BytesLike>,
      receiptId: PromiseOrValue<BytesLike>,
      optionalTag: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paymentToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receivePaymentOnTarget(
      encodedVm: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
