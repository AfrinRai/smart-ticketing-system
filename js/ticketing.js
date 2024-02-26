function ticketing() {
    // Using Modal showing the success screen
    document.getElementById("success-part").showModal();
}

document.getElementById('discount-msg');

const nextButton = document.getElementById('next-button');
nextButton.disabled = true;

const applyButton = document.getElementById('apply-button');
applyButton.disabled = true;

const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
let temp = 40;
let totalTk = 0;
let grandTotal = 0;
let flag = false;
for(const btn of allBtn){
    btn.addEventListener("click", function getTicketNumbersClicked(event) {
        const arr = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
        for (const arrays of arr) {
            console.log(arrays);
        }
        if(count < 4)
        {
            // added bg & text color to buttons
            const colors = '#4CAF50';
            const textColor = 'white';
            event.target.style.backgroundColor = colors;
            event.target.style.color = textColor;
            count += 1;

            // not selecting any button twice
            

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



        }
        else
        {
            alert("Error: Something went wrong!");
        }

        // Discount part
        let couponDiscount = 0;
        applyButton.addEventListener('click', getClickedApplyButton);
        function getClickedApplyButton() {
            const couponCode = document.getElementById('coupon');
            const couponCodeText = couponCode.value;
            if(couponCodeText === 'NEW15')
            {     
                //const grandTotalValue = grandTotal
                console.log(grandTotal.length);
                couponDiscount = grandTotal - (grandTotal*(0.15));
                setInnerText('grand-total', couponDiscount);  
                hideElementById('inputField')
                showElementById('discount-msg')
                //console.log(couponCode); 
            }
            else if(couponCodeText === 'Couple 20')
            {     
                //console.log(grandTotal);
                couponDiscount = grandTotal - (grandTotal*(0.2));
                setInnerText('grand-total', couponDiscount);  
                hideElementById('inputField')
                showElementById('discount-msg')
                //console.log(couponCode); 
            }
            else
            {
                alert("Error: Something went wrong!");
            }
        }       
        
    })
}

