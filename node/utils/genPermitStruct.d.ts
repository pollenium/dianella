import { PermitStruct } from '../classes/Daish/Writer';
import { Uish } from 'pollenium-uvaursi';
import { Uintable } from 'pollenium-buttercup';
export declare function genPermitStruct(struct: {
    holderPrivateKey: Uish;
    spender: Uish;
    nonce: Uintable;
}): PermitStruct;
