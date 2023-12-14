var Service=document.getElementById('service')
var mouseHover=document.getElementById('mouse-over')
var Health=document.getElementById('Health')
var mouse=document.getElementById('mouse-over-health')

Service.addEventListener('mouseover',()=>{
    mouseHover.classList.add('mouse-active')
    
})

Service.addEventListener('mouseleave',()=>{
    mouseHover.classList.remove('mouse-active')
    
})

Health.addEventListener('mouseover',()=>{
    mouse.classList.add('mouse-active')
})

Health.addEventListener('mouseleave',()=>{
    mouse.classList.remove('mouse-active')
})