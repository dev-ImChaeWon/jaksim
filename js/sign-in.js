// 변수, 오류메시지를 담고있는 변수
// 어떤 input 태그가 현재 오류인지를 한번에 저장한 객체
let inputs = {
    email:{isErr:true, errMsg:'필수입력란입니다'},
    nickname:{isErr:true, errMsg:'필수입력란입니다'},
    password:{isErr:true, errMsg:'필수입력란입니다'},
    passwordCheck:{isErr:true, errMsg:'필수입력란입니다'},
    answer:{isErr:true, errMsg:'필수입력란입니다'}
}


let emailInput = document.querySelector('#email');
emailInput.oninput = (e) => {
    // e.target.value 사용자가 입력중인 값
    
    let emailMsg = document.querySelector('#email-msg');
    let emailRex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    
    if(e.target.value == ''){
        emailMsg.innerText = '필수입력란입니다.';
        inputs.email.isErr = true;
        inputs.email.errMsg = '필수입력란입니다.';
        emailMsg.classList.add('active');
    }else if(!emailRex.test(e.target.value)){
        emailMsg.innerText = 'email 형식에 맞지 않습니다.';
        inputs.email.isErr = true;
        inputs.email.errMsg = 'email 형식에 맞지 않습니다.'
        emailMsg.classList.add('active');
    }else{
        emailMsg.classList.remove('active');
        inputs.email.isErr = false;
    }
}

let nickInput = document.querySelector('#nickname');
nickInput.oninput = (e) => {
    let nickMsg = document.querySelector('#nickname-msg');
    
    if(e.target.value == ''){
        nickMsg.innerText = '필수입력란입니다.';
        nickMsg.classList.add('active');
        inputs.nickname.isErr = true;
        inputs.nickname.errMsg = '필수입력란입니다.';
    }else if(e.target.value == 'admin'){
        nickMsg.innerText = '사용할 수 없는 닉네임입니다.';
        nickMsg.classList.add('active');
        inputs.nickname.isErr = true;
        inputs.nickname.errMsg = '사용할 수 없는 닉네임입니다.';
    }
    else{
        nickMsg.classList.remove('active');
        inputs.nickname.isErr = false;
    }
}

let pwInput = document.querySelector('#password');
pwInput.oninput = (e) => {
    let pwMsg = document.querySelector('#pw-msg');
    
    if(e.target.value == ''){
        pwMsg.innerText = '필수입력란입니다.';
        pwMsg.classList.add('active');
        inputs.password.isErr = true;
        inputs.password.errMsg = '필수입력란입니다.';
    }else if(e.target.value.length < 8){
        pwMsg.innerText = '8글자 이상 입력하세요';
        pwMsg.classList.add('active');
        inputs.password.isErr = true;
        inputs.password.errMsg = '8글자 이상 입력하세요';
    }
    else{
        pwMsg.classList.remove('active');
        inputs.password.isErr = false;
    }
}

let pwCheckInput = document.querySelector('#password-check');
pwCheckInput.oninput = (e) => {
    let pwCheckMsg = document.querySelector('#pw-check-msg');
    let password = document.querySelector('#password');
    
    if(e.target.value == ''){
        pwCheckMsg.innerText = '필수입력란입니다.';
        pwCheckMsg.classList.add('active');
        inputs.passwordCheck.isErr = true;
        inputs.passwordCheck.errMsg = '필수입력란입니다.';
    }else if(!(e.target.value == password.value)){
        pwCheckMsg.innerText = '비밀번호가 일치하지 않습니다';
        pwCheckMsg.classList.add('active'); 
        inputs.passwordCheck.isErr = true;
        inputs.passwordCheck.errMsg = '비밀번호가 일치하지 않습니다.';
    }
    else{
        pwCheckMsg.classList.remove('active');
        inputs.passwordCheck.isErr = false;
    }
}

let findAnswerInput = document.querySelector('#find-answer');
findAnswerInput.oninput = (e) => {
    let findAnswerMsg = document.querySelector('#find-answer-msg');
    
    if(e.target.value == ''){
        findAnswerMsg.innerText = '필수입력란입니다.';
        findAnswerMsg.classList.add('active');
        inputs.answer.isErr = true;
        inputs.answer.errMsg = '필수입력란입니다.';
    }else{
        findAnswerMsg.classList.remove('active');
        inputs.answer.isErr = false;
    }
}

// submit event 발생할 때(회원가입버튼 누를때)
let authForm = document.querySelector('.auth-container')
authForm.onsubmit = (e) => {
    e.preventDefault();
    let emailMsg = document.querySelector('#email-msg');
    let nickMsg = document.querySelector('#nickname-msg');
    let pwMsg = document.querySelector('#pw-msg');
    let pwCheckMsg = document.querySelector('#pw-check-msg');
    let findAnswerMsg = document.querySelector('#find-answer-msg');

    if(inputs.email.isErr){
        // email 오류메시지 보이기
        emailMsg.innerText = inputs.email.errMsg;
        emailMsg.classList.add('active');
    }else{
        emailMsg.classList.remove('active');
    }

    if(inputs.nickname.isErr){
        // nickname 오류메시지 보이기
        nickMsg.innerText = inputs.nickname.errMsg;
        nickMsg.classList.add('active');
    }else{
        nickMsg.classList.remove('active');
    }

    if(inputs.password.isErr){
        // password 오류메시지 보이기
        pwMsg.innerText = inputs.password.errMsg;
        pwMsg.classList.add('active');
    }else{
        pwMsg.classList.remove('active');
    }

    if(inputs.passwordCheck.isErr){
        // passwordCheck 오류메시지 보이기
        pwCheckMsg.innerText = inputs.passwordCheck.errMsg;
        pwCheckMsg.classList.add('active');
    }else{
        pwCheckMsg.classList.remove('active');
    }

    if(inputs.answer.isErr){
        // answer 오류메시지 보이기
        findAnswerMsg.innerText = inputs.answer.errMsg;
        findAnswerMsg.classList.add('active');
    }else{
        findAnswerMsg.classList.remove('active');
    }

    // 만약 모든값들이 정상적으로 입력되었다면 회원가입 성공!
    if(inputs.email.isErr == false &&
        inputs.answer.isErr == false &&
        inputs.nickname.isErr == false &&
        inputs.password.isErr == false &&
        inputs.passwordCheck.isErr == false)
    {
        // alert('썽공');
        // 사용자가 입력한 값을 서버로 전달 -> 서버에서는 그 값을 db에 저장
        let modalWrapper = document.querySelector('.modal-wrapper');
        modalWrapper.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
}


