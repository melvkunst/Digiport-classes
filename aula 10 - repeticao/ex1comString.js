const dados = "Ana, chocolate; Bruna, morango"

const pares = dados.split(";");

for(let i = 0; i < pares.length; i++){
    const partes = pares[i].split(",")

    console.log (partes[0], pares[1])
}