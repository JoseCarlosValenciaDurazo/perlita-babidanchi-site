import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    try {
      // Clean the ID (remove special characters and spaces)
      const cleanId = elementId.replace(/[^a-zA-Z0-9-]/g, '');
      console.log('Scrolling to element with ID:', cleanId);

      const element = document.getElementById(cleanId);
      if (!element) {
        console.warn(`Element with id "${cleanId}" not found`);
        return;
      }

      // Get the header height
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const padding = 16; // Additional padding

      // Calculate the element's position
      const elementRect = element.getBoundingClientRect();
      const elementPosition = elementRect.top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - padding;

      // Log the calculation details
      console.log('Scroll calculations:', {
        elementTop: elementRect.top,
        pageYOffset: window.pageYOffset,
        headerHeight,
        padding,
        finalPosition: offsetPosition
      });

      // Perform the scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error('Error during smooth scroll:', error);
    }
  }, []);

  return scrollToElement;
}