const username=document.getElementById("user-name")
const  mailId=document.getElementById("mail-id")
const userInput=document.getElementById("user-input")
const enterId=document.getElementById("enter-id")
const button=document.getElementById("button")

username.addEventListener('change',()=>{
    userInput.textContent=username.value
})

mailId.addEventListener('change',()=>{
    enterId.textContent=mailId.value
})
button.addEventListener('click',()=>{
    userInput.textContent=username.value
})

button.addEventListener('click',()=>{
    userInput.textContent=username.value
})
