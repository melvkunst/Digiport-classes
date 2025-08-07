let donuts = []

for(let i = 1; i <= 10; i++){
    if(i%3 == 0) {
        donuts.push("Chocolate")
        console.log("Donut recheado de " + donuts [i-1])
    }
    else{
        donuts.push("Baunilha")
        console.log("Donut recheado de " + donuts [i-1])
    }
}
