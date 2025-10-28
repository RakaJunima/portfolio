// script.js

// Footer tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Ambil semua elemen yang akan dianimasikan
const revealElements = document.querySelectorAll(".card, footer");

// Fungsi animasi scroll dengan delay bertahap
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  let delay = 0;

  revealElements.forEach((el, index) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom && !el.classList.contains("visible")) {
      // Tambahkan sedikit delay antar elemen
      setTimeout(() => {
        el.classList.add("visible");
      }, delay);
      delay += 150; // 150ms jeda antar elemen
    }
  });
}

// Jalankan saat scroll dan saat load pertama kali
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Shortcut tekan 'C' untuk langsung ke kontak
window.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "c") {
    location.hash = "#contact";
  }
});

// Burger menu toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  navLinks.classList.toggle("active");
});
