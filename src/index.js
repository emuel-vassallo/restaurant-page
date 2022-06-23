const contentParent = document.querySelector('#content');

// Header
const header = document.createElement('header');

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

header.append(headerLinks);

contentParent.appendChild(header);
