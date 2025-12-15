"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./commands/add");
const delete_1 = require("./commands/delete");
const list_1 = require("./commands/list");
const summary_1 = require("./commands/summary");
const update_1 = require("./commands/update");
const [, , command, ...args] = process.argv;
switch (command) {
    case "add":
        (0, add_1.handleAdd)(args);
        break;
    case "list":
        (0, list_1.handleList)(args);
        break;
    case "update":
        (0, update_1.handleUpdate)(args);
        break;
    case "delete":
        (0, delete_1.handleDelete)(args);
        break;
    case "summary":
        (0, summary_1.handleSummary)(args);
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
