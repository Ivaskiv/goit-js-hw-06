//! Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

//! Для генерування випадкового кольору використовуй функцію getRandomHexColor.

//! ПОКРОКОВИЙ ПЛАН
// 1. Отримати посилання на елементи: button.change-color, <span class="color">, <body> 
// 2. Додати слухача події click до кнопки "Change color"
// 3. Викликати функцію getRandomHexColor
// 4. Встановити згенерований колір як фон для <body>, використовуючи style.backgroundColor
// 5. Текстовий вміст <span class="color"> => отриманий колір

const buttonChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");
const body = document.body;

      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }

buttonChangeColor.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});

//! ТЕОРІЯ
//? зазвичай спочатку використов. querySelector, щоб знайти потрібні елементи, а потім використов. addEventListener, щоб додати до них обробники подій і визначити поведінку відповідно до подій користувача