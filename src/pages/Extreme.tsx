import React from 'react';
import { motion } from 'motion/react';
import { Bike, Ghost, Play, ChevronRight, Music, Zap, Wind, Mountain } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SPORTS = [
  { name: 'BMX', desc: 'Urban gravity defiance.', image: 'https://images.unsplash.com/photo-1533560272473-77405299408d?auto=format&fit=crop&q=80&w=2070', color: 'bg-dew-green' },
  { name: 'SKATE', desc: 'Concrete wave surfing.', image: 'https://images.unsplash.com/photo-1520156555610-746765275815?auto=format&fit=crop&q=80&w=2070', color: 'bg-dew-cyan' },
  { name: 'MTB', desc: 'Trail charging mastery.', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=2070', color: 'bg-dew-lime' },
  { name: 'MOTO', desc: 'Dirt-flinging madness.', image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2070', color: 'bg-red-500' },
];

export default function Extreme() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <section className="px-4 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Wind size={14} className="text-dew-green" />
            No Limits Allowed
          </motion.div>
          
          <h1 className="text-7xl lg:text-9xl font-display font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
            PUSH THE <br /> <span className="text-dew-green italic">BOUNDARY</span>
          </h1>
          
          <p className="text-white/40 text-xl max-w-2xl leading-relaxed">
            We don't just sponsor extreme sports. We fuel the athletes that redefine what's possible. Watch the latest POV runs and trick showcases.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
           {SPORTS.map((sport, i) => (
             <motion.div
               key={sport.name}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="group relative overflow-hidden rounded-3xl cursor-pointer"
             >
               <img 
                 src={sport.image} 
                 alt={sport.name}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
               />
               <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-4xl font-display font-black uppercase italic tracking-tighter mb-2">{sport.name}</h3>
                  <p className="text-white/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity mb-4">{sport.desc}</p>
                  <div className={cn("w-12 h-1 bg-dew-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left", sport.color)} />
               </div>
               <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  <Play size={24} className="text-white" />
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Adrenaline Reel Wrapper */}
      <section className="bg-[#080808] py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-dew-green/5 rounded-full absolute -inset-10 blur-[100px] animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1541625602330-2277a1c4b6c3?auto=format&fit=crop&q=80&w=2070" 
              alt="Action"
              className="relative z-10 w-full aspect-[4/3] object-cover rounded-3xl border border-white/10"
            />
            <div className="absolute -bottom-6 -right-6 bg-dew-green p-6 rounded-2xl z-20 shadow-2xl">
               <Ghost size={32} className="text-black" />
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl font-display font-black uppercase italic tracking-tighter mb-8 leading-tight">
              CINEMATIC <br /> <span className="text-dew-green">POV SESSIONS</span>
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Experience the rush from the driver's perspective. Our athletes carry high-speed cinema rigs to bring you the closest look at the impossible.
            </p>
            <ul className="space-y-6 mb-12">
               <li className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group cursor-pointer">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-dew-green group-hover:text-black transition-all">01</div>
                 <span className="font-bold uppercase tracking-widest text-sm">Downtown BMX Heist</span>
                 <ChevronRight size={16} className="ml-auto" />
               </li>
               <li className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group cursor-pointer">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-dew-green group-hover:text-black transition-all">02</div>
                 <span className="font-bold uppercase tracking-widest text-sm">Alp's Ridge Downhill MTX</span>
                 <ChevronRight size={16} className="ml-auto" />
               </li>
               <li className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group cursor-pointer">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-dew-green group-hover:text-black transition-all">03</div>
                 <span className="font-bold uppercase tracking-widest text-sm">Urban Skate Guerilla</span>
                 <ChevronRight size={16} className="ml-auto" />
               </li>
            </ul>
            <button className="flex items-center gap-3 bg-white text-black font-black px-8 py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-dew-green transition-all">
              WATCH ALL REELS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
