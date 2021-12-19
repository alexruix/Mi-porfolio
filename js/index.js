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

/*global $, console*/
var slider = document.querySelector('.sec3__subheader'),
    arrows = document.querySelectorAll('.sec3__header .arrow-left, .sec3__header .arrow-right'),
    isDown = false,
    startX,
    scrollLeft;

slider.scrollLeft = 10;

slider.onmousedown = function (e) {
    'use strict';
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

slider.onmouseup = function () {
    'use strict';
    isDown = false;
    slider.classList.remove('active');
};

slider.onmouseleave = function () {
    'use strict';
    isDown = false;
    slider.classList.remove('active');
};

slider.onmousemove = function (e) {
    'use strict';
    if (!isDown) { return; }
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft,
        walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
};

function controlsSlider(num) {
    'use strict';
    var smooth = setInterval(function () {
        slider.scrollLeft += num;
    }, 10);
    setTimeout(function () {
        clearInterval(smooth);
    }, 210);
}
arrows[0].onclick = function () {
    'use strict';
    controlsSlider(-20);
};

arrows[1].onclick = function () {
    'use strict';
    controlsSlider(20);
};

window.onkeydown = function (e) {
    'use strict';
    var key = e.keyCode;
    if (key === 39) {
        controlsSlider(400);
    }
    if (key === 37) {
        controlsSlider(-400);
    }
};


// on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      $(".skills__item").addClass("active")
$(".skills__item .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
    }

    $("#hab").click(function(){
        $("#habilities").show();
        console.log(this);
        $("#works").hide();
      });
      $("#work").click(function(){
          $("#habilities").hide();
          console.log(this);
          $("#works").show();
        });

/*
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if ($(window).width() < 1052){
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".menu").style.bottom = "0px";

      } else {
        document.querySelector(".menu").style.bottom = "-50px";

      }
      prevScrollpos = currentScrollPos;
    }
    else {
      document.querySelector(".menu").style.top = "0";
    }
  }
*/

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
