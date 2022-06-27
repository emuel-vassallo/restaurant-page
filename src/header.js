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
  const themeToggleButton = document.createElement('input');
  const cartButton = document.createElement('button');
  const cartIcon = document.createElement('img');

  leftElementsContainer.classList.add('header-left-elements');
  rightElementsContainer.classList.add('header-right-elements');
  logo.classList.add('header-logo', 'selected-tab', 'tab-link');
  tabLinks.classList.add('tab-links');
  homeLink.classList.add('selected-tab', 'tab-link', 'header-tab-link');
  menuLink.classList.add('tab-link', 'header-tab-link');
  contactLink.classList.add('tab-link', 'header-tab-link');
  themeToggleButton.classList.add('dark-theme-toggler');
  cartButton.classList.add('header-icon', 'cart-icon');
  ctaButton.classList.add('cta-button', 'tab-link');

  logo.src = 'components/images/logo.png';
  cartIcon.src = 'components/icons/shopping-cart.svg';
  cartButton.title = 'Your Cart';
  themeToggleButton.type = 'checkbox';
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    themeToggleButton.checked = true;

  logo.setAttribute('data-tab-link', 'home');
  homeLink.setAttribute('data-tab-link', 'home');
  menuLink.setAttribute('data-tab-link', 'menu');
  contactLink.setAttribute('data-tab-link', 'contact');
  cartButton.setAttribute('data-count', 0);
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
  cartButton.append(cartIcon);
  rightElementsContainer.append(themeToggleButton, cartButton, ctaButton);

  headerContainer.append(leftElementsContainer, rightElementsContainer);
};

const toggleBodyClass = () => document.body.classList.toggle('dark-theme');

const changeIconsColor = (isThemeDark) => {
  const cartIcon = document.querySelector('.cart-icon img');
  const headerLogo = document.querySelector('.header-logo');
  if (isThemeDark) {
    headerLogo.src = 'components/images/logo-dark-mode.png';
    cartIcon.src = 'components/icons/white-shopping-cart.svg';
    return;
  }
  headerLogo.src = 'components/images/logo.png';
  cartIcon.src = 'components/icons/shopping-cart.svg';
};

export const toggleDarkTheme = () => {
  const toggleButton = document.querySelector('.dark-theme-toggler');
  if (toggleButton.checked) {
    toggleBodyClass();
    changeIconsColor(true);
  }
  toggleButton.addEventListener('click', () => {
    toggleBodyClass();
    if (toggleButton.checked) {
      changeIconsColor(true);
      return;
    }
    changeIconsColor(false);
  });
};
