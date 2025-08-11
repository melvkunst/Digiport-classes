const prompt = require("prompt-sync")()

let saldo = 1000.00

do{
    console.log("MENU: ")
    console.log("1. Verificar saldo")
    console.log("2. Depositar")
    console.log("3. Sacar")
    console.log("4. Sair")
    opcao = parseInt(prompt("Escolha sua opção: "))
    switch(opcao){
        case 1:
            console.log(`Seu saldo é R$${saldo}`)
            break;
        case 2:
            valor = parseFloat(prompt(`Digite quanto quer depositar: `))
            saldo = saldo + valor;
            console.log(`Seu novo saldo é ${saldo}`)
            break;
        case 3:
            valor = parseFloat(prompt(`Digite quanto quer sacar: `))
            saldo = saldo - valor;
            console.log(`Seu novo saldo é ${saldo}`)
            break;
        case 4:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")

    }
}while(opcao!=4);