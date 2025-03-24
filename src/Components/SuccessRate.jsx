import React from 'react';
import { motion } from 'framer-motion';

export default function SuccessRates() {
  const chartData = [
    { age: "< 35", rate: 87 },
    { age: "35-37", rate: 60 },
    { age: "38-39", rate: 50 },
    { age: "40-42", rate: 40 },
    { age: "43-44", rate: 43 },
    { age: "45 >", rate: 48 },
  ];

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
          Outstanding Success Rates
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
        Over 21,000 babies born and counting
      </motion.h2>

      {/* Stats + Chart */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Left side stats */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">

          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#b6b647] text-5xl font-semibold mb-1">52%</h3>
            <p className="text-lg font-medium">Live birth rate for PGS treatment</p>
            <p className="text-sm text-[#777]">all ages average</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#b6b647] text-5xl font-semibold mb-1">35%</h3>
            <p className="text-lg font-medium">Live birth rates for IVF/IMSI/ICSI/PIMSI treatment</p>
            <p className="text-sm text-[#777]">all ages average</p>
          </motion.div>
        </div>

        {/* Right side chart */}
        <motion.div 
          className="bg-[#fdf8f6] p-6 rounded-xl w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Live birth rates for egg recipient treatment</h4>
          <p className="text-sm text-[#777] mb-4">by age group</p>

          <div className="space-y-4">
            {chartData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm font-medium w-16">{item.age}</span>
                <div className="flex-1 mx-2 relative h-4 bg-[#f9f4f2] rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute h-full bg-[#f5cdb9] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.rate}%` }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium">{item.rate}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
