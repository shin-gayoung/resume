
alert('모바일 최적화 페이지입니다. 모바일 화면으로 열람하시길 권장 드립니다.')

const slider = document.querySelector('.projectcard-wrap');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; // 속도 조절
  slider.scrollLeft = scrollLeft - walk;
});
