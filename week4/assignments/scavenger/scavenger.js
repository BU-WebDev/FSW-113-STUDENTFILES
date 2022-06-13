//!         JavaScript Page

document.querySelector("#submit").addEventListener("click", combineLists);

function combineLists() {
    const arry1 = document.querySelector('#scavenger-0').value.split(",");
    const arry2 = document.querySelector('#scavenger-1').value.split(",");
    const arry3 = document.querySelector('#scavenger-2').value.split(",");
    const arry4 = document.querySelector('#scavenger-3').value.split(",");
    const listArray = [...arry1, ...arry2, ...arry3, ...arry4].sort();
    document.querySelector("#AllItems").innerHTML = listArray.join(" , ");
}

let objTargetText
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}
