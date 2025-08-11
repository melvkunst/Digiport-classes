const prompt = require("prompt-sync")()
for(let i = 1; i<=7; i++){
    qty = parseInt(prompt(`João, quantas maçãs você colheu hoje no dia ${i}? `))
    console.log(`No dia ${i}, João colheu ${qty} maçãs`)
}