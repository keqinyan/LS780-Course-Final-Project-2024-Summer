const query = new URLSearchParams(window.location.search).get('query');
const messageDiv = document.getElementById('message');

const pages = {
    'western cat': 'western-cat.html',
    'eastern cat': 'eastern-cat.html',
    'modern cat': 'modern-cat.html',
    'abstract cat': 'abstract-cat.html',
    'classic cat': 'classic-cat.html'
};

if (query) {
    const resultPage = pages[query.toLowerCase()];
    if (resultPage) {
        window.location.href = resultPage;
    } else {
        messageDiv.innerHTML = `<p>No results found for "${query}".</p>`;
    }
} else {
    messageDiv.innerHTML = `<p>No query provided.</p>`;
}
