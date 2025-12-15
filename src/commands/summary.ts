import { loadLedger, saveLedger } from "../storage";

// Function handles 'summary' CLI command
export function handleSummary (args: string []){

    // Load all transactions from the ledger
    const ledger = loadLedger();

    // Initialize totals for income and expenses 
    let totalIncome = 0;
    let totalExpenses = 0;

    // Loop through each transaction to calculate totals
    for (const transaction of ledger.transactions){

        // Add amounts based on transaction type
        if (transaction.type === "income"){
            totalIncome += transaction.amount;
        } else if (transaction.type === "expense"){
            totalExpenses += transaction.amount;
        }
    }

    // Calculates the current balance 
    const balance = totalIncome - totalExpenses

    // Prints the financial summary in a readable format
    const format = (value: number)=> value.toLocaleString();
    console.log (`Total Income: $${format(totalIncome)}`);
    console.log (`Total Expenses: $${format(totalExpenses)}`);

    console.log("-------------------------------");
    console.log (`Balance: $${format(balance)}`);
}