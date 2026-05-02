"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
      return (
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[600px]">
      <div className="bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <Link href="/" className="text-white font-black tracking-tighter text-lg">
         P
             </Link>
        
                              <div className="flex items-center gap-6">
                            {['Projects', 'Stack', 'Contact'].map((item) => (
                              <Link 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" >
              
                {item}
              </Link>
            ))}
        </div>

      <Link 
        href="#contact"
        className="bg-white text-black text-[10px] font-bold px-5 py-2 rounded-full hover:bg-black hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 uppercase tracking-widest text-center"
      >
        Hire
      </Link>
            </div>
    </motion.nav>
  );
};

export default Navbar;