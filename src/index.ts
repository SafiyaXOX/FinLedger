import { handleAdd } from "./commands/add";
import { handleDelete } from "./commands/delete";
import { handleList } from "./commands/list";
import { handleSummary } from "./commands/summary";
import { handleUpdate } from "./commands/update";

const [, , command, ...args] = process.argv;

switch (command){
    case "add":
        handleAdd(args);
        break;
    
    case "list":
        handleList(args);
        break;

    case "update":
        handleUpdate(args);
        break;

    case "delete":
        handleDelete(args);
        break;

    case "summary":
        handleSummary(args);
        break;

    case "help":
        console.log(`
FinLedger CLI Usage:
        
add --amount <number> --type <income|expense> --category <string> --descriptiion <string> [--date YYYY-MM-DD]
    • amount must be a positive number
    • type must be either income or expense

list [--type <income|expense>] [--category <string>] [--month YYYY-MM]

update <id> [--amount <number>] [--description <string>]
        
delete <id>

summary
        `);
        break;

    default:
        console.log("Unknown command. Run `summary help` to see available commands.");
}
