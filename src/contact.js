export const loadContactPage = () => {
  const contentDiv = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  const contactHeading = document.createElement('h1');

  contactHeading.textContent = 'Contact Us';
  contactContainer.append(contactHeading);
  contentDiv.append(contactContainer);
};
