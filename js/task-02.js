const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeItem = (itemName) => {

  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = itemName;

  return itemEl;
};

const arrayItems = ingredients.map(makeItem)

listEl.append(...arrayItems)
console.log( listEl);