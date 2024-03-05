var images = [
            "images/ascii-art (33).png",
            "images/615dVi-uiCL.jpg",
            "images/b91fe0f9d08e5a978f7663bb5a01a054.gif",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_14.jpg"]
var imgState = 0;
var imgTag = document.getElementById("frontImage");

imgTag.addEventListener("click", function (event) {
  if (event.clientX > window.innerWidth/2) {
    imgState = (++imgState % images.length);
  }
  else{
    imgState = ((--imgState % images.length) + images.length) % images.length;
  }
  console.log(imgState);
  event.target.src = images[imgState];
});