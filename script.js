burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
searchNav = document.querySelector('.search');
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('h-nav-visibility-resp')
    searchNav.classList.toggle('h-nav-visibility-resp')

})