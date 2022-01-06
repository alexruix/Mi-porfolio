
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

// var messageBox = document.querySelector('.js-message');
//   var btn = document.querySelector('.js-message-btn');
//   var card = document.querySelector('.js-profile-card');
//   var closeBtn = document.querySelectorAll('.js-message-close');
//
//   btn.addEventListener('click',function (e) {
//       e.preventDefault();
//       card.classList.add('active');
//   });
//
//   closeBtn.forEach(function (element, index) {
//      console.log(element);
//       element.addEventListener('click',function (e) {
//           e.preventDefault();
//           card.classList.remove('active');
//       });
//   });

  $(document).ready(function(){
      $('.modal').modal();
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
