const slidesEl = document.getElementById('slides');
const dotsEl = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideshow = document.getElementById('slideshow');
 
const slideCount = slidesEl.children.length;
let current = 0;
let autoplayTimer;
const AUTOPLAY_MS = 4000;
 
// build dots
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(dot);
}
const dots = dotsEl.children;
 
function update() {
  slidesEl.style.transform = `translateX(-${current * 100}%)`;
  [...dots].forEach((d, i) => d.classList.toggle('active', i === current));
}
 
function goTo(i) {
  current = (i + slideCount) % slideCount;
  update();
  resetAutoplay();
}
 
function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }
 
function resetAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(next, AUTOPLAY_MS);
}
 
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
 
// keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
});
 
// swipe support (mobile)
let touchStartX = 0;
slideshow.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});
slideshow.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - touchStartX;
  if (diff > 50) prev();
  if (diff < -50) next();
});
 
update();
resetAutoplay();