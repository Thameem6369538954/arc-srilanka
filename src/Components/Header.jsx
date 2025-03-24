import { motion } from 'framer-motion';
import Bby from "../Videos/Bby.mp4"

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full  object-cover rounded-b-4xl"
      >
        <source src={Bby} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif font-semibold tracking-wide"
        >
          Your journey to <br />parenthood starts here
        </motion.h1>
        <p className="text-white text-lg md:text-2xl mb-6 ">
        From conception to pregnancy and beyond.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-pink-400 text-white font-[nrl] font-semibold rounded-lg shadow-lg hover:bg-pink-400 transition"
        >
          Get Appoinment
        </motion.button>
      </div>
    </div>
  );
}
