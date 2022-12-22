'use strict'

const tipButtons = document.querySelectorAll('.select_grid-box');
const bill = document.getElementById('bill');
const numOfPeople = document.getElementById('numberOfPeople');
const custom = document.querySelector('.custom');

const tipAmount = document.querySelector('.tip_amount');
const totalAmount = document.querySelector('.total_amount');


tipButtons.forEach(tipButton => {
    tipButton.addEventListener('click', (e) => {
        const billAmount = parseFloat(bill.value);
        const numberOfPeople = parseFloat(numOfPeople.value);
        const customTip = parseFloat(custom.value);

        const billPerPerson = billAmount / numberOfPeople;

        // 5% tip
        if(e.target.innerText === "5%") {
            tipAmount.innerHTML = `$${((billAmount * 0.05) / numberOfPeople).toFixed(2)}`;
            totalAmount.innerHTML = `$${(billPerPerson + ((billAmount * 0.05) / numberOfPeople)).toFixed(2)}`;
        } else

        // 10% tip
        if(e.target.innerText === "10%") {
            tipAmount.innerHTML = `$${((billAmount * 0.1) / numberOfPeople).toFixed(2)}`;
            totalAmount.innerHTML = `$${(billPerPerson + ((billAmount * 0.1) / numberOfPeople)).toFixed(2)}`; 
        } else

        // 15% tip
        if(e.target.innerText === "15%") {
            tipAmount.innerHTML = `$${((billAmount * 0.15) / numberOfPeople).toFixed(2)}`; 
            totalAmount.innerHTML = `$${(billPerPerson + ((billAmount * 0.15) / numberOfPeople)).toFixed(2)}`;
        } else

        // 25% tip
        if(e.target.innerText === "25%") {
            tipAmount.innerHTML = `$${((billAmount * 0.25) / numberOfPeople).toFixed(2)}`; 
            totalAmount.innerHTML = `$${(billPerPerson + ((billAmount * 0.25) / numberOfPeople)).toFixed(2)}`;
        } else

        // 50% tip
        if(e.target.innerText === "50%") {
            tipAmount.innerHTML = `$${((billAmount * 0.5) / numberOfPeople).toFixed(2)}`; 
            totalAmount.innerHTML = `$${(billPerPerson + ((billAmount * 0.5) / numberOfPeople)).toFixed(2)}`;
        } else

        // custom input
        if(e.target.value === "") {
            console.log('custom')

            tipAmount.innerHTML = `$${((billAmount * customTip) / numberOfPeople).toFixed(2)}`;
            totalAmount.innerHTML = `$${(billPerPerson + ((billAmount * customTip) / numberOfPeople)).toFixed(2)}`;
        } 

        // error message when input is empty

})});