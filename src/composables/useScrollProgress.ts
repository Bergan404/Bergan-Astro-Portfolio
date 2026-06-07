import { shallowRef } from 'vue';

// Shared 0..1 progress of how far the page has been scrolled.
export const scrollProgress = shallowRef(0);

let started = false;

export function startScrollTracking() {
  if (started || typeof window === 'undefined') return;
  started = true;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    scrollProgress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}
