document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            if (targetId === 'skills') {
                setTimeout(() => {
                    const progressFills = document.querySelectorAll('.progress-fill');
                    progressFills.forEach(fill => {
                        const width = fill.style.width;
                        fill.style.width = '0%';
                        setTimeout(() => {
                            fill.style.width = width;
                        }, 100);
                    });
                }, 100);
            }
        });
    });
    
    // Project cards click
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.project-link')) {
                const link = this.querySelector('.project-link');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
        
        card.style.cursor = 'pointer';
    });
});
