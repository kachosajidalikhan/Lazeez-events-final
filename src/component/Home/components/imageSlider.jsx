import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import files from '../../../constants';

const images = [files.image1, files.image4, files.image7, files.image10, files.image13, files.image16];

export default function FoodCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="flex z-10 flex-col items-center justify-center h-screen overflow-hidden">
      <div className="relative h-96 w-full flex items-center justify-center">
        {images.map((img, index) => {
          const isActive = index === current;
          const isAbove = index === (current + 1 + images.length) % images.length;
          const isBelow = index === (current - 1) % images.length;

          return (
            <motion.img
              key={index}
              src={img}
              className={`absolute rounded-xl transition-all duration-700 ${
                isActive ? 'z-20 scale-110 blur-0' : 'z-10 scale-75 blur-md'
              }`}
              style={{
                top: isActive ? '50%' : isAbove ? '-10%' : '100%',
                left:isAbove ? '0%' : '0%',
                width: isActive ? '673.84px':isAbove ? '285.12px' : '285.12px',
                transform: 'translateY(-50%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          );
        })}
      </div>
    </div>
  );
}
