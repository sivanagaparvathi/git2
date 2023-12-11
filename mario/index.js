const userInput=document.getElementById("user-input")
const userName=document.getElementById("user-name")

userInput.addEventListener('change',()=>{
    userName.textContent=userInput.value
})