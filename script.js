'use strict'

const bill = document.getElementById('bill');
const people = document.getElementById('numberOfPeople');
const tips = document.querySelectorAll('.select_grid-box');
const tipAmount = document.querySelector('.tip_amount');
const totalAmount = document.querySelector('.total_amount');
const tipCustom = document.querySelector('.custom');
const resetButton = document.querySelector('.reset');
const errorBill = document.querySelector('.error-bill');
const errorPeople = document.querySelector('.error-people');


bill.addEventListener('input', billInputFun);
people.addEventListener('input', peopleInputFun);

// check which tip is active
tips.forEach(function(tip) {
    tip.addEventListener('click', handleClick)
});

// custom tip
tipCustom.addEventListener('input', tipInputFun);

// reset button
resetButton.addEventListener('click', resetFun);


bill.value = '0';
people.value = '1';
tipAmount.innerHTML = '$' + (0.0).toFixed(2);
totalAmount.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0;
let peopleValue = 1;
let tipValue = 0.15;

// bill input function
function billInputFun() {
    billValue = parseFloat(bill.value);
    calculateTip();

    
}

// people input function
function peopleInputFun() {
    peopleValue = parseFloat(people.value);

    if (peopleValue < 1) {
        errorPeople.style.display = 'block';
        people.style.border = '2px solid red';
    } else {
        errorPeople.style.display = 'none';
        people.style.border = 'none';
        calculateTip();
    }
}

// custom input function
function tipInputFun() {
    tipValue = parseFloat(tipCustom.value / 100);

    tips.forEach(function(tip) {
        tip.classList.remove("active")
    });
    calculateTip();
}

// tips click handler
function handleClick(e) {
    tips.forEach(function(tip) {
        tip.classList.remove("active")
        if (e.target.innerHTML == tip.innerHTML) {
            tip.classList.add("active");
            tipValue = parseFloat(tip.innerHTML) / 100;
        }
    });
    calculateTip();
}

// calculate tip
function calculateTip() {
    if(peopleValue >= 1) {
        let tipAmt = (billValue * tipValue) / peopleValue;
        let totalAmt = (billValue + tipAmt) / peopleValue;
        tipAmount.innerHTML = '$' + tipAmt.toFixed(2);
        totalAmount.innerHTML = '$' + totalAmt.toFixed(2);
    }
}

// reset button function
function resetFun(){

    bill.value = '0';
    billInputFun();
    people.value = '1';
    peopleInputFun();
    tipCustom.value = '';
}


