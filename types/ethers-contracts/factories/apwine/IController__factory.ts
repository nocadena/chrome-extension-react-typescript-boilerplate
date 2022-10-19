/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IController,
  IControllerInterface,
} from "../../apwine/IController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "DepositsPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "DepositsResumed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "FutureRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "FutureSetToBeTerminated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "FutureTerminated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "FutureUnregistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_feeFactor",
        type: "uint256",
      },
    ],
    name: "NewPerformanceFeeFactor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_periodIndex",
        type: "uint256",
      },
    ],
    name: "NewPeriodDurationIndexSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_periodDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_nextSwitchTimestamp",
        type: "uint256",
      },
    ],
    name: "NextPeriodSwitchSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IRegistry",
        name: "_registry",
        type: "address",
      },
    ],
    name: "RegistryChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_startingDelay",
        type: "uint256",
      },
    ],
    name: "StartingDelaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "WithdrawalsPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFutureVault",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "WithdrawalsResumed",
    type: "event",
  },
  {
    inputs: [],
    name: "STARTING_DELAY",
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
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "createFYTDelegationTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "exitTerminatedFuture",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "getCurrentPerformanceFeeFactor",
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
    name: "getDurations",
    outputs: [
      {
        internalType: "uint256[]",
        name: "durationsList",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_periodDuration",
        type: "uint256",
      },
    ],
    name: "getFuturesWithDuration",
    outputs: [
      {
        internalType: "address[]",
        name: "filteredFutures",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "getNextPerformanceFeeFactor",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_periodDuration",
        type: "uint256",
      },
    ],
    name: "getNextPeriodStart",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_periodDuration",
        type: "uint256",
      },
    ],
    name: "getPeriodIndex",
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
    name: "getRegistryAddress",
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
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "isDepositsPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "isFutureSetToBeTerminated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "isFutureTerminated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
    ],
    name: "isWithdrawalsPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_futureVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFYTDelegationFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IController__factory {
  static readonly abi = _abi;
  static createInterface(): IControllerInterface {
    return new utils.Interface(_abi) as IControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IController {
    return new Contract(address, _abi, signerOrProvider) as IController;
  }
}
