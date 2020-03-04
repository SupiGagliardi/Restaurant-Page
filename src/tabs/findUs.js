export {findUsContent}

const tabContent = document.querySelector('.tab-options');


function findUsContent() {

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
    contactHeader.textContent = 'Find Us';
    findUsContactTitle.appendChild(contactHeader);

    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
    tabContent.appendChild(menuItemsDiv);

    const findUsPara = document.createElement('p');
    findUsPara.classList.add('find-paragraph')
    findUsPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos'

    menuItemsDiv.appendChild(findUsPara);

};