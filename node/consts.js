"use strict";
exports.__esModule = true;
var pollenium_buttercup_1 = require("pollenium-buttercup");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
exports.DOMAIN_SEPARATOR_HEX = 'dbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f7';
exports.DOMAIN_SEPARATOR = new pollenium_buttercup_1.Bytes32(pollenium_uvaursi_1.Uu.fromHexish(exports.DOMAIN_SEPARATOR_HEX));
exports.PERMIT_TYPEHASH_HEX = 'ea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb';
exports.PERMIT_TYPEHASH = new pollenium_buttercup_1.Bytes32(pollenium_uvaursi_1.Uu.fromHexish(exports.PERMIT_TYPEHASH_HEX));
exports.PERMIT_PREFIX = pollenium_uvaursi_1.Uu.genConcat([
    new Uint8Array([0x19, 0x01]),
    exports.DOMAIN_SEPARATOR
]);
exports.UINT256_MAX = new pollenium_buttercup_1.Uint256(new Uint8Array(32).fill(255));
