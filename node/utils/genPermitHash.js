"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var pollenium_buttercup_1 = require("pollenium-buttercup");
var consts_1 = require("../consts");
var ethereumjs_abi_1 = __importDefault(require("ethereumjs-abi"));
var web3_utils_1 = __importDefault(require("web3-utils"));
function genPermitHash(struct) {
    var holder = new pollenium_buttercup_1.Address(struct.holder);
    var spender = new pollenium_buttercup_1.Address(struct.spender);
    var nonce = new pollenium_buttercup_1.Uint256(struct.nonce);
    var abiEncodingBuffer = ethereumjs_abi_1["default"].rawEncode([
        'bytes32',
        'address',
        'address',
        'uint256',
        'uint256',
        'bool'
    ], [
        consts_1.PERMIT_TYPEHASH.uu.toPhex(),
        holder.uu.toPhex(),
        spender.uu.toPhex(),
        nonce.uu.toPhex(),
        consts_1.UINT256_MAX.uu.toPhex(),
        '0x01'
    ]);
    var abiEncoding = new pollenium_uvaursi_1.Uu(abiEncodingBuffer);
    var abiEncodingashHexish = web3_utils_1["default"].soliditySha3({
        type: 'bytes',
        value: abiEncoding.toPhex()
    });
    var abiEncodingHash = pollenium_uvaursi_1.Uu.fromHexish(abiEncodingashHexish);
    var permitPrehash = pollenium_uvaursi_1.Uu.genConcat([consts_1.PERMIT_PREFIX, abiEncodingHash]);
    var permitHashHexish = web3_utils_1["default"].soliditySha3({
        type: 'bytes',
        value: permitPrehash.toPhex()
    });
    return new pollenium_buttercup_1.Bytes32(pollenium_uvaursi_1.Uu.fromHexish(permitHashHexish));
}
exports.genPermitHash = genPermitHash;
