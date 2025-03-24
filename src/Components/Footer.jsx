import { motion } from 'framer-motion';
import { FaInstagram, FaXTwitter, FaPinterestP } from 'react-icons/fa6';
import arclogo from "../Images/arclogo.png"

const Footer = () => {
  return (
    <footer className="bg-[#faf8f6] text-[#333] py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Address */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-4">
            <img src={arclogo} className='w-27 h-27' alt="" />
          </div>
          <p>SW 10th Ave 1206,Sri Lanka</p>
          <p>Mon – Fri: 8:30 am – 5:00 pm,</p>
          <p>Sat – Sun: Closed</p>
          <div className="mt-4">
            <p className="flex items-center gap-2"><span>📞</span>1-800-123-1234</p>
            <p>example@arc.com</p>
          </div>
        </motion.div>

        {/* Pages */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="mb-4 font-semibold">Pages</h3>
          <ul className="space-y-2">
            {['About Us', 'Our Services', 'Blog', 'Contacts', 'Shop', 'Image Credits'].map((page, idx) => (
              <li key={idx} className="hover:text-[#d8c5bb] cursor-pointer">{page}</li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h3 className="mb-4 font-semibold">Our Services</h3>
          <ul className="space-y-2">
            {['Contraception Consultation', 'Endometriosis', 'Gynecological Examination', 'Gynecological Ultrasound', 'Menopausal Symptoms', 'Menstrual Irregularities'].map((service, idx) => (
              <li key={idx} className="hover:text-[#d8c5bb] cursor-pointer">{service}</li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <h3 className="mb-4 font-semibold">Get expert advice, updates and perks directly in your inbox</h3>
          <div className="flex items-center gap-2 mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="p-2 border rounded w-full focus:outline-none"
            />
            <button className="bg-[#d8c5bb] text-white px-4 py-2 rounded">Subscribe</button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: FaInstagram, link: '#' },
              { icon: FaXTwitter, link: '#' },
              { icon: FaPinterestP, link: '#' }
            ].map((item, i) => (
              <motion.a 
                key={i}
                href={item.link}
                whileHover={{ scale: 1.2 }}
                className="text-[#333] hover:text-[#d8c5bb] transition"
              >
                <item.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#555]">
        <p>This is a sample website</p>
        <p>cmsmasters © 2025 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
