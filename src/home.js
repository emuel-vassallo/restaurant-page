export const initialPageLoad = () => {
  const contentParent = document.querySelector('#content');

  // -- Header --
  const headerContainer = document.createElement('header');

  // Unordered List
  const headerLinks = document.createElement('ul');

  // List Items
  const homeLinkListItem = document.createElement('li');
  const menuLinkListItem = document.createElement('li');
  const contactLinkListItem = document.createElement('li');

  // Hyperlinks
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  headerLinks.classList.add('header-links');

  homeLink.setAttribute('href', '#');
  menuLink.setAttribute('href', '#');
  contactLink.setAttribute('href', '#');

  homeLink.textContent = 'Home';
  menuLink.textContent = 'Menu';
  contactLink.textContent = 'Contact';

  homeLinkListItem.append(homeLink);
  menuLinkListItem.append(menuLink);
  contactLinkListItem.append(contactLink);

  headerLinks.append(homeLinkListItem, menuLinkListItem, contactLinkListItem);

  headerContainer.append(headerLinks);

  // -- Main --
  const mainContainer = document.createElement('main');
  const heroContainer = document.createElement('div');
  const heroTextContainer = document.createElement('div');
  const heroImage = document.createElement('img');
  const headline = document.createElement('h1');
  const heroParagraph = document.createElement('p');

  heroContainer.classList.add('hero');
  heroTextContainer.classList.add('hero-text');
  heroImage.classList.add('hero-image');
  headline.classList.add('headline');

  headline.textContent = 'Enoy delicious and healthy food.';
  heroParagraph.textContent =
    ' We provide the most delicious food based on high quality ingredients that are maintained by high tech machines and cooked by our experts.';

  heroImage.setAttribute('src', '../src/components/image1.jpg');

  heroTextContainer.append(headline, heroParagraph);
  heroContainer.append(heroTextContainer, heroImage);
  mainContainer.append(heroContainer);
  contentParent.append(headerContainer, mainContainer);
};
