function ticketing() {
    // Hiding the home or main screen ans showing the success screen
    hideElementById('main-file')
    hideElementById('header-file')
    showElementById('success-part')
}


const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
let temp = 40;
let totalTk = 0;
let grandTotal = 0;
for(const btn of allBtn){
    btn.addEventListener("click", function getTicketNumbersClicked(event) {
        // added bg & text color to buttons
        const colors = '#4CAF50';
        const textColor = 'white';
        event.target.style.backgroundColor = colors;
        event.target.style.color = textColor;
        count += 1;

        // increasing seat numbers
        setInnerText('selected-seat', count);

        // Decreasing total seat numbers after selecting
        temp -= 1;
        setInnerText('total-seat', temp);

        // sum up total price
        totalTk += 550;
        setInnerText('total-price', totalTk);

        // sum up grand total price
        grandTotal += 550;
        setInnerText('grand-total', grandTotal);
    
    })
}
