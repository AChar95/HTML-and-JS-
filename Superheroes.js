let data;
let request;
let names;

function setName(a) {
    names = a.value;
}

function showSquad() {
    console.log(data.squadName);
    document.getElementById("main").innerHTML = data.squadName;
}

function checkHero() {
    console.log(names);
    let main = document.getElementById("tbody");
    for (let x of data.members) {
        if (x.name === names) {
            let ageOne = x["age"];
            let secretIden = x["secretIdentity"];
            let pow = x["powers"];
            let tableOne = document.getElementById("tbody");
            let header = tableOne.createTHead();
            let rowOne = header.insertRow(0);
            let keys = Object.keys(x);
            let headNum = 0;
            
            for (let t = 0; t < 4; t++) {
                let cell = rowOne.insertCell(headNum);
                cell.innerHTML = keys[t];
                headNum = headNum +1;
            }
            let num = 0;
            let rowTwo = tableOne.insertRow(1);
            for (i in x) {
                let cell = rowTwo.insertCell(num);
                if (num === 0) {
                    cell.innerHTML = names;
                } else if (num === 1) {
                    cell.innerHTML = ageOne;
                } else if (num === 2) {
                    cell.innerHTML = secretIden;
                } else {
                    cell.innerHTML = pow;
                }

                num = num + 1;
            }
        }


        // var z = document.createElement("table")
        // tr2 = "<td> " + names + "</td>" + "<td> " + ageOne + "</td>" + "<td> " + secretIden + "</td>" + "<td> " + pow + "</td></tr>";
        // z.innerHTML = tr2;
        // main.appendChild(z);


    }

}
function printMoleMan() {
    for (let x of data.members) {
        var y = document.createElement("p");
        y.innerHTML = x.name;
        document.body.appendChild(y);
    }
}
function fetchData() {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        console.log("1");
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    console.log("2");
                    request = req;
                    resolve(req.responseText);
                } else {
                    console.log("fail");
                    reject("Could not connect properly");
                }
            }
        }
        req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
        req.send();
    });
};



// const req = new XMLHttpRequest();
//     req.onreadystatechange = getData;
//     req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
//     req.send();
fetchData().then((value) => {
    data = JSON.parse(value);
    console.log(data);
});
