const prompt = require("prompt-sync")()
let vermelha = 0, verde = 0

for(let i = 1; i<=10; i++){
    cor = prompt(`Digite a cor da fruta: `)
    if(cor.toLowerCase() == 'vermelha')   vermelha++;
    else if(cor.toLowerCase() == 'verde')  verde++;
    else   console.log('opção inválida');
}

console.log(`Vermelha: ${vermelha}`)
console.log(`Verde: ${verde}`)