var menu = document.getElementById("menu-toggle");
var elements = document.querySelectorAll(".active-element");
var toggledMenu = menu.addEventListener("click",() =>{
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("active");
  }
});
