/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFutureWallet,
  IFutureWalletInterface,
} from "../../apwine/IFutureWallet";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "WithdrawalsPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "WithdrawalsResumed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_periodIndex",
        type: "uint256",
      },
    ],
    name: "YieldRedeemed",
    type: "event",
  },
  {
    inputs: [],
    name: "getFutureVaultAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIBTAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_periodIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getRedeemableYield",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardsRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemAllWalletRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    name: "redeemWalletRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_periodIndex",
        type: "uint256",
      },
    ],
    name: "redeemYield",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "registerExpiredFuture",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRewardRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFutureWallet__factory {
  static readonly abi = _abi;
  static createInterface(): IFutureWalletInterface {
    return new utils.Interface(_abi) as IFutureWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFutureWallet {
    return new Contract(address, _abi, signerOrProvider) as IFutureWallet;
  }
}
