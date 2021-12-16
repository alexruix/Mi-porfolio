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

typewriter.typeString('modernos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('creativos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>únicos!</strong>')
    .pauseFor(2500)
    .start();

feather.replace()

document.querySelectorAll('.btn').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

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
