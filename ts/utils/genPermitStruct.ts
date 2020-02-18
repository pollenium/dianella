import { PermitStruct } from '../classes/Daish/Writer'
import { Uish, Uu } from 'pollenium-uvaursi'
import { Uintable, Uint256, Address, Bytes32 } from 'pollenium-buttercup'
import { Keypair } from 'pollenium-ilex'
import { PERMIT_PREFIX, PERMIT_TYPEHASH, UINT256_MAX } from '../consts'
import { genPermitHash } from './genPermitHash'

export function genPermitStruct(struct: {
  holderPrivateKey: Uish,
  spender: Uish,
  nonce: Uintable,
}): PermitStruct {

  const holderKeypair = new Keypair(struct.holderPrivateKey)
  const holder = holderKeypair.getAddress()

  const permitHash = genPermitHash({
    holder,
    spender: struct.spender,
    nonce: struct.nonce
  })

  const signature = holderKeypair.getSignature(permitHash)

  return {
    holder,
    spender: struct.spender,
    nonce: struct.nonce,
    signature
  }
}
