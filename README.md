Interactive Banc card details

Junior challenge at frontendmentors.io 

link: (https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub)

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This App shows a piece of advice every time the button is clicked

### Screenshot



### Links

-Netlify: https://fastidious-pie-7b8b97.netlify.app/

## My process
 
In this project, the numbers and name inside the inputs have been transferred to the cards inside the page. Also, the validity of the inputs is checked and if it is inconsistent with the specified method, a warning is displayed.  I used RegEx to separate the numbers on the card.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I used

Here is a glimpse of what I used to build this mini project.
````
JavaScript

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

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)



