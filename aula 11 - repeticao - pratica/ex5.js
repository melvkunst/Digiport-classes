const prompt = require("prompt-sync")()
 let soma=0, num=0;

 while(num>=0){
    num = parseInt(prompt(`Digite um numero: `))
    if(num>=0){
        soma=soma+num;
    }
 }

 console.log(`A soma dos números positivos inseridos é ${soma}`)