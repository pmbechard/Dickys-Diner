import chefDicky from './img/dicky.png';


function renderHomePage() {
    const homeButton = document.getElementById('home');
    homeButton.border = '2px solid rgba(197, 123, 32, 0.9)';

    const content = document.getElementById('content');
    content.innerHTML = '';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    content.style.height = '100%';

    const title = document.createElement('h2');
    title.innerHTML = 'Est. 2021 by world-renowned chef, Dicky Béxian\'rde';
    title.style.textAlign = 'center';

    const description = document.createElement('p');
    description.innerHTML = 'Here, we serve the best home-cooked meals for puppies big and small. <br>It\'s ri<i>dick</i>ulously good!';
    description.style.textAlign = 'center';
    description.style.padding = '20px';
    description.style.lineHeight = '30px';

    const dicky = new Image();
    dicky.src = chefDicky;
    dicky.style.height = '200px';
    dicky.style.borderRadius = '10%';
    dicky.style.boxShadow = '1px 1px 1px #222';

    const tagline = document.createElement('p');
    tagline.textContent = '"No one leaves with a downward tail at Dicky\'s Diner!"';
    tagline.style.padding = '20px';
    tagline.style.fontFamily = 'TitleFont';


    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(dicky);
    content.appendChild(tagline);
}

export { renderHomePage };