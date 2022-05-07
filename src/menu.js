function renderMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Menu';
    content.appendChild(title);
}

export { renderMenuPage };