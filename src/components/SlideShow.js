import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/images/slide1.jpg",
    quote: "🎬 Cinema is the most beautiful fraud in the world.",
  },
  {
    img: "/images/slide2.jpg",
    quote: "🌟 Every frame has a story. Every story has a soul.",
  },
  {
    img: "/images/slide3.jpg",
    quote: "🎥 Film is truth 24 times a second.",
  },
  {
    img: "/images/slide4.jpg",
    quote: "🍿 Where words fail, cinema speaks.",
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden aspect-[1313/400]">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].img}
          src={slides[current].img}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Quote */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded text-center max-w-[90%]">
        <p className="italic text-sm sm:text-lg">{slides[current].quote}</p>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-3 py-1 rounded-full text-xl"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-3 py-1 rounded-full text-xl"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            } hover:scale-125 transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
