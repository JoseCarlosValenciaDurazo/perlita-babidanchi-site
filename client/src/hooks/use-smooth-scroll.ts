import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    try {
      // Remove the '#' if present
      const id = elementId.startsWith('#') ? elementId.slice(1) : elementId;
      console.log('Attempting to scroll to:', id); // Debug log

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
      const absoluteTop = elementRect.top + window.pageYOffset;
      const finalPosition = absoluteTop - headerOffset - 16;

      console.log('Scroll calculation:', {
        elementId: id,
        headerOffset,
        absoluteTop,
        finalPosition
      });

      // Perform smooth scroll
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });

    } catch (error) {
      console.error('Smooth scroll failed:', error);
    }
  }, []);

  return scrollToElement;
}