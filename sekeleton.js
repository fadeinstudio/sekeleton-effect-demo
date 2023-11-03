// Sekeleton Loading Effect

const sekeletons = document.querySelectorAll(".sekeleton");

const sekeletonImgs = document.querySelectorAll(".sekeleton img");
const sekeletonSpans = document.querySelectorAll(".sekeleton span");

const renderSekeleton = () => {
  sekeletons.forEach((sekeleton) => {
    sekeleton.classList.remove("loading");
  });

  sekeletonImgs.forEach((sekeletonImg) => {
    sekeletonImg.style.visibility = "visible";
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
