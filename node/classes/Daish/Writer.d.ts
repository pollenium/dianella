import { Uintable } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractWriterChildStruct } from 'pollenium-clover';
import { TokenWriter } from 'pollenium-toadflax';
import { SignatureStruct } from 'pollenium-ilex';
export interface PermitStruct {
    holder: Uish;
    spender: Uish;
    nonce: Uintable;
    signature: SignatureStruct;
}
export declare class DaishWriter extends TokenWriter {
    constructor(struct: ContractWriterChildStruct);
    permit(struct: PermitStruct): Promise<void>;
}
