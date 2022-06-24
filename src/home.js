export const loadHomePage = () => {
  const contentDiv = document.querySelector('#content');

  const heroContainer = document.createElement('div');
  const heroTextContainer = document.createElement('div');
  const heroImage = document.createElement('img');
  const headline = document.createElement('h1');
  const heroParagraph = document.createElement('p');

  heroContainer.classList.add('hero');
  heroTextContainer.classList.add('hero-text');
  heroImage.classList.add('hero-image');
  headline.classList.add('headline');

  headline.textContent = 'The healthiest and most delicious salads in town.';
  heroParagraph.textContent =
    ' We provide the most delicious food based on high quality ingredients that are maintained by high tech machines and cooked by our experts.';

  heroImage.setAttribute('src', '../src/components/hero-image.png');

  heroTextContainer.append(headline, heroParagraph);
  heroContainer.append(heroTextContainer, heroImage);
  contentDiv.append(heroContainer);
};
