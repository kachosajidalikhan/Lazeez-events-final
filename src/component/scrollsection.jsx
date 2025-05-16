import { useInView } from 'react-intersection-observer';
import React from 'react';

const ScrollAnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger animation once
    threshold: 0.5,     // 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-2000 ease-in-out ${
        inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;
