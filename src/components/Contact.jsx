import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 via-purple-50 to-white p-12 md:p-20 rounded-[3rem] border border-slate-200 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">Let's Craft Something <span className="text-brand-purple">Great</span></h2>
              <p className="text-slate-600 mb-8">Ready to bring your vision to life? Our team is standing by to help you architect the future.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <Mail size={20} className="text-brand-blue" /> hello@codecrafters.io
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <Users size={20} className="text-brand-purple" /> Visit our Studio
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-5" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder-slate-400 shadow-sm" />
              <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder-slate-400 shadow-sm" />
              <textarea rows="4" placeholder="Your Message" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder-slate-400 shadow-sm"></textarea>
              <button className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-brand-blue transition-all shadow-xl">
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
