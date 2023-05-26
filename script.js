burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.right-nav');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visi-resp');
    navlist.classList.toggle('visi-resp');
    navbar.classList.toggle('h-nav-resp');
    
})