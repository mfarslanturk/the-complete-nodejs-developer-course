import fs from "fs";
import chalk from "chalk";
import * as notes from "./notes.js";
import yargs from 'yargs';

// const command = process.argv[2];

// switch (command) {
//   case 'add':
//     console.log(chalk.blue("Added!"));
//     break;
//   case "delete":
//     console.log(chalk.red("Deleted!"));
//     break;
//   case "update":
//     console.log(chalk.yellow("Updated!"));
//     break;
//   default:
//     console.log(chalk.green("Check your input!!"));
//     break;
// }

yargs.version('1.1.0');

//Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
