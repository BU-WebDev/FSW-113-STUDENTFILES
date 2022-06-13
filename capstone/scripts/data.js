// Calls get system function to fetch data from json file.

// Fetches out data from json file. Filters if parentID is equal to id, sends to populate function.
function getSystems(id, obj) {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const arrayOfSystems = data.systems.filter((item) => {
            return item.parentID === parseInt(id);
        })
        populateDD(arrayOfSystems, obj);
    })
    .catch(err => console.warn(err))
}
// Populates options based off of previous data.
function populateDD(array, object) {
    object.options[0] = new Option('Select an Item', -1);
    for (let i = 0; i < array.length; i++){
        object.options[i + 1] = new Option(array[i].sysName, array[i].sysID);
    };
};

function onChange() {
    const sysID = document.querySelector('#system').value;
    getSystems(sysID, document.querySelector('#subSystem'));
};

// Event listener for change.
document.querySelector('#system').addEventListener('change', onChange);
getSystems(0, document.querySelector('#system'))
