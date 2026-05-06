const DOWNLOAD_URL =
  "https://github.com/MurphCodeDev/nexusbot-pro-landing/releases/download/1.0.0/Nexusbot.exe";

document.querySelectorAll("[data-download]").forEach((link) => {
  link.setAttribute("href", DOWNLOAD_URL);
  link.setAttribute("rel", "noopener");
});

const header = document.querySelector("[data-header]");
const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
menuButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("is-open");
});

mobileMenu?.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
});

const preview = document.querySelector("[data-shot-preview]");
const caption = document.querySelector("[data-shot-caption]");
const shotButtons = document.querySelectorAll("[data-shot]");

shotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const shot = button.getAttribute("data-shot");
    const title = button.getAttribute("data-title") || "NexusBot Pro screenshot";

    if (!shot || !(preview instanceof HTMLImageElement)) return;

    shotButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    preview.src = `/assets/images/${shot}`;
    preview.alt = title;
    if (caption) caption.textContent = title;
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
