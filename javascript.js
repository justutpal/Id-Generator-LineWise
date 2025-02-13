let demo = document.querySelector(".demo");
let strt = document.querySelector(".strt");
let whole = document.querySelector(".whole");
let startName = document.querySelector(".startName");
let user = document.querySelector(".user");
let pass = document.querySelector(".pass");
let button = document.querySelector(".button");
let cCopy = document.querySelector(".cCopy");
let eCopy = document.querySelector(".eCopy");
let iCopy = document.querySelector(".iCopy");
let copyWhole = document.querySelector(".copyWhole");
let pCopy = document.querySelector(".pCopy");
let mainPass = "Alam1234"


let alphabet = "abcdefghijklmnopqrstuvwxyz"
let startnum = "9876"
let str = "1234567890";
let number = " "
let another = " "
let newNameEmail = " "

button.addEventListener('click' , () => {
    another = ""
    number = ""
    newNameEmail = ""

    for (let i = 0; i < 2; i++) {
        another += startnum[Math.floor(Math.random() * 4)]        
    }
    for (let i = 0; i < 8; i++) {
        number += str[Math.floor(Math.random() * 10)]        
    }
    whole.innerHTML = number;
    strt.innerHTML = another;

    for (let i = 0; i < 8; i++) {
        newNameEmail += alphabet[Math.floor(Math.random() * 26)]      
    }
    startName.innerHTML = newNameEmail;
    user.innerHTML = newNameEmail;
    pass.innerHTML = mainPass;
})

cCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(another + number)
});

iCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(newNameEmail)
})

eCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(newNameEmail + "@gmail.com")
})

pCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(pass.innerHTML)
})

copyWhole.addEventListener('click', () => {
    navigator.clipboard.writeText(another+number + " " + newNameEmail + " " + newNameEmail + "@gmail.com " + mainPass )
})