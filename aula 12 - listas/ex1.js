function maiorMenor(numeros){
    console.log(numeros)
    maior = numeros[0], menor=numeros[0]
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i]>maior){
            maior = numeros[i]
        }else if(numeros[i]<menor){
            menor = numeros[i]
        }
    }
    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)
}

function somando(numeros){
    soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma+=numeros[i]
    }
    return soma;
}

const prompt = require("prompt-sync")()

list = [9, 7, 3, 8, 6]

console.log(list)

console.log(`Média: ${somando(list)/list.length}`)
console.log(`Soma: ${somando(list)}`)

maiorMenor(list)

let newlist=[]

for(i=0; i<5; i++){
    newlist[i] = parseInt(prompt("Digite um numero: "))
}

console.log(newlist)

