import { ethers } from 'ethers'
import { Address, Uint256, Bytes32, Uint8, Uintable } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
import { ContractWriterChildStruct, StateChange } from 'pollenium-clover'
import { TokenWriter } from 'pollenium-toadflax'
import { daish } from '../../'
import { UINT256_MAX } from '../../consts'
import { SignatureStruct } from 'pollenium-ilex'


export interface PermitStruct {
  holder: Uish,
  spender: Uish,
  nonce: Uintable,
  signature: SignatureStruct
}


export class DaishWriter extends TokenWriter {

  constructor(struct: ContractWriterChildStruct) {
    super({
      ...daish,
      ...struct
    })
  }

  async permit(struct: PermitStruct): Promise<StateChange> {
    return this.genStateChange(
      this.ethersContract.permit(
        Uu.wrap(struct.holder).toPhex(),
        Uu.wrap(struct.spender).toPhex(),
        new Uint256(struct.nonce).uu.toPhex(),
        UINT256_MAX.uu.toPhex(),
        '0x01',
        new Uint8(struct.signature.v).uu.toPhex(),
        Uu.wrap(struct.signature.r).toPhex(),
        Uu.wrap(struct.signature.s).toPhex()
      )
    )
  }

}
