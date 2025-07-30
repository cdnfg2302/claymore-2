import { useState, useEffect } from 'react';

export const useProductSlider = (totalProducts: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToProduct = (index: number) => {
    if (index >= 0 && index < totalProducts && !isScrolling) {
      setIsScrolling(true);
      setCurrentIndex(index);

      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % totalProducts;
    setCurrentIndex(nextIndex);
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const prevProduct = () => {
    const prevIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    setCurrentIndex(prevIndex);
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Handle wheel events for section-by-section scrolling
  useEffect(() => {
    let isThrottled = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling || isThrottled) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      isThrottled = true;

      // Determine scroll direction
      if (e.deltaY > 0) {
        // Scrolling down
        nextProduct();
      } else {
        // Scrolling up
        prevProduct();
      }

      // Throttle wheel events
      setTimeout(() => {
        isThrottled = false;
      }, 1000);
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling || isThrottled) {
        e.preventDefault();
        return;
      }

      touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;

      // Minimum touch distance to trigger scroll
      if (Math.abs(touchDiff) > 50) {
        e.preventDefault();
        isThrottled = true;

        if (touchDiff > 0) {
          // Swiping up (next product)
          nextProduct();
        } else {
          // Swiping down (previous product)
          prevProduct();
        }

        setTimeout(() => {
          isThrottled = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, totalProducts, isScrolling]);

  return {
    currentIndex,
    scrollToProduct,
    nextProduct,
    prevProduct,
    isScrolling
  };
};