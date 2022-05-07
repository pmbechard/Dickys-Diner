function renderHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Home';
    content.appendChild(title);
}

export { renderHomePage };