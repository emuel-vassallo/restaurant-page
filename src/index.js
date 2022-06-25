import { loadHeader } from './header.js';
import { loadHomePage } from './home.js';
import { loadFooter } from './footer.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

const emptyContentDiv = () => {
  const contentDiv = document.querySelector('#content');
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};

const loadPage = (tabName) =>
  ({
    home: loadHomePage,
    menu: loadMenuPage,
    contact: loadContactPage,
  }[tabName]?.());

const removeSelectedTabClass = () => {
  const headerTabLinks = document.querySelectorAll('.tab-links li a');
  for (const link of headerTabLinks) link.classList.remove('selected-tab');
};

const switchTab = () => {
  const headerTabLinks = document.querySelectorAll('.tab-links li a');
  for (const link of headerTabLinks) {
    link.addEventListener('click', () => {
      emptyContentDiv();
      loadPage(link.textContent);
      removeSelectedTabClass();
      link.classList.add('selected-tab');
    });
  }
};

loadHeader();
loadHomePage();
loadFooter();
switchTab();
