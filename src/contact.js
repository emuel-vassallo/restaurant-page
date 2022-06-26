export const loadContactPage = () => {
  const contentDiv = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const contactParagraph = document.createElement('p');
  const iframeMap = document.createElement('iframe');
  const contactDiv = document.createElement('div');
  const contactForm = document.createElement('form');

  contactContainer.classList.add('contact');
  contactHeading.classList.add('page-heading');
  iframeMap.classList.add('map');
  contactDiv.classList.add('contact-container');
  contactForm.classList.add('contact-form');

  contactHeading.textContent = 'Contact Us';
  contactParagraph.textContent =
    "We’d love to hear from you and we'll do our best to get back to you as soon as possible.";

  iframeMap.src =
    'https://www.openstreetmap.org/export/embed.html?bbox=-1.3126891851425173%2C53.69312690948469%2C-1.3092076778411867%2C53.69459593405764&amp;layer=mapnik';

  contactDiv.append(contactForm, iframeMap);
  contactContainer.append(contactHeading, contactParagraph, contactDiv);
  contentDiv.append(contactContainer);
};
