'use strict'

const tipButtons = document.querySelectorAll('.select_grid-box');

const bill = document.getElementById('bill');
const billAmount = parseFloat(bill.value);
const numOfPeople = document.getElementById('numberOfPeople');
const numberOfPeople = parseFloat(numOfPeople.value);

const tipAmount = document.querySelector('.tip_amount');


tipButtons.forEach(tipButton => {
    tipButton.addEventListener('click', (e) => {
        if(e.target.innerText === "5%") {
            
            console.log("calculate 5% tip")
            console.log(typeof billAmount);
            console.log(typeof numberOfPeople);

            tipAmount.innerHTML = `$${billAmount + numberOfPeople}`.toFixed(2);
        }
    })
});