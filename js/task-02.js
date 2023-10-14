const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//! Напиши скрипт, який для кожного елемента масиву ingredients:
//! Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//! Додасть назву інгредієнта як його текстовий вміст.
//! Додасть елементу клас item.
//! Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

//*1. Отримуємо посилання на список ul#ingredients
const ingredientsList = document.querySelector('ul#ingredients');

//*2. Створюємо та додаємо кожен інградієнт як окремий елемент <li>

//ingredients.forEach((ingredient)=>... ітерація через кожен елемент масиву ingredients
ingredients.forEach((ingredient) => {
  const liElement = document.createElement('li'); //для кожного ел масиву стврорюється новий <li>
  liElement.textContent = ingredient; //інградієнт додається, як текст в ел. <li>
  liElement.classList.add('item'); //додаємо клас 'item' в елемент <li>
  ingredientsList.appendChild(liElement); // додаємо елемент <li> до списку ul#ingredients
});



//!ТЕОРІЯ
// Метод appendChild призначений для додавання нового дочірнього елемента (чи вузла) до батьківського елемента (чи вузла). В основному, він використовується для додавання нових елементів до вже існуючого дерева DOM на веб-сторінці.

//! Як він працює:

//1. Ви обираєте батьківський елемент (вузол), до якого ви хочете додати новий дочірній елемент.

//2. Створюєте новий дочірній елемент (чи вузол), який ви бажаєте додати.

//3. Викликаєте метод appendChild на батьківському елементі і передаєте в нього новий дочірній елемент як аргумент. 

//Наприклад: parentElement.appendChild(newChildElement);