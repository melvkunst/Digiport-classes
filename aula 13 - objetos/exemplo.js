let cat = {
    name: "Mittens",
    age: 3,
}

console.log("My cat " + cat.name + "is " + cat.age + " years old.")


let person = {
    name: "Mel",
    age: 25,
    greet: function(){
        console.log("Hi! My name is " + this.name)
    }
}

person.greet()

let dog = {
    age:3,
    body: {
        name: "Toby",
        fur: "Black"
    }
}


let cats = [
    {name:"Whiskers", age: 2, color: "ginger"},
    {name:"Salem", age: 7, color: "black"}
]

for(let key in cats){
    console.log(cats)
}