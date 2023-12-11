const bulb=document.getElementById("bulb")
const onButton=document.getElementById("on-btn")
const offButton=document.getElementById("off-btn")

const onImage="https://th.bing.com/th/id/R.4599cbcc5b0587bb6a405fcda9095f11?rik=6x2sLQwz1IEGBA&riu=http%3a%2f%2fwww.billfrymire.com%2fgallery%2fweblarge%2fincandescent-lightbulb-glow.jpg&ehk=c3rX4SsY6n4R%2b63WRuZPofLlTBvtxJVbO5QcQkfp0Js%3d&risl=&pid=ImgRaw&r=0"
const offImage="https://jooinn.com/images/isolated-light-bulb-1.jpg"

onButton.addEventListener('click',()=>{
    bulb.src=onImage
})
offButton.addEventListener('click',()=>{
    bulb.src=offImage
})