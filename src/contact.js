function renderContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Contact';
    content.appendChild(title);
}

export { renderContactPage };