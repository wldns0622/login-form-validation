// 0 Sign Up 눌렀을때 -> alert : 모든 벨리데이션 통과했을때는 축하문구  아닐때는 확인하세요
// 1 아이디 : 영어랑 숫자만 들어오게하고 5자 이상
// 2 비밀번호 : 8자이상 문자 숫자 특수문자 1개씩 꼭 조합해야함
// 3 비밀번호 확인 : 비밀번호와 대조
// 4 이름 : 공백만 체크
// 5 이메일 : 문자사이에 골뱅이가 있어야하며, .이 있어야한다.
const btn = document.querySelector('button');
const inputId = document.querySelector('.input__id');
const inputPw = document.querySelector('.input__pw');
const inputPwc = document.querySelector('.input__pwc');
const inputName = document.querySelector('.input__name');
const inputEmail = document.querySelector('.input__email');

let isId = false;
let isPw = false;
let isPwc = false;
let isName = false;
let isEmail = false;

// [유효성 검증 함수]: n개의 글자 이상
function moreThanLength(str, n) {
  return str.length >= n;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}


// [유효성 검증 함수]: 이메일 검증
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleIdCheck() {
  let result = moreThanLength(inputId.value, 5) && onlyNumberAndEnglish(inputId.value);
  const vali = inputId.parentElement.firstElementChild.firstElementChild;
  if (result) {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-check"></i>';
    vali.style.color = 'green';
    isId = true;
  } else {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-times"></i>';
    vali.style.color = 'red';
    isId = false;
  }
}

function handlePasswordCheck() {
  let result = strongPassword(inputPw.value);
  const vali = inputPw.parentElement.firstElementChild.firstElementChild;
  if (result) {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-check"></i>';
    vali.style.color = 'green';
    isPw = true;
  } else {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-times"></i>';
    vali.style.color = 'red';
    isPw = false;
  }
}

function handlePasswordConfirmCheck() {
  let result = inputPw.value === inputPwc.value;
  const vali = inputPwc.parentElement.firstElementChild.firstElementChild;
  if (result) {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-check"></i>';
    vali.style.color = 'green';
    isPwc = true;
  } else {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-times"></i>';
    vali.style.color = 'red';
    isPwc = false;
  }
}

function handleNameCheck() {
  let result = inputName.value.length > 0;
  const vali = inputName.parentElement.firstElementChild.firstElementChild;
  if (result) {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-check"></i>';
    vali.style.color = 'green';
    isName = true;
  } else {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-times"></i>';
    vali.style.color = 'red';
    isName = false;
  }
}

function handleEmailCheck() {
  let result = validateEmail(inputEmail.value);
  const vali = inputEmail.parentElement.firstElementChild.firstElementChild;
  if (result) {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-check"></i>';
    vali.style.color = 'green';
    isEmail = true;
  } else {
    vali.innerHTML = '&nbsp;&nbsp;<i class="fas fa-times"></i>';
    vali.style.color = 'red';
    isEmail = false;
  }
}

function handleButtonClick() {
  if (isId && isPw && isPwc && isName && isEmail) {
    alert('회원가입을 축하드립니다!');
    inputId.value = '';
    inputPw.value = '';
    inputPwc.value = '';
    inputName.value = '';
    inputEmail.value = '';
  } else {
    alert('입력란을 다시 확인해주세요!');
  }
}

inputId.addEventListener('keyup', handleIdCheck);
inputPw.addEventListener('keyup', handlePasswordCheck);
inputPwc.addEventListener('keyup', handlePasswordConfirmCheck);
inputName.addEventListener('keyup', handleNameCheck);
inputEmail.addEventListener('keyup', handleEmailCheck);
btn.addEventListener('click', handleButtonClick);
