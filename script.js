
const inputPassword =document.querySelector('#password')
const inputLength =document.querySelector('#passwordlength')

const uppercaseCheckEl =document.querySelector("#uppercase-check")
const numberCheckEl =document.querySelector("#number-check")
const simbolCheckEl =document.querySelector("#simbol-check")
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")

document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)
document.querySelector('#reload').addEventListener('click',generatePassword)


let inputLengthValue = 16

function generatePassword(){
 let chars="abcdefghjkmnpqrstuvwxyz"

const uppercasechars="ABCDEFGHJKLMNPQRSTUVWXYZ"
const numberchars="123456789"
const simblochars="?!@&*()[]"

if(uppercaseCheckEl.checked){
    chars += uppercasechars
}
if(numberCheckEl.checked){
    chars += numberchars
}
if(simbolCheckEl.checked){
    chars += simblochars
}


let Password=''

for(let  i=0; i<inputLengthValue; i++){
const randomNumber = Math.floor(Math.random()* chars.length)

Password +=chars.substring(randomNumber,randomNumber+1)

}
inputPassword.value=Password
calculateQuality()
calculatefontSize()
}

function calculateQuality(){
const Percent =Math.round((inputLengthValue/64)*35 + (uppercaseCheckEl.checked ? 25:0) + (numberCheckEl.checked ? 20:0) + (simbolCheckEl.checked ? 20:0) )
securityIndicatorBarEl.style.width = `${Percent}%`

if(Percent>70){
    securityIndicatorBarEl.classList.add("safe")
    securityIndicatorBarEl.classList.remove("warning")
    securityIndicatorBarEl.classList.remove("critical")
} else if(Percent>40){
    securityIndicatorBarEl.classList.remove("safe")
    securityIndicatorBarEl.classList.add("warning")
    securityIndicatorBarEl.classList.remove("critical")
} else {
    securityIndicatorBarEl.classList.remove("safe")
    securityIndicatorBarEl.classList.remove("warning")
    securityIndicatorBarEl.classList.add("critical")
}
if(Percent>=100){
    securityIndicatorBarEl.classList.remove("completed")  
}else{
    securityIndicatorBarEl.classList.remove("completed")
}


}


function calculatefontSize(){
if(inputLengthValue>45){
    inputPassword.classList.add("font-xs");
    inputPassword.classList.remove("font-sm");
    inputPassword.classList.remove("font-md");
}else if(inputLengthValue>30){
    inputPassword.classList.remove("font-xs");
    inputPassword.classList.add("font-sm");
    inputPassword.classList.remove("font-md");
} else if(inputLengthValue>20){
    inputPassword.classList.remove("font-xs");
    inputPassword.classList.remove("font-sm");
    inputPassword.classList.add("font-md");
} else {
    inputPassword.classList.remove("font-xs");
    inputPassword.classList.remove("font-sm");
    inputPassword.classList.remove("font-md");
}

}









uppercaseCheckEl.addEventListener("click",generatePassword)
numberCheckEl.addEventListener("click",generatePassword)
simbolCheckEl.addEventListener("click",generatePassword)

function copy(){
navigator.clipboard.writeText(inputPassword.value)
}



inputLength.addEventListener('input',function(){

inputLengthValue = inputLength.value

generatePassword()
calculateQuality()

document.querySelector("#password-length-text").innerText = inputLengthValue



})

generatePassword()


calculateQuality()
