function slider (anything, altText){
   document.getElementById ('one') .src = anything;
   document.getElementById ('one') .setAttribute('alt', altText);
};

let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
menu.classList.toggle ('bx-x');
navbar.classList.toggle ('open');
}

console.log("menu =", menu, "navbar =", navbar);