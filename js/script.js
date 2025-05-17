document.addEventListener("DOMContentLoaded", function () {

  const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

// Load the saved mode from localStorage
const savedMode = localStorage.getItem("mode");
if (savedMode) {
  body.classList.add(savedMode);
  modeText.innerHTML = savedMode === "dark" ? "Light Mode" : "Dark Mode";
}

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("mode", mode);
  modeText.innerHTML = mode === "dark" ? "Light Mode" : "Dark Mode";
});
})