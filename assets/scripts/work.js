let elemZoom = document.getElementById("elem");
let elemText = document.getElementById("text");
let elemTitle = document.getElementById("title");
let elemBody = document.getElementById("b");
let isDark = window.localStorage.getItem('isDark');
if (isDark === "true") {
  elemZoom.classList.add("dark");
  elemText.classList.add("dark");
  elemTitle.classList.add("dark");
  elemBody.classList.add("dark");
} else {
  elemZoom.classList.remove('dark');
  elemText.classList.remove("dark");
  elemTitle.classList.remove("dark");
  elemBody.classList.remove("dark");
}
