import { loadLedger, saveLedger } from "../storage";


// Function handles the 'update' CLI command 
export function handleUpdate (args: string []){
    const id = Number (args[0]);

    // Validates that the ID is a valid number; if it is not, it stops execution
    if (isNaN(id)){
        console.log("Please provide a valid transaction ID.");
        return;
    }

    // Load existing transactions from finledger.json
    const ledger = loadLedger();

    // Finds the transaction with the given ID
    const transaction = ledger.transactions.find (t => t.id === id);

    // Condition statement that informs the user if no matching transaction is found
    if (!transaction){
        console.log(`Transaction with id ${id} not found.`);
        return;
    }

    // Checks if the user provided a new amount 
    // If yes, only the amount field is updated
    const amountIndex = args.indexOf("--amount");
    if (amountIndex !== -1){
        transaction.amount = Number (args[amountIndex + 1]);
    }

    // Checks if the user provided a new description 
    // If yes, only the description field is updated
    const descriptionIndex = args.indexOf("--description");
    if (descriptionIndex !== -1){
        transaction.description = args [descriptionIndex + 1];
    }

    // Saves the Updated Ledger to finledger.json
    saveLedger (ledger);

    // Confirmation ofo success to the user
    console.log (`Transaction ${id} updated successfully.`);


}






