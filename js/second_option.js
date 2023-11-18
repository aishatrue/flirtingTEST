const first = document.getElementById("first");
const second = document.getElementById("second");

function saveResult(event) {
  const value = event.target.dataset.value;

  window.localStorage.setItem("first_option", value);
}

first.addEventListener("click", saveResult);
second.addEventListener("click", saveResult);
