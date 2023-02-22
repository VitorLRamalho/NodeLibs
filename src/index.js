import fs from "fs";
import chalk from "chalk";

function treatErr(err) {
    throw new Error(chalk.red(err.code, 'não há arquivo no diretório'));
}

async function getArch(archWay) {
   try{
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(archWay, encoding);
    console.log(chalk.green(text));
   } catch(err) {
    treatErr(err);
   }
}

/* function getArch(archWay) {
    const encoding = 'utf-8';
    fs.promises.readFile(archWay, encoding)
    .then((text) => console.log(chalk.yellow(text)))
    .catch(treatErr);
}

 */
/* function getArch(archWay) {
    const encoding = 'utf-8';
    fs.readFile(archWay, encoding, (err, text) => {
        if(err){
            treatErr(err)
        }
        console.log(chalk.green(text));
    });
} */

getArch('./md/texto.md');
getArch('./md/');