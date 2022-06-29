import fs from 'fs'
import sayMyName from './utils.js'
import chalk from 'chalk'

console.log(chalk.blue('Chalk'));

fs.writeFileSync("notes.txt", "This file was created by Node.js!");

fs.appendFileSync("notes.txt", " Solved Challenge!");

sayMyName();
