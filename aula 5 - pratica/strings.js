
let umaString = "um texto";

umaString[3];
umaString.charAt(3); //character at position 3 -> "t"
umaString.charAt(4); // -> "e"

umaString.concat(" um", " texto", ""); // concatena as Strings -> "Um texto um texto"
umaString.replace("um", "outra"); //substitui o primeiro pelo segundo -> "outra texto"
umaString.length; //retorna o tamanho da string -> 8
umaString.slice(0, 2); //corta do 0 ao 2, incluindo o - mas não o 2 -> "um"
umaString.slice(2, 4); //corta do 2 ao 4 -> " t"

console.log(umaString);
console.log(umaString.slice(0,2));

umaString = "Paula"; 
console.log(umaString.slice(2,4)); //corta da primeira posição mencionda até a anterior da última posição

 