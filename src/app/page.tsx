"use client";
import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  
  const bioTexts = [
    "Full-stack engineer architecting intelligent ecosystems with high-fidelity precision.",
    "Passionate about building AI-native applications and deploying Agentic AI workflows.",
    "Focused on minimalist code architecture, scalable databases, and premium user experiences.",
    "Aiming to lead technical innovations, build v3 ecosystems, and scale systems globally."
  ];

  useEffect(() => {
    
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % bioTexts.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const techStack = ['Next.js 15', 'TypeScript', 'Tailwind', 'Node.js', 'React 19', 'Git', 'MongoDB', 'Python'];

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-white/20">
      
      
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[130px]" />
        </div>

      <motion.div className="pb-20 pt-10 px-4 md:px-10" initial="hidden" animate="visible" variants={containerVariants}>
                <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-5 h-full md:min-h-[85vh]">
                  
             
          <motion.div 
                  variants={itemVariants}
              className="md:col-span-2 md:row-span-2 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] rounded-[2.5rem] p-10 flex flex-col justify-start pt-16 group hover:border-white/[0.2] transition-all duration-700 relative overflow-hidden shadow-2xl"
                     >
            <div className="relative z-10 space-y-6">
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-white leading-none">
                Prince <span className="text-white/30 font-light italic tracking-tight ml-1">Pandey</span>
              </h1>
              
             
              <div className="h-28 md:h-32 relative mt-10">
                <AnimatePresence mode="wait">
                  <motion.p
                            key={textIndex}
                            initial={{ opacity: 0, y: 5 }} 
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }} 
                            transition={{ duration: 2.5, ease: "easeInOut" }} 
                            className="text-white/70 text-lg md:text-xl max-w-md font-light leading-relaxed absolute top-0 left-0"
                          >
                    {bioTexts[textIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

         
         <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] rounded-[2.5rem] p-8 overflow-hidden flex flex-col justify-center shadow-2xl"
          >
            <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 mb-12 pl-1">SYSTEM_CORE_v3</h3>
            <div className="relative flex overflow-hidden group py-4">
             


              <motion.div 
                className="flex whitespace-nowrap gap-16 pr-16" 
                animate={{ x: ["0%", "-100%"] }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {techStack.map((tech, i) => (
                  <span key={i} className="text-3xl font-bold text-white/[0.15] hover:text-white transition-all duration-500 cursor-default font-mono tracking-tighter uppercase">
                    {tech}
                  </span>
                ))}
              </motion.div>
              <motion.div 
                className="flex whitespace-nowrap gap-16 pr-16" 
                animate={{ x: ["0%", "-100%"] }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
                aria-hidden="true"
              >
                {techStack.map((tech, i) => (
                  <span key={`dup-${i}`} className="text-3xl font-bold text-white/[0.15] hover:text-white transition-all duration-500 cursor-default font-mono tracking-tighter uppercase">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        



          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)" }}
            className="md:col-span-1 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] rounded-[2.5rem] p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 shadow-2xl"
          >
                  <div className="h-2 w-2 rounded-full bg-white/40 mb-6 group-hover:bg-white group-hover:scale-125 transition-all" />
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Interview Salah</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">AI-driven interview synthesis & behavior analysis engine.</p>
          </motion.div>

         





          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)" }}
            className="md:col-span-1 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] rounded-[2.5rem] p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 shadow-2xl"
          >
              <div className="h-2 w-2 rounded-full bg-white/40 mb-6 group-hover:bg-white group-hover:scale-125 transition-all" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Utility Tool</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">High-performance asset processing & pipeline engine.</p>
          </motion.div>

          



               <motion.div 
            variants={itemVariants}
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 bg-white text-black rounded-[2.5rem] p-10 flex items-center justify-between group cursor-pointer shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-3xl font-bold italic tracking-tighter">Initiate_Collaboration.</h2>
            <div className="h-14 w-14 bg-black text-white rounded-full flex items-center justify-center font-bold group-hover:translate-x-3 transition-transform duration-500 shadow-xl">
              →
            </div>
          </motion.div>

        </section>
      </motion.div>
    </div>
  );
}