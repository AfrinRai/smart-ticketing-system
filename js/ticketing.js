function ticketing() {
    // Hiding the home or main screen ans showing the success screen
    hideElementById('main-file')
    hideElementById('header-file')
    showElementById('success-part')
}


const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    btn.addEventListener("click", function getTicketNumbersClicked(event) {
        const colors = '#4CAF50';
        const textColor = 'white';
        event.target.style.backgroundColor = colors;
        event.target.style.color = textColor;
        //console.log(event.target.innerText);
    
    })
}
