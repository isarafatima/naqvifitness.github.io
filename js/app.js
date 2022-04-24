const navbar = document.querySelector('.navbar');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navbar.style.display = 'flex';
    navbar.style.top = '0';
}
function close(){
    navbar.style.top = '-100%';
}