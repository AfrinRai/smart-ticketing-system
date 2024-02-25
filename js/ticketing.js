function ticketing() {
    // Hiding the home or main screen ans showing the success screen
    hideElementById('main-file')
    hideElementById('header-file')
    showElementById('success-part')
    //showElementById('economy-class')
}

const nextButton = document.getElementById('next-button');
nextButton.disabled = true;

const applyButton = document.getElementById('apply-button');
applyButton.disabled = true;

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
        totalTk += parseInt(550);
        setInnerText('total-price', totalTk);

        // sum up grand total price
        grandTotal += parseInt(550);
        setInnerText('grand-total', grandTotal);

        // upgrading seat names
        seatUpgrading('seat-updating', event.target.innerText);
        
        // showing economy class 
        const seatName = document.getElementById("seat-updating").innerText;
        const economy = document.getElementById("economy-class-updating").innerText;
        const seatPrice = document.getElementById("prices-updating").innerText;

        const selectedContainer = document.getElementById('economy-class');

        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = seatName;

        const p2 = document.createElement('p');
        p2.innerText = economy;

        const p3 = document.createElement('p');
        p3.innerText = seatPrice;

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        const sizing = selectedContainer.appendChild(li);
        sizing.classList.add('flex');
        sizing.classList.add('justify-around');

        const hiddenClass = document.getElementById('hidden-part');
        hiddenClass.classList.add('hidden');

        // enable next button
        const inputNumber = document.getElementById("phone-number");
        inputNumber.addEventListener('input', getInputNumber);
        function getInputNumber() {
            if(count >= 1 && inputNumber.value.length >0)
            {
                nextButton.disabled = false;
            }
        }
        
        // enable apply button
        if(count ===4)
        {
            applyButton.disabled = false;
        }
        
    })
}

