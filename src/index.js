import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

const initialDisplay = (renderFunc=renderHomePage) => {
    renderFunc();
};

const home = document.getElementById('home');
home.onclick = () => initialDisplay(renderHomePage);
const menu = document.getElementById('menu');
menu.onclick = () => initialDisplay(renderMenuPage);
const contact = document.getElementById('contact');
contact.onclick = () => initialDisplay(renderContactPage);