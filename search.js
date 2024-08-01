const query = new URLSearchParams(window.location.search).get('query');
const resultsDiv = document.getElementById('results');

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
        resultsDiv.innerHTML = `<p>Found result for "${query}": <a href="${resultPage}">${query}</a></p>`;
    } else {
        resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
    }
} else {
    resultsDiv.innerHTML = `<p>No query provided.</p>`;
}
