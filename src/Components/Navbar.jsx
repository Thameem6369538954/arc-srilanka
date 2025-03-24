import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between min-h-[10vh] bg-gradient-to-r from-white via-white to-pink-50 shadow-lg fixed w-full z-50 font-[nrl]">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold px-9 text-pink-600"
      >
        ARC<span className="text-black p-3">Sri Lanka</span>
      </motion.div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 items-center">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="text-lg font-medium cursor-pointer hover:text-blue-600 transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </motion.li>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="ml-6 bg-pink-400 text-white px-4 py-2 m-2 rounded-full shadow hover:shadow-lg transition"
        >
         Get Appointment
        </motion.button>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gradient-to-b from-white via-blue-50 to-white shadow-xl flex flex-col space-y-10 p-8 pt-24 z-50"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-semibold cursor-pointer text-blue-700 "
                onClick={toggleMenu}
              >
                {item}
              </motion.li>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-pink-400 text-white px-6 py-3 rounded-full shadow hover:shadow-lg transition"
            >
              Get Started
            </motion.button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
