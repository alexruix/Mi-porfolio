
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
$(document).ready(function(){
    $('#type').typewrite({
        actions: [
            {type: 'Hello. '},
            {type: '<br>'},
            {type: 'Weclome '},
            {delay: 1500},
            {remove: {num: 1, type: 'stepped'}},
            {select: {from: 11, to: 16}},
            {delay: 2000},
            {remove: {num: 5, type: 'whole'}},
            {delay: 300},
            {type: 'lcome to typewrite. '},
            {type: '<br>'},
            {type: 'It\'s just so easy to setup and use.'}
        ]
    });
});
