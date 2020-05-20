var darkmode;

function isDarkMode() {
return Cookies.get('darkmode');
} //쿠키 설정

function darkModeSwitch(status) {
    Cookies.set('darkmode', +status); //변경시마다 쿠키 저장
  document
  .querySelector('#dark-mode-sheet')
  .setAttribute(
    'media',
    status? 'screen' : 'not screen'
  ); //media 속성 조작
}

document.addEventListener('DOMContentLoaded', function () {
const isDm = isDarkMode();
if (isDm != null) darkModeSwitch(+isDm);
}); //정수형으로 데이터 타입 변경

function dmC (self) {
  if (self.value === 'Dark') {
    darkModeSwitch(true);
    self.value = 'Light';
  }
  else {
    darkModeSwitch(false);
    self.value = 'Dark';
  }
}
