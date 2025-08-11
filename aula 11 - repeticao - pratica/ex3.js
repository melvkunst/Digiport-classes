const prompt = require("prompt-sync")()
let positivos = 0, negativos = 0, zeros = 0

for(let i = 1; i<=10; i++){
    num = parseInt(prompt(`Digite um número: `))
    if(num>0)   positivos++;
    else if(num<0)  negativos++;
    else    zeros++;
}

console.log(`Positivos: ${positivos}`)
console.log(`Negativos: ${negativos}`)
console.log(`Zeros: ${zeros}`)