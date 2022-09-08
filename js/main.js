const body = document.body;
let menu = document.querySelector(".menu-mobile");
let button = document.getElementById("bx");
let close = document.querySelector('.close');
let open = document.querySelector('.open');

function openMenu() {
  if(menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    open.style.display = "block";
    close.style.display = "none";
  } else {
    menu.classList.add('showMenu');
    open.style.display = "none";
    close.style.display = "block";
  }
}

button.addEventListener('click', openMenu);
