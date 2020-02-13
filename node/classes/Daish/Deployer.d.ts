import { Uintable } from 'pollenium-buttercup';
import { ContractDeployer, ContractDeployerChildStruct } from 'pollenium-clover';
export interface DaishDeployStruct {
    totalSupply: Uintable;
}
export declare class DaishDeployer extends ContractDeployer<DaishDeployStruct> {
    constructor(struct: ContractDeployerChildStruct<DaishDeployStruct>);
}
