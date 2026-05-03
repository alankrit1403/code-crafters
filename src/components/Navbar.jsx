import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';


const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
  >
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Code Crafters Logo" className="w-auto h-20" />
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <a href="#home" className="hover:text-brand-blue transition-colors">Home</a>
        <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
        <a href="#team" className="hover:text-brand-blue transition-colors">Team</a>
        <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
