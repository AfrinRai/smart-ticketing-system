// function ticketNumberSelectedColor() {
//     const ticketsNumbersHtml = document.getElementsByClassName('buttons');
//     const ticketsNumbers = ticketsNumbersHtml.childNodes;
    
    
// }

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
}

function getARandomTicket() {
    const ticketsNumbersHtml = document.getElementsByClassName('buttons');
    const ticketsNumbers = ticketsNumbersHtml.childNodes;
    return ticketsNumbers;
}

