let elem = document.getElementById("elem");
let clock = document.getElementById("clock");
let dark = window.localStorage.getItem("isDark");
function toggleDark() {
  let isDarkMode = elem.classList.contains('dark');
  if (isDarkMode) {
    window.localStorage.setItem('isDark', 'false');
    elem.classList.remove('dark');
    clock.src = "assets/images/clockbright.png";
    clock.classList.remove('clockDark');
  } else {
    window.localStorage.setItem('isDark', 'true');
    elem.classList.add("dark");
    clock.src = "assets/images/clockdark.png";
    clock.classList.add('clockDark');
  }
}
clock.onclick = toggleDark;

function checkClock() {
  let isDarkMode = window.localStorage.getItem('isDark') === 'true';
  if (isDarkMode) {
    clock.src = "assets/images/clockdark.png";
  } else {
    clock.src = "assets/images/clockbright.png";
  }
}

checkClock();
