mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
function myFunction(x) {
  x.classList.toggle("change");
}
var icon = document.querySelector(".language-icon");
var item = document.querySelector(".language-item");

icon.onclick = function(){
   item.classList.toggle("language-list")
}
var menuIcon = document.querySelector(".menuicon");
var menuItem = document.querySelector(".menuitem");

menuIcon.onclick = function(){
  menuItem.classList.toggle("menuitem2")
}
