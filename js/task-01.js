//! Напиши скрипт, який:

//! Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//! Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//! Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

//* Кількість категорій в ul#categories
const categoryList = document.querySelectorAll('ul#categories > li.item');
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3
console.log(`Number of categories: ${categoryList.length}`);
//console.log('Number of categories: ' + countCategoriesList);

categoryList.forEach((category) => {
 // Отримуємо текст заголовку тегу <h2> і зберігаємо його у змінну categoryName
 const categoryName = category.querySelector('h2').textContent;

 // Отримуємо кількість усіх елементів <li>, що вкладені в поточну категорію, і зберігаємо її у змінну categoryElementsCount
 const categoryElementsCount = category.querySelectorAll('li').length;

console.log(`Category: ${categoryName}`);
console.log(`Number of categories: ${categoryElementsCount}`);
});

