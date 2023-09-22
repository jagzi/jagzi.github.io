const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')
const menuIcons = document.getElementById('menuIcons')

console.log(iconOpen)
console.log(iconClose)
console.log(mainMenu)

menuIcons.addEventListener('click', ()=> {
    iconOpen.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    mainMenu.classList.toggle('hide')
})