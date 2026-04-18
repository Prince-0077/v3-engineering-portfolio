"use client";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full md:h-[80vh]">
        
       
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col justify-end group hover:border-blue-500/50 transition-all duration-500"
        >
          <div className="space-y-4">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white font-mono">
              P
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Prince Pandey
            </h1>
            <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
              Full-stack engineer building scalable web architectures and intelligent systems. Currently architecting v3 of my digital ecosystem.
            </p>
          </div>
        </motion.div>

        
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">System Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['Next.js 15', 'TypeScript', 'Tailwind', 'Node.js', 'React 19', 'Git'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold tracking-tight text-white">Interview Salah</h3>
                <span className="text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 font-mono font-bold">
                  AI/ML
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Next-gen interview analyzer using local SLMs for real-time technical feedback.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-slate-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
              View Specs 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold tracking-tight text-white">Image Utility</h3>
                <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono font-bold">
                  TOOLS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                High-performance browser-side image processing and asset optimization engine.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-slate-500 group-hover:text-emerald-400 transition-colors uppercase tracking-widest">
              Open Tool 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </div>
          </div>
        </motion.div>

       
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500 rounded-3xl p-8 flex items-center justify-between group cursor-pointer shadow-[0_0_30px_rgba(37,99,235,0.15)]"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{"Let's build something scalable."}</h2>
            <p className="text-blue-100/70 text-sm font-light">Available for engineering collaborations.</p>
          </div>
          <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </div>
        </motion.div>

      </section>
    </motion.div>
  );
}