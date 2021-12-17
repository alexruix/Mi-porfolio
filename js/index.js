var app = document.getElementById('type');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 175,
});

typewriter.typeString('<strong>desarrollador</strong>')
    .changeCursor(' ')
    .pauseFor(15000)
    .deleteChars(12)
    .typeString('<strong>iseñador</strong>')
    .pauseFor(15000)
    .start();

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
    .typeString('<strong>faciles de usar</strong>')
    .pauseFor(8500)
    .start();

feather.replace()

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.sec3__subheader');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();


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
