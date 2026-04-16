"use client";
import Link from "next/link";
  

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-6 w-6 bg-accent rounded-md flex items-center justify-center font-bold text-[10px] text-white">
            P
          </div>
          <span className="text-sm font-bold tracking-widest uppercase group-hover:text-accent transition-colors">
            Prince <span className="text-slate-500 font-light italic">v3</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-8 items-center">
          <Link href="#projects" className="text-[10px] font-bold text-slate-400 hover:text-slate-100 transition-all uppercase tracking-[0.2em]">
            Systems
          </Link>
          <Link href="#stack" className="text-[10px] font-bold text-slate-400 hover:text-slate-100 transition-all uppercase tracking-[0.2em]">
            Stack
          </Link>
          <Link href="#connect" className="bg-white text-black px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter hover:bg-accent hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}