export { menuContent };

const tabContent = document.querySelector('.tab-options');


function menuContent() {

    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.lastChild);
    };

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    tabContent.appendChild(menuTitle);

    const menuImg = document.createElement('img');
    menuImg.setAttribute('src', 'icons/logo.svg');
    menuImg.setAttribute('alt', 'Logo');
    menuTitle.appendChild(menuImg);

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';
    menuTitle.appendChild(menuHeader);



    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    tabContent.appendChild(menuItems);

    for (let i = 0; i < 3; i++) {

        const foodMenu = document.createElement('div');
        foodMenu.classList.add('food-menu');
        menuItems.appendChild(foodMenu);

        const foodHeader = document.createElement('h2');
        if (i === 0) {
            foodHeader.textContent = 'Pizzas';
        }
        if (i === 1) {
            foodHeader.textContent = 'Hamburgers';
        }
        if (i === 2) {
            foodHeader.textContent = 'Wraps';
        }
        foodMenu.appendChild(foodHeader);


        for (let i = 0; i < 3; i++) {
            const foodDiv = document.createElement('div');
            foodMenu.appendChild(foodDiv);
    
            const foodDivHeader = document.createElement('h3');
            foodDivHeader.textContent = 'Lorem Ipsum'
            foodDiv.appendChild(foodDivHeader);
    
            const foodDivPara = document.createElement('p');
            foodDivPara.textContent = '15.00';
            foodDiv.appendChild(foodDivPara);
    
            const foodMenuPara = document.createElement('p');
            foodMenuPara.innerHTML = '<span>Lorem ipsum dolor</span> sit amet, consectetur'
            foodMenu.appendChild(foodMenuPara);    
        }
    };
};