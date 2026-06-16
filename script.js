const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const filterBar = document.querySelector(".filters");

document.querySelector("#year").textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

filterBar?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const button = event.target.closest(".filter");

  if (!button) {
    return;
  }

  const filter = button.dataset.filter;

  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  document.querySelectorAll(".paper").forEach((paper) => {
    paper.classList.toggle("hidden", filter !== "all" && paper.dataset.year !== filter);
  });
});
