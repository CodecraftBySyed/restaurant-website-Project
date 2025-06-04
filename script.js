// Swiper for testimonials
var swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Menu filter buttons
const filters = document.querySelectorAll(".menu-filter");
const items = document.querySelectorAll(".menu-item");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filters.forEach((b) => b.classList.remove("active-filter"));
    btn.classList.add("active-filter");
    items.forEach((item) => {
      const category = item.getAttribute("data-category");
      item.style.display =
        filter === "all" || filter === category ? "block" : "none";
    });
  });
});

// Fake form submission handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}
if (closeMobileMenu && mobileMenu) {
  closeMobileMenu.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
}
