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
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.getAttribute('data-length'), 10); //цей рядок коду бере значення атрибута data-length з елемента validationInput і перетворює його в число (за допомогою parseInt)

  validationInput.classList.toggle('valid', validationInput.value.length === expectedLength); // метод classList.toggle для додавання або видалення класу "valid" в залежності від умови, яка перевіряється
  validationInput.classList.toggle('invalid', validationInput.value.length !== expectedLength);
});


// цей код працює так: додає обробник події "blur" до елемента з ідентифікатором "validation-input", який під час втрати фокусу перевіряє, чи кількість символів у введеному тексті співпадає з очікуваною кількістю та додає або видаляє класи "valid" та "invalid" для стилізації поля вводу...
//! ТЕОРІЯ
// Подія focus викликається в момент фокусування, а подія blur – коли елемент втрачає фокус
// https://uk.javascript.info/focus-blur
// https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
// Подія focus не еквівалентна події кліку (click). Вони є різними подіями у веб-розробці.

// Подія focus виникає, коли користувач "фокусується" на елементі вводу, такому як поле для введення тексту або кнопка. Наприклад, ця подія може спрацювати, коли користувач клікає на інпут, щоб розпочати введення тексту в нього за допомогою клавіатури або коли він переміщає фокус між різними елементами вводу на сторінці.

// Подія click, натомість, виникає, коли користувач клікає лівою кнопкою миші на елементі. Ця подія зазвичай використовується для відстеження кліків миші на кнопках, посиланнях або інших елементах сторінки.

// Отже, !!!focus відстежує активність вводу, а click відстежує кліки миші.