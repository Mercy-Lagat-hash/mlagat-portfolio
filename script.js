let rotateFactor = 0;
const modalImage = document.getElementById("dancingImage");

const animateImage = () => {
  rotateFactor = rotateFactor === 0 ? -10 : 10; // swing left & right
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

// run every 400ms
setInterval(animateImage, 400);

