const emailInput = document.querySelector('.input__email');
const nicknameInput = document.querySelector('.input__nickname');
const passwordInput = document.querySelector('.input__pw');
const passwordConfirmInput = document.querySelector('.input__pw__confirm');
const emailValidationMessage = document.querySelector(
  '.validation__message.email'
);
const pwValidationMessage = document.querySelector('.validation__message.pw');
const pwConfirmValidationMessage = document.querySelector(
  '.validation__message.pw-confirm'
);
const signupButton = document.querySelector('.signup__button');
const popupBackground = document.querySelector('.login__popup__bg');
const popupMessage = document.querySelector('.login__popup__container span');
const popupButton = document.querySelector('.login__popup__container button');
const eyeIcons = document.querySelectorAll('.eye__icon');

const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

// 이메일 검증
emailInput.addEventListener('focusout', () => {
  if (emailInput.validity.typeMismatch) {
    emailValidationMessage.textContent = '이메일 형식이 올바르지 않습니다';
    emailInput.style.border = '1px solid var(--text-red)';
  } else if (emailInput.validity.valueMissing) {
    emailValidationMessage.textContent = '이메일을 입력해주세요';
    emailInput.style.border = '1px solid var(--text-red)';
  } else {
    emailValidationMessage.textContent = '';
    emailInput.style.border = 'none';
  }
});

// 비밀번호 검증
passwordInput.addEventListener('focusout', () => {
  if (passwordInput.validity.valueMissing) {
    pwValidationMessage.textContent = '비밀번호를 입력해주세요';
    passwordInput.style.border = '1px solid var(--text-red)';
  } else if (passwordInput.value.length < 8) {
    pwValidationMessage.textContent = '비밀번호를 8자 이상 입력해주세요';
    passwordInput.style.border = '1px solid var(--text-red)';
  } else {
    pwValidationMessage.textContent = '';
    passwordInput.style.border = 'none';
  }
});

// 비밀번호 확인 검증
passwordConfirmInput.addEventListener('focusout', () => {
  if (passwordConfirmInput.validity.valueMissing) {
    pwConfirmValidationMessage.textContent = '비밀번호를 다시 입력해주세요';
    passwordConfirmInput.style.border = '1px solid var(--text-red)';
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    pwConfirmValidationMessage.textContent = '비밀번호가 일치하지 않습니다';
    passwordConfirmInput.style.border = '1px solid var(--text-red)';
  } else {
    pwConfirmValidationMessage.textContent = '';
    passwordConfirmInput.style.border = 'none';
  }
});

// 팝업 닫기
popupButton.addEventListener('click', () => {
  popupBackground.style.display = 'none';
});

// 비밀번호 표시/숨김 토글
eyeIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    const button = e.currentTarget;
    const eyeIcon = button.querySelector('i');
    const passwordInput = button.parentElement.querySelector('input');

    if (eyeIcon.classList.contains('fa-eye-slash')) {
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
      passwordInput.type = 'text';
    } else {
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
      passwordInput.type = 'password';
    }
  });
});

// 회원가입 버튼 클릭 이벤트
signupButton.addEventListener('click', () => {
  if (!validateSignupButton()) {
    return;
  }

  if (USER_DATA.find((user) => user.email === emailInput.value)) {
    showPopup('사용중인 이메일입니다.');
    return;
  }

  window.location.href = '/index.html';
});

function validateSignupButton() {
  const isEmailValid =
    emailInput.value &&
    !emailInput.validity.typeMismatch &&
    !emailInput.validity.valueMissing;

  const isNicknameValid = nicknameInput.value;

  const isPasswordValid =
    passwordInput.value && passwordInput.value.length >= 8;

  const isPasswordConfirmValid =
    passwordConfirmInput.value &&
    passwordConfirmInput.value === passwordInput.value;

  signupButton.disabled = !(
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isPasswordConfirmValid
  );
}

// 팝업 표시 함수
function showPopup(message) {
  popupBackground.style.display = 'flex';
  popupMessage.textContent = message;
}
