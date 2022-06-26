export const loadContactPage = () => {
  const contentDiv = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const iframeMap = document.createElement('iframe');

  contactContainer.classList.add('contact');
  contactHeading.classList.add('page-heading');
  iframeMap.classList.add('map');

  contactHeading.textContent = 'Contact Us';

  iframeMap.src =
    'https://www.openstreetmap.org/export/embed.html?bbox=-1.3126891851425173%2C53.69312690948469%2C-1.3092076778411867%2C53.69459593405764&amp;layer=mapnik';

  contactContainer.append(contactHeading, iframeMap);
  contentDiv.append(contactContainer);
};
