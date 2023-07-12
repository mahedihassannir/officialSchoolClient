import React, { useEffect } from 'react';

const SlowScrollComponent = ({ scrollElementId, scrollSpeedFactor }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      const scrollElement = document.getElementById(scrollElementId);

      // Check if the scroll element has reached the top or bottom
      const isAtTop = scrollElement.scrollTop === 0;
      const isAtBottom = scrollElement.scrollTop === (scrollElement.scrollHeight - scrollElement.clientHeight);

      // Apply slow scrolling only if not at the top or bottom
      if (!isAtTop && !isAtBottom) {
        // Adjust the scroll speed by dividing the event.deltaY value
        // with the scrollSpeedFactor. Increase the factor to slow down the scroll.
        const scrollSpeed = event.deltaY / scrollSpeedFactor;

        // Prevent the default scrolling behavior
        event.preventDefault();

        // Get the current scroll position
        const currentScrollPosition = scrollElement.scrollTop;

        // Calculate the new scroll position
        const newScrollPosition = currentScrollPosition + scrollSpeed;

        // Scroll to the new position
        scrollElement.scrollTop = newScrollPosition;
      }
    };

    // Get the element where you want to enable slow scrolling
    const scrollElement = document.getElementById(scrollElementId);

    // Add the scroll event listener to the element
    scrollElement.addEventListener('wheel', handleScroll, { passive: false });

    // Clean up the event listener on component unmount
    return () => {
      scrollElement.removeEventListener('wheel', handleScroll);
    };
  }, [scrollElementId, scrollSpeedFactor]);

  return null; // Since this component doesn't render any content
};

export default SlowScrollComponent;
