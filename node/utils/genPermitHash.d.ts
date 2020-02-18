import { Uish } from 'pollenium-uvaursi';
import { Uintable, Bytes32 } from 'pollenium-buttercup';
export declare function genPermitHash(struct: {
    holder: Uish;
    spender: Uish;
    nonce: Uintable;
}): Bytes32;
