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

const loadNewTab = (clickedTabName) => {
  const tabLink = clickedTabName.dataset.tabLink;
  emptyContentDiv();
  loadPage(tabLink);
  removeSelectedTabClass();
  addSelectedTabClass(tabLink);
};

const addCtaEventListener = () => {
  const ctaButton = document.querySelector('.home-text .order-now-button');
  ctaButton.addEventListener('click', () => loadNewTab(ctaButton));
};

const switchTabOnClick = () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  for (const link of tabLinks) {
    link.addEventListener('click', () => {
      if (link.classList.contains('selected-tab')) return;
      loadNewTab(link);
      if (link.dataset.tabLink === 'home') addCtaEventListener();
    });
  }
};

loadHeader();
loadHomePage();
loadFooter();
switchTabOnClick();
addCtaEventListener();
