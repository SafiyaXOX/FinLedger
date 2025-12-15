import { loadLedger,saveLedger} from "../storage";
import { Transaction } from "../models";

export function handleAdd (args: string[]){
    // Parsing arguments
    const amountIndex = args.indexOf("--amount");
    const typeIndex = args.indexOf("--type");
    const categoryIndex = args.indexOf ("--category");
    const descriptionIndex = args.indexOf("--description");
    const dateIndex = args.indexOf ("--date");

    if (amountIndex === -1 || typeIndex === -1 || categoryIndex === -1 || descriptionIndex === -1){
        console.log ("Missing Required fields");
        return;
    }

    const amount = Number(args[amountIndex + 1]);
    const type = args [typeIndex + 1] as "income" | "expense";
    const category = args [categoryIndex + 1];
    const description = args [descriptionIndex + 1];
    const date = 
        dateIndex !== -1 
        ? args [dateIndex + 1]
        : new Date().toISOString().split("T")[0];

    // Ensures that 'amount' is a valid positive number
    if (isNaN(amount) || amount <= 0){
        console.log ("Amount must be a positive number.");
        return;
    }

    // Ensures that the transaction type is valid
    if (type !== "income" && type !== "expense"){
        console.log("Type must be either 'income' or 'expense'.");
        return;
    }

    // Loads the existing ledger
    const ledger = loadLedger();

    // Generate new ID
    const newID = 
    ledger.transactions.length > 0
        ? Math.max (...ledger.transactions.map(t => t.id)) + 1
        : 1;

    // Create transaction 
    const newTransaction: Transaction = {
        id: newID,
        date, 
        type, 
        category, 
        amount,
        description
    };

    // Save
    ledger.transactions.push(newTransaction);
    saveLedger (ledger);

    console.log(`Transaction ${newID} added successfully.`);

}








