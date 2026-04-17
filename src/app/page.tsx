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
        ease: "easeOut" 
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
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              P
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
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
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Current Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['Next.js 15', 'TypeScript', 'Tailwind', 'Node.js', 'React 19'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-blue-400">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative z-10">
            <h3 className="text-sm font-bold mb-2">Interview Salah</h3>
            <p className="text-xs text-slate-400 font-light">AI-driven interview analyzer platform.</p>
          </div>
          <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <div className="text-4xl font-black italic text-white">01</div>
          </div>
        </motion.div>

        
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative z-10">
            <h3 className="text-sm font-bold mb-2">Image Utility</h3>
            <p className="text-xs text-slate-400 font-light">Precision image processing tools.</p>
          </div>
          <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <div className="text-4xl font-black italic text-white">02</div>
          </div>
        </motion.div>

        
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500 rounded-3xl p-8 flex items-center justify-between group cursor-pointer shadow-[0_0_30px_rgba(37,99,235,0.15)]"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{"Let's build something scalable."}</h2>
            <p className="text-blue-100/70 text-sm">Available for engineering collaborations.</p>
          </div>
          <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </div>
        </motion.div>

      </section>
    </motion.div>
  );
}