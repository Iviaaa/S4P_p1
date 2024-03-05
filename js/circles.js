var canvas = document.getElementById("circles");

document.addEventListener('mousemove', function(e){
    console.log("one more");
    newCirc = document.createElement('div');
    newCirc.className = 'circle';
    newCirc.style.top = event.pageY +'px';
    newCirc.style.left = event.pageX +'px';
    canvas.appendChild(newCirc);
});

document.addEventListener('touchmove', function(e){
    console.log("one more");
    newCirc = document.createElement('div');
    newCirc.className = 'circle';
    newCirc.style.top = event.changedTouches[0].pageY +'px';
    newCirc.style.left = event.changedTouches[0].pageX +'px';
    canvas.appendChild(newCirc);
});