const fs = require("fs");
const { sayMyName: printMyName } = require("./utils");

fs.writeFileSync("notes.txt", "This file was created by Node.js!");

fs.appendFileSync("notes.txt", " Solved Challenge!");

printMyName();
