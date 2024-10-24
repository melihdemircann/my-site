// Sayfa yüklendiğinde çalışacak animasyonlar
document.addEventListener('DOMContentLoaded', () => {
    // Başlık animasyonu için ek efektler
    const title = document.querySelector('.animate-text');
    title.style.opacity = '0';
    
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 100);

    // Menü öğelerine hover efekti
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
        });
    });
});

// Sayfa geçişleri için smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
