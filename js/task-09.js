//! Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

//! Для генерування випадкового кольору використовуй функцію getRandomHexColor.



const buttonChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");
const body = document.body;

      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }

buttonChangeColor.addEventListener('click', function () {
  body.style.backgroundColor=spanColor.textContent = getRandomHexColor();
});




//! ТЕОРІЯ
//Інлайн-стиль" означає, що зміни відбуваються безпосередньо на самому елементі (в цьому випадку, елементі <body>), а не через зовнішні стилі (CSS-класи або CSS-файли)