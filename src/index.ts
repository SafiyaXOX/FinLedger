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

    default:
        console.log("Unknown command");
}
