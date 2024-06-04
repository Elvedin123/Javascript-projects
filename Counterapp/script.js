// const add = document.querySelector(".add");

// const resetCount = document.querySelector(".reset");

// const subtract = document.querySelector(".subtract");

const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
  }
});

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });
// subtract.addEventListener("click", () => {
//   count.innerHTML--;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
