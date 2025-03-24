import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const experts = [
  { name: "Dr. Jane Smith", title: "Senior Fertility Specialist", img: "https://via.placeholder.com/150" },
  { name: "Dr. Alex Johnson", title: "Embryologist", img: "https://via.placeholder.com/150" },
  { name: "Dr. Emily Clark", title: "IVF Specialist", img: "https://via.placeholder.com/150" },
  { name: "Dr. Michael Brown", title: "Reproductive Endocrinologist", img: "https://via.placeholder.com/150" },
];

export default function ExpertsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % experts.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + experts.length) % experts.length);
  };

  return (
    <section className="bg-[#fffaf9] py-16 px-4 md:px-12 xl:px-24">
      
      {/* Tag */}
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold text-[#d8c5bb] uppercase tracking-wide bg-[#f5efec] px-3 py-1 rounded-full">
          Meet Our Experts
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2 
        className="text-3xl md:text-4xl xl:text-5xl font-serif font-semibold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Dedicated Fertility Specialists
      </motion.h2>

      {/* Carousel */}
      <div className="relative">
        {/* Slide */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={current}
        >
          <motion.div 
            className="bg-[#fdf8f6] p-8 rounded-xl w-full max-w-xl text-center flex flex-col items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={experts[current].img} 
              alt={experts[current].name} 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold">{experts[current].name}</h4>
            <p className="text-sm text-[#777]">{experts[current].title}</p>
          </motion.div>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4 md:px-12 -translate-y-1/2">
          <button 
            onClick={prevSlide} 
            className="bg-[#f5efec] p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide} 
            className="bg-[#f5efec] p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
