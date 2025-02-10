import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundSliderProps {
  images: string[];
  interval?: number; // milliseconds
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Background"
          className="absolute w-full h-full object-cover"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default BackgroundSlider;
