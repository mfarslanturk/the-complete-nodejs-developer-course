import fs from "fs";
import chalk from "chalk";
import getNotes from "./notes.js";

const command = process.argv[2];

switch (command) {
  case 'add':
    console.log(chalk.blue("Added!"));
    break;
  case "delete":
    console.log(chalk.red("Deleted!"));
    break;
  case "update":
    console.log(chalk.yellow("Updated!"));
    break;
  default:
    console.log(chalk.green("Check your input!!"));
    break;
}
