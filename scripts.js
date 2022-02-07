const container = document.querySelector(".container");
const btnSwitch = document.querySelector(".btn-switch");

btnSwitch.addEventListener("click", toggleTheme);

function toggleTheme() {
  container.classList.toggle("dark-theme");
  btnSwitch.classList.toggle("dark-btn");
}