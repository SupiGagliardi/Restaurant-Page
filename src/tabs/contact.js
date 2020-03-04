export {contactContent};

const tabContent = document.querySelector('.tab-options');

function contactContent() {

    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.lastChild);
    };

    const findUsContactTitle = document.createElement('div');
    findUsContactTitle.classList.add('findUs-contact-title');
    tabContent.appendChild(findUsContactTitle);

    const contactImg = document.createElement('img');
    contactImg.setAttribute('src', '/icons/logo.svg');
    contactImg.setAttribute('alt', 'Logo');
    findUsContactTitle.appendChild(contactImg);

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact';
    findUsContactTitle.appendChild(contactHeader);

    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
    tabContent.appendChild(menuItemsDiv);

    const formElem = document.createElement('form');
    menuItemsDiv.appendChild(formElem);

    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Full Name');
    formElem.appendChild(inputName);

    
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'Email');
    formElem.appendChild(inputEmail);

    const inputMsg = document.createElement('input');
    inputMsg.setAttribute('type', 'text');
    inputMsg.setAttribute('placeholder', 'Message');
    formElem.appendChild(inputMsg);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit'
    formElem.appendChild(submitBtn);

}

