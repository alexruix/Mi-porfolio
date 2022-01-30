
$(document).ready(function(){
   $('.tooltipped').tooltip();
 });
var app = document.getElementById('type2');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 85,
});

typewriter.typeString('modernas')
    .pauseFor(8500)
    .deleteAll()
    .typeString('simples')
    .pauseFor(8500)
    .deleteAll()
    .typeString('user friendly')
    .pauseFor(8500)
    .start();

feather.replace()

$(function() {
  let social = $(".social");

  // if(document.body.classList.contains("dark")){
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
if (matchMedia('only screen and (min-width: 900px)').matches) {
  if (scroll <= 2750) {
    social.css("display", "flex");
  } else {
    social.hide();
  }
}

else{
  social.hide();
}

  });
});

const clip  = document.querySelectorAll('.video');

clip.forEach(clips =>{
  clip.addEventListener('mouseover', function(){
    clip.play();
  });
  clip.addEventListener('mouseout', function(){
    clip.pause();
  });

});

// for (var i = 0; i < clip.length; i++) {
//   clip[i].addEventListener('mouseenter', function(e){
//     clip[i].play();
//   });
// }


  $(document).ready(function(){
      $('.modal').modal();
    });

    $('modal-close').submit(function(e) {
        e.preventDefault();
        // Coding
        $('modal').modal(); //or  $('#IDModal').modal('hide');
        return false;
    });


let mainNavLinks = document.querySelectorAll(".menu__item");
let mainSections = document.querySelectorAll(".background");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("click", function() {
        if (this.classList.contains("active")) return;

        this.classList.add("active");

        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }

        handleTransition(this, text);
        activeButton = this;

    });


});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" ||
        !item.classList.contains("active")) return;

        text.classList.add("active");

    });

}




document.addEventListener("DOMContentLoaded", function () {
      const checkboxSwitcher = document.querySelector("input[type=checkbox]");
      const details = document.querySelector(".switch");
      checkboxSwitcher.addEventListener("change", function (event) {
        if (event.target.checked) {
          details.classList.add('show');
        } else {
          details.classList.remove('show');
        }
      });
  },
  false
);
