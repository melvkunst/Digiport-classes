// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

let scores = {
  Alice: 5,
  Bob: 7,
  Charlie: 4,
};

let total = 0;

for(let key in scores){
    total+=scores[key]
}

console.log(total)