import { ethers } from 'ethers'
import { Address, Uint256, Uintable } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { ContractDeployer, ContractDeployerChildStruct } from 'pollenium-clover'
import { daish } from '../../'

export interface DaishDeployStruct {
  totalSupply: Uintable
}

export class DaishDeployer extends ContractDeployer<DaishDeployStruct> {

  constructor(struct: ContractDeployerChildStruct<DaishDeployStruct>) {
    super({
      ...daish,
      ...struct,
      deployTransformer: (struct) => {
        const totalSupply = new Uint256(struct.totalSupply)
        return [totalSupply.uu.toPhex()]
      }
    })
  }
}
