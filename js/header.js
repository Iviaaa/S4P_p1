var header = document.getElementById("header");
var leading;
var index = document.getElementsByClassName("fixedindex");

window.addEventListener('scroll',function(){
        leading = 240 - document.documentElement.scrollTop;
        header.style.lineHeight = leading+"px";
});


