import fs from "fs";
import chalk from "chalk";

function treatErr(err) {
    throw err
}

function getArch(archWay) {
    const encoding = 'utf-8';
    fs.readFile(archWay, encoding, (_, text) => {
        console.log(chalk.red(text));
    });
}

getArch('./md/texto.md');