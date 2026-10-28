import { useEffect, useRef, useState } from 'react';

const shouldRevealImmediately = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return true;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const useScrollReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(shouldRevealImmediately);

  useEffect(() => {
    const element = ref.current;

    if (!element || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
};

export default useScrollReveal;
