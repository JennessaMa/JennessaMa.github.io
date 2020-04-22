let elemWhole = document.getElementById("elem");
let elemBody = document.getElementById("b");
let isDark = window.localStorage.getItem('isDark');
if (isDark === "true") {
  elemWhole.classList.add("dark");
  elemBody.classList.add("dark");
} else {
  elemWhole.classList.remove("dark");
  elemBody.classList.remove("dark");
}
