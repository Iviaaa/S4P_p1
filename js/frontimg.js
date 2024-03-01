var images = [
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_1.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_2.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_3.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_4.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_5.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_6.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_7.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_8.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_9.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_10.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_11.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_12.jpg",
            "images/1709245105808-dee558ca-0970-4df1-bc79-64396bd36d2b_13.jpg",
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