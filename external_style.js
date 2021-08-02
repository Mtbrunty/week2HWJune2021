let position = 0;
      
function previousImage() {
const slider1 = document.getElementById('slider1');
if (position !== 0) {
position += 400; }
slider1.style.transform = `translateX(${position}px)`;

}

function nextImage() {
const slider1 = document.getElementById('slider1')
if ( position > -2400) {
position -= 400; }
slider1.style.transform = `translateX(${position}px)`;

}