
const botaoMenu = document.querySelector(".cabecalo__menu");
const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener('click', ()=>{
    menu.classList.toggle('menu-lateral--ativo')
});