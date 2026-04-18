import { useEffect, useState } from "react";

/**
 * Returns true when the navbar should be visible.
 * Hidden when scrolling down past `threshold`, shown when scrolling up
 * or when near the top of the page.
 */
export function useHideOnScroll(threshold = 80) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY;

        if (currentY < threshold) {
          setVisible(true);
        } else if (Math.abs(delta) > 6) {
          setVisible(delta < 0); // scrolling up shows nav
        }

        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}
