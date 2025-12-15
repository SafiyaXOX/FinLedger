import { loadLedger } from "../storage";


// Function that handles the 'list' CLI command
export function handleList (args:string[]){

    // Load all stored transactions from the ledger
    const ledger = loadLedger();

    // Creates a working copuu of the transactions array 
    // Allows for filtering without modifying the original data
    let transactions = ledger.transactions;

    // Check if the user provided a --type filter [income / expense]
    const typeIndex = args.indexOf("--type");
    if (typeIndex !== -1){
        const type = args[typeIndex + 1];

        // Filters the transaction to include only the specified type
        transactions = transactions.filter (t => t.type === type);
    }

    // Check if the user provided a --category filter
    const categoryIndex = args.indexOf("--category");
    if (categoryIndex !== -1){
        const category = args[categoryIndex + 1];

        // Filters transactions to include only the specified category
        transactions = transactions.filter (t => t.category === category);
    }

    // If no transactions match the filters, the user is notified and the program exited. 
    if (transactions.length === 0){
        console.log ("No transactions found.");
        return;
    }

    // Prints the table header for readability in the terminal
    console.log ("id | date | type | category | amount | description");
    console.log ("-----------------------------------------------------")

    // Loops through the filtered transactions and prints each one 
    for (const t of transactions){
        console.log(
            `${t.id} | ${t.date} | ${t.type} | ${t.category} | ${t.amount} | ${t.description} |`
        );
    }

    // Month filter: --month YYYY-MM
    const monthIndex = args.indexOf("--month");
    if (monthIndex !== -1){
        const month = args[monthIndex + 1];

        // Keeps transactions that start with the given year-month
        transactions = transactions.filter (t => t.date.startsWith(month));
    }
}




