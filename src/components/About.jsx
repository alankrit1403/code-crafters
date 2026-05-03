import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Globe, Server, BarChart, Cloud, Target, Users, Zap, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  {
    icon: <Bot size={32} className="text-brand-purple" />,
    title: "AI & Generative AI Solutions",
    description: "We design and build intelligent systems powered by modern AI, turning complex challenges into streamlined, automated workflows.",
    bullets: ["RAG-based chatbots", "AI automation", "Custom LLM integrations", "AI workflows"],
    className: "lg:col-span-2"
  },
  {
    icon: <Globe size={32} className="text-brand-blue" />,
    title: "Full-Stack Web Dev",
    description: "Developing scalable, user-focused applications with modern frameworks.",
    bullets: ["Modern web apps", "SaaS platforms", "APIs"],
    className: "lg:col-span-1"
  },
  {
    icon: <Server size={32} className="text-brand-purple" />,
    title: "Backend & Systems",
    description: "Building strong, high-performance foundations for your digital products.",
    bullets: ["Scalable architecture", "System design", "Secure APIs"],
    className: "lg:col-span-1"
  },
  {
    icon: <BarChart size={32} className="text-brand-blue" />,
    title: "Data & Analytics",
    description: "Helping businesses make precise, data-driven decisions.",
    bullets: ["Data pipelines", "Dashboards", "Data insights"],
    className: "lg:col-span-1"
  },
  {
    icon: <Cloud size={32} className="text-brand-purple" />,
    title: "Cloud Deployment",
    description: "Ensuring your product runs smoothly, securely, and scales globally.",
    bullets: ["Cloud deployment", "CI/CD pipelines", "Optimization"],
    className: "lg:col-span-1"
  }
];

const approachCards = [
  {
    icon: <Target className="text-brand-purple" size={24} />,
    title: "Production-Grade Code",
    desc: "We focus on clean, maintainable architecture."
  },
  {
    icon: <Zap className="text-brand-blue" size={24} />,
    title: "Scalable by Default",
    desc: "Prioritizing high performance from day one."
  },
  {
    icon: <Users className="text-brand-purple" size={24} />,
    title: "Collaborative Unit",
    desc: "A complete engineering team, not just freelancers."
  },
  {
    icon: <ShieldCheck className="text-brand-blue" size={24} />,
    title: "Complete Ownership",
    desc: "End-to-end responsibility for every project we build."
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] w-[40rem] h-[40rem] bg-brand-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[0%] w-[45rem] h-[45rem] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-brand-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intro */}
        <div className="mb-20 flex flex-col items-center text-center">
          <SectionHeading 
            title="About Code Crafters" 
            subtitle="An elite team of engineers focused on building scalable, high-performance digital products."
          />
          <div className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed space-y-4">
            <p>
              We specialize in combining AI, full-stack engineering, and data systems to deliver solutions that are not just functional — but production-ready and built to scale. We operate as a collaborative engineering unit, ensuring faster delivery, better quality, and true end-to-end ownership.
            </p>
          </div>
        </div>

        {/* Bento Grid: What We Provide */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-sm font-semibold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent uppercase tracking-wider">
                Expertise
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              What We Provide
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center overflow-hidden flex-1 min-w-[300px] max-w-[380px]"
              >
                {/* Subtle internal gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col items-center w-full h-full">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow max-w-sm">
                    {service.description}
                  </p>
                  
                  {/* Tags instead of scattered bullet points */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {service.bullets.map((bullet, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-full text-xs font-semibold group-hover:border-brand-purple/20 group-hover:bg-brand-purple/5 transition-colors"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values / Approach */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-sm font-semibold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent uppercase tracking-wider">
                Our DNA
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Why Code Crafters
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-brand-blue/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-5 border border-slate-100">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative overflow-hidden bg-white border border-slate-200 rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center text-center shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-blue/5 pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4 relative z-10">
            Let’s Build Something Impactful
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-center text-lg relative z-10">
            Whether you're a startup building your MVP or a business scaling your systems, we help you move from idea to execution — efficiently and reliably.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-md flex items-center gap-2 relative z-10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

