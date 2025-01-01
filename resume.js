
alert('모바일 최적화 페이지입니다. 모바일 화면으로 열람하시길 권장 드립니다.')

function messageMail() {
    alert('메일 주소가 클립보드에 복사되었습니다. (rkdud12547@gmail.com) 본 메일로 문의 부탁드립니다. :)')
    navigator.clipboard.writeText('rkdud12547@gmail.com')
  }

  function messageInterview() {
    alert('면접일 예약 기능이 준비중입니다. 메일 주소가 클립보드에 복사되었습니다. (rkdud12547@gmail.com) 본 메일로 문의 부탁드립니다. :)')
    navigator.clipboard.writeText('rkdud12547@gmail.com')
  }

  function changeIconLikeOn() {
    alert('찜하기가 완료되었습니다')
    const icon_like = document.getElementById('icon_like')
    const btnLike =document.getElementById('btnLike')
    icon_like.src ='./custom/icon_like_on.svg'
    btnLike.onclick=changeIconLikeOff
  }

  function changeIconLikeOff() {
    alert('찜하기가 해제되었습니다')
    const icon_like = document.getElementById('icon_like')
    const btnLike =document.getElementById('btnLike')
    icon_like.src ='./custom/icon_like_off.svg'
    btnLike.onclick=changeIconLikeOn
  }

  function changeIconShareOn() {
    const icon_like = document.getElementById('icon_share')
    icon_like.src ='./custom/icon_share_on.svg'
    alert('페이지 주소가 클립보드에 복사되었습니다');
    navigator.clipboard.writeText('https://shin-gayoung.github.io/resume/resume.html')
    setTimeout(changeIconShareOff, 2000); 
}

  function changeIconShareOff() {
    const icon_like = document.getElementById('icon_share')
    icon_like.src ='./custom/icon_share_off.svg'
  }
