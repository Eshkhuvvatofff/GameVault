import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundSliderProps {
  slides: string[]; // Rasmlar va videolar aralash bo'lishi mumkin
  interval?: number; // ms, slayder o'zgarish vaqti
  duration?: number; // animatsiya davomiyligi
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
    <div className="w-full h-screen opacity-50 overflow-hidden absolute -z-50 -mt-16">
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              className="absolute w-full h-full top-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration }}
            >
              {slide.endsWith(".mp4") || slide.endsWith(".webm") ? (
                <video
                  src={slide}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img src={slide} alt="Background" className="w-full h-full object-cover" />
              )}
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundSlider;
