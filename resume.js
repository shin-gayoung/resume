
// alert('모바일 최적화 페이지입니다. 모바일 화면으로 열람하시길 권장 드립니다.')

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

function changeIconShareOn() {

    document.getElementById('btnShare').addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: '신가영 포트폴리오',
          text: '경력직PM 신가영 PORTFOLIO',
          url: 'https://shin-gayoung.github.io/resume/resume.html'
        })
        .then(() => console.log('공유 성공'))
        .catch((error) => console.error('공유 실패:', error));
      } else {
        alert('공유하기를 지원하지 않는 브라우저입니다.');
      }
    });
}

function changeIconShareOnGiftcard() {

    document.getElementById('btnShare_giftcard').addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: '신가영 포트폴리오:상품권',
          text: '상대방의 취향을 존중하는 기프트',
          url: 'https://shin-gayoung.github.io/resume/project_giftcard.html'
        })
        .then(() => console.log('공유 성공'))
        .catch((error) => console.error('공유 실패:', error));
      } else {
        alert('공유하기를 지원하지 않는 브라우저입니다.');
      }
    });
}


function historyBack() {
  document.getElementById("backBtn").addEventListener("click", function () {
  history.back();
});
}