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

//! ПОКРОКОВИЙ ПЛАН
// 1. Отримати посилання на елементи: input, кнопки "Create" (за допомогою атрибута data-create) та "Destroy" (за допомогою атрибута data-destroy), контейнер для створення елементів (div#boxes)
// 2. Додати обробники подій для кнопок "Create" та "Destroy". При кліку на кнопку "Create", виконуватиметься функція createBoxes, а при кліку на кнопку "Destroy", виконуватиметься функція destroyBoxes
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
const boxesArray = [];

function createBoxes(amount) {
  const boxSize = 30;
  const step = 10;
  const boxes = [];
  for (let i = 0; i < amount; i += 1){
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize + i * step}px`;
    newBox.style.height = `${boxSize + i * step}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.push(newBox);
  }
  boxesArray.push(...boxes);
  box.append(...boxes);
}
function destroyBoxes() {
  box.innerHTML = '';
  boxesArray.length = 0;
  
}
createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);

//! ТЕОРІЯ
//? зазвичай спочатку використов. querySelector, щоб знайти потрібні елементи, а потім використов. addEventListener, щоб додати до них обробники подій і визначити поведінку відповідно до подій користувача

//? Метод append() використовується для додавання одного чи декількох елементів (які можуть бути HTML-елементами, текстовими рядками або іншими DOM-вузлами) до вказаного батьківського DOM-вузла. Цей метод дозволяє вставляти декілька дітей одночасно.

// Синтаксис методу append():
// parentElement.append(child1, child2, ...);