const readline = require('readline-sync');
const chalk = require('chalk')

let propriedades = [];

let aux = "";

while(aux!= 'sair'){
    
    aux = readline.question("Digite sua propriedade do css: ");

    propriedades.push(aux);
    
    aux = readline.question("Para sair digite 'sair' , para continuar digite qualquer tecla: ");
    aux.toLowerCase();

    if(aux == 'sair'){
        console.log(chalk.green(propriedades.sort().join('\n')));
    };
}