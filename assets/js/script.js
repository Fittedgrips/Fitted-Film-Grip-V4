/* ==========================================
Fitted Film Grip V4.1
script.js
========================================== */

// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Animated Stats Counter
const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 100));

  const update = () => {
    current += increment;

    if (current >= target) {
      counter.textContent = target;
      return;
    }

    counter.textContent = current;
    requestAnimationFrame(update);
  };

  update();
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
});

counters.forEach(counter => statsObserver.observe(counter));

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ==========================================
Portfolio Lightbox
========================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".portfolio-item img").forEach(image => {

  image.addEventListener("click", () => {

    lightbox.style.display = "flex";
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

  });

});

if (closeLightbox) {

  closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

  });

}

if (lightbox) {

  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

      lightbox.style.display = "none";

    }

  });

}

/* ==========================================
Scroll Reveal Animation
========================================== */

const revealElements = document.querySelectorAll(
  ".section, .service-card, .portfolio-item, .equipment-card, .testimonial-card, .timeline-item"
);

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("active");

    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach(element => {

  element.classList.add("reveal");
  revealObserver.observe(element);

});

/* ==========================================
Current Year (Optional)
========================================== */

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}
