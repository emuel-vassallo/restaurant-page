export const loadHeader = () => {
  const headerContainer = document.querySelector('header');
  const headerLinks = document.createElement('ul');

  const homeLinkListItem = document.createElement('li');
  const menuLinkListItem = document.createElement('li');
  const contactLinkListItem = document.createElement('li');

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
};
