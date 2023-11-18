const first = document.getElementById("first");
const second = document.getElementById("second");

function saveResult(event) {
  event.preventDefault();
  const value = event.target.dataset.value;
  const currentVal = window.localStorage.getItem("first_option");
  const valArray = [];

  if (currentVal) {
    window.localStorage.setItem("first_option", valArray);
  } else {
    valArray.push(value);
    window.localStorage.setItem("first_option", valArray);
  }
}

first.addEventListener("click", saveResult);
second.addEventListener("click", saveResult);
