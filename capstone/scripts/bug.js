let bugTracker = 0;

class Bug {
    constructor() {
        this.reportedBy = arguments[0],
        this.system = arguments[1],
        this.subSystem = arguments[2],
        this.bugDesc = arguments[3]
    };

    addBug() {
        bugTracker ++;

        let newBug = '<div id="bug' + bugTracker + '" class="bugRpt"><p>';
            newBug += 'Reported by: ' + this.reportedBy + '/' + this.subSystem + '<br/>';
            newBug += 'System: ' + this.system + '/' + this.subSystem + '<br />';
            newBug += this.bugDesc + '</p>';
            newBug += `<div id='bugButtons${bugTracker}' class='bugButtons'`;
            newBug += '</div>';
        newBug += '</div>';

        document.querySelector('#listWrapper').innerHTML += newBug;

        let bugButtonsDiv = document.getElementById('bugButtons' + bugTracker);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'X';
        deleteButton.id = 'deleteMe-' + bugTracker;
        deleteButton.addEventListener('click', this.deleteBug);
        bugButtonsDiv.appendChild(deleteButton);

        let resolveButton = document.createElement('button');
        resolveButton.innerHTML = '&#x2713;';
        resolveButton.id = 'resolveMe-' + bugTracker;
        resolveButton.addEventListener('click', this.resolveBug);
        bugButtonsDiv.appendChild(resolveButton);
        console.dir(deleteButton);
    };

    deleteBug(event) {
        let getId = event.target.id;
        let id = parseInt(getId.substring(9));
        console.log(id)
        let element = document.getElementById('bug'+id);
        element.remove();
    };


    resolveBug(event) {
        let getId = event.target.id;
        let id = parseInt(getId.substring(10));
        console.log(id)
        let element = document.getElementById('bug' + id);
        element.style.backgroundColor = '#111111';
        element.style.color = 'silver';
    };
};

function reportBug() {
    console.log('asdf')
    let objBug = new Bug (
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').selectedOptions[0].text,
        document.querySelector('#subSystem').selectedOptions[0].text,
        document.querySelector('#bugDesc').value,
    )
    objBug.addBug();
};

document.getElementById('bugForm').addEventListener('submit', reportBug);
