const topImage  =  document.getElementById("top-image");
topImage.style.width = '75%';

topImage.addEventListener('mousemove', trackMousePosition );

function trackMousePosition(theEvent) {
    alert ('the mouse moved');
}