window.onload = () => {
  let rotateFactor = 0;
  const modalImage = document.getElementById("dancingImage");

  const animateImage = () => {
    // Toggle between left and right tilt
    rotateFactor = rotateFactor === 0 ? -10 : 10;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  };

  // Run forever every 400ms
  setInterval(animateImage, 400);
};
