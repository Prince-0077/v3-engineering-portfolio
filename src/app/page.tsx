"use client";
import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BIO_TEXTS, TECH_STACK } from "@/constants";
import Link from "next/link";



export default function Home() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % BIO_TEXTS.length);
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

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-white/20">
      
     
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[130px]" />
      </div>

      <motion.div className="pb-20 pt-10 px-4 md:px-10" initial="hidden" animate="visible" variants={containerVariants}>
        <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-5 h-full md:min-h-[85vh]">
          
         
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] 
            rounded-[2.5rem] p-10 flex flex-col justify-start pt-16 group hover:border-white/[0.2] transition-all 
            duration-700 relative overflow-hidden shadow-2xl">
          
            <div className="relative z-10 space-y-6">
                      <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-white leading-none">
                        Prince <span className="text-white/30 font-light italic tracking-tight ml-1">Pandey</span>
              </h1>
              
                        <div className="h-28 md:h-32 relative mt-10">
                          <AnimatePresence mode="wait">
                            <motion.p
                    key={textIndex}
                    initial={{ opacity: 0, y: 10 }} 

                    animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1, ease: "easeInOut" }} 
                    className="text-white/70 text-lg md:text-xl max-w-md font-light leading-relaxed absolute top-0 left-0">
                  
                    {BIO_TEXTS[textIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          




          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] 
            rounded-[2.5rem] p-8 overflow-hidden flex flex-col justify-center shadow-2xl">
          
            <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 mb-12 pl-1">
            SYSTEM_CORE_v3
            </h3>
            <div className="relative flex overflow-hidden group py-4">
              
             
              <motion.div 
                className="flex whitespace-nowrap gap-16 pr-16" 
                animate={{ x: ["0%", "-100%"] }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}

                style={{ willChange: "transform" }}>
              
                        {TECH_STACK.map((tech, i) => (
                  <span key={i} className="text-3xl font-bold text-white/[0.15] 
                     hover:text-white transition-all duration-500 cursor-default font-mono 
                     tracking-tighter uppercase">
                    {tech}
                  </span>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex whitespace-nowrap gap-16 pr-16" 
                        animate={{ x: ["0%", "-100%"] }} 
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
                        aria-hidden="true"
                        style={{ willChange: "transform" }}>
              
                {TECH_STACK.map((tech, i) => (
                             <span key={`dup-${i}`} className="text-3xl font-bold text-white/[0.15] hover:text-white transition-all duration-500 cursor-default font-mono tracking-tighter uppercase">
                    {tech}
                  </span>
                ))}
                      </motion.div>
                      </div>
          </motion.div>



        

          <Link href="/interview-salah" className="md:col-span-1 block h-full">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)" }}
              className="h-full bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] rounded-[2.5rem] p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 shadow-2xl">
            
              <div className="h-2 w-2 rounded-full bg-white/40 mb-6 group-hover:bg-white group-hover:scale-125 transition-all" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Interview Salah</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">AI-driven interview synthesis & behavior analysis engine.</p>
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-medium text-lg">↗</span>
              </div>
            </motion.div>
          </Link>

        


          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)" }}
            className="md:col-span-1 bg-white/[0.03] backdrop-blur-[30px] border border-white/[0.1] rounded-[2.5rem] p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 shadow-2xl">
          
            <div className="h-2 w-2 rounded-full bg-white/40 mb-6 group-hover:bg-white group-hover:scale-125 transition-all" />
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Utility Tool</h3>
            <p className="text-sm text-white/50 font-light leading-relaxed">High-performance asset processing & pipeline engine.</p>
          </motion.div>

         


          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 bg-white text-black rounded-[2.5rem] p-10 flex items-center justify-between group cursor-pointer shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
          
            <h2 className="text-3xl font-bold italic tracking-tighter">Initiate_Collaboration.</h2>
            <div className="h-14 w-14 bg-black text-white rounded-full flex items-center justify-center font-bold group-hover:translate-x-3 transition-transform duration-500 shadow-xl">
              →
            </div>
          </motion.div>

        </section>
      </motion.div>




<section id="projects" className="max-w-7xl  mx-auto px-6 md:px-12 mb-40">
  
  
      <div className="flex flex-col md:flex-row border-t border-white/100 md:items-end justify-between gap-6 mb-20">
        <div className="space-y-2  ">
        <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-white">
        Project_Registry // Revision_04
      </span>
      <h2 className="text-xl font-light italic tracking-tight text-white/100">
        A curated collection of systems engineered over extended development cycles.
      </h2>
    </div>
    <div className="text-[9px] font-mono text-white/100 text-right uppercase tracking-widest leading-relaxed">
      Time_In_Build: Unknown Hours <br />
      Auth_Token: 0xPRNC_2026
    </div>
  </div>

  

  <div className="flex flex-col border-t border-white/10">
    {[
      { id: "01", title: "PROJECT__ALPHA", tags: ["TAG01_1", "TAG01_2"], desc: "Description about the project_1." },
      { id: "02", title: "PROJECT__BETA", tags: ["TAG02_1", "TAG02_2"], desc: "Description about the project_2." },
      { id: "03", title: "PROJECT__GAMMA", tags: ["TAG03_1", "TAG03_2"], desc: "Description about the project_3." }
    ].map((demo, i) => (
      <motion.div 
          key={i} 
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
             className="group border-b border-white/10 py-14 flex flex-col md:flex-row md:items-center justify-between 
          transition-all hover:px-8 cursor-crosshair relative overflow-hidden">
        
        <div className="flex items-baseline gap-10 z-10">
          <span className="text-[12px] font-mono text-white/10 group-hover:text-white/100 transition-colors">
            [{demo.id}]
          </span>
             <div className="space-y-4">
            <h3 className="text-3xl md:text-6xl font-black text-white/20 group-hover:text-white/100 transition-all tracking-tighter italic uppercase leading-none">
                {demo.title}
            </h3>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {demo.tags.map((tag, tIndex) => (
                <span key={tIndex} className="text-[8px] font-mono border border-white/20 px-2 py-0.5 rounded-sm text-white/100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 text-left md:text-right z-10">
          <p className="text-[13px] text-white/40 group-hover:text-white/100 transition-all max-w-xs md:ml-auto leading-relaxed font-light italic uppercase tracking-tighter">
            {demo.desc}
          </p>
          <div className="mt-4 text-[10px] font-mono text-white/40   group-hover:text-white/1000 transition-all uppercase tracking-[0.4em]">
            Deployment_Finalizing_0x44
          </div>
        </div>

      
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
         
           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        
      </motion.div>
    ))}
  </div>
</section>


    </div>
  );
}