import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Alankrit from '../assets/team/alankrit.png';
import shudhanshu from '../assets/team/shudhanshu.jpeg';
import nikhil from '../assets/team/nikhil.jpeg';
import akash from '../assets/team/akash.jfif';
import Ayushmaan from '../assets/team/ayushmaan.jpeg';


const teamMembers = [
  { 
    name: "Alankrit Shukla", 
    role: "AI Engineer (GenAI Specialist)", 
    image: Alankrit,
    desc: "Specializing in Generative AI and LLM-based systems, Alankrit focuses on building intelligent solutions including RAG pipelines, chatbots, and automation systems. He brings strong expertise in designing AI architectures that are both scalable and production-ready."
  },
  { 
    name: "Shudhanshu Maurya", 
    role: "Backend Engineer", 
    image: shudhanshu,
    desc: "An expert in C++, .NET, and system design, Shudhanshu builds robust, high-performance backend systems. He focuses on scalability, performance optimization, and designing architectures that can handle real-world production loads."
  },
  { 
    name: "Ayushmaan Srivastava", 
    role: "Project Manager & Operations Lead", 
    image: Ayushmaan,
    desc: "Ayushmaan leads the organization with full ownership of client relationships, project delivery, and business operations. He ensures smooth coordination between teams and keeps projects aligned with client goals and timelines."
  },
  { 
    name: "Akash Singh", 
    role: "Data Analyst & QA Specialist", 
    image: akash,
    desc: "Akash ensures that every product we deliver is data-driven, reliable, and thoroughly tested. He focuses on analytics, validation, and quality assurance to maintain high standards across all projects."
  },
   { 
    name: "Nikhil Maurya", 
    role: "Full Stack Developer", 
    image: nikhil,
    desc: "Nikhil specializes in building scalable web applications and microservices. From frontend to backend, he ensures seamless user experience combined with efficient, maintainable system design."
  }
  
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-10">
          <SectionHeading 
            title="Meet the Code Crafters Team" 
            subtitle="At Code Crafters, we are a group of passionate engineers and problem-solvers working together to design and build scalable, high-performance digital solutions. We combine expertise across AI, backend systems, full-stack development, data analytics, and project management to deliver end-to-end solutions — not just code."
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-brand-purple/30 transition-all text-center flex-1 min-w-[300px] max-w-[380px] shadow-lg"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-brand-purple to-brand-blue group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-brand-purple font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 h-[120px] overflow-hidden">
                {member.desc}
              </p>
              {/* <div className="flex justify-center gap-4 text-slate-400">
                <Linkedin size={20} className="hover:text-brand-blue transition-colors cursor-pointer" />
                <Twitter size={20} className="hover:text-brand-blue transition-colors cursor-pointer" />
                <Github size={20} className="hover:text-brand-purple transition-colors cursor-pointer" />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
