// Завдання 10 (виконувати не обов'язково)
//! Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

//! Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//! Розміри найпершого <div> - 30px на 30px.
//! Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//! Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//! Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
//!!!!!!! не починати з нуля,а продовжувати будувати блоки!!!!!!!!!!!!!!!!!!!!!
const boxesArray = [];

function createBoxes(amount) {
  const boxSize = 30;
  const step = 10;

  const newBoxes = Array.from({ length: amount }).map((_, i) => {
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize+1 + (boxesArray.length + i) * step}px`;
    newBox.style.height = `${boxSize+1 + (boxesArray.length + i) * step}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newBox);
    return newBox;
  });

  box.append(...newBoxes);
 }
const destroyBoxes = () => {
  box.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});
destroyBtn.addEventListener('click', destroyBoxes);




//! ПЛАН
// 1. Отримати посилання на елементи: input, кнопки "Create" (за допомогою атрибута data-create) та "Destroy" (за допомогою атрибута data-destroy), контейнер для створення елементів (div#boxes)
// 2. Додати обробники подій для кнопок "Create" та "Destroy". 
// 3. Реалізувати функцію createBoxes(amount):
      //* Отримати посилання на контейнер для створення елементів (div#boxes)
      //* Використати цикл для створення amount елементів <div>
      //* Встановити для першого елемента розмір 30x30px
      //* Встановити розмір кожного наступного елемента на 10px більше за попередній
      //* Згенерувати випадковий колір фону для кожного елемента за допомогою функції getRandomHexColor
      //* Додати створені елементи в контейнер для відображення на сторінці
// 4. Реалізувати функцію destroyBoxes():
      //* Отримати посилання на контейнер для створення елементів (div#boxes)
      //* Очистити всі елементи в цьому контейнері, встановивши його вміст в порожній рядок
