const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("mastercardBtn")
const paypayBtn = document.getElementById("paypal")
const mySubmit = document.getElementById('mySubmit')
const paymentResult = document.getElementById('paymentResult')
const subResult = document.getElementById('subResult')

mySubmit.onclick = function() {
    if (myCheckbox.checked) {
        subResult.textContent = `You are subsribed`
    } else {
        subResult.textContent = `You are NOT subscribed`
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa`
    } else if (masterCardBtn.checked){
        paymentResult.textContent = `You are paying with masterCard`
    } else if (paypayBtn.checked) {
        paymentResult.textContent = `You are paying using paypal`
    } else {
        paymentResult.textContent = `first choose the a payment method`
    }
}