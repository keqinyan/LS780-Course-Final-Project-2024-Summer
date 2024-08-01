document.getElementById('feeling-lucky').addEventListener('click', function() {
    const pages = ['western-cat.html', 'eastern-cat.html', 'modern-cat.html', 'abstract-cat.html', 'classic-cat.html'];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
});
