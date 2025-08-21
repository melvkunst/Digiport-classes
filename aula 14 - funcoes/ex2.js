function stringMaiuscula(str){
    return str.toUpperCase();
}

console.log(`String 'melissa' em maiúsculo: ${stringMaiuscula('melissa')}`)
console.log(`String 'cAsa' em maiúsculo: ${stringMaiuscula('cAsa')}`)

//arrow function
const maiuscula = (string) => {return string.toUpperCase()}

console.log(`String 'bala' em maiúsculo: ${maiuscula('bala')}`)