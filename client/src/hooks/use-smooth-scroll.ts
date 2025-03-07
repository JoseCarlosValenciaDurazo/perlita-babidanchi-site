import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    try {
      // Remove the leading # if present
      const cleanId = elementId.replace('#', '');
      const element = document.getElementById(cleanId);

      if (!element) {
        console.warn(`Element with id "${cleanId}" not found. Make sure the section has this exact ID.`);
        return;
      }

      // Get the header height for offset calculation
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const padding = 24; // Additional padding for better visual spacing
      const offset = headerHeight + padding;

      // Calculate position accounting for any parent scroll containers
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = absoluteElementTop - offset;

      // Log scroll details for debugging
      console.log('Scrolling to section:', {
        id: cleanId,
        elementTop: elementRect.top,
        absoluteElementTop,
        offset,
        finalPosition: offsetPosition
      });

      // Use smooth scroll with fallback
      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } catch (scrollError) {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, offsetPosition);
      }
    } catch (error) {
      console.error('Error scrolling to element:', error);
    }
  }, []);

  return scrollToElement;
}