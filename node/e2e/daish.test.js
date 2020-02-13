"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var keypairs_1 = require("./lib/keypairs");
var gaillardia_1 = require("./lib/gaillardia");
var __1 = require("../");
var pollenium_ursinia_1 = require("pollenium-ursinia");
var consts_1 = require("../consts");
var totalSupply = 10 * pollenium_ursinia_1.THOUSAND;
var daishAddress;
var daishReader;
test('deploy daish', function () { return __awaiter(void 0, void 0, void 0, function () {
    var address;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new __1.DaishDeployer({
                    signer: gaillardia_1.gaillardia.genWallet(keypairs_1.keypairs.user.privateKey)
                }).deploy({ totalSupply: totalSupply })];
            case 1:
                address = (_a.sent()).address;
                daishAddress = address;
                daishReader = new __1.DaishReader({
                    provider: gaillardia_1.gaillardia.ethersWeb3Provider,
                    address: daishAddress
                });
                return [2 /*return*/];
        }
    });
}); });
test('alice balance should be totalSupply', function () { return __awaiter(void 0, void 0, void 0, function () {
    var balance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, daishReader.fetchBalance(keypairs_1.keypairs.user.getAddress())];
            case 1:
                balance = _a.sent();
                expect(balance.toNumber()).toBe(totalSupply);
                return [2 /*return*/];
        }
    });
}); });
test('alice should permit custodian (via bridger)', function () { return __awaiter(void 0, void 0, void 0, function () {
    var permitStruct, daishWriter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                permitStruct = __1.genPermitStruct({
                    holderPrivateKey: keypairs_1.keypairs.user.privateKey,
                    spender: keypairs_1.keypairs.custodian.getAddress(),
                    nonce: 0
                });
                daishWriter = new __1.DaishWriter({
                    signer: gaillardia_1.gaillardia.genWallet(keypairs_1.keypairs.bridger.privateKey),
                    address: daishAddress
                });
                return [4 /*yield*/, daishWriter.permit(permitStruct)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test('custodian allowance should be UINT256_MAX', function () { return __awaiter(void 0, void 0, void 0, function () {
    var allowance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, daishReader.fetchAllowance({
                    holder: keypairs_1.keypairs.user.getAddress(),
                    spender: keypairs_1.keypairs.custodian.getAddress()
                })];
            case 1:
                allowance = _a.sent();
                expect(allowance.toNumberString(10)).toBe(consts_1.UINT256_MAX.toNumberString(10));
                return [2 /*return*/];
        }
    });
}); });
