const prompt = require("prompt-sync")()

do{
    console.log("MENU: ")
    console.log("1. Ver cardapio")
    console.log("2. Fazer um pedido")
    console.log("3. Falar com um atendente")
    console.log("4. Sair")
    opcao = parseInt(prompt("Escolha sua opção: "))
    switch(opcao){
        case 1:
            console.log("Vendo cardapio...")
            break;
        case 2:
            console.log("Fazendo pedido...")
            break;
        case 3:
            console.log("Falando com a atendente...")
            break;
        case 4:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")

    }
}while(opcao!=4);