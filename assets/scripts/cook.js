let elemCook = document.getElementById("elem");
let elemText = document.getElementById("text");
let elemTitle = document.getElementById("title");
let isDark = window.localStorage.getItem('isDark');
if (isDark === "true") {
  elemCook.classList.add("dark");
  elemText.classList.add("dark");
  elemTitle.classList.add("dark");
} else {
  elemCook.classList.remove('dark');
  elemText.classList.remove("dark");
  elemTitle.classList.remove("dark");
}
