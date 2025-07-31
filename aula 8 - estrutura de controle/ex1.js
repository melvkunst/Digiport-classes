let n1 = 40, n2 = 55, n3 = 99

if (n1 > n2 && n1 > n3){
    console.log(`Número 1: ${n1} é o maior`);
    if(n2 > n3){
        console.log(`Número 3: ${n3} é o menor`);
    }else{
        console.log(`Número 2: ${n2} é o menor`);
    }
}else if(n2 > n3 && n2 > n1){
    console.log(`Número 2: ${n2} é o maior`);
    if(n1 > n3){
        console.log(`Número 3: ${n3} é o menor`);
    }else{
        console.log(`Número 1: ${n1} é o menor`);
    }
}else{
    console.log(`Número 3: ${n3} é o maior`);
    if(n2 > n3){
        console.log(`Número 3: ${n3} é o menor`);
    }else{
        console.log(`Número 2: ${n2} é o menor`);
    }
}

