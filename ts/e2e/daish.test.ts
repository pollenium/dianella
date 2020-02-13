import { keypairs } from './lib/keypairs'
import { gaillardia } from './lib/gaillardia'
import { DaishReader, DaishWriter, DaishDeployer, genPermitStruct } from '../'
import { THOUSAND } from 'pollenium-ursinia'
import { Address } from 'pollenium-buttercup'
import { UINT256_MAX } from '../consts'

const totalSupply = 10 * THOUSAND
let daishAddress: Address
let daishReader: DaishReader

test('deploy daish', async () => {
  const { address } = await new DaishDeployer({
    signer: gaillardia.genWallet(keypairs.user.privateKey)
  }).deploy({ totalSupply })

  daishAddress = address
  daishReader = new DaishReader({
    provider: gaillardia.ethersWeb3Provider,
    address: daishAddress
  })
})

test('alice balance should be totalSupply', async () => {
  const balance = await daishReader.fetchBalance(keypairs.user.getAddress())
  expect(balance.toNumber()).toBe(totalSupply)
})

test('alice should permit custodian (via bridger)', async () => {
  const permitStruct = genPermitStruct({
    holderPrivateKey: keypairs.user.privateKey,
    spender: keypairs.custodian.getAddress(),
    nonce: 0
  })
  const daishWriter = new DaishWriter({
    signer: gaillardia.genWallet(keypairs.bridger.privateKey),
    address: daishAddress
  })
  await daishWriter.permit(permitStruct)
})

test('custodian allowance should be UINT256_MAX', async () => {
  const allowance = await daishReader.fetchAllowance({
    holder: keypairs.user.getAddress(),
    spender: keypairs.custodian.getAddress()
  })
  expect(allowance.toNumberString(10)).toBe(UINT256_MAX.toNumberString(10))
})
