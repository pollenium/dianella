import { Uint256 } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractReaderChildStruct } from 'pollenium-clover';
import { TokenReader } from 'pollenium-toadflax';
export declare class DaishReader extends TokenReader {
    constructor(struct: ContractReaderChildStruct);
    fetchNonce(holder: Uish): Promise<Uint256>;
}
