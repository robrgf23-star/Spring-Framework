// Smooth scrolling para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Configurar smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Observer para animación de tarjetas
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Aplicar el efecto a las tarjetas de características
    featureCards.forEach(card => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Efecto de aparición escalonada para las tarjetas
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Resaltar sección activa en la navegación
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav li');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLi.forEach(li => {
            li.querySelector('a').classList.remove('active');
            if (li.querySelector('a').getAttribute('href') === `#${current}`) {
                li.querySelector('a').classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Animación para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        projectObserver.observe(card);
    });
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Efecto de carga suave para la página
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Función para mostrar mensaje de consola (solo para desarrollo)
console.log('Spring Framework Website loaded successfully!');
console.log('Features:');
console.log('- Smooth scrolling navigation');
console.log('- Animated feature cards');
console.log('- Responsive design');
console.log('- Interactive elements');