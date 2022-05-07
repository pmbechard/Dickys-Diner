import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";
import homeImage from './img/cottage_FILL1_wght400_GRAD0_opsz48.png';
import menuImage from './img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png';
import contactImage from './img/pin_drop_FILL1_wght400_GRAD0_opsz48.png';
import "./style.css";



const initialDisplay = (renderFunc=renderHomePage) => {
    renderFunc();
};

initialDisplay();


// STATIC ELEMENTS
const home = document.getElementById('home');
const homeIcon = new Image();
homeIcon.src = homeImage;
homeIcon.style.height = '30px';
home.appendChild(homeIcon);
home.onclick = () => initialDisplay(renderHomePage);

const menu = document.getElementById('menu');
const menuIcon = new Image();
menuIcon.src = menuImage;
menuIcon.style.height = '30px';
menu.appendChild(menuIcon);
menu.onclick = () => initialDisplay(renderMenuPage);

const contact = document.getElementById('contact');
const contactIcon = new Image();
contactIcon.src = contactImage;
contactIcon.style.height = '30px';
contact.appendChild(contactIcon);
contact.onclick = () => initialDisplay(renderContactPage);

const footerLink = document.querySelector('small');
footerLink.onclick = () => window.open('https://github.com/pmbechard/Dickys-Diner', '_blank');