function renderContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = 'Contact';
    content.appendChild(title);
}

export { renderContactPage };