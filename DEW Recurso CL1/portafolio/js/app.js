const pageHeader = document.querySelector(".page-header");
const openMobMenu = document.querySelector(".open-mobile-menu");
const closeMobMenu = document.querySelector(".close-mobile-menu");
const topMenuWrapper = document.querySelector(".top-menu-wrapper");
const isVisible = "is-visible";
const showOffCanvas = "show-offcanvas";
const noTransition = "no-transition";
let resize;

openMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.add(showOffCanvas);
});

closeMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.remove(showOffCanvas);
});

window.addEventListener("resize", () => {
  pageHeader.querySelectorAll("*").forEach(function(el) {
    el.classList.add(noTransition);
  });
  clearTimeout(resize);
  resize = setTimeout(resizingComplete, 500);
});

function resizingComplete() {
  pageHeader.querySelectorAll("*").forEach(function(el) {
    el.classList.remove(noTransition);
  });
}




const element = document.querySelector('.some-element-you-want-to-animate');
const element1 = document.querySelector('.some-element-you-want-to-animateimg');
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;


  element.style.transform = 'translateY(' + Math.min(0.1 * elapsed, 40) + 'px)';
  element.style.transition='1s'

  if (elapsed < 5500) { 
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

