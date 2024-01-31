var images = ["images/01526.jpg","images/rotozazaetude.jpg"]
var imgState = 0;
var imgTag = document.getElementById("frontImage");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});

var topnav = document.getElementById("topNav");
var hoverSpace = document.getElementById("hoverspace");
console.log(hoverSpace);
hoverSpace.addEventListener("mousemove", function(event) {
  if(100 - event.clientY < 0) {
    $(topnav).css({top: 100 - event.clientY});
  } else {
    $(topnav).css({top: 0});
  }
});

hoverSpace.addEventListener("mouseout", function() {
  $(topnav).css({top: -100});
});