import { ethers } from 'ethers'
import { Address, Uint256 } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
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

  async fetchNonce(holder: Uish): Promise<Uint256> {
    const nonceBignumber = await this.ethersContract.nonces(Uu.wrap(holder).toPhex())
    return new Uint256(Uu.fromHexish(
      await ethers.utils.hexlify(nonceBignumber)
    ))
  }

}
