// Manejar clics en categorías
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', (e) => {
        // Puedes añadir animación antes de redirigir
        e.currentTarget.classList.add('clicked');
        setTimeout(() => {
            window.location.href = e.currentTarget.getAttribute('href');
        }, 500);
    });
});

// Alternativa para SPA (Single Page Application)
/*
const loadPage = (page) => {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            history.pushState({}, page, `?page=${page}`);
        });
}
*/