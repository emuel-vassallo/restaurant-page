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

const addSelectedTabClass = (tabName) => {
  const headerTabLinks = document.querySelectorAll('.tab-link');
  for (const link of headerTabLinks)
    if (link.dataset.tabLink === tabName) link.classList.add('selected-tab');
};

const removeSelectedTabClass = () => {
  const headerTabLinks = document.querySelectorAll('.tab-link');
  for (const link of headerTabLinks)
    if (link.classList.contains('selected-tab'))
      link.classList.remove('selected-tab');
};

const switchTab = () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  for (const link of tabLinks) {
    link.addEventListener('click', () => {
      console.log(tabLinks);
      if (link.classList.contains('selected-tab')) return;
      const clickedLink = link.dataset.tabLink;
      emptyContentDiv();
      loadPage(clickedLink);
      removeSelectedTabClass();
      addSelectedTabClass(clickedLink);
    });
  }
};

loadHeader();
loadHomePage();
loadFooter();
switchTab();
