let bgi = document.getElementById("backgroundImage");
var nthimg = 0;
window.onload = function(){
    bgi.style.backgroundImage = "url(img1.jpg)";
}

setInterval(changeImg, 4000);

function changeImg(){
    console.log("changeimg")
    bgi.style.backgroundImage = 'url(img'+nthimg+'.jpg)';
    bgi.style.transitionDuration = "1s"
    nthimg = (++nthimg) % 2;
}
