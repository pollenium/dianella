const sources = {
  'Daish.sol': `./contracts/Daish.sol`
}

module.exports = {
  sources,
  outs: [{
    constName: 'daish',
    fileName: 'Daish.sol',
    contractName: 'Daish'
  }],
  tsPath: './ts/contractOutputs.ts'
}
