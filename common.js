window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });
