// Sekeleton Loading Effect

const sekeletons = document.querySelectorAll(".sekeleton");
const sekeletonImages = document.querySelectorAll(".sekeleton-image");

const sekeletonImageImgs = document.querySelectorAll(".sekeleton-image img");
const sekeletonSpans = document.querySelectorAll(".sekeleton span");

const renderSekeleton = () => {
  sekeletons.forEach((sekeleton) => {
    sekeleton.classList.remove("loading");
  });
  sekeletonImages.forEach((sekeletonImage) => {
    sekeletonImage.classList.remove("loading");
  });

  sekeletonImageImgs.forEach((sekeletonImageImg) => {
    sekeletonImageImg.style.visibility = "visible";
  });
  sekeletonSpans.forEach((sekeletonSpan) => {
    sekeletonSpan.style.visibility = "visible";
  });
};

window.addEventListener("load", () => {
  setTimeout(() => {
    renderSekeleton();
  }, 1000);
});
