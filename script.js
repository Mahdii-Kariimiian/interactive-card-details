
/* CardHolder Name */
let cardHolder = document.getElementById("cardholder")
let cardName = document.querySelector(".name")
// Show default name if Cardholder name input is empty 
cardHolder.addEventListener ("input" , () => {
    if (cardHolder.value !== "") {
        cardName.innerText = cardHolder.value
    } else {
        cardName.innerText = "Jane Appleseed"
    }
})

/* Card Number */
let cardNumber = document.getElementById("Card-Number")
let cardNum = document.querySelector(".card-number")
let wrongFormat = document.querySelector(".wrong-format")
cardNumber.addEventListener ("input" , () => {
    let cardNumberValue = cardNumber.value
    if (isNaN(cardNumberValue)) { // enter NaN value
        wrongFormat.classList.remove("hidden")
    } else if (cardNumber.value !== "") {  // if number input is empty 
        wrongFormat.classList.add("hidden")
        cardNum.innerText = cardNumber.value.replace(/\D/g, "").replace(/(\d{4})/g , "$1 ") // Seperate number by 4 digits
    } else {
        wrongFormat.classList.add("hidden") // Show default number if input is empty
        cardNum.innerText = "0000 0000 0000 0000"
    }
})

/* Exp Month */
let month = document.querySelector(".month")
let expMonth = document.getElementById("Exp-month")
let monthBlank = document.querySelector (".month-blank")
expMonth.addEventListener ("input" , () => {

    if (expMonth.value === "") { 
        month.innerText = "00"
        monthBlank.classList.remove ("hidden")
        monthBlank.innerText = "Can't be blank"
        expMonth.classList.add("error-border")
    } else if (isNaN(expMonth.value)) {
        monthBlank.classList.remove ("hidden")
        monthBlank.innerText = "numbers only"
        expMonth.classList.add("error-border")
    } else {
        monthBlank.classList.add ("hidden")
        expMonth.classList.remove("error-border")
        month.innerText = expMonth.value
    }
})

/* Exp Year */
let year = document.querySelector(".year")
let expyear = document.getElementById("Exp-year")
let yearBlank = document.querySelector (".year-blank")
expyear.addEventListener ("input" , () => {
    if (expyear.value === "") {
        year.innerText = "00"
        yearBlank.classList.remove ("hidden")
        yearBlank.innerText = "Can't be blank"
        expyear.classList.add("error-border")
    } else if (isNaN(expyear.value)) {
        yearBlank.classList.remove ("hidden")
        yearBlank.innerText = "numbers only"
        expyear.classList.add("error-border")
    } else {
        yearBlank.classList.add ("hidden")
        expyear.classList.remove("error-border")
        year.innerText = expyear.value
    }
})

/* CVC */
let cvc = document.getElementById ("cvv-number")
let cvcInCard = document.querySelector(".cvv-number")
let cvcBlank = document.querySelector(".cvv-blank")
cvc.addEventListener ( "input" , function () {
    if (cvc.value.length > 3) {
        cvcBlank.innerText = "Too long!"
        cvcBlank.classList.remove ("hidden")
        cvcInCard.innerText = "000"
    } else if (isNaN(cvc.value)) {
        cvcBlank.classList.remove ("hidden")
        cvcBlank.innerText = "numbers only"
        cvc.classList.add("error-border")
        cvcInCard.innerText = "000"
    } else if (cvc.value === "") {
        cvcBlank.innerText = "Can't be blank"
        cvc.classList.add("error-border")
        cvcBlank.classList.remove ("hidden")
        cvcInCard.innerText = "000"
    } else {
        cvcBlank.classList.add ("hidden")
        cvc.classList.remove("error-border")
        cvcInCard.innerText = cvc.value
    }
})


/* submit button */ 

const submitBtn = document.querySelector(".confirm") 
const formSec = document.querySelector(".form-sec")
const thanksSec = document.querySelector(".thanks-sec")

submitBtn.addEventListener ("click" , () => {
    formSec.classList.add("hidden")
    thanksSec.classList.remove("hidden")
})

/* continue button */ 
const continueBtn = document.querySelector(".continue-btn")
continueBtn.addEventListener ( "click" , () => {
    formSec.classList.remove("hidden")
    thanksSec.classList.add("hidden")
    cardName.innerText = "Jane Appleseed"
    cardNum.innerText = "0000 0000 0000 0000"
    month.innerText = "00"
    year.innerText = "00"
    cardHolder.value = ""
    cardNumber.value = ""
    expMonth.value = ""
    expyear.value = ""
    cvc.value = ""
})


