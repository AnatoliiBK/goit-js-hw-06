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

ingredientsContainerEl.append(...elements);
