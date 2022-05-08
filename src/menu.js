import item1 from './img/menu/jamie-street-uNNCs5kL70Q-unsplash.jpg';
import item2 from './img/menu/kikikap-IZgx6GnODc0-unsplash.jpg';
import item3 from './img/menu/mathew-coulton-zxqaAkkayP8-unsplash.jpg';
import item4 from './img/menu/max-baskakov-OzAeZPNsLXk-unsplash.jpg';
import item5 from './img/menu/r-r-medicinals-Vv50h13jis0-unsplash.jpg';
import item6 from './img/menu/susan-q-yin-1O6_I_6STAU-unsplash.jpg';

function renderMenuPage() {
    const menuButton = document.getElementById('menu');
    menuButton.classList.add('disabled-button');


    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Menu';

    const menuItems = document.createElement('div');
    menuItems.style.display = 'grid';
    menuItems.style.gridTemplate = '1fr 1fr / 1fr 1fr 1fr';
    menuItems.style.height = '80%';
    menuItems.style.alignItems = 'center';
    menuItems.style.gap = '20px';
    const menuItem1 = new Image();
    const menuItem2 = new Image();
    const menuItem3 = new Image();
    const menuItem4 = new Image();
    const menuItem5 = new Image();
    const menuItem6 = new Image();
    menuItem1.src = item1;
    menuItem2.src = item2;
    menuItem3.src = item3;
    menuItem4.src = item4;
    menuItem5.src = item5;
    menuItem6.src = item6;
    const allItems = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6];
    let counter = 1;
    const descriptions = ['Freshly fallen stick.', '', '', '', '', ''];
    allItems.forEach((item) => {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.classList.add('menu-item-container');
        container.id = `item-${counter++}`;
        item.classList.add('menu-item');
        item.style.height = '150px';
        item.style.width = '200px';
        item.style.objectFit = 'cover';
        item.style.border = '2px solid #222';
        item.style.boxShadow = '1px 1px 1px #222';
        container.addEventListener('mouseover', () => {
            container.style.setProperty('--itemDescription', descriptions[String(container.id.charAt(String(container.id).length-1)-1)]);
            container.style.setProperty('--showInfo', 'visible');
            // console.log(descriptions[counter-2], descriptions[String(container.id.charAt(String(container.id).length-1)-1)]);
            // document.querySelector(':root').style.setProperty('--itemDescription', 'stick');
        });
        container.addEventListener('mouseleave', () => container.style.setProperty('--showInfo', 'hidden'))
        container.appendChild(item);
        menuItems.appendChild(container);
    });
    menuItem4.style.objectPosition = 'top';
    menuItem5.style.objectPosition = 'bottom';

    content.appendChild(title);
    content.appendChild(menuItems);
}



export { renderMenuPage };