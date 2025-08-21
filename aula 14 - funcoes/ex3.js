function idade(ano){
    const dataAtual = new Date();
    return dataAtual.getFullYear()-ano;
}

console.log(idade(2000))