function media(arr){
    let soma = 0;
    for(let i=0; i<arr.length; i++){
        soma+=arr[i];
    }
    return soma/arr.length;
}

let numeros=[1,7,3,98,76,2]

console.log(media(numeros))