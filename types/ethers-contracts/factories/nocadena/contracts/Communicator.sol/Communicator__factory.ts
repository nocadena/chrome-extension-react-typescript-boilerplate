/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Communicator,
  CommunicatorInterface,
} from "../../../../nocadena/contracts/Communicator.sol/Communicator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dstCommunicators",
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
    name: "getNc",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_masterChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_satelliteAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_hypOutbox",
        type: "address",
      },
      {
        internalType: "uint32[]",
        name: "_hypDomainIdentifier",
        type: "uint32[]",
      },
      {
        internalType: "address[]",
        name: "_dstCommunicators",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a7f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e306a411461005c57806356d5d475146100725780637ce7424914610087578063c48dec39146100b2578063ccc95e03146100c5575b600080fd5b6003546040519081526020015b60405180910390f35b610085610080366004610611565b6100d8565b005b61009a610095366004610698565b610154565b6040516001600160a01b039091168152602001610069565b6100856100c03660046107b7565b61017e565b6100856100d33660046108ba565b610234565b60006100e682840184610698565b60005460405163aff3681b60e01b81526004810183905291925064010000000090046001600160a01b03169063aff3681b90602401600060405180830381600087803b15801561013557600080fd5b505af1158015610149573d6000803e3d6000fd5b505050505050505050565b6003818154811061016457600080fd5b6000918252602090912001546001600160a01b0316905081565b61018b8661ffff16610243565b6101988561ffff16610243565b6101a18461028b565b600080546001600160a01b0380871664010000000002640100000000600160c01b031961ffff8a8116620100000263ffffffff19909516908c1617939093179290921691909117909155600180549185166001600160a01b031990921691909117905581516102179060029060208501906104df565b50805161022b90600390602084019061058e565b50505050505050565b61023f8160026102d3565b5050565b6102888160405160240161025991815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b17905261047b565b50565b6040516001600160a01b03821660248201526102889060440160408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b17905261047b565b6001546102e8906001600160a01b031661028b565b61033560026102f8600184610954565b61ffff168154811061030c5761030c610985565b6000918252602090912060088204015460079091166004026101000a900463ffffffff16610243565b61035f8260405160200161034b91815260200190565b60405160208183030381529060405261049c565b600180546001600160a01b03169063fa31de0190620f4240906002906103859086610954565b61ffff168154811061039957610399610985565b6000918252602090912060088204015460079091166004026101000a900463ffffffff166103f960036103cd600188610954565b61ffff16815481106103e1576103e1610985565b6000918252602090912001546001600160a01b031690565b6040805160208101899052016040516020818303038152906040526040518563ffffffff1660e01b8152600401610432939291906109e8565b60206040518083038160008887f1158015610451573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906104769190610a16565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b610288816040516024016104b09190610a2f565b60408051601f198184030181529190526020810180516001600160e01b03166305f3bfab60e11b17905261047b565b8280548282559060005260206000209060070160089004810192821561057e5791602002820160005b8382111561054c57835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610508565b801561057c5782816101000a81549063ffffffff021916905560040160208160030104928301926001030261054c565b505b5061058a9291506105e3565b5090565b82805482825590600052602060002090810192821561057e579160200282015b8281111561057e57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906105ae565b5b8082111561058a57600081556001016105e4565b803563ffffffff8116811461060c57600080fd5b919050565b6000806000806060858703121561062757600080fd5b610630856105f8565b935060208501359250604085013567ffffffffffffffff8082111561065457600080fd5b818701915087601f83011261066857600080fd5b81358181111561067757600080fd5b88602082850101111561068957600080fd5b95989497505060200194505050565b6000602082840312156106aa57600080fd5b5035919050565b803561ffff8116811461060c57600080fd5b80356001600160a01b038116811461060c57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610719576107196106da565b604052919050565b600067ffffffffffffffff82111561073b5761073b6106da565b5060051b60200190565b600082601f83011261075657600080fd5b8135602061076b61076683610721565b6106f0565b82815260059290921b8401810191818101908684111561078a57600080fd5b8286015b848110156107ac5761079f816106c3565b835291830191830161078e565b509695505050505050565b60008060008060008060c087890312156107d057600080fd5b6107d9876106b1565b955060206107e88189016106b1565b95506107f6604089016106c3565b9450610804606089016106c3565b9350608088013567ffffffffffffffff8082111561082157600080fd5b818a0191508a601f83011261083557600080fd5b813561084361076682610721565b81815260059190911b8301840190848101908d83111561086257600080fd5b938501935b8285101561088757610878856105f8565b82529385019390850190610867565b9650505060a08a013592508083111561089f57600080fd5b50506108ad89828a01610745565b9150509295509295509295565b600080604083850312156108cd57600080fd5b823567ffffffffffffffff808211156108e557600080fd5b818501915085601f8301126108f957600080fd5b813560208282111561090d5761090d6106da565b61091f601f8301601f191682016106f0565b9250818352878183860101111561093557600080fd5b8181850182850137600091830181019190915290969401359450505050565b600061ffff8381169083168181101561097d57634e487b7160e01b600052601160045260246000fd5b039392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156109c1576020818501810151868301820152016109a5565b818111156109d3576000602083870101525b50601f01601f19169290920160200192915050565b63ffffffff84168152826020820152606060408201526000610a0d606083018461099b565b95945050505050565b600060208284031215610a2857600080fd5b5051919050565b602081526000610a42602083018461099b565b939250505056fea26469706673582212204d28da76cb0805cec8b1dcb5bfa97b596645024a4e23d79fd4d0c4e09c6f37a264736f6c634300080f0033";

type CommunicatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CommunicatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Communicator__factory extends ContractFactory {
  constructor(...args: CommunicatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Communicator> {
    return super.deploy(overrides || {}) as Promise<Communicator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Communicator {
    return super.attach(address) as Communicator;
  }
  override connect(signer: Signer): Communicator__factory {
    return super.connect(signer) as Communicator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommunicatorInterface {
    return new utils.Interface(_abi) as CommunicatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Communicator {
    return new Contract(address, _abi, signerOrProvider) as Communicator;
  }
}
