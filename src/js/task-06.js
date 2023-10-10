//! Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

//! Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//! Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//! Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// /> 

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

//? 1. Отримуємо елемент інпуту за допомогою document.getElementById
const validationInput = document.getElementById('validation-input');
//? 2. Додаємо слухача події blur, який спрацьовує, коли інпут втрачає фокус
validationInput.addEventListener('blur', function () {
 //? 3. Отримуємо очікувану довжину символів з атрибута data-length
 const inputLength = parseInt(validationInput.getAttribute('data-length'), 10);
 //? і поточну довжину введеного тексту
 const inputValue = validationInput.value.length;

 //? 4. Перевіряємо, чи довжина введеного тексту співпадає з очікуваною довжиною і додаємо відповідний клас для стилізації інпуту (введена правильна кількість символів - border інпуту стає зеленим, якщо неправильна кількість - червоним)
 if (inputValue === inputLength) {
  // Видаляємо клас 'invalid', якщо введена довжина правильна
  // Додаємо клас 'valid' 
  validationInput.classList.remove('invalid');
  validationInput.classList.add('valid');
 } else {
  // Видаляємо клас 'valid', якщо введена довжина правильна
  // Додаємо клас 'invalid' 
  validationInput.classList.remove('valid');
  validationInput.classList.add('invalid');
 }
});

//! ТЕОРІЯ
// Подія focus викликається в момент фокусування, а подія blur – коли елемент втрачає фокус
// https://uk.javascript.info/focus-blur
// https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
// Подія focus не еквівалентна події кліку (click). Вони є різними подіями у веб-розробці.

// Подія focus виникає, коли користувач "фокусується" на елементі вводу, такому як поле для введення тексту або кнопка. Наприклад, ця подія може спрацювати, коли користувач клікає на інпут, щоб розпочати введення тексту в нього за допомогою клавіатури або коли він переміщає фокус між різними елементами вводу на сторінці.

// Подія click, натомість, виникає, коли користувач клікає лівою кнопкою миші на елементі. Ця подія зазвичай використовується для відстеження кліків миші на кнопках, посиланнях або інших елементах сторінки.

// Отже, вони різні за своєю природою: focus відстежує активність вводу, а click відстежує кліки миші.