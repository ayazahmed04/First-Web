const menuBtn = document.querySelector('.menu-btn');
const hambburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll('.menu-nav__item');
console.log(navItem);

console.log(menuNav);

let showMenu = false;

console.log(menuBtn);
console.log(hambburger);
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu) {
        hambburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItem.forEach(item =>  item.classList.add('open'));
        
        showMenu = true;
    } else{
        hambburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(item =>  item.classList.remove('open'));

        showMenu = false;




    }
}