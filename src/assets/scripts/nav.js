const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });
}

if (nav) {
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
