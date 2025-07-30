import { useState, useEffect } from 'react';

export const useProductSlider = (totalProducts: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToProduct = (index: number) => {
    if (index >= 0 && index < totalProducts && !isScrolling) {
      setIsScrolling(true);
      setCurrentIndex(index);
      
      // Smooth scroll to the target section
      const targetElement = document.getElementById(`product-${index}`);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % totalProducts;
    scrollToProduct(nextIndex);
  };

  const prevProduct = () => {
    const prevIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    scrollToProduct(prevIndex);
  };

  // Handle wheel/touch scroll detection
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const newIndex = Math.round(scrollTop / viewportHeight);
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalProducts) {
          setCurrentIndex(newIndex);
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [currentIndex, totalProducts]);

  return {
    currentIndex,
    scrollToProduct,
    nextProduct,
    prevProduct,
    isScrolling
  };
};