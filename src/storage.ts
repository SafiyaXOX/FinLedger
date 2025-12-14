import fs from "fs"; // "fs" is a built in module that can check if a file exists, read text from a file or write text to a file
import path from "path"; 

import {LedgerData} from "./models";
import { json } from "stream/consumers";


//Path to finledger.json (stored in project root)
const DATA_FILE = path.join(process.cwd(),"finledger.json");

/**
 * In TypeScript, the "export" keyword is used to make functions, types, interfaces, variables, or classes available outside of the file 
 * (module) they are defined in. This allows other files to import and use the exported elements.
*/ 
export function loadLedger (): LedgerData {
    // If the fule foes not exist, return an empty ledger
    if (!fs.existsSync(DATA_FILE)){
        return {transactions: []};
    }

const rawData = fs.readFileSync (DATA_FILE,"utf-8");

try {
    return JSON.parse (rawData) as LedgerData;
} catch {
    //If JSON is corrupted, fail safely
    return {transactions:[]}
    }
}

export function saveLedger (data: LedgerData): void{
    fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2),"utf-8");
}


