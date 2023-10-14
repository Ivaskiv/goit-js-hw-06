//! Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//! Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//! Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//! Оновлюй інтерфейс новим значенням змінної counterValue.

//* 1. Ініціалізація змінної counterValue значенням 0
let counterValue = 0;
   
//*  2. Отримати посилання на елементи DOM
   const valueSpan = document.getElementById('value');
   const incrementBtn = document.querySelector('[data-action="increment"]');
   const decrementBtn = document.querySelector('[data-action="decrement"]');

//* 3. додати слухачів кліків до кнопок
   incrementBtn.addEventListener('click', function () {
    // Збільшити значення лічильника на 1
   counterValue += 1;
    // оновити інтерфейс новим значенням
    valueSpan.textContent = counterValue;
});
   decrementBtn.addEventListener('click', function () {
    // зменшити значення лічильника на 1
    counterValue -= 1;
    // оновити інтерфейс новим значенням
    valueSpan.textContent = counterValue;
});