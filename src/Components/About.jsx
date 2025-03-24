import React from 'react';
import Bby from '../Images/Bby.jpg'; // your image path here

export default function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-16 bg-[#fffaf9]">
      
      {/* Left image */}
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        {/* Background Shape */}
        <div className="absolute -left-8 top-8 w-full h-full bg-[#ffece6] rounded-[50%] -z-10"></div>

        <img 
          src={Bby} 
          alt="Mother and Baby" 
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <span className="text-xs tracking-widest text-[#a27b70] uppercase bg-[#fff0ec] py-1 px-3 rounded-full mb-4 inline-block">
          About the clinic
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 leading-tight">
          A private <em className="italic">fertility and IVF clinic</em> for women and couples
        </h2>
        <p className="text-[#555] mb-8 leading-relaxed">
          Our leading fertility clinic in London, world-class fertility treatments, and expert care are available to all. Because no matter where you are on your journey to parenthood or how complex your medical needs are, our tireless pursuit of fertility success means we always have treatment options available.
        </p>
        <button className="px-6 py-3 bg-[#d0e27b] hover:bg-[#bcd35f] text-[#333] font-bold rounded-full transition">
          Find out more
        </button>
      </div>

    </section>
  );
}
