export const loadFooter = () => {
  const footerContainer = document.querySelector('footer');

  const footerText = document.createElement('p');
  const devNameLink = document.createElement('a');
  const sourceCodeLink = document.createElement('a');
  const copyrightSpan = document.createElement('span');

  const dividerSymbol = '⸱';
  footerText.textContent = '';

  devNameLink.textContent = 'Emuel Vassallo';
  devNameLink.setAttribute('href', 'https://github.com/emuel-vassallo');
  devNameLink.setAttribute('target', '_blank');

  const year = new Date().getFullYear();
  copyrightSpan.textContent = `© ${year}`;

  sourceCodeLink.textContent = 'Source code';
  sourceCodeLink.setAttribute(
    'href',
    'https://github.com/emuel-vassallo/restaurant-page'
  );
  sourceCodeLink.setAttribute('target', '_blank');

  footerText.append(
    'Made with ❤️ by',
    devNameLink,
    dividerSymbol,
    copyrightSpan,
    dividerSymbol,
    sourceCodeLink
  );
  footerContainer.append(footerText);
};
