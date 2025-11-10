import { useEffect, useState } from 'react';

// Simple scroll spy hook: observe sections with ids and return the active id
export default function useScrollSpy(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState('');

  // Create a stable key for sectionIds to use in the dependency array
  const idsKey = Array.isArray(sectionIds) ? sectionIds.join(',') : '';

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return; // graceful fallback

    const observed = sectionIds.length
      ? sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
      : Array.from(document.querySelectorAll('section[id]'));

    if (!observed.length) return;

    const rootMargin = options.rootMargin ?? '-40% 0px -40% 0px';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observed.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [idsKey, options.rootMargin]);

  return activeId;
}
