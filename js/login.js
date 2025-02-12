const idInput = document.querySelector('.input-email');
const pwInput = document.querySelector('.input-pw');
const emailValidationMessage = document.querySelector('.email');
const pwValidationMessage = document.querySelector('.pw');
const loginButton = document.querySelector('.login__button');
const popupBackground = document.querySelector('.login__popup__bg');
const popupMessage = document.querySelector('.login__popup__container span');
const popupButton = document.querySelector('.login__popup__container button');
const eyeIconBtn = document.querySelector('.eye__icon');
const eyeIcon = document.querySelector('.fa-eye-slash');

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

idInput.addEventListener('focusout', () => {
  if (idInput.validity.typeMismatch) {
    emailValidationMessage.textContent = '이메일 형식이 올바르지 않습니다';
    idInput.style.border = '1px solid var(--text-red)';
  } else if (idInput.validity.valueMissing) {
    emailValidationMessage.textContent = '이메일을 입력해주세요';
    idInput.style.border = '1px solid var(--text-red)';
  } else {
    emailValidationMessage.textContent = '';
    idInput.style.border = 'none';
  }
});

pwInput.addEventListener('focusout', () => {
  if (pwInput.validity.tooShort) {
    pwValidationMessage.textContent = '비밀번호를 8자 입력해주세요';
    pwInput.style.border = '1px solid var(--text-red)';
  } else if (pwInput.validity.valueMissing) {
    pwValidationMessage.textContent = '비밀번호를 입력해주세요';
    pwInput.style.border = '1px solid var(--text-red)';
  } else {
    pwValidationMessage.textContent = '';
    pwInput.style.border = 'none';
  }
});

// 추후 팝업 확장가능성 고려
function showPopup(message) {
  popupBackground.style.display = 'flex';
  popupMessage.textContent = message;
}

popupButton.addEventListener('click', () => {
  popupBackground.style.display = 'none';
});

loginButton.addEventListener('click', () => {
  const email = idInput.value;
  const password = pwInput.value;

  if (!email || !password) return;

  const user = USER_DATA.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    console.log('로그인 성공');
    window.location.href = '/items.html';
  } else {
    console.log('로그인 실패');
    showPopup('비밀번호가 일치하지 않습니다.');
  }
});

eyeIconBtn.addEventListener('click', () => {
  if (eyeIcon.classList.contains('fa-eye-slash')) {
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
    pwInput.type = 'text';
  } else {
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
    pwInput.type = 'password';
  }
});
