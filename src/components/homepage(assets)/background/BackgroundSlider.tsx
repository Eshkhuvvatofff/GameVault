import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundSliderProps {
  slides: string[];
  interval?: number; // milliseconds
  duration?: number; // animation duration
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ slides, interval = 5000, duration = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides, interval]);

  return (
    <div className="w-full h-screen overflow-hidden absolute -z-50 -mt-16">
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              className="absolute w-full h-full top-0"
              initial={index === 0 ? { opacity: 0 } : { x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration }}
            >
              <img src={slide} alt="Background" className="w-full h-full object-cover" />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundSlider;