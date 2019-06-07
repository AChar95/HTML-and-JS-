let valA;
let valB;
let valueF;

const setA = (a) => valA = a.value;
const setB = (b) => valB = b.value;

function multiply() {
    let value = valA * valB;
    console.log(value);
    document.getElementById("main").innerHTML = value;
    var y = document.createElement("p");
    y.innerHTML = value;
    document.body.appendChild(y);
    
     
}
