import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="mb-16 flex flex-col items-center text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-display font-bold ${light ? 'text-white' : 'text-slate-900'} mb-4`}
    >
      {title}
    </motion.h2>
    <div className="h-1.5 w-20 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mb-6"></div>
    <p className={`${light ? 'text-gray-300' : 'text-slate-600'} max-w-2xl mx-auto text-lg leading-relaxed`}>{subtitle}</p>
  </div>
);

export default SectionHeading;
