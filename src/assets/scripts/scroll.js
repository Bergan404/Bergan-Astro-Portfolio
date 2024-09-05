// scroll.js
export function handleScroll() {
    console.log("Navbar component is hydrated");

    const navBar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    console.log("Scroll position: ", scrollTop);

    if (scrollTop > 100) {
        navBar?.classList.add('scrolled');
        navBar?.classList.add('bg-primary')
    } else {
        navBar?.classList.remove('scrolled');
        navBar?.classList.remove('bg-primary');
        navBar?.classList.add('bg-transparent');
    }
    });
  }
