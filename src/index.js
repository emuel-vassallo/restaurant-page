import { loadHeader } from './header.js';
import { loadHomePage } from './home.js';

loadHeader();

const emptyContentDiv = () => {
  const contentDiv = document.querySelector('#content');

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};

const switchTab = () => {
  const headerTabLinks = document.querySelectorAll('.tab-links li a');
  for (const link of headerTabLinks) {
    link.addEventListener('click', () => {
      emptyContentDiv();
    });
  }
};

switchTab();
loadHomePage();
