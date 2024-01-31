var images = ["images/01526.jpg","images/rotozazaetude.jpg"]
var imgState = 0;
var imgTag = document.getElementById("frontImage");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});