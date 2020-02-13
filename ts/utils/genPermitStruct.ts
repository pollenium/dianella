import { PermitStruct } from '../classes/Daish/Writer'
import { Uish, Uu } from 'pollenium-uvaursi'
import { Uintable, Uint256, Address, Bytes32 } from 'pollenium-buttercup'
import { Keypair } from 'pollenium-ilex'
import { PERMIT_PREFIX, PERMIT_TYPEHASH, UINT256_MAX } from '../consts'
import abi from 'ethereumjs-abi'
import web3Utils from 'web3-utils'

export function genPermitStruct(struct: {
  holderPrivateKey: Uish,
  spender: Uish,
  nonce: Uintable,
}): PermitStruct {

  const holderKeypair = new Keypair(struct.holderPrivateKey)
  const spender = new Address(struct.spender)
  const nonce = new Uint256(struct.nonce)

  const abiEncodingBuffer = abi.rawEncode([
    'bytes32',
    'address',
    'address',
    'uint256',
    'uint256',
    'bool'
  ], [
    PERMIT_TYPEHASH.uu.toPhex(),
    holderKeypair.getAddress().uu.toPhex(),
    spender.uu.toPhex(),
    nonce.uu.toPhex(),
    UINT256_MAX.uu.toPhex(),
    '0x01'
  ])
  const abiEncoding = new Uu(abiEncodingBuffer)
  const abiEncodingashHexish = web3Utils.soliditySha3({
    type: 'bytes',
    value: abiEncoding.toPhex()
  })
  const abiEncodingHash = Uu.fromHexish(abiEncodingashHexish)

  const permitPrehash = Uu.genConcat([PERMIT_PREFIX, abiEncodingHash])
  const permitHashHexish = web3Utils.soliditySha3({
    type: 'bytes',
    value: permitPrehash.toPhex()
  })
  const permitHash = new Bytes32(Uu.fromHexish(permitHashHexish))

  const signature = holderKeypair.getSignature(permitHash)

  return {
    holder: holderKeypair.getAddress(),
    spender,
    nonce,
    signature
  }
}
