const first = document.getElementById("first");
const second = document.getElementById("second");

function saveResult(event) {
  // event.preventDefault();
  const value = event.target.dataset.value;
  console.log(value, "벨류학인");
  const currentVal = window.localStorage.getItem("second_option");
  console.log(currentVal);
  let valArray = [];

  if (currentVal) {
    valArray = JSON.parse(currentVal);
    valArray.push(value);
    window.localStorage.setItem("second_option", JSON.stringify(valArray));
  } else {
    valArray.push(value);
    window.localStorage.setItem("second_option", JSON.stringify(valArray));
  }
}

first.addEventListener("click", saveResult);
second.addEventListener("click", saveResult);
