import twitterIcon from './img/twitter.svg';
import facebookIcon from './img/facebook.svg';
import instagramIcon from './img/instagram.svg';

function renderContactPage() {
    const contactButton = document.getElementById('contact');
    contactButton.classList.add('disabled-button');

    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Contact';

    const map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62751.05445586421!2d103.27405865952318!3d10.583793589852403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107eede3706b249%3A0xf4bc7be5df0f6e74!2sKoh%20Rong%20Sanloem!5e0!3m2!1sen!2sca!4v1651996516696!5m2!1sen!2sca" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    map.style.margin =  '20px';
    map.style.border =  '2px solid #222';

    const twitterLink = new Image();
    twitterLink.src = twitterIcon;
    const facebookLink = new Image();
    facebookLink.src = facebookIcon;
    const instagramLink = new Image();
    instagramLink.src = instagramIcon;

    const linkArea = document.createElement('div');
    linkArea.style.display = 'flex';
    linkArea.style.justifyContent = 'center';
    linkArea.style.alignItems = 'center';
    linkArea.style.gap = '20px';
    linkArea.style.cursor = 'pointer';
    linkArea.appendChild(twitterLink);
    linkArea.appendChild(facebookLink);
    linkArea.appendChild(instagramLink);

    content.appendChild(title);
    content.appendChild(map);
    content.appendChild(linkArea);
}

export { renderContactPage };