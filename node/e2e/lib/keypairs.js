"use strict";
exports.__esModule = true;
var pollenium_ilex_1 = require("pollenium-ilex");
exports.keypairs = {
    user: pollenium_ilex_1.Keypair.generate(),
    bridger: pollenium_ilex_1.Keypair.generate(),
    custodian: pollenium_ilex_1.Keypair.generate()
};
