import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Preg from "../Images/Preg.jpg";

export default function WhyChoose() {
  return (
    <section className="relative bg-[#fffaf9] py-16 px-4 md:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      {/* Background Blob */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-[#ffece6] rounded-full -z-10 opacity-50"></div>

      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif font-semibold mb-8 leading-snug">
          Why choose <em className="italic">ARC</em> fertility center
        </h2>

        <ul className="space-y-5 text-[#555]">
          {[
            "No waiting time to start treatment;",
            "Virtual consultations at times to suit you;",
            "Enhanced cycle monitoring close to where you live or work;",
            "Multilingual and experienced team;",
            "Personalised care for your individual needs and preferences;",
            "Transparent and affordable pricing.",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 border-b pb-3 last:border-0">
              <span className="bg-[#b99ed5] text-white p-1 rounded-full mt-1 shrink-0">
                <Check size={16} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="relative w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Subtle Blob */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#fff0ec] rounded-full -z-10"></div>

        <img 
          src={Preg} 
          alt="Pregnant Belly" 
          className="rounded-2xl shadow-lg max-w-[90%] md:max-w-full object-cover"
        />
        
        {/* Decorative icon bottom right */}
        <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100" fill="#f2eee9">
            <path d="M80,30 C90,60 50,90 20,80 C5,75 0,60 10,40 C20,20 40,10 60,20 C70,25 75,20 80,30 Z" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
