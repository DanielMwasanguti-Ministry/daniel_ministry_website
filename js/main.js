(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Add a subtle header shadow after scrolling, without affecting layout.
  const header = document.querySelector(".site-header");
  const updateHeader = () => {
    if (header) header.style.boxShadow = window.scrollY > 8
      ? "0 5px 22px rgba(24, 35, 28, .045)"
      : "none";
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
