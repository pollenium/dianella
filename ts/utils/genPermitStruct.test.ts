import { Uu } from 'pollenium-uvaursi'
import { genPermitStruct } from './genPermitStruct'

test('genPermitStruct', () => {
  const permitStruct = genPermitStruct({
    holderPrivateKey: Uu.genRandom(32),
    spender: Uu.genRandom(20),
    nonce: 1
  })
})
