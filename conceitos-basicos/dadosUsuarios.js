const nome = 'Luiz Otavio Miranda'
const sobrenome = 'Miranda'
let idade = 30
let peso = 84
let altura = 1.80
let anoAtual =  2010;

let imc = peso/(altura*altura);
let anoNascimento = anoAtual - idade;

console.log(nome, ' tem ', idade, ' anos, pesa ', peso, 'kg')

console.log('tem ', altura, ' e seu IMC é de', imc);

console.log(nome.split(" ")[0].toLocaleLowerCase(), nome.split(" ")[2].toLocaleLowerCase(), 'nasceu em ', anoNascimento)

