//! Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

         //? 1. отримати посилання на DOM елементи
const fontSizeControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');
         //? 2. додати слухача події input до input#font-size-control
fontSizeControl.addEventListener('input', function () {
         //? 3. отримати поточне значення font-size з input
 const fontSize = fontSizeControl.value + 'px';
         //? 4. оновити значення font-size у стилі span#text
 spanText.style.fontSize = fontSize;
});

//! ТЕОРІЯ
// const fontSize = fontSizeControl.value + 'px';
// конкатенація рядка 'px' з отриманим значенням fontSizeControl.value тобто, перетворюємо число на рядок і додаємо 'px' до нього, щоб сформувати рядок у форматі, який розуміє CSS для властивості font-size.
//Наприклад, якщо fontSizeControl.value має значення 24, то результат буде '24px'.
