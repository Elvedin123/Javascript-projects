const random = Math.floor(Math.random() * 10 + 1);
// console.log(random);

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNum = () => {
  const randomNum = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNum;
};

btn.addEventListener("click", generateNum);
