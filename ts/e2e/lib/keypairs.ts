import { Keypair } from 'pollenium-ilex'

export const keypairs: Record<string, Keypair> = {
  user: Keypair.generate(),
  bridger: Keypair.generate(),
  custodian: Keypair.generate()
}
