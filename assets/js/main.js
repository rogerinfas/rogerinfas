// Cargar componentes dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const components = document.querySelectorAll('[data-include]');
    
    components.forEach(component => {
        const file = component.getAttribute('data-include');
        fetch(`/${file}.html`)
            .then(response => response.text())
            .then(data => {
                component.innerHTML = data;
            })
            .catch(error => console.error('Error loading component:', error));
    });
    
    // Smooth scrolling para todos los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});