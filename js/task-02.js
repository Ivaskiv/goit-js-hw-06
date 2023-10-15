//! Напиши скрипт, який для кожного елемента масиву ingredients:
//! Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//! Додасть назву інгредієнта як його текстовий вміст.
//! Додасть елементу клас item.
//! Після чого, вставить усі!!!!!!! <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//*1. Отримуємо посилання на список ul#ingredients
const ingredientsList = document.querySelector('ul#ingredients');
//!колекцію створити!!!!!!!!
//*2. Створюємо колекцію елементів <li>
const ingredientColl = ingredients.map((ingredient) => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  return liElement;
});
ingredientsList.append(...ingredientColl);

