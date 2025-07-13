
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


function chipOnClick() {

const allChips = document.querySelectorAll('.chip-wrap button');

allChips.forEach(chip => {
  chip.addEventListener('click', () => {
    // chip-active 상태인 경우 클릭 무시
    if (chip.classList.contains('chip-active')) return;

    // 모든 칩에서 chip-active 제거하고 chip 클래스만 남김
    allChips.forEach(c => {
      c.classList.remove('chip-active');
      c.classList.add('chip');
    });

    // 클릭한 칩에 chip-active 추가, chip 제거
    chip.classList.add('chip-active');
    chip.classList.remove('chip');
  });
});

}



function ready() {
  alert('준비중입니다. 빠르게 업데이트 할 수 있도록 할게요 :)')
}

function offerLetter() {
    alert('메일 주소가 클립보드에 복사되었습니다. (rkdud12547@gmail.com) 본 메일로 문의 부탁드립니다. :)')
    navigator.clipboard.writeText('rkdud12547@gmail.com')
  }