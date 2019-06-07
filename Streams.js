let myArray = ['Mike', 'Sully', 'Sid', 'Randal', 'Peter', 'Pickle'];


function theRealWorld() {
    myArray.filter((x) => x.length > 3).map(x => x + '!').forEach((x) => console.log(x))
}
function helpClick() {
    myArray.filter((x) => x.length > 4).map(x => x + ', you don' + "'" + 't deserve help').forEach((x) => console.log(x));
}
function stupidClick() {
    let y = myArray.filter((x) => x.length > 4).reduce((acc, x) => {return acc += x});
    console.log(y);
}
function realClick() {
    let z= myArray.filter((x) => x.length > 3).reduce((acc, x) => {return acc += x}, " ");
    console.log(z);
}