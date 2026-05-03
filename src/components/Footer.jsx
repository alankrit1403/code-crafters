import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-4 border-t border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
           <img src={logo} alt="Code Crafters Logo" className="w-auto h-20" />
        </div>
        <p className="text-slate-500 text-sm font-medium italic">"We Code. We Craft. We Create Impact."</p>
        <div className="flex gap-6">
          {/* <Github size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          <Twitter size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" /> */}
          <Linkedin size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
        </div>
      </div>
      <div className="text-center mt-8 text-slate-400 text-xs tracking-widest uppercase">
        © 2026 Code Crafters. Built for Excellence.
      </div>
    </motion.footer>
  );
};

export default Footer;
