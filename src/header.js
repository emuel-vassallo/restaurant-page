export const loadHeader = () => {
  const headerContainer = document.querySelector('header');
  const tabLinks = document.createElement('ul');

  const homeLinkListItem = document.createElement('li');
  const menuLinkListItem = document.createElement('li');
  const contactLinkListItem = document.createElement('li');

  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  tabLinks.classList.add('tab-links');

  homeLink.setAttribute('href', '#');
  menuLink.setAttribute('href', '#');
  contactLink.setAttribute('href', '#');

  homeLink.textContent = 'Home';
  menuLink.textContent = 'Menu';
  contactLink.textContent = 'Contact';

  homeLinkListItem.append(homeLink);
  menuLinkListItem.append(menuLink);
  contactLinkListItem.append(contactLink);

  tabLinks.append(
    homeLinkListItem,
    menuLinkListItem,
    contactLinkListItem
  );
  headerContainer.append(tabLinks);
};
