//! Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

       //? Отримуємо посилання на елементи DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
       //? Додаємо слухача події "input" до інпута
nameInput.addEventListener('input', function () {
       //? Отримуємо поточне значення інпута
 const inputValue = nameInput.value;
 if (inputValue === '') {
  nameOutput.textContent = "Anonymous";
 } else {
  nameOutput.textContent = inputValue;
 }
});