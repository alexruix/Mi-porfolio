$(function() {
  let social = $(".social");

  // if(document.body.classList.contains("dark")){
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
if (matchMedia('only screen and (min-width: 1050px)').matches) {
  if (scroll <= 1500) {
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

feather.replace()

var date = new Date().getFullYear();

$('#copyright').html(date)

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


$('modal-close').submit(function(e) {
  e.preventDefault();
  // Coding
  $('modal').modal(); //or  $('#IDModal').modal('hide');
  return false;
});
$('.tabs').tabs();
$('.modal').modal();
