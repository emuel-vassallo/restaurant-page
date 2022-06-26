export const loadHeader = () => {
  const headerContainer = document.querySelector('header');

  const leftElementsContainer = document.createElement('div');

  const logo = document.createElement('img');
  const tabLinks = document.createElement('ul');

  const homeLinkListItem = document.createElement('li');
  const menuLinkListItem = document.createElement('li');
  const contactLinkListItem = document.createElement('li');

  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  const rightElementsContainer = document.createElement('div');
  const ctaButton = document.createElement('button');
  const searchButton = document.createElement('button');
  const searchIcon = document.createElement('img');
  const cartButton = document.createElement('button');
  const cartIcon = document.createElement('img');

  leftElementsContainer.classList.add('header-left-elements');
  rightElementsContainer.classList.add('header-right-elements');
  logo.classList.add('header-logo', 'selected-tab', 'tab-link');
  tabLinks.classList.add('tab-links');
  homeLink.classList.add('selected-tab', 'tab-link', 'header-tab-link');
  menuLink.classList.add('tab-link', 'header-tab-link');
  contactLink.classList.add('tab-link', 'header-tab-link');
  searchButton.classList.add('header-icon');
  cartButton.classList.add('header-icon', 'cart-icon');
  ctaButton.classList.add('cta-button', 'tab-link');
  

  logo.setAttribute('src', 'components/images/logo.png');
  logo.setAttribute('data-tab-link', 'home');
  homeLink.setAttribute('data-tab-link', 'home');
  menuLink.setAttribute('data-tab-link', 'menu');
  contactLink.setAttribute('data-tab-link', 'contact');
  cartButton.setAttribute('data-count', 0);
  searchIcon.setAttribute('src', 'components/icons/search.svg');
  cartIcon.setAttribute('src', 'components/icons/shopping-cart.svg');
  ctaButton.setAttribute('data-tab-link', 'menu');

  homeLink.textContent = 'home';
  menuLink.textContent = 'menu';
  contactLink.textContent = 'contact';
  ctaButton.textContent = 'order now';

  homeLinkListItem.append(homeLink);
  menuLinkListItem.append(menuLink);
  contactLinkListItem.append(contactLink);
  tabLinks.append(homeLinkListItem, menuLinkListItem, contactLinkListItem);
  leftElementsContainer.append(logo, tabLinks);
  searchButton.append(searchIcon);
  cartButton.append(cartIcon);
  rightElementsContainer.append(searchButton, cartButton, ctaButton);

  headerContainer.append(leftElementsContainer, rightElementsContainer);
};
