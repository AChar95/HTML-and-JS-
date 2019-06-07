let sName;
let sAge;
let sBreed;

let age;
let name;
let breed;
class Animal {
    constructor(age) {
        this.age = age;
    }
}

class Penguin extends Animal {
    constructor(name, age, breed) {
        super(age);
        this.name = name;
        this.breed = breed;
    }
    waddle() {
        console.log("waddle away");
    }
}

let lovlace = new Penguin("lovlace", 4, "Rockhopper");
lovlace.waddle();

const setName = (a) => sName = a.value; 
const setAge = (b) => sAge = b.value;
const setBreed = (c) => sBreed = c.value;

function showMe() {
let pingu = new Penguin(sName,sAge, sBreed);

}
