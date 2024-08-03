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
  var devwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(choice).style.display = "flex";
  document.getElementById(choice).scrollIntoView(false);
  document.getElementById(choice).style.width = (document.getElementById('serv_list').offsetWidth - (devwidth * 0.05)) + "px";
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

// Updates the donation stats, just change it here
var donations_aud = 2000;
document.getElementById('don_value').innerHTML = "$" + donations_aud + " Raised So Far";


// Something I realised during the development of scripts
// I should also be able to change the items info from some file
// Cause else, I'll go mad changing the values (Ignore the fact that I'm not stable)
// Also, gonna be using jQuery cause that makes *life easier*
$(function() {
   $.getJSON('shopfile.json', function(data) {
       $.each(data.item, function(i, f) {
          var codeinsertion = `<li>
              <div class="donate-card">

                <figure class="card-banner">
                  <img src="${f.image_link}" width="520" height="325" loading="lazy" alt="Elephant"
                    class="img-cover">
                </figure>

                <div class="card-content">

                  <div class="progress-wrapper">
                    <p class="progress-text">
                      <span>Raised</span>

                      <data class="raised_amt">\$${(f.raised_so_far).toLocaleString()}</data>
                    </p>

                    <data class="progress-value" value="${((f.raised_so_far/f.goal)*100)}">${((f.raised_so_far/f.goal)*100).toFixed(2)}%</data>
                  </div>

                  <div class="progress-box">
                    <div class="progress"></div>
                  </div>

                  <h3 class="h3 card-title">${f.itemname}</h3>

                  <div class="card-wrapper">

                    <p class="card-wrapper-text">
                      <span>Goal</span>

                      <data class="green">\$${(f.goal).toLocaleString()}</data>
                    </p>

                    <p class="card-wrapper-text">
                      <span>Raised</span>

                      <data class="yellow">\$${(f.raised_so_far).toLocaleString()}</data>
                    </p>

                    <p class="card-wrapper-text">
                      <span>To Go</span>

                      <data class="cyan">\$${(f.goal-f.raised_so_far).toLocaleString()}</data>
                    </p>

                  </div>

                  <button class="btn btn-secondary">
                    <span>\$${(f.itemcost).toLocaleString()}</span>

                    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                  </button>

                </div>

              </div>
            </li>`;
          $(codeinsertion).appendTo(".donate-list");
     });

   var progressbars =  document.getElementsByClassName('progress');
   var progress_goals = document.getElementsByClassName('progress-value');
   for (var i = 0; i < progressbars.length; i++) {
     progressbars[i].style.width=progress_goals[i].value+"%";
   }
   });
});


$(function() {
   $.getJSON('testimonials.json', function(data) {
      var pfp = document.getElementById('testi-pfp');
      var testimonial = document.getElementsByClassName('testi-text');
      var name = document.getElementsByClassName('testi-name');
      var title = document.getElementsByClassName('testi-title');
      var banner = document.getElementById('testi-bannerid');
      var count = 0;
      $.each(data.testimony, function(i, f) {
          setTimeout(function(){
          $('.testi-card').fadeToggle(200);
          pfp.src = f.pfp;
          testimonial[0].textContent = f.testimonial;
          name[0].textContent = f.name;
          title[0].textContent = f.title;
          banner.src = f.banner;
          $('.testi-card').fadeToggle(200);} , count * 5000);
          count++;
      });
     });
   });

$(function() {
  if(screen.availHeight > screen.availWidth){
    $(".testi-banner").toggle();
}
   });

$(function() {
   $.getJSON('events.json', function(data) {
       $.each(data.eventlist, function(i, f) {
        var date = new Date(2024,(f.month-1), f.day);
          var codeinsertion = `<li>
              <div class="event-card">

                <time class="card-time" datetime="${date.toLocaleString('default', {month:"2-digit"})}-${date.toLocaleString('default', {day:"2-digit"})}}">
                  <span class="month">${date.toLocaleString('default', {month:"short"})}</span>
                  <span class="date">${date.toLocaleString('default', {day:"2-digit"})}</span>
                </time>

                <div class="wrapper">

                  <div class="card-content">
                    <p class="card-subtitle">${f.mode}</p>

                    <h3 class="card-title">${f.title}</h3>

                    <p class="card-text">
                      ${f.description}
                    </p>
                  </div>

                  <button class="btn btn-white">
                    <span>Learn More</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </button>

                </div>

              </div>
            </li>`;
          $(codeinsertion).appendTo(".event-list");
     });
   });
});
