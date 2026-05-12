import React from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import { Zap, Play, ChevronRight, Gamepad2, Bike, Gift, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DewCan } from '@/src/components/Can';
import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Artistic Flair Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0">
          <h1 className="font-display text-[450px] leading-none -skew-x-12 italic">EXTREME</h1>
        </div>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,255,0,0.1)_0%,rgba(0,0,0,1)_80%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          
          {/* Left Side: Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center gap-6"
          >
            <div className="border-l-4 border-dew-green pl-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-dew-green text-black font-black text-[10px] uppercase tracking-[0.2em] mb-6 italic"
              >
                STIMULATED_XP_PROTOCOL
              </motion.div>
              
              <h1 className="text-8xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter italic mb-6 uppercase neon-text-glow">
                FUEL THE<br />RUSH
              </h1>
              
              <p className="text-white/80 text-sm md:text-base max-w-sm mb-10 leading-relaxed font-body">
                Engineered for the competitive elite. High-intensity citrus infusion with electrified electrolytes to power your session.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 px-8">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dew-green text-black font-display text-2xl px-10 py-4 italic -skew-x-12 uppercase tracking-tighter neon-border-glow transition-all"
                >
                  BUY_NOW
                </motion.button>
              </Link>
              <Link to="/locator">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#99FF00', color: '#000' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-dew-green text-dew-green font-display text-2xl px-10 py-4 italic -skew-x-12 uppercase tracking-tighter transition-all"
                >
                  FIND_STORES
                </motion.button>
              </Link>
            </div>

            {/* Micro HUD stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 px-8">
              <div className="bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] opacity-50 uppercase font-black tracking-widest text-dew-green">Sugar Level</div>
                <div className="text-2xl font-display glitch-cyan italic leading-none">STIMULATED</div>
              </div>
              <div className="bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] opacity-50 uppercase font-black tracking-widest text-dew-green">Energy Core</div>
                <div className="text-2xl font-display text-white italic leading-none">99_MAX</div>
              </div>
            </div>
          </motion.div>

          {/* Center: 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 h-[400px] lg:h-[700px] relative flex justify-center items-center"
          >
            <div className="absolute w-64 h-64 bg-dew-green/20 rounded-full blur-[100px] animate-pulse" />
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} intensity={2500} color="#CCFF00" />
              <Environment preset="night" />
              <DewCan color="#99FF00" />
              <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} color="#99FF00" />
            </Canvas>
            
            <div className="absolute top-1/4 -right-10 animate-bounce">
               <div className="bg-dew-cyan text-black px-4 py-1 text-[10px] font-black italic -skew-x-12 uppercase tracking-widest shadow-xl">LTD EDITION</div>
            </div>
          </motion.div>

          {/* Right: HUD Feed */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 flex flex-col items-end justify-center gap-8 z-20"
          >
            <div className="w-full bg-white/5 p-6 border border-white/10 relative backdrop-blur-xl">
              <div className="absolute top-0 right-0 p-4">
                 <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              </div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6 italic">LIVE_FEED: ESPORTS_HUB</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dew-green/20 border border-dew-green/50 flex items-center justify-center text-dew-green">
                    <Trophy size={20} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] text-dew-green font-black uppercase tracking-widest">CURRENT_RANK</div>
                    <div className="text-base font-display italic text-white uppercase">PRO_ELITE_01</div>
                  </div>
                </div>
                <div className="hud-line"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dew-cyan/20 border border-dew-cyan/50 flex items-center justify-center text-dew-cyan">
                    <Zap size={20} />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] text-dew-cyan font-black uppercase tracking-widest">XP_EARNED</div>
                    <div className="text-base font-display italic text-white uppercase">142,500_PTS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro HUD stats */}
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 border border-white/20 hover:border-dew-green hover:neon-border-glow transition-all flex items-center justify-center cursor-pointer font-display italic text-xl text-white/40 hover:text-dew-green">
                  0{i}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sectors */}
      <section className="bg-black py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectorCard 
              title="ESPORTS HUB" 
              desc="Level up with exclusive gear and tournament access."
              icon={Gamepad2}
              image="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070"
              link="/gaming"
              color="text-dew-cyan"
            />
            <SectorCard 
              title="EXTREME VIBES" 
              desc="From BMX to base jumping. Live on the edge."
              icon={Bike}
              image="https://images.unsplash.com/photo-1533560272473-77405299408d?auto=format&fit=crop&q=80&w=2070"
              link="/extreme"
              color="text-dew-green"
            />
            <SectorCard 
              title="WIN RIGS" 
              desc="Enter daily sweepstakes. Win gaming PCs and merch."
              icon={Gift}
              image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=2070"
              link="/promotions"
              color="text-dew-lime"
            />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 bg-dew-green text-black overflow-hidden border-y-4 border-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-6xl font-display font-black italic tracking-tighter uppercase">
              FUEL THE RUSH • DO THE DEW • STAY ENERGIZED • GAMER MODE ON • LIMITLESS POTENTIAL •
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

function SectorCard({ title, desc, icon: Icon, image, link, color }: any) {
  return (
    <Link to={link} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/10">
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 blur-[2px] group-hover:blur-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 p-8 w-full group-hover:translate-y-[-10px] transition-transform">
        <Icon className={cn("mb-4", color)} size={48} />
        <h3 className="text-3xl font-display font-black italic mb-2 tracking-tighter">{title}</h3>
        <p className="text-white/60 text-sm">{desc}</p>
        
        <div className="mt-6 flex items-center gap-2 text-xs font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          JOIN NOW <ChevronRight size={14} />
        </div>
      </div>
      
      <div className="absolute top-0 right-0 p-4">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-dew-green group-hover:border-dew-green group-hover:text-black transition-all">
          <Play size={18} className="fill-current" />
        </div>
      </div>
    </Link>
  );
}
