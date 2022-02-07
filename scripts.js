const container = document.querySelector(".container");
const btnSwitch = document.querySelector(".btn-switch");
const theme = window.localStorage.getItem("theme");

if (theme) {
  container.classList.add("dark");
  btnSwitch.classList.add("dark");
}

btnSwitch.addEventListener("click", addTheme);

function addTheme() {
  container.classList.toggle("dark");
  if (container.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
}
