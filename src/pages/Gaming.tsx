import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Gamepad2, Users, Target, Zap, ChevronRight, Play, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Gaming() {
  return (
    <div className="min-h-screen bg-[#050505] text-dew-green pt-24 overflow-hidden font-sans">
      {/* Hero HUD */}
      <section className="relative px-4 mb-20">
        <div className="max-w-7xl mx-auto relative border-x border-white/5 pt-20 px-8 lg:px-20">
          
          {/* Background Large Typography */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0">
            <h1 className="font-display text-[300px] leading-none -skew-x-12 italic uppercase">ARENA</h1>
          </div>

          {/* HUD Accents */}
          <div className="absolute top-0 left-0 w-20 h-1 bg-dew-green flex justify-between neon-border-glow" />
          <div className="absolute top-0 left-0 w-1 h-20 bg-dew-green neon-border-glow" />
          <div className="absolute bottom-0 right-0 w-20 h-1 bg-dew-green neon-border-glow" />
          <div className="absolute bottom-0 right-0 w-1 h-20 bg-dew-green neon-border-glow" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-1 border border-dew-green text-dew-green text-[10px] font-black uppercase tracking-[0.2em] mb-8 italic neon-border-glow"
              >
                <div className="w-2 h-2 bg-dew-green animate-pulse rounded-full" />
                Live_Feed: DEW_TOURMASTERS_V4
              </motion.div>
              
              <h1 className="text-7xl lg:text-9xl font-display font-black italic tracking-tighter leading-none mb-8 uppercase neon-text-glow">
                LEVEL <span className="text-white">UP</span>
              </h1>
              
              <p className="text-white/60 text-base mb-12 max-w-md border-l-2 border-dew-green pl-6 font-body">
                The ultimate battleground for the elite. Unlock exclusive drops, enter pro-tournaments, and fuel your journey to the leaderboard.
              </p>
              
              <div className="flex gap-4">
                <button className="px-10 py-5 bg-dew-green text-black font-display text-2xl italic -skew-x-12 uppercase tracking-tighter neon-border-glow hover:bg-white transition-all shadow-[0_0_30px_rgba(153,255,0,0.3)]">
                  JOIN_TOURNAMENT
                </button>
                <button className="px-10 py-5 border border-white/20 hover:border-dew-green transition-all text-dew-green font-display text-2xl italic -skew-x-12 uppercase tracking-tighter">
                  VIEW_STANDINGS
                </button>
              </div>
            </div>
            
            <div className="relative p-2 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="aspect-video bg-black overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
                  alt="Esports"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-dew-green text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(153,255,0,0.5)] -skew-x-12">
                    <Play fill="black" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                   <div className="px-3 py-1 bg-black/80 backdrop-blur-md border border-dew-green/50 flex items-center gap-3">
                     <Users size={12} className="text-dew-green" />
                     <span className="text-[10px] font-black uppercase tracking-widest">128K_STREAM_NOMINAL</span>
                   </div>
                </div>
              </div>
              
              {/* Floating Stat Bits */}
              <div className="absolute -top-6 -right-6 p-5 bg-dew-green text-black shadow-2xl hidden md:block -skew-x-12">
                <Trophy size={24} />
                <div className="text-[10px] font-black mt-2 leading-none">CHAMPION'S_PROTOCOL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard title="XP_PROGRESSION" desc="Complete daily missions to rank up." icon={Zap} />
        <FeatureCard title="TEAM_PORTAL" desc="Join or create your own pro tactical squad." icon={Users} />
        <FeatureCard title="SQUAD_DROPS" desc="Exclusive merch for high-ranked players." icon={Target} />
        <FeatureCard title="LEADERBOARD" desc="Compete globally for the grand prize." icon={Trophy} />
      </section>
    </div>
  );
}

function FeatureCard({ title, desc, icon: Icon }: any) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 hover:border-dew-green hover:neon-border-glow transition-all group relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border-b border-l border-white/10 group-hover:border-dew-green">
         <ArrowRight size={14} className="opacity-20 group-hover:opacity-100 transition-all font-black" />
      </div>
      <Icon className="mb-6 transition-transform group-hover:scale-110 text-dew-green" size={32} />
      <h3 className="font-display font-black italic text-2xl mb-3 uppercase tracking-tighter text-white neon-text-glow">{title}</h3>
      <p className="text-white/50 text-sm mb-6 font-body leading-relaxed">{desc}</p>
      <div className="hud-line group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}
