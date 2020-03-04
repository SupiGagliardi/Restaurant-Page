import {contactContent} from './tabs/contact';
import {menuContent} from './tabs/menu';
import {findUsContent} from './tabs/findUs';

const tabChanger = (() => {

    menuContent();

    const tabButtons = document.querySelectorAll('.buttons');

    function swapClasses(elem) {
        tabButtons.forEach(btn => {
            btn.classList.remove('selected')
        });
    
        elem.classList.add('selected')
    };



    tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
    
            swapClasses(btn);
    
            if(btn.classList.contains('find')) {
                findUsContent();
            }

            if(btn.classList.contains('menu')) {
                menuContent();
            }

            if(btn.classList.contains('contact')) {
                contactContent();
            }
    
    
        })
    })
    

    return {

    };
})();