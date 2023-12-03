const decrement = document.getElementById("decrease");
const increment = document.getElementById("increase");
const numberOut = document.getElementById("count");
const resetBtn = document.querySelector(".btn-primary");
let numberChanging = 0;

const increasing = function () {
  numberChanging += 1;
  numberOut.innerHTML = numberChanging;
};

const decreasing = function () {
  numberChanging -= 1;
  numberOut.innerHTML = numberChanging;
};

decrement.addEventListener("click", decreasing);
increment.addEventListener("click", increasing);

resetBtn.onclick = () => {
  numberChanging = 0;
  numberOut.innerHTML = numberChanging;
};
