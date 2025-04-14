// Sidebar toggle
document.getElementById('openMenu').addEventListener('click', () => {
    document.getElementById('sidebarContainer').classList.remove('hidden');
});

document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('sidebarContainer').classList.add('hidden');
});

// Swiper for testimonials
var swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Menu filter buttons
const filters = document.querySelectorAll('.menu-filter');
const items = document.querySelectorAll('.menu-item');
filters.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filters.forEach(b => b.classList.remove('active-filter'));
        btn.classList.add('active-filter');
        items.forEach(item => {
            const category = item.getAttribute('data-category');
            item.style.display = (filter === 'all' || filter === category) ? 'block' : 'none';
        });
    });
});

// Fake form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
});

document.querySelector('.overlay').addEventListener('click', () => {
    document.getElementById('sidebarContainer').classList.add('hidden');
});
// script.js
document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  });
  