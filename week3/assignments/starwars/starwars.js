// !    JavaScript Page

var queryType;
var itemID;

function fetchData() {
    queryType = document.querySelector("#queryType").value;
    itemID = document.querySelector("#itemID").value;
    getFromSWAPI(queryType, itemID);
}
function getFromSWAPI() {
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            updateInfo(data);
        })
        .catch(function (err) {
            console.warn(err);
        });
}

function updateInfo(data) {
    var myKey = Object.keys(data);
    document.querySelector("#dataValue1").textContent = data[myKey[0]];
    document.querySelector("#dataValue2").textContent = data[myKey[3]];
    document.querySelector("#dataLabel1").textContent = myKey[0];
    document.querySelector("#dataLabel2").textContent = myKey[3];
}
