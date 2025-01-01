function messageMail() {
    alert('제 메일 주소가 클립보드에 복사되었습니다. (rkdud12547@gmail.com) 본 메일로 문의 부탁드립니다. :)');
    navigator.clipboard.writeText('rkdud12547@gmail.com')
  }

  function messageInterview() {
    alert('면접일 예약 기능이 준비중입니다. 제 메일 주소가 클립보드에 복사되었습니다. (rkdud12547@gmail.com) 본 메일로 문의 부탁드립니다. :)');
    navigator.clipboard.writeText('rkdud12547@gmail.com')
  }

  function changeIconLikeOn() {
    const icon_like = document.getElementById('icon_like')
    const btnLike =document.getElementById('btnLike')
    icon_like.src ='./custom/icon_like_on.svg'
    btnLike.onclick=changeIconLikeOff
  }

  function changeIconLikeOff() {
    const icon_like = document.getElementById('icon_like')
    const btnLike =document.getElementById('btnLike')
    icon_like.src ='./custom/icon_like_off.svg'
    btnLike.onclick=changeIconLikeOn
  }

