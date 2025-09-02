window.onload = () => {
  let rotateFactor = 0;
  const modalImage = document.getElementById("dancingImage");

  const animateImage = () => {
    rotateFactor = rotateFactor === 0 ? -10 : 10;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  };

  setInterval(animateImage, 400);
};
