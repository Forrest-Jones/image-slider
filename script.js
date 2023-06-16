var currentIndex = 0;
var images = document.getElementById('slider').getElementsByTagName('img');

function previousImage() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  displayImage();
}

function nextImage() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  displayImage();
}

function displayImage() {
  for (var i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      images[i].style.display = 'block';
    } else {
      images[i].style.display = 'none';
    }
  }
}
