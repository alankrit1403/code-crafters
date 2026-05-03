import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white text-slate-900 pt-20"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white opacity-90"></div>

      {/* Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-brand-purple/20 blur-[150px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-brand-blue/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900"
          >
            From Idea to <br />
            <span className="bg-gradient-to-r from-brand-purple to-brand-blue text-transparent bg-clip-text">
              Scalable Product
            </span>
            <br />
            <span className="text-4xl md:text-5xl">— We Build It All</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-6 text-lg max-w-lg space-y-4"
          >
            <p>
              We are a team of engineers crafting AI-powered applications,
              robust backend systems, and modern web platforms.
            </p>
            <p>
              Focused on performance, scalability, and real-world impact, we
              help businesses launch and grow faster.
            </p>
            <p className="font-semibold text-slate-800">
              No shortcuts. No compromises. Just solid engineering.
            </p>
          </motion.div>

          {/* Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-8"
          > */}
          {/* <button className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold group overflow-hidden shadow-lg shadow-brand-purple/20">
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ChevronRight size={18} />
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></span>
            </button>

            <button className="px-8 py-4 border border-slate-300 rounded-xl hover:bg-slate-50 transition text-slate-900 font-semibold shadow-sm">
              View Work
            </button> */}
          {/* </motion.div> */}
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:block">
          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl border border-slate-200 p-6 rounded-2xl shadow-2xl"
          >
            <p className="text-sm text-slate-500 mb-2 font-medium">Live Code</p>
            <pre className="text-brand-purple text-sm font-mono bg-slate-50 p-4 rounded-xl border border-slate-100">
              {`const scale = (idea) => {
  return build({
    performance: "high",
    ux: "premium"
  });
};`}
            </pre>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -right-10 bg-brand-purple/10 p-6 rounded-xl blur-xl"
          ></motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-10 -left-10 bg-brand-blue/10 p-6 rounded-xl blur-xl"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
