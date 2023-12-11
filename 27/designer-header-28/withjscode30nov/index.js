const userInput=document.getElementById("user-input")
const userName=document.getElementById("user-name")
const userButtton=document.getElementById("user-button")
const userDes=document.getElementById("para-des")

console.log(userInput)
console.log(userName)
userInput.addEventListener('change' ,() => {
  console.log(userInput.value)
  userName.textContent = userInput.value
})

userButtton.addEventListener('click',()=>{
    console.log("buttonText")
})
userInput.addEventListener('change',()=>{
  userDes.textContent=userInput.value
})