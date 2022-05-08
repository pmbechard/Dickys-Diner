function renderMenuPage() {
    const menuButton = document.getElementById('menu');
    menuButton.classList.add('disabled-button');


    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Menu';
    

    content.appendChild(title);
}



export { renderMenuPage };