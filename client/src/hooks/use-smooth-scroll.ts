import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    try {
      // Remove the '#' if present
      const id = elementId.startsWith('#') ? elementId.slice(1) : elementId;

      // Find the target element
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Target element #${id} not found`);
        return;
      }

      // Get the header for offset calculation
      const header = document.querySelector('header');
      const headerOffset = header?.offsetHeight || 0;

      // Get element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      // Add current scroll position to get absolute position
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

      // Perform the smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

    } catch (error) {
      console.error('Smooth scroll failed:', error);
    }
  }, []);

  return scrollToElement;
}