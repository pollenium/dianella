import { ethers } from 'ethers'
import { Address, Uint256 } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { ContractReaderChildStruct } from 'pollenium-clover'
import { TokenReader } from 'pollenium-toadflax'
import { daish } from '../../'

export class DaishReader extends TokenReader {

  constructor(struct: ContractReaderChildStruct) {
    super({
      ...daish,
      ...struct
    })
  }

}
