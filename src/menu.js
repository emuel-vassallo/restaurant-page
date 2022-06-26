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
  'Spinach Strawberry Salad',
  'components/salad-images/salad1.png',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'
);

addSaladToMenu(
  'Fiesta Chickpea Salad',
  'components/salad-images/salad2.png',
  'Chickpea, rice, tomato, bell pepper',
  '7.90'
);

addSaladToMenu(
  'Fattoush Salad',
  'components/salad-images/salad5.png',
  'Lettuce, avocado, chicken, tomato, onion',
  '10.90'
);

addSaladToMenu(
  'Chicken Caesar Salad',
  'components/salad-images/salad3.png',
  'Chicken, lettuce, pasta, garlic',
  '7.90'
);

addSaladToMenu(
  'Israeli Spinach Salad',
  'components/salad-images/salad6.png',
  'Chicken, spinach, carrot, jalapeno, onion, seed',
  '10.90'
);

addSaladToMenu(
  'Roast Beef Coleslaw Salad',
  'components/salad-images/salad4.png',
  'Roasted beef, coleslaw, tomato, onion',
  '8.90'
);

export const loadMenuPage = () => {
  const contentDiv = document.querySelector('#content');

  const menuContainer = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const saladGrid = document.createElement('div');

  menuContainer.classList.add('menu');
  saladGrid.classList.add('salad-grid');

  const initalAnimationDuration = 0.17;
  let animationDuration = initalAnimationDuration;

  for (const salad of menu) {
    const saladCard = document.createElement('div');

    const saladImage = document.createElement('img');
    const saladName = document.createElement('h2');
    const saladIngredients = document.createElement('p');
    const saladPrice = document.createElement('p');
    const addToCartButton = document.createElement('button');
    const plusIcon = document.createElement('img');

    menuHeading.classList.add('page-heading');
    saladCard.classList.add('salad-card');
    saladImage.classList.add('salad-card-image');
    saladName.classList.add('salad-card-name');
    saladIngredients.classList.add('salad-card-ingredients');
    saladPrice.classList.add('salad-card-price');
    addToCartButton.classList.add('salad-card-add-to-cart');
    plusIcon.classList.add('salad-card-plus-icon');

    saladImage.src = salad.image;
    plusIcon.src = 'components/icons/plus.svg';

    menuHeading.textContent = 'Our Menu';
    saladName.textContent = salad.name;
    saladIngredients.textContent = salad.ingredients;
    saladPrice.textContent = `€${salad.price}`;

    saladCard.style.animationDuration = `${animationDuration}s`;
    animationDuration += initalAnimationDuration;

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

export const updateCartOnClick = () => {
  const addToCartButtons = document.querySelectorAll('.salad-card-add-to-cart');
  const cartIcon = document.querySelector('.cart-icon');
  for (const button of addToCartButtons) {
    button.addEventListener('click', () => {
      cartIcon.classList.add('shake');
      cartIcon.addEventListener('animationend', () =>
        cartIcon.classList.remove('shake')
      );
      const currentItemCount = parseInt(cartIcon.dataset.count);
      if (currentItemCount >= 9) {
        cartIcon.dataset.count = '9+';
        return;
      }
      cartIcon.dataset.count = currentItemCount + 1;
      cartIcon.classList.add('cart-has-item');
    });
  }
};
