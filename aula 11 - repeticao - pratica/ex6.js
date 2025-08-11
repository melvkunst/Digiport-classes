const prompt = require("prompt-sync")()

const correctPassword = '1234'
let currentPassword = ''

while(currentPassword!=correctPassword){
    currentPassword = prompt(`Digite a senha: `)
}
console.log('Senha correta!')
