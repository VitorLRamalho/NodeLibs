import fs from "fs";
import chalk from "chalk";

function treatErr(err) {
    throw new error(err);
}

function getArch(archWay) {
    const encoding = 'utf-8';
    fs.readFile(archWay, encoding, (err, text) => {
        if(err){
            treatErr(err)
        }else{
            console.log(chalk.red(text));
        }
    });
}

getArch('./md/texto.md');