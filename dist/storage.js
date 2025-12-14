"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadLedger = loadLedger;
exports.saveLedger = saveLedger;
const fs_1 = __importDefault(require("fs")); // "fs" is a built in module that can check if a file exists, read text from a file or write text to a file
const path_1 = __importDefault(require("path"));
//Path to finledger.json (stored in project root)
const DATA_FILE = path_1.default.join(process.cwd(), "finledger.json");
/**
 * In TypeScript, the "export" keyword is used to make functions, types, interfaces, variables, or classes available outside of the file
 * (module) they are defined in. This allows other files to import and use the exported elements.
*/
function loadLedger() {
    // If the fule foes not exist, return an empty ledger
    if (!fs_1.default.existsSync(DATA_FILE)) {
        return { transactions: [] };
    }
    const rawData = fs_1.default.readFileSync(DATA_FILE, "utf-8");
    try {
        return JSON.parse(rawData);
    }
    catch {
        //If JSON is corrupted, fail safely
        return { transactions: [] };
    }
}
function saveLedger(data) {
    fs_1.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}
