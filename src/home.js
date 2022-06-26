export const loadHomePage = () => {
  const contentDiv = document.querySelector('#content');

  const homeContainer = document.createElement('div');
  const homeTextContainer = document.createElement('div');
  const homeImage = document.createElement('img');
  const headline = document.createElement('h1');
  const homeParagraph = document.createElement('p');
  const homeButton = document.createElement('button');
  const arrowRightIcon = document.createElement('img');

  homeContainer.classList.add('home');
  homeTextContainer.classList.add('home-text');
  homeImage.classList.add('home-image');
  headline.classList.add('headline');
  homeButton.classList.add('order-now-button');

  headline.textContent = 'Salads with freshness in every bite!';
  homeParagraph.textContent =
    "Hungry and craving some tasty and nutritious salads? We've got your back!";
  homeButton.textContent = 'Order Now';

  arrowRightIcon.setAttribute('src', 'components/icons/arrow-right.svg');
  homeImage.setAttribute('src', 'components/images/home-image.png');
  homeButton.setAttribute('data-tab-link', 'menu');

  homeButton.append(arrowRightIcon);
  homeTextContainer.append(headline, homeParagraph, homeButton);
  homeContainer.append(homeTextContainer, homeImage);
  contentDiv.append(homeContainer);
};
