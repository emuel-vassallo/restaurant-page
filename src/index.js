import { loadHeader } from './header.js';
import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

const emptyContentDiv = () => {
  const contentDiv = document.querySelector('#content');
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};

const changeTabContent = (tabName) =>
  ({
    Home: loadHomePage,
    Menu: loadMenuPage,
    Contact: loadContactPage,
  }[tabName]?.());

const switchTab = () => {
  const headerTabLinks = document.querySelectorAll('.tab-links li a');
  for (const link of headerTabLinks) {
    link.addEventListener('click', () => {
      emptyContentDiv();
      changeTabContent(link.textContent);
    });
  }
};

loadHeader();
loadHomePage();
switchTab();
