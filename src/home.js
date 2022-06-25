export const loadHomePage = () => {
  const contentDiv = document.querySelector('#content');

  const heroContainer = document.createElement('div');
  const heroTextContainer = document.createElement('div');
  const heroImage = document.createElement('img');
  const headline = document.createElement('h1');
  const heroParagraph = document.createElement('p');
  const heroButton = document.createElement('button');
  const arrowRightIcon = document.createElement('img');

  heroContainer.classList.add('hero');
  heroTextContainer.classList.add('hero-text');
  heroImage.classList.add('hero-image');
  headline.classList.add('headline');
  heroButton.classList.add('order-now-button');

  headline.textContent = 'Eat your salads just how you like them!';
  heroParagraph.textContent =
    "Looking for an eco-friendly restaurant that quickly delivers fresh and healthy salads? We've got you!";
  heroButton.textContent = 'Order Now';

  arrowRightIcon.setAttribute('src', '../src/components/arrow-right.svg');
  heroImage.setAttribute('src', '../src/components/hero-image.png');

  heroTextContainer.append(headline, heroParagraph, heroButton);
  heroContainer.append(heroTextContainer, heroImage);
  heroButton.append(arrowRightIcon);
  contentDiv.append(heroContainer);
};
