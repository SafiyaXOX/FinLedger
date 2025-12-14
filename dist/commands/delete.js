"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelete = handleDelete;
const storage_1 = require("../storage");
// Function that handles the 'delete' CLI command 
function handleDelete(args) {
    // The first argument after 'delete' should be the transaction ID
    const id = Number(args[0]);
    // Valudates that the provided ID is a number
    // If invalid, stop execution and inform the user
    if (isNaN(id)) {
        console.log("Please provide a valid transaction ID.");
        return;
    }
    // Load the current ledger from finledger.json
    const ledger = (0, storage_1.loadLedger)();
    // Stores the initial number of transactions
    // This verifies if the deletion actually occured
    const initialCount = ledger.transactions.length;
    // Remove the transaction with the matching ID; all other transactions are kept 
    ledger.transactions = ledger.transactions.filter(t => t.id !== id);
    // If the transaction count did not change, then no transaction was found with the given ID. 
    if (ledger.transactions.length === initialCount) {
        console.log(`Transaction with id ${id} not found.`);
        return;
    }
    // Save the updated ledger back to finledger.json
    (0, storage_1.saveLedger)(ledger);
    // Confirm successful deletion to the user
    console.log(`Transaction ${id} deleted successfully.`);
}
