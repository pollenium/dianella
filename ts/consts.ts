import { Bytes32, Uint256, Uint8 } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'

export const DOMAIN_SEPARATOR_HEX = 'dbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f7'
export const DOMAIN_SEPARATOR = new Bytes32(Uu.fromHexish(DOMAIN_SEPARATOR_HEX))

export const PERMIT_TYPEHASH_HEX = 'ea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb'
export const PERMIT_TYPEHASH = new Bytes32(Uu.fromHexish(PERMIT_TYPEHASH_HEX))

export const PERMIT_PREFIX = Uu.genConcat([
  new Uint8Array([0x19, 0x01]),
  DOMAIN_SEPARATOR
])

export const UINT256_MAX = new Uint256(new Uint8Array(32).fill(255))
