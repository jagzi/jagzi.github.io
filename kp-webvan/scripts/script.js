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

var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];
var form = document.getElementById('consultationForm');

btn.onclick = function() {
    modal.style.display = 'block';
};

span.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    modal.style.display = 'none';
});
