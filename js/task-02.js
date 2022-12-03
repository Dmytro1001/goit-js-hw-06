const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newList = document.querySelector('#ingredients');

const item1 = document.createElement("li");
item1.classList.add("item");
item1.textContent = 'Potatoes';


const item2 = document.createElement("li");
item2.classList.add("item");
item2.textContent = 'Mushrooms';

const item3 = document.createElement("li");
item3.classList.add("item");
item3.textContent = 'Garlic';

const item4 = document.createElement("li");
item4.classList.add("item");
item4.textContent = 'Tomatos';

const item5 = document.createElement("li");
item5.classList.add("item");
item5.textContent = 'Herbs';

const item6 = document.createElement("li");
item6.classList.add("item");
item6.textContent = 'Condiments';

newList.append(item1, item2, item3, item4, item5, item6);

// const ingredientList = ingredients.map( ingredient => 
// `<li class="item">${ingredient}</li>`
// ).join('');
// newList.insertAdjacentHTML('beforeend', ingredientList)
