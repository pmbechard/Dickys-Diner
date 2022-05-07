function renderMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    content.appendChild(title);
}

export { renderMenuPage };