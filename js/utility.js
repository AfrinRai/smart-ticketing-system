function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setInnerText(id, value) { 
    document.getElementById(id).innerText = value;
}

function seatUpgrading(id, value) {
    document.getElementById(id).innerText = value;
}

function economyClassUpgrading(id, value) {
    document.getElementById(id).innerText = value;
}





