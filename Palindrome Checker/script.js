const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value.toLowerCase();
  if (word === word.split("").reverse().join("")) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome.`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome.`;
  }
}
