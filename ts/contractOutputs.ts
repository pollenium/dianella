import { Uu } from 'pollenium-uvaursi'
import { ContractOutput } from 'pollenium-clover'

export const daish: ContractOutput = {
  abiJson: '[{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]',
  bytecode: Uu.fromHexish('608060405234801561001057600080fd5b5060405161106b38038061106b8339818101604052602081101561003357600080fd5b50516001818155336000908152600260209081526040808320949094558190529190912055611004806100676000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637ecebe00116100b8578063a9059cbb1161007c578063a9059cbb146103de578063b753a98c1461040a578063bb35783b14610436578063bf353dbb1461046c578063dd62ed3e14610492578063f2d5d56b146104c057610142565b80637ecebe00146103045780638fcbaf0c1461032a57806395d89b41146103845780639c52a7f11461038c5780639dc29fac146103b257610142565b8063313ce5671161010a578063313ce5671461025c5780633644e5151461027a57806340c10f191461028257806354fd4d50146102b057806365fae35e146102b857806370a08231146102de57610142565b806306fdde0314610147578063095ea7b3146101c457806318160ddd1461020457806323b872dd1461021e57806330adf81f14610254575b600080fd5b61014f6104ec565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f0600480360360408110156101da57600080fd5b506001600160a01b038135169060200135610516565b604080519115158252519081900360200190f35b61020c61057d565b60408051918252519081900360200190f35b6101f06004803603606081101561023457600080fd5b506001600160a01b03813581169160208101359091169060400135610583565b61020c6107ac565b6102646107d0565b6040805160ff9092168252519081900360200190f35b61020c6107d5565b6102ae6004803603604081101561029857600080fd5b506001600160a01b0381351690602001356107f9565b005b61014f6108e3565b6102ae600480360360208110156102ce57600080fd5b50356001600160a01b0316610900565b61020c600480360360208110156102f457600080fd5b50356001600160a01b0316610976565b61020c6004803603602081101561031a57600080fd5b50356001600160a01b0316610988565b6102ae600480360361010081101561034157600080fd5b506001600160a01b038135811691602081013590911690604081013590606081013590608081013515159060ff60a0820135169060c08101359060e0013561099a565b61014f610ca7565b6102ae600480360360208110156103a257600080fd5b50356001600160a01b0316610cc6565b6102ae600480360360408110156103c857600080fd5b506001600160a01b038135169060200135610d39565b6101f0600480360360408110156103f457600080fd5b506001600160a01b038135169060200135610f40565b6102ae6004803603604081101561042057600080fd5b506001600160a01b038135169060200135610f54565b6102ae6004803603606081101561044c57600080fd5b506001600160a01b03813581169160208101359091169060400135610f64565b61020c6004803603602081101561048257600080fd5b50356001600160a01b0316610f75565b61020c600480360360408110156104a857600080fd5b506001600160a01b0381358116916020013516610f87565b6102ae600480360360408110156104d657600080fd5b506001600160a01b038135169060200135610fa4565b6040518060400160405280600e81526020016d2230b49029ba30b13632b1b7b4b760911b81525081565b3360008181526003602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60015481565b6001600160a01b0383166000908152600260205260408120548211156105eb576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b6001600160a01b038416331480159061062957506001600160a01b038416600090815260036020908152604080832033845290915290205460001914155b156106f9576001600160a01b03841660009081526003602090815260408083203384529091529020548211156106a6576040805162461bcd60e51b815260206004820152601a60248201527f4461692f696e73756666696369656e742d616c6c6f77616e6365000000000000604482015290519081900360640190fd5b6001600160a01b03841660009081526003602090815260408083203384529091529020546106d49083610faf565b6001600160a01b03851660009081526003602090815260408083203384529091529020555b6001600160a01b03841660009081526002602052604090205461071c9083610faf565b6001600160a01b03808616600090815260026020526040808220939093559085168152205461074b9083610fbf565b6001600160a01b0380851660008181526002602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb81565b601281565b7fdbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f781565b33600090815260208190526040902054600114610852576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b0382166000908152600260205260409020546108759082610fbf565b6001600160a01b03831660009081526002602052604090205560015461089b9082610fbf565b6001556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b604051806040016040528060018152602001603160f81b81525081565b33600090815260208190526040902054600114610959576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b0316600090815260208190526040902060019055565b60026020526000908152604090205481565b60046020526000908152604090205481565b604080517fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb6020808301919091526001600160a01b03808c16838501819052908b166060840152608083018a905260a0830189905287151560c0808501919091528451808503909101815260e08401855280519083012061190160f01b6101008501527fdbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f76101028501526101228085019190915284518085039091018152610142909301909352815191012090610ab0576040805162461bcd60e51b815260206004820152601560248201527404461692f696e76616c69642d616464726573732d3605c1b604482015290519081900360640190fd5b6040805160008152602080820180845284905260ff8716828401526060820186905260808201859052915160019260a0808401939192601f1981019281900390910190855afa158015610b07573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610b6b576040805162461bcd60e51b815260206004820152601260248201527111185a4bda5b9d985b1a590b5c195c9b5a5d60721b604482015290519081900360640190fd5b851580610b785750854211155b610bbe576040805162461bcd60e51b815260206004820152601260248201527111185a4bdc195c9b5a5d0b595e1c1a5c995960721b604482015290519081900360640190fd5b6001600160a01b03891660009081526004602052604090208054600181019091558714610c26576040805162461bcd60e51b81526020600482015260116024820152704461692f696e76616c69642d6e6f6e636560781b604482015290519081900360640190fd5b600085610c34576000610c38565b6000195b6001600160a01b03808c166000818152600360209081526040808320948f168084529482529182902085905581518581529151949550929391927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92592918290030190a350505050505050505050565b6040518060400160405280600381526020016244414960e81b81525081565b33600090815260208190526040902054600114610d1f576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b0316600090815260208190526040812055565b6001600160a01b038216600090815260026020526040902054811115610da1576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b6001600160a01b0382163314801590610ddf57506001600160a01b038216600090815260036020908152604080832033845290915290205460001914155b15610eaf576001600160a01b0382166000908152600360209081526040808320338452909152902054811115610e5c576040805162461bcd60e51b815260206004820152601a60248201527f4461692f696e73756666696369656e742d616c6c6f77616e6365000000000000604482015290519081900360640190fd5b6001600160a01b0382166000908152600360209081526040808320338452909152902054610e8a9082610faf565b6001600160a01b03831660009081526003602090815260408083203384529091529020555b6001600160a01b038216600090815260026020526040902054610ed29082610faf565b6001600160a01b038316600090815260026020526040902055600154610ef89082610faf565b6001556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6000610f4d338484610583565b9392505050565b610f5f338383610583565b505050565b610f6f838383610583565b50505050565b60006020819052908152604090205481565b600360209081526000928352604080842090915290825290205481565b610f5f823383610583565b8082038281111561057757600080fd5b8082018281101561057757600080fdfea265627a7a72315820e3e7b65a543f3b93d95280c5e3eae27d66a46dcad32cd40ff61b700264ae60dd64736f6c63430005100032')
}