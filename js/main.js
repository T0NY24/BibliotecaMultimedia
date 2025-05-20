// Animaciones al hacer hover sobre las categorías
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        const icon = category.querySelector('i');
        icon.classList.add('animate__animated', 'animate__bounce');
    });
    
    category.addEventListener('mouseleave', () => {
        const icon = category.querySelector('i');
        icon.classList.remove('animate__animated', 'animate__bounce');
    });
});

// Redirección para botones (opcional)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(this.getAttribute('href')) {
            e.preventDefault();
            // Animación antes de redirigir
            this.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 500);
        }
    });
});