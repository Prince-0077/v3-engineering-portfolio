"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BIO_TEXTS, TECH_STACK,   } from "@/constants";
import Link from "next/link";
import { MECH_EASE } from "@/constants";


export default function Home() {
    const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % BIO_TEXTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-white/20">
      
    <section className="relative mb-40 border border-white/5 bg-white/[0.01] p-1 md:p-2">
         

          <div className="absolute top-0 left-0 w-10 h-[1px] bg-white/20" />
          <div className="absolute top-0 left-0 w-[1px] h-10 bg-white/20" />
          <div className="absolute bottom-0 right-0 w-10 h-[1px] bg-white/20" />
          <div className="absolute bottom-0 right-0 w-[1px] h-10 bg-white/20" />

         
          <div className="w-full flex justify-between items-center py-6 px-8 border-b border-white/5">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">REF_ID: 2026_PRNC</span>
              <div className="h-[1px] w-8 bg-white/10" />
              <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.4em]">Active_Revision</span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">2024.1 — 2026.12</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-16">
            
           
            <div className="flex flex-col items-start space-y-32 w-full md:w-1/2">
              <div className="space-y-4">
                <div className="flex gap-4 text-[12px] font-mono text-white/30 tracking-[0.5em] uppercase">
                  <span>DESIGN</span> / <span>SYSTEM</span> / <span>AI</span>
                </div>
                <h1 className="text-6xl md:text-[6rem] font-black italic tracking-tighter leading-[1] uppercase text-white">
                  PRINCE<br /><hr className= "bg-white/20 h-[3px]"></hr> PANDEY <hr className="bg-white/20 h-[3px]"></hr>
                </h1>
                <div className="text-[10px] font-mono tracking-[1.2em] text-white/50 uppercase pt-4">
                  PORTFOLIO_V3
                </div>
              </div>

              
              <div className="h-15 mt-[-90px] flex items-center border-l border-white/100 pl-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={textIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 1, ease: MECH_EASE }}
                    className="text-white/80  text-[22px]  italic leading-relaxed uppercase"
                  >
                    {BIO_TEXTS[textIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

           
           
            <div className="relative w-full md:w-[400px] aspect-square border border-white/10 p-2 bg-white/[0.02]">
              <div className="relative w-full h-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                {/* <Image 
                  src="" 
                  alt="" 

                  fill 
                  priority
                  className="object-cover opacity-70 hover:opacity-100 transition-opacity" 
                /> */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent bg-[length:100%_3px] pointer-events-none" />
              </div>
             
              <div className="absolute -top-4 -right-4 h-12 w-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-[11px] text-white/40 font-mono z-20">
                007
              </div>
            </div>
          </div>

        
          <div className="w-full flex justify-between items-center py-6 px-8 border-t border-white/5 bg-white/[0.01]">
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">STABLE_REVISION_v4.0</span>
            <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/5" />
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">AUTH_KEY: 0xPRNC_2026</span>
          </div>
        </section>


<section id="stack" className="max-w-7xl mx-auto px-6 md:px-6 mb-50 mt-[-90px]">
  <div className="flex items-center gap-6 mb-16 opacity-70">
    <span className="text-[30px] font-mono tracking-[0.6em] uppercase text-white">
      MY_Technical_Toolkit // v.2026
    </span>
    <div className="h-[1px] flex-grow bg-white" />
  </div>

  <div className="grid md:grid-cols-4  ap-px bg-white/[0.05]  border border-white/[0.1]">
    {[
      { 
        category: "Core_Engineering", 
        tools: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] 
      },
      { 
        category: "Backend_Logics", 
        tools: ["Node.js", "Express", "Firebase", "REST APIs"] 
      },
      { 
        category: "Exploring_Labs", 
        tools: ["Gemini_API", "Agentic Workflows", "Vector_DBs"] 
      },
      { 
        category: "System_Control", 
        tools: ["Git/GitHub", "Vercel", "Linux_Basics", "Postman"] 
      }
    ].map((group, i) => (
      <div key={i} className="bg-[#050505] p-10 group hover:bg-white/[0.02] transition-all">
        <span className="text-[15px] font-mono text-white/20 uppercase tracking-widest block mb-6">
          {group.category}
        </span>
        <ul className="space-y-3">
          {group.tools.map((tool, tIndex) => (
            <li key={tIndex} className="text-xl font-light text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
              <span className="w-2 h-2 bg-white/20 group-hover:bg-emerald-700 rounded-full transition-colors" />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
       

        


<section id="projects" className="max-w-7xl  mx-auto px-6 mt-[-90px] md:px-12 mb-20">
  
  
      <div className="flex flex-col md:flex-row border-t  border-white/100 md:items-end justify-between gap-6  mb-10">
        <div className="space-y-2  ">
        <span className="text-[20px]  font-mono tracking-[0.6em] uppercase text-white">
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
          <p className="text-[13px] text-white/40 group-hover:text-white/100 transition-all max-w-xs md:ml-auto 
          leading-relaxed font-light italic uppercase tracking-tighter">
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


<section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 mb-40">
  
  <div className="flex items-center gap-6 mb-12 opacity-20">
    <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-white">
      Connectivity_Protocol // v.02
    </span>
    <div className="h-[1px] flex-grow bg-white/10" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
    
  
    <div className="md:col-span-2 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-10 md:p-14 relative
     overflow-hidden flex flex-col justify-between">
      <div className="relative z-10 space-y-10">
        <div className="flex items-center gap-4">
          <div className="relative h-2.5 w-2.5">
            <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
            <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-500/80">
            System_Status: Open_For_Inquiry
          </span>
        </div>

        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.95] text-white/90">
          Ready to engineer <br /> 
          <span className="text-white/30">the next agentic system?</span>
        </h2>
      </div>

      <p className="mt-10 text-white/40 text-sm font-light max-w-sm leading-relaxed italic border-l border-white/10 pl-6 uppercase tracking-tight">
        Accepting internship inquiries and collaborations for Summer 2026.
      </p>
    </div>

    
    <div className="flex flex-col gap-4">
      
     
     <a 
        href="mailto:pandeyprince219@gmail.com" 
        className="flex-grow bg-white/[0.03] border border-white/10 text-white rounded-[2rem] p-10 flex flex-col justify-between 
                   hover:bg-white/70 hover:text-black transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden">
      
        <div className="z-10 space-y-1">
          <span className="text-[11px] font-black uppercase tracking-widest block opacity-40 group-hover:opacity-100 transition-opacity">
            Click to Initiate Contact
          </span>
          <p className="text-[9px] font-mono opacity-20 group-hover:opacity-40 uppercase">Latency: 0ms</p>
        </div>
        
        <div className="flex items-end justify-between z-10">
          <span className="text-4xl font-black italic tracking-tighter uppercase leading-none">@ Mail.</span>
          
          <div className="h-12 w-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-black/80 transition-colors">
            <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">↗</span>
          </div>
        </div>

      </a>


      <div className="grid grid-cols-1 gap-4">
        {[
          { label: "LinkedIn", url: "https://www.linkedin.com/in/prince-pandey-078a0a33a/", sub: "Professional_Network" },
          { label: "GitHub", url: "https://github.com/Prince-0077", sub: "Source_Control" }
        ].map((link, idx) => (
          <Link 
            key={idx}
            href={link.url} 
            className="bg-white/[0.03] border border-white/[0.08] rounded-[2rem] p-8 flex items-center 
            justify-between hover:border-white/20 hover:bg-white/[0.05] transition-all group">
          
            <div className="text-left">
              <span className="block text-2xl font-black uppercase italic tracking-tighter 
              text-white/40 group-hover:text-white transition-colors">
                {link.label}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest 
              text-white/10 group-hover:text-emerald-500/50 transition-colors">
                {link.sub}
              </span>
            </div>
            <span className="text-xl text-white/10 group-hover:text-white 
                                transition-all group-hover:translate-x-1">
              →
           
            </span>
          </Link>
        ))}
      </div>
    </div>

  </div>
</section>


    </div>
  );
}