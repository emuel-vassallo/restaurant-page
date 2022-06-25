let menu = [];

const Salad = function (name, image, ingredients, price) {
  this.name = name;
  this.image = image;
  this.ingredients = ingredients;
  this.price = price;
};

const addSaladToMenu = (name, image, ingredients, price) => {
  const newSalad = new Salad(name, image, ingredients, price);
  menu = [...menu, newSalad];
};

addSaladToMenu(
  'Salad 1',
  '../src/components/salads/salad1.png',
  'Sliced strawberry and vegetables',
  '8.90'
);

addSaladToMenu(
  'Salad 2',
  '../src/components/salads/salad2.png',
  'Lettuce, cucumber, chicken, tomatos, broccoli',
  '10.90'
);

addSaladToMenu(
  'Salad 3',
  '../src/components/salads/salad3.png',
  'Kiwi, strawberries, blueberries, mango',
  '7.90'
);

addSaladToMenu(
  'Salad 4',
  '../src/components/salads/salad4.png',
  'Carrots, lettuce, chicken, mushrooms',
  '10.90'
);

addSaladToMenu(
  'Salad 5',
  '../src/components/salads/salad5.png',
  'Egg, chicken, tomatoes, lettuce, onion',
  '7.90'
);

addSaladToMenu(
  'Salad 6',
  '../src/components/salads/salad6.png',
  'Spinach, cucumber, chicken, red cabbage',
  '8.90'
);

export const loadMenuPage = () => {
  const contentDiv = document.querySelector('#content');
  const menuContainer = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const saladGrid = document.createElement('div');

  menuHeading.textContent = 'Our Menu';
  menuContainer.classList.add('menu');
  saladGrid.classList.add('salad-grid');

  for (const salad of menu) {
    const saladCard = document.createElement('div');

    const saladImage = document.createElement('img');
    const saladName = document.createElement('h3');
    const saladIngredients = document.createElement('p');
    const saladPrice = document.createElement('p');
    const addToCartButton = document.createElement('button');
    const plusIcon = document.createElement('img');

    saladCard.classList.add('salad-card');
    saladImage.classList.add('salad-card-image');
    saladName.classList.add('salad-card-name');
    saladIngredients.classList.add('salad-card-ingredients');
    saladPrice.classList.add('salad-card-price');
    addToCartButton.classList.add('salad-card-add-to-cart');
    plusIcon.classList.add('salad-card-plus-icon');

    saladImage.setAttribute('src', salad.image);
    saladName.textContent = salad.name;
    saladIngredients.textContent = salad.ingredients;
    saladPrice.textContent = `€${salad.price}`;
    plusIcon.setAttribute('src', '../src/components/plus.svg');
    addToCartButton.append(plusIcon);

    saladCard.append(
      saladImage,
      saladName,
      saladIngredients,
      saladPrice,
      addToCartButton
    );
    saladGrid.append(saladCard);
  }

  menuContainer.append(menuHeading, saladGrid);
  contentDiv.append(menuContainer);
};
