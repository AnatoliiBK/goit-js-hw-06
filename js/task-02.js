const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map( options => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = options;

  return ingredientsEl;
  
})

console.log(elements);
ingredientsContainerEl.append(...elements);

// const option = ingredients[0];
// const ingredientsEl = document.createElement("li");
//   ingredientsEl.classList.add("item");
//   ingredientsEl.textContent = option;

//   console.log(ingredientsEl)