import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }

      // Get the header height for offset calculation
      const header = document.querySelector('header');
      const offset = (header?.offsetHeight || 0) + 16; // Add extra padding

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Check if browser supports smooth scrolling
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, offsetPosition);
      }
    } catch (error) {
      console.error('Error scrolling to element:', error);
    }
  }, []);

  return scrollToElement;
}