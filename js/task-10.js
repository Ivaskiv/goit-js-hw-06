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
  box.innerHTML = '';
 
  const newBoxes = Array.from({ length: amount }).map((element, index) => {
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize + index * step}px`;
    newBox.style.height = `${boxSize + index * step}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newBox);
    return newBox;
  });
 //Array.from({ length: amount }) створює масив із amount пустих елементів, для цього використовується об'єкт { length: amount }. Потім використовується метод map(), який перебирає кожен елемент масиву, і для кожного елемента створюється новий блок <div>
  box.append(...newBoxes);
 }
const destroyBoxes = () => {
  box.innerHTML = '';
  input.value = ''; 
};

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});
destroyBtn.addEventListener('click', destroyBoxes);

