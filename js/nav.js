
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