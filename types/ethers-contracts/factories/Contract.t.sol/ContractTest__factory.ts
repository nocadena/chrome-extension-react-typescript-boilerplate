/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ContractTest,
  ContractTestInterface,
} from "../../Contract.t.sol/ContractTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    inputs: [],
    name: "IS_TEST",
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
    inputs: [],
    name: "failed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805462ff00ff19166201000117905534801561002157600080fd5b50612fab806100316000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c80630a9254e4146200006f5780633a768463146200007b5780636b59084d14620000b4578063ba414fa614620000be578063f8ccbf4714620000d9578063fa7626d414620000ed575b600080fd5b62000079620000fb565b005b62000097737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020015b60405180910390f35b620000796200065f565b620000c8620007d5565b6040519015158152602001620000ab565b600054620000c89062010000900460ff1681565b600054620000c89060ff1681565b6040516200010990620009bb565b604051809103906000f08015801562000126573d6000803e3d6000fd5b50600960006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600d600190806001815401808255809150506001900390600052602060002090601091828204019190066002029091909190916101000a81548161ffff021916908361ffff160217905550600e636d6f2d6190806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055507354148470292c24345fb828b003461a9444414517600f60008061ffff16815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600d600290806001815401808255809150506001900390600052602060002090601091828204019190066002029091909190916101000a81548161ffff021916908361ffff160217905550600e6201388190806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff16021790555073e17c37212d785760e8331d4a4395b17b34ba8cdf600f6000600161ffff16815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550601060009080600181540180825580915050600190039060005260206000200160009091909190916101000a8154816001600160a01b0302191690836001600160a01b03160217905550601060009080600181540180825580915050600190039060005260206000200160009091909190916101000a8154816001600160a01b0302191690836001600160a01b03160217905550604051620003c990620009c9565b604051809103906000f080158015620003e6573d6000803e3d6000fd5b50600880546001600160a01b0319166001600160a01b039290921691821790556040516200041490620009d7565b6001600160a01b039091168152606060208201819052600d908201526c6e6f636164656e61205553444360981b608082015260a060408201819052600590820152646e5553444360d81b60c082015260e001604051809103906000f08015801562000483573d6000803e3d6000fd5b50600b80546001600160a01b0319166001600160a01b03928316179055600854604051911690620004b490620009d7565b6001600160a01b039091168152606060208201819052600c908201526b0dcdec6c2c8cadcc2408aa8960a31b608082015260a060408201819052600490820152630dc8aa8960e31b60c082015260e001604051809103906000f08015801562000521573d6000803e3d6000fd5b50600c80546001600160a01b0319166001600160a01b03928316908117909155600854600b54600954604051637c643b2f60e11b8152918516600483015260248201939093526000604482015291831660648301529091169063f8c8765e90608401600060405180830381600087803b1580156200059e57600080fd5b505af1158015620005b3573d6000803e3d6000fd5b50506009546001600160a01b0316915063c48dec3990506001806000600f81620005de8480620009e5565b61ffff168152602081019190915260409081016000205490516001600160e01b031960e087901b16815262000629949392916001600160a01b031690600e9060109060040162000a62565b600060405180830381600087803b1580156200064457600080fd5b505af115801562000659573d6000803e3d6000fd5b50505050565b6200066a306200090a565b600860009054906101000a90046001600160a01b03166001600160a01b031663a66e77976040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620006bb57600080fd5b505af1158015620006d0573d6000803e3d6000fd5b5050600854604051630f9db3b160e31b815267016345785d8a000060048201526001600160a01b039091169250637ced9d889150602401600060405180830381600087803b1580156200072257600080fd5b505af115801562000737573d6000803e3d6000fd5b5050600854604080516389f4b31760e01b81526004810191909152600360448201526208aa8960eb1b6064820152306024820152620007d393506001600160a01b0390911691506389f4b317906084016020604051808303816000875af1158015620007a7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007cd919062000c32565b62000957565b565b60008054610100900460ff1615620007f65750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15620009055760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162000887917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800162000c8a565b60408051601f1981840301815290829052620008a39162000cb0565b6000604051808303816000865af19150503d8060008114620008e2576040519150601f19603f3d011682016040523d82523d6000602084013e620008e7565b606091505b509150508080602001905181019062000901919062000cc5565b9150505b919050565b6040516001600160a01b0382166024820152620009549060440160408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b1790526200099a565b50565b62000954816040516024016200096f91815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b610a9f8062000cea83390190565b610821806200178983390190565b610fcc8062001faa83390190565b600061ffff8381169083168181101562000a0f57634e487b7160e01b600052601160045260246000fd5b039392505050565b6000815480845260208085019450836000528060002060005b8381101562000a575781546001600160a01b03168752958201956001918201910162000a30565b509495945050505050565b600060c080830161ffff808b1685526020818b16818701526040915060018060a01b03808b16838801526060818b1681890152608091508582890152848a5462000ab0818890815260200190565b60008d81526020812098509092505b8160078201101562000b2d57875463ffffffff808216855281881c81168886015281891c81168986015281861c81168686015281871c81168786015260a082811c821690860152818b1c168a85015260e090811c908401526001909701966101009092019160080162000abf565b9654968181101562000b4a5763ffffffff88168352918501916001015b8181101562000b665787861c63ffffffff168352918501916001015b8181101562000b825787871c63ffffffff168352918501916001015b8181101562000b9e5787841c63ffffffff168352918501916001015b8181101562000bba5787851c63ffffffff168352918501916001015b8181101562000bd85760a088901c63ffffffff168352918501916001015b8181101562000bf45787891c63ffffffff168352918501916001015b8181101562000c095760e088901c8352918501915b505088810360a08a015262000c1f818b62000a17565b9f9e505050505050505050505050505050565b60006020828403121562000c4557600080fd5b5051919050565b6000815160005b8181101562000c6f576020818501810151868301520162000c53565b8181111562000c7f576000828601525b509290920192915050565b6001600160e01b031983168152600062000ca8600483018462000c4c565b949350505050565b600062000cbe828462000c4c565b9392505050565b60006020828403121562000cd857600080fd5b8151801515811462000cbe57600080fdfe608060405234801561001057600080fd5b50610a7f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e306a411461005c57806356d5d475146100725780637ce7424914610087578063c48dec39146100b2578063ccc95e03146100c5575b600080fd5b6003546040519081526020015b60405180910390f35b610085610080366004610611565b6100d8565b005b61009a610095366004610698565b610154565b6040516001600160a01b039091168152602001610069565b6100856100c03660046107b7565b61017e565b6100856100d33660046108ba565b610234565b60006100e682840184610698565b60005460405163aff3681b60e01b81526004810183905291925064010000000090046001600160a01b03169063aff3681b90602401600060405180830381600087803b15801561013557600080fd5b505af1158015610149573d6000803e3d6000fd5b505050505050505050565b6003818154811061016457600080fd5b6000918252602090912001546001600160a01b0316905081565b61018b8661ffff16610243565b6101988561ffff16610243565b6101a18461028b565b600080546001600160a01b0380871664010000000002640100000000600160c01b031961ffff8a8116620100000263ffffffff19909516908c1617939093179290921691909117909155600180549185166001600160a01b031990921691909117905581516102179060029060208501906104df565b50805161022b90600390602084019061058e565b50505050505050565b61023f8160026102d3565b5050565b6102888160405160240161025991815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b17905261047b565b50565b6040516001600160a01b03821660248201526102889060440160408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b17905261047b565b6001546102e8906001600160a01b031661028b565b61033560026102f8600184610954565b61ffff168154811061030c5761030c610985565b6000918252602090912060088204015460079091166004026101000a900463ffffffff16610243565b61035f8260405160200161034b91815260200190565b60405160208183030381529060405261049c565b600180546001600160a01b03169063fa31de0190620f4240906002906103859086610954565b61ffff168154811061039957610399610985565b6000918252602090912060088204015460079091166004026101000a900463ffffffff166103f960036103cd600188610954565b61ffff16815481106103e1576103e1610985565b6000918252602090912001546001600160a01b031690565b6040805160208101899052016040516020818303038152906040526040518563ffffffff1660e01b8152600401610432939291906109e8565b60206040518083038160008887f1158015610451573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906104769190610a16565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b610288816040516024016104b09190610a2f565b60408051601f198184030181529190526020810180516001600160e01b03166305f3bfab60e11b17905261047b565b8280548282559060005260206000209060070160089004810192821561057e5791602002820160005b8382111561054c57835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610508565b801561057c5782816101000a81549063ffffffff021916905560040160208160030104928301926001030261054c565b505b5061058a9291506105e3565b5090565b82805482825590600052602060002090810192821561057e579160200282015b8281111561057e57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906105ae565b5b8082111561058a57600081556001016105e4565b803563ffffffff8116811461060c57600080fd5b919050565b6000806000806060858703121561062757600080fd5b610630856105f8565b935060208501359250604085013567ffffffffffffffff8082111561065457600080fd5b818701915087601f83011261066857600080fd5b81358181111561067757600080fd5b88602082850101111561068957600080fd5b95989497505060200194505050565b6000602082840312156106aa57600080fd5b5035919050565b803561ffff8116811461060c57600080fd5b80356001600160a01b038116811461060c57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610719576107196106da565b604052919050565b600067ffffffffffffffff82111561073b5761073b6106da565b5060051b60200190565b600082601f83011261075657600080fd5b8135602061076b61076683610721565b6106f0565b82815260059290921b8401810191818101908684111561078a57600080fd5b8286015b848110156107ac5761079f816106c3565b835291830191830161078e565b509695505050505050565b60008060008060008060c087890312156107d057600080fd5b6107d9876106b1565b955060206107e88189016106b1565b95506107f6604089016106c3565b9450610804606089016106c3565b9350608088013567ffffffffffffffff8082111561082157600080fd5b818a0191508a601f83011261083557600080fd5b813561084361076682610721565b81815260059190911b8301840190848101908d83111561086257600080fd5b938501935b8285101561088757610878856105f8565b82529385019390850190610867565b9650505060a08a013592508083111561089f57600080fd5b50506108ad89828a01610745565b9150509295509295509295565b600080604083850312156108cd57600080fd5b823567ffffffffffffffff808211156108e557600080fd5b818501915085601f8301126108f957600080fd5b813560208282111561090d5761090d6106da565b61091f601f8301601f191682016106f0565b9250818352878183860101111561093557600080fd5b8181850182850137600091830181019190915290969401359450505050565b600061ffff8381169083168181101561097d57634e487b7160e01b600052601160045260246000fd5b039392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156109c1576020818501810151868301820152016109a5565b818111156109d3576000602083870101525b50601f01601f19169290920160200192915050565b63ffffffff84168152826020820152606060408201526000610a0d606083018461099b565b95945050505050565b600060208284031215610a2857600080fd5b5051919050565b602081526000610a42602083018461099b565b939250505056fea26469706673582212200ac13d1c013c00e61cf48c80ff58922aca994b52fa433841e5b4db3c94007a5a64736f6c634300080f0033608060405234801561001057600080fd5b50610801806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a53996071161005b578063a5399607146100c5578063a66e7797146100e5578063d01851d6146100ed578063f8c8765e1461011857600080fd5b80636fafa08a146100825780637ced9d881461009d57806389f4b317146100b2575b600080fd5b61008b60025481565b60405190815260200160405180910390f35b6100b06100ab3660046105e5565b610176565b005b61008b6100c0366004610630565b610375565b61008b6100d33660046106f2565b60006020819052908152604090205481565b6100b061046f565b61008b6100fb366004610714565b600160209081526000928352604080842090915290825290205481565b6100b0610126366004610737565b600380546001600160a01b039586166001600160a01b0319918216179091556004805494861694821694909417909355600580549285169284169290921790915560068054919093169116179055565b600480546040516370a0823160e01b8152339281019290925282916001600160a01b03909116906370a0823190602401602060405180830381865afa1580156101c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e7919061078b565b101561022c5760405162461bcd60e51b815260206004820152601060248201526f6e6f7420656e6f7567682066756e647360801b604482015260640160405180910390fd5b60048054604051632770a7eb60e21b81523392810192909252602482018390526001600160a01b031690639dc29fac90604401600060405180830381600087803b15801561027957600080fd5b505af115801561028d573d6000803e3d6000fd5b50506005546040516340c10f1960e01b8152336004820152602481018590526001600160a01b0390911692506340c10f199150604401600060405180830381600087803b1580156102dd57600080fd5b505af11580156102f1573d6000803e3d6000fd5b5050600680546040805163ccc95e0360e01b81526004810191909152604481019290925265415077696e6560d01b6064830152602482018590526001600160a01b0316925063ccc95e039150608401600060405180830381600087803b15801561035a57600080fd5b505af115801561036e573d6000803e3d6000fd5b5050505050565b60408051808201909152600381526208aa8960eb1b6020918201528251908301206000907f55514145c7ef4e1948f87e0eb4d28d3e34763f4d4cdf3bc449800860a9d0a00c01610435576003546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a08231906024015b602060405180830381865afa15801561040a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042e919061078b565b9050610469565b600480546040516370a0823160e01b81526001600160a01b03858116938201939093529116906370a08231906024016103ed565b92915050565b61047830610579565b6002805433600090815260208190526040812082905590919061049a836107a4565b90915550506003546040516340c10f1960e01b815233600482015268056bc75e2d6310000060248201526001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156104f357600080fd5b505af1158015610507573d6000803e3d6000fd5b5050600480546040516340c10f1960e01b81523392810192909252671bc16d674ec8000060248301526001600160a01b031692506340c10f199150604401600060405180830381600087803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b50505050565b6040516001600160a01b03821660248201526105c19060440160408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b1790526105c4565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000602082840312156105f757600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b038116811461062b57600080fd5b919050565b6000806040838503121561064357600080fd5b823567ffffffffffffffff8082111561065b57600080fd5b818501915085601f83011261066f57600080fd5b813581811115610681576106816105fe565b604051601f8201601f19908116603f011681019083821181831017156106a9576106a96105fe565b816040528281528860208487010111156106c257600080fd5b8260208601602083013760006020848301015280965050505050506106e960208401610614565b90509250929050565b60006020828403121561070457600080fd5b61070d82610614565b9392505050565b6000806040838503121561072757600080fd5b823591506106e960208401610614565b6000806000806080858703121561074d57600080fd5b61075685610614565b935061076460208601610614565b925061077260408601610614565b915061078060608601610614565b905092959194509250565b60006020828403121561079d57600080fd5b5051919050565b6000600182016107c457634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220a2bb31dfb08979a434fea72d2d0473878e4af756b434fa24b25b9c1de351632564736f6c634300080f003360806040523480156200001157600080fd5b5060405162000fcc38038062000fcc83398101604081905262000034916200029f565b81816003620000448382620003b8565b506004620000538282620003b8565b5050600580546001600160a01b0319166001600160a01b0386169081179091556200008291506000196200008c565b5050505062000484565b6000336200009c818585620000a6565b5060019392505050565b6001600160a01b0383166200010e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084015b60405180910390fd5b6001600160a01b038216620001715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840162000105565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001fa57600080fd5b81516001600160401b0380821115620002175762000217620001d2565b604051601f8301601f19908116603f01168101908282118183101715620002425762000242620001d2565b816040528381526020925086838588010111156200025f57600080fd5b600091505b8382101562000283578582018301518183018401529082019062000264565b83821115620002955760008385830101525b9695505050505050565b600080600060608486031215620002b557600080fd5b83516001600160a01b0381168114620002cd57600080fd5b60208501519093506001600160401b0380821115620002eb57600080fd5b620002f987838801620001e8565b935060408601519150808211156200031057600080fd5b506200031f86828701620001e8565b9150509250925092565b600181811c908216806200033e57607f821691505b6020821081036200035f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003b357600081815260208120601f850160051c810160208610156200038e5750805b601f850160051c820191505b81811015620003af578281556001016200039a565b5050505b505050565b81516001600160401b03811115620003d457620003d4620001d2565b620003ec81620003e5845462000329565b8462000365565b602080601f8311600181146200042457600084156200040b5750858301515b600019600386901b1c1916600185901b178555620003af565b600085815260208120601f198616915b82811015620004555788860151825594840194600190910190840162000434565b5085821015620004745787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610b3880620004946000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340c10f191161008c5780639dc29fac116100665780639dc29fac146101a2578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806340c10f191461015c57806370a082311461017157806395d89b411461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101ee565b6040516100e99190610976565b60405180910390f35b6101056101003660046109e7565b610280565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610a11565b610298565b604051601281526020016100e9565b6101056101573660046109e7565b6102bc565b61016f61016a3660046109e7565b6102de565b005b61011961017f366004610a4d565b6001600160a01b031660009081526020819052604090205490565b6100dc610337565b61016f6101b03660046109e7565b610346565b6101056101c33660046109e7565b610396565b6101056101d63660046109e7565b610411565b6101196101e9366004610a6f565b61041f565b6060600380546101fd90610aa2565b80601f016020809104026020016040519081016040528092919081815260200182805461022990610aa2565b80156102765780601f1061024b57610100808354040283529160200191610276565b820191906000526020600020905b81548152906001019060200180831161025957829003601f168201915b5050505050905090565b60003361028e81858561044a565b5060019392505050565b6000336102a685828561056f565b6102b18585856105e9565b506001949350505050565b60003361028e8185856102cf838361041f565b6102d99190610adc565b61044a565b6005546001600160a01b031633146103295760405162461bcd60e51b81526020600482015260096024820152684f6e6c7920636f726560b81b60448201526064015b60405180910390fd5b610333828261078d565b5050565b6060600480546101fd90610aa2565b6005546001600160a01b0316331461038c5760405162461bcd60e51b81526020600482015260096024820152684f6e6c7920636f726560b81b6044820152606401610320565b610333828261084c565b600033816103a4828661041f565b9050838110156104045760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610320565b6102b1828686840361044a565b60003361028e8185856105e9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104ac5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610320565b6001600160a01b03821661050d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610320565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061057b848461041f565b905060001981146105e357818110156105d65760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610320565b6105e3848484840361044a565b50505050565b6001600160a01b03831661064d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610320565b6001600160a01b0382166106af5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610320565b6001600160a01b038316600090815260208190526040902054818110156107275760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610320565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36105e3565b6001600160a01b0382166107e35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610320565b80600260008282546107f59190610adc565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166108ac5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610320565b6001600160a01b038216600090815260208190526040902054818110156109205760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610320565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610562565b600060208083528351808285015260005b818110156109a357858101830151858201604001528201610987565b818111156109b5576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109e257600080fd5b919050565b600080604083850312156109fa57600080fd5b610a03836109cb565b946020939093013593505050565b600080600060608486031215610a2657600080fd5b610a2f846109cb565b9250610a3d602085016109cb565b9150604084013590509250925092565b600060208284031215610a5f57600080fd5b610a68826109cb565b9392505050565b60008060408385031215610a8257600080fd5b610a8b836109cb565b9150610a99602084016109cb565b90509250929050565b600181811c90821680610ab657607f821691505b602082108103610ad657634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610afd57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212207e67ead709a1c716c45cdc31b8c0d1a73d97e60056b8ca2374e71b6baf9f74c164736f6c634300080f0033a26469706673582212208c5158663c7854b944eac59b16278f4ed2b29b8283b26e8de1dea714e014a65064736f6c634300080f0033";

type ContractTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractTest__factory extends ContractFactory {
  constructor(...args: ContractTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTest> {
    return super.deploy(overrides || {}) as Promise<ContractTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ContractTest {
    return super.attach(address) as ContractTest;
  }
  override connect(signer: Signer): ContractTest__factory {
    return super.connect(signer) as ContractTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractTestInterface {
    return new utils.Interface(_abi) as ContractTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractTest {
    return new Contract(address, _abi, signerOrProvider) as ContractTest;
  }
}
