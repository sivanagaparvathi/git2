const username=document.getElementById("user-name")
const userInput=document.getElementById("user-input")
const button=document.getElementById("button")

const output=username.addEventListener('change',()=>{
    userInput.textContent=username.value
})

button.addEventListener('click',()=>{
    username.textContent=userInput.value
})
