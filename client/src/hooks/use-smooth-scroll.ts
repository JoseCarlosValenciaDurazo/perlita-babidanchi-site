import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    try {
      // Remove the '#' if present
      const id = elementId.startsWith('#') ? elementId.slice(1) : elementId;

      // Find the target element
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Target element #${id} not found. Make sure the section ID exists in your HTML.`);
        return;
      }

      // Get the header for offset calculation
      const header = document.querySelector('header');
      const headerOffset = header?.offsetHeight || 0;

      // Calculate scroll position
      const elementRect = element.getBoundingClientRect();
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = elementRect.top + scrollOffset - headerOffset - 32; // Added extra padding

      // Scroll into view with smooth behavior
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

    } catch (error) {
      console.error('Smooth scroll failed:', error);
    }
  }, []);

  return scrollToElement;
}