let setFName;
let name;
let sendBody;
let type = "GET";
let endpoint ="/accounts"
class Account {
    constructor(name) {
        this.name=name;
    }
}
const inputFName = (a) => setFName = a.value;


function doFun() {
    return False;
}
function createAccount(setFName) {
    let person = JSON.stringify(new Account(setFName));
    console.log(person);
    fetchData(person, "POST", "/accounts")
}
function fetchData(sendbody, type, endpoint) {
    this.sendbody=senbody;
    this.type=type;
    this.endpoint=endpoint;
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status < 300) {
                    console.log("1")
                    request = req;
                    resolve(req.responseText);
                } else {
                    console.log("fail");
                    reject("Could not connect properly");
                }
            }
        }
        req.open(type, "http://localhost:8080/JavaEEServer-1.0/api" + endpoint);
        req.send(sendbody);
    });
};
fetchData().then((value) => {
    console.log("2");
    data = JSON.parse(value);
    console.log(data);
});