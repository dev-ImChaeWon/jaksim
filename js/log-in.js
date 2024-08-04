let loginForm = document.querySelector('.auth-container');
loginForm.onsubmit = (e) => {
    e.preventDefault();

    // 서버로 사용자가 입력한 값을 전달 -> DB에서 그 값이 존재하는지 확인
    if(false){ // 회원가입된 내용이 없다면
    // 오류메시지 보이기
        let loginMsg = document.querySelector('#login-msg');
        loginMsg.classList.add('active');
    }else{ // 로그인성공
        // main 페이지로 이동하기
        loginMsg.classList.remove('active');
        location.replace('./index.html');
    }
}