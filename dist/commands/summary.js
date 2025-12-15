"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSummary = handleSummary;
const storage_1 = require("../storage");
// Function handles 'summary' CLI command
function handleSummary(args) {
    // Load all transactions from the ledger
    const ledger = (0, storage_1.loadLedger)();
    // Initialize totals for income and expenses 
    let totalIncome = 0;
    let totalExpenses = 0;
    // Loop through each transaction to calculate totals
    for (const transaction of ledger.transactions) {
        // Add amounts based on transaction type
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        }
        else if (transaction.type === "expense") {
            totalExpenses += transaction.amount;
        }
    }
    // Calculates the current balance 
    const balance = totalIncome - totalExpenses;
    // Prints the financial summary in a readable format
    const format = (value) => value.toLocaleString();
    console.log(`Total Income: $${format(totalIncome)}`);
    console.log(`Total Expenses: $${format(totalExpenses)}`);
    console.log("-------------------------------");
    console.log(`Balance: $${format(balance)}`);
}
