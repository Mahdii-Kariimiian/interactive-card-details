Interactive Banc card details

Junior challenge at frontendmentors.io 

link: (https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub)

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
      [Desktop version](#Desktop-version)    
      [Mobile version](#Mobile-version)    
      [Invalid inputs](#Invalid-inputs)    
      [Enter Inputs](#Enter-Inputs)   
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This App shows a piece of advice every time the button is clicked

### Screenshot
  # Desktop version
![Desktop version](https://github.com/Mahdii-Kariimiian/interactive-card-details/assets/134393975/4acc3bcd-2144-44d3-9468-84980f9c7634)
  # Mobile version
  ![Mobile version](https://github.com/Mahdii-Kariimiian/interactive-card-details/assets/134393975/6b71eda8-1b72-4545-91ed-74bcf02af400)
  # Invalid inputs
![Invalid inputs](https://github.com/Mahdii-Kariimiian/interactive-card-details/assets/134393975/9a6b4dc6-94cc-4dda-8146-7333fb8c54e2)
# Enter Inputs
![enter Inputs in cards](https://github.com/Mahdii-Kariimiian/interactive-card-details/assets/134393975/a6e22a2d-cd2d-42a0-b283-241264fb877c)




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



