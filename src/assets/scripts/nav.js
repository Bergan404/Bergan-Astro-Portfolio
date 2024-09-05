const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isMenuOpen);
    menuIcon.src = isMenuOpen ? "{close}" : "{menu}";
});
