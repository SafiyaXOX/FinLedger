"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAdd = handleAdd;
const storage_1 = require("../storage");
function handleAdd(args) {
    // Parsing arguments
    const amountIndex = args.indexOf("--amount");
    const typeIndex = args.indexOf("--type");
    const categoryIndex = args.indexOf("--category");
    const descriptionIndex = args.indexOf("--description");
    const dateIndex = args.indexOf("--date");
    if (amountIndex === -1 || typeIndex === -1 || categoryIndex === -1 || descriptionIndex === -1) {
        console.log("Missing Required fields");
        return;
    }
    const amount = Number(args[amountIndex + 1]);
    const type = args[typeIndex + 1];
    const category = args[categoryIndex + 1];
    const description = args[descriptionIndex + 1];
    const date = dateIndex !== -1
        ? args[dateIndex + 1]
        : new Date().toISOString().split("T")[0];
    // Loads the existing ledger
    const ledger = (0, storage_1.loadLedger)();
    // Generate new ID
    const newID = ledger.transactions.length > 0
        ? Math.max(...ledger.transactions.map(t => t.id)) + 1
        : 1;
    // Create transaction 
    const newTransaction = {
        id: newID,
        date,
        type,
        category,
        amount,
        description
    };
    // Save
    ledger.transactions.push(newTransaction);
    (0, storage_1.saveLedger)(ledger);
    console.log("Transaction added successfully");
}
