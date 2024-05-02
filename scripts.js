/*
    This file was created without the presence of caffeine in my body.
    Some things are not gonna look pretty (Essentially, out of fuel).
*/

'use strict';

// Here goes a navbar toggle
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

// Toggles Navbar when clicking any link
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

// Typical Header Activity
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

// Adds functionality to Why Choose Us buttons
function wcs_btns(choice, btn_name){
  var x = document.getElementsByClassName('wcs');
  var btns = document.getElementsByClassName('tab-btn');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    btns[i].classList.remove("active");
  }
  document.getElementById(choice).style.display = "block";
  document.getElementById(btn_name).classList.add("active");
}



// Updates all the progress bar continously
var progressbars =  document.getElementsByClassName('progress');
var progress_goals = document.getElementsByClassName('progress-value');
for (var i = 0; i < progressbars.length; i++) {
  progressbars[i].style.width=progress_goals[i].value+"%";
}

/* Hover Functionality on 'What We Do'. Since the current implementation seems to not account
   for the unhovering action, implementing a separate function to directly call from the HTML.
   (This also tells you that I have no idea what I was on when I was writing this code. Definitely !COFFEE) */
function wwd_hover(choice, choice2){
  var x = document.getElementsByClassName('service-card');
  var exp = document.getElementsByClassName('service-card-expanded');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(choice).style.display = "flex";
  document.getElementById(choice).scrollIntoView(false);
  document.getElementById(choice).style.width = (document.getElementById('serv_list').offsetWidth * 0.85) + "px";
  document.getElementById(choice2).style.display = "block";
}

function wwd_unhover(){
  var x = document.getElementsByClassName('service-card');
  var exp = document.getElementsByClassName('service-card-expanded');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "block";
    x[i].style.width = "auto";
    exp[i].style.display = "none";
  }
}

// One last thing, that mfucking scrollbar that keeps on showing itself
// on mobile devices. I'mma gun it down.
// Nvm, I completely killed it off
/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⡆⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⣾⣿⡆⠀
⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⢰⣿⡆⠀⣾⣿⡆⠀⣾⣷ ⣿⣿⡇⠀⠀⣿⣿⡇⠀
⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⠘⣿⣿⣤⣿⣿⣿⣤⣿⡇⢻⣿⡇⠀⠀⣿⣿⡇⠀
⠀⠀⠀⣿⣿⡇⠀⠀⢸⡿⠀⢹⣿⣿⣿⣿⣿⣿⣿⠁⢸⣿⣇⠀⢀⣿⣿⠇⠀
⠀⠀⠀⠙⢿⣷⣶⣶⡿⠁⠀⠈⣿⣿⠟⠀⣿⣿⠇⠀⠈⠻⣿⣶⣾⡿⠋⠀⠀

*/
