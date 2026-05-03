"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";


const MECH_EASE = [0.23, 1, 0.32, 1];

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: MECH_EASE }}
      className="fixed top-0 left-0 w-full z-[100] border-b border-white/[0.05] bg-[#050505]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        
        
        <Link href="/" className="text-white font-bold tracking-tighter text-xl uppercase">
          PRINCE_PANDEY // 2026
        </Link>
        
      
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'REGISTRY', href: '#projects' },
            { label: 'STACK', href: '#stack' },
            { label: 'Lab', href: '#lab' }
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-[12px] font-mono uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors duration-200" >
            
              {item.label}
            </Link>
          ))}
        </div>

      
        <Link 
          href="#contact"
          className="border border-white/10 text-white text-[15px] font-bold px-5 py-2 rounded-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">
        
          CONNECT
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;