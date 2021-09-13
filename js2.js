let menu = document.querySelector("#menu-bar");
let navbar= document.querySelector(".menu");

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header .menu a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



