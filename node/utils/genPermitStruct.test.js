"use strict";
exports.__esModule = true;
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var genPermitStruct_1 = require("./genPermitStruct");
test('genPermitStruct', function () {
    var permitStruct = genPermitStruct_1.genPermitStruct({
        holderPrivateKey: pollenium_uvaursi_1.Uu.genRandom(32),
        spender: pollenium_uvaursi_1.Uu.genRandom(20),
        nonce: 1
    });
});
