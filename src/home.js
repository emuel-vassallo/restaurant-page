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
  heroButton.classList.add('order-now-button', 'tab-link');

  headline.textContent = 'Salads with freshness in every bite!';
  heroParagraph.textContent =
    "Hungry and craving some tasty and nutritious salads? We've got your back!";
  heroButton.textContent = 'Order Now';

  arrowRightIcon.setAttribute('src', 'components/icons/arrow-right.svg');
  heroImage.setAttribute('src', 'components/images/hero-image.png');
  heroButton.setAttribute('data-tab-link', 'menu');

  heroTextContainer.append(headline, heroParagraph, heroButton);
  heroContainer.append(heroTextContainer, heroImage);
  heroButton.append(arrowRightIcon);
  contentDiv.append(heroContainer);
};
