export const loadContactPage = () => {
  const contentDiv = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const contactParagraph = document.createElement('p');
  const iframeMap = document.createElement('iframe');
  const contactDiv = document.createElement('div');
  const contactForm = document.createElement('form');

  const formHeading = document.createElement('h3');

  const formUserNameDiv = document.createElement('div');

  const formFirstNameDiv = document.createElement('div');
  const formFirstNameLabel = document.createElement('label');
  const formFirstNameInput = document.createElement('input');

  const formSecondNameDiv = document.createElement('div');
  const formSecondNameLabel = document.createElement('label');
  const formSecondNameInput = document.createElement('input');

  const formEmailDiv = document.createElement('div');
  const formEmailLabel = document.createElement('label');
  const formEmailInput = document.createElement('input');

  const formPhoneDiv = document.createElement('div');
  const formPhoneLabel = document.createElement('label');
  const formPhoneInput = document.createElement('input');

  const formMessageDiv = document.createElement('div');
  const formMessageLabel = document.createElement('label');
  const formMessageInput = document.createElement('textarea');

  const formSubmitButton = document.createElement('button');

  contactContainer.classList.add('contact');
  contactHeading.classList.add('page-heading');
  iframeMap.classList.add('map');
  contactDiv.classList.add('contact-container');
  contactForm.classList.add('contact-form');

  formUserNameDiv.classList.add('form-user-name-div');
  formFirstNameDiv.classList.add('input-group');
  formSecondNameDiv.classList.add('input-group');
  formEmailDiv.classList.add('input-group');
  formPhoneDiv.classList.add('input-group');
  formMessageDiv.classList.add('input-group');

  formFirstNameLabel.classList.add('label');
  formSecondNameLabel.classList.add('label');
  formEmailLabel.classList.add('label');
  formPhoneLabel.classList.add('label');
  formMessageLabel.classList.add('label');

  formFirstNameInput.classList.add('input');
  formSecondNameInput.classList.add('input');
  formEmailInput.classList.add('input');
  formPhoneInput.classList.add('input');
  formMessageInput.classList.add('input');

  contactHeading.textContent = 'Contact Us';
  contactParagraph.textContent =
    'We would love to hear from you and will do our best to respond as soon as possible.';
  formHeading.textContent = 'Send a message';

  formFirstNameLabel.textContent = 'First Name *';
  formSecondNameLabel.textContent = 'Second Name *';
  formEmailLabel.textContent = 'Email *';
  formPhoneLabel.textContent = 'Phone *';
  formMessageLabel.textContent = 'Message *';

  formSubmitButton.textContent = 'Send';

  formFirstNameLabel.setAttribute('for', 'first_name');
  formSecondNameLabel.setAttribute('for', 'second_name');
  formEmailLabel.setAttribute('for', 'email');
  formPhoneLabel.setAttribute('for', 'phone');
  formMessageLabel.setAttribute('for', 'message');

  formFirstNameInput.id = 'first_name';
  formSecondNameInput.id = 'second_name';
  formEmailInput.id = 'email';
  formPhoneInput.id = 'phone';
  formMessageInput.id = 'message';

  formFirstNameInput.name = 'first_name';
  formSecondNameInput.name = 'second_name';
  formEmailInput.name = 'email';
  formPhoneInput.name = 'phone';
  formMessageInput.name = 'message';

  formFirstNameInput.required = true;
  formSecondNameInput.required = true;
  formEmailInput.required = true;
  formPhoneInput.required = true;
  formMessageInput.required = true;
  formMessageInput.rows = '3';

  formEmailInput.type = 'email';
  formPhoneInput.type = 'tel';

  formSubmitButton.setAttribute('type', 'submit');

  iframeMap.src =
    'https://www.openstreetmap.org/export/embed.html?bbox=-1.3126891851425173%2C53.69312690948469%2C-1.3092076778411867%2C53.69459593405764&amp;layer=mapnik';

  formFirstNameDiv.append(formFirstNameLabel, formFirstNameInput);
  formSecondNameDiv.append(formSecondNameLabel, formSecondNameInput);
  formUserNameDiv.append(formFirstNameDiv, formSecondNameDiv);
  formEmailDiv.append(formEmailLabel, formEmailInput);
  formPhoneDiv.append(formPhoneLabel, formPhoneInput);
  formMessageDiv.append(formMessageLabel, formMessageInput);

  contactForm.append(
    formHeading,
    formUserNameDiv,
    formEmailDiv,
    formPhoneDiv,
    formMessageDiv,
    formSubmitButton
  );
  contactDiv.append(contactForm, iframeMap);
  contactContainer.append(contactHeading, contactParagraph, contactDiv);
  contentDiv.append(contactContainer);

  const initalAnimationDuration = 0.2;

  const conactFormElements = document.querySelectorAll('.contact-form > *');
  let animationDuration = initalAnimationDuration;

  for (const element of conactFormElements) {
    element.style.animationDuration = `${animationDuration}s`;
    animationDuration += initalAnimationDuration;
  }
};
