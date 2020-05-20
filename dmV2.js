function isDarkMode() {
  return Cookies.get('darkmode');
}

function darkModeSwitch(status) {
  Cookies.set('darkmode', +status);
  document
  .querySelector('#dark-mode-sheet')
  .setAttribute(
    'media',
    status? 'screen' : 'not screen'
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const isDm = isDarkMode();
  if (isDm != null) darkModeSwitch(+isDm);
});
© 2020 GitHub, Inc.

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
