'use strict'

const tipButtons = document.querySelectorAll('.select_grid-box');
let bill = document.getElementById('bill');
let numOfPeople = document.getElementById('numberOfPeople');
const custom = document.querySelector('.custom');
const errorBill = document.querySelector('.error-bill');
const errorPeople = document.querySelector('.error-people');
const resetButton = document.querySelector('.reset');

const tipAmount = document.querySelector('.tip_amount');
const totalAmount = document.querySelector('.total_amount');

// check buttons
tipButtons.forEach(tipButton => {
    tipButton.addEventListener('click', checkTipButton);
});

// custom input
custom.addEventListener('input', calcInput);

// reset
resetButton.addEventListener('click', reset);

// convert input to number
const billAmount = parseFloat(bill.value);
const numberOfPeople = parseFloat(numOfPeople.value);
const customTip = parseFloat(custom.value);

// bill per person
const billPerPerson = billAmount / numberOfPeople;

// global variable
let tip = 0;
bill = 0;
numOfPeople = 1;

function calcInput(){
    // get tip value
    tip = billAmount * parseFloat(custom.value) / 100;
    
    tipButtons.forEach(function(tipButton){
        tipButton.classList.remove("active");
    });

    calculateTipAndTotal();
}

// check buttons to check tip
function checkTipButton(e) {

    tipButtons.forEach(function(tipButton){
        //remove active class from current button
        tipButton.classList.remove("active")

        if(e.target.innerHTML === tipButton.innerHTML) {
            // add active class to currently selected button
            tipButton.classList.add("active")

            // tip value
            tip = billAmount * parseFloat(tipButton.innerHTML) / 100;

            console.log(tipButton.innerHTML);
            
        }      
    });
    // calculate tip
    calculateTipAndTotal();
}

// function to calculate tip
function calculateTipAndTotal(){
    if(numberOfPeople >= 1) {

        let totalAmt = billPerPerson + (tip / numberOfPeople);
        let tipAmt = tip / numberOfPeople;

        // calculate tip amount per person
        tipAmount.innerHTML = '$' + tipAmt.toFixed(2);

        // calculate total amount per person
        totalAmount.innerHTML = '$' + totalAmt.toFixed(2);
    }
}

// reset function
function reset(){
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
    bill.innerHTML = '';
    numOfPeople.innerHTML = '';
    
    tipButtons.forEach(function(tipButton){
        tipButton.classList.remove("active");
    });
}