let chovendo = true
let guardaChuva = false

console.log(!(chovendo && guardaChuva))

chovendo = true
guardaChuva = true

console.log(!(chovendo && guardaChuva))

chovendo = false
guardaChuva = false

console.log(!(chovendo && guardaChuva))

chovendo = false
guardaChuva = true

console.log(!(chovendo && guardaChuva))


//false false = true
//true false = false
//false true = true
//true true = true