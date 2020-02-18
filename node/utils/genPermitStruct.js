"use strict";
exports.__esModule = true;
var pollenium_ilex_1 = require("pollenium-ilex");
var genPermitHash_1 = require("./genPermitHash");
function genPermitStruct(struct) {
    var holderKeypair = new pollenium_ilex_1.Keypair(struct.holderPrivateKey);
    var holder = holderKeypair.getAddress();
    var permitHash = genPermitHash_1.genPermitHash({
        holder: holder,
        spender: struct.spender,
        nonce: struct.nonce
    });
    var signature = holderKeypair.getSignature(permitHash);
    return {
        holder: holder,
        spender: struct.spender,
        nonce: struct.nonce,
        signature: signature
    };
}
exports.genPermitStruct = genPermitStruct;
