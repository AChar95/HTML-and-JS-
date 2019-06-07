const myProp = {
    fName: "Allan",
    sName: "Charles",
    occupation: "trainee",
    height: "short",
    location: {
        building: "TheHeart",
        floor: 10,
        city: "Manchester",
        postcode: "M50",
    }
}
let son = JSON.stringify(myProp);
function stringy() {
console.log(JSON.stringify(myProp));
}
function objecty() {
    console.log(JSON.parse(son))
}

