import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { Zap, Star, ShieldCheck, Flame, ShoppingCart, ArrowRight } from 'lucide-react';
import { DewCan } from '@/src/components/Can';
import { cn } from '@/src/lib/utils';
import confetti from 'canvas-confetti';

const FLAVORS = [
  {
    id: 1,
    name: "Original Dew",
    color: "#00FF00",
    intensity: 85,
    profile: "Citrus, Bold, Crisp",
    desc: "The one that started it all. High intensity citrus kick that fuels the rush of everyday legends.",
    stats: { energy: 9, taste: 10, rarity: 3 }
  },
  {
    id: 2,
    name: "Code Red",
    color: "#FF0000",
    intensity: 92,
    profile: "Cherry Blast, Smooth",
    desc: "A rush of cherry flavor with the same kick. Targeted precisely for those who need a tactical edge.",
    stats: { energy: 10, taste: 9, rarity: 4 }
  },
  {
    id: 3,
    name: "Baja Blast",
    color: "#00FFF0",
    intensity: 75,
    profile: "Tropical, Lime, Wave",
    desc: "A tropical lime storm. Exotic energy for the explorers and surfers of the digital world.",
    stats: { energy: 8, taste: 10, rarity: 5 }
  },
  {
    id: 4,
    name: "Pitch Black",
    color: "#6600FF",
    intensity: 95,
    profile: "Dark Grape, Citrus",
    desc: "A dark mystery of grape and lime. Optimized for the elite night gamers and developers.",
    stats: { energy: 11, taste: 8, rarity: 6 }
  }
];

export default function Products() {
  const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]);

  const handleBuy = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [activeFlavor.color, '#FFFFFF', '#000000']
    });
  };

  return (
    <div className="min-h-screen pt-12 overflow-hidden bg-dew-black">
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Background Large Typography */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none z-0">
          <h1 className="font-display text-[350px] leading-none italic uppercase -skew-x-12">{activeFlavor.name.split(' ')[0]}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left: 3D Visualization */}
          <div className="h-[400px] lg:h-[700px] relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-dew-green/10 rounded-full blur-[120px] animate-pulse" />
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} intensity={3000} color={activeFlavor.color} />
              <Environment preset="night" />
              <DewCan color={activeFlavor.color} />
              <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} color={activeFlavor.color} />
            </Canvas>
            
            {/* Status indicators */}
            <div className="absolute top-10 right-0 flex flex-col gap-4">
              <motion.div 
                key={activeFlavor.id + 'pulse'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-5 bg-white/5 backdrop-blur-xl border border-white/10 relative"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border-2 border-dew-green flex items-center justify-center text-dew-green font-display text-2xl italic neon-text-glow">
                    {activeFlavor.intensity}
                  </div>
                  <div>
                    <div className="text-[10px] text-dew-green uppercase font-black tracking-[0.2em] mb-1">Intensity_Core</div>
                    <div className="text-xs font-black uppercase text-white tracking-widest">VOLTAGE_MAX_99</div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-1">
                  <div className="w-1 h-1 bg-dew-green rounded-full animate-ping"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Info Panels */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-dew-green rounded-full animate-pulse shadow-[0_0_8px_rgba(153,255,0,0.8)]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dew-green">SESSION_NOMINAL // FLAVOR_PROTOCAL</span>
                </div>
                
                <h1 className="text-7xl md:text-9xl font-display font-black italic tracking-tighter mb-6 uppercase neon-text-glow leading-none">
                  {activeFlavor.name}
                </h1>
                
                <p className="text-white/80 text-base mb-10 leading-relaxed max-w-lg font-body border-l-2 border-dew-green pl-6">
                  {activeFlavor.desc}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-12">
                  <Stat label="ENERGY" val={activeFlavor.stats.energy} color={activeFlavor.color} />
                  <Stat label="TASTE" val={activeFlavor.stats.taste} color={activeFlavor.color} />
                  <Stat label="RARITY" val={activeFlavor.stats.rarity} color={activeFlavor.color} />
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: activeFlavor.color, color: '#000' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBuy}
                    className="flex-1 bg-dew-green text-black font-display text-2xl py-5 italic -skew-x-12 uppercase tracking-tighter neon-border-glow transition-all"
                  >
                    BUY_NOW
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: activeFlavor.color, color: activeFlavor.color }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 border border-white/20 flex items-center justify-center text-white hover:bg-white/5 transition-all -skew-x-12"
                  >
                    <Flame />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Flavor Selector */}
            <div className="mt-20 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {FLAVORS.map(flavor => (
                <button
                  key={flavor.id}
                  onClick={() => setActiveFlavor(flavor)}
                  className={cn(
                    "flex-shrink-0 w-36 py-6 border transition-all flex flex-col items-center justify-center gap-4 relative overflow-hidden",
                    activeFlavor.id === flavor.id 
                      ? "border-dew-green bg-dew-green/10 neon-border-glow" 
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  )}
                >
                   {activeFlavor.id === flavor.id && (
                     <div className="absolute top-0 left-0 w-full h-[2px] bg-dew-green animate-pulse" />
                   )}
                  <div className="w-12 h-12 border border-white/20 shadow-xl" style={{ backgroundColor: flavor.color }} />
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest text-center italic",
                    activeFlavor.id === flavor.id ? "text-dew-green" : "text-white/40"
                  )}>
                    {flavor.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Stat({ label, val, color }: any) {
  return (
    <div className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
      <div className="text-[10px] text-dew-green uppercase font-black mb-3 tracking-widest leading-none">{label}</div>
      <div className="flex flex-col gap-1">
        {[1,2,3,4,5,6,7,8].map(i => (
          <div 
            key={i} 
            className="w-full h-1" 
            style={{ backgroundColor: i <= val ? color : 'rgba(255,255,255,0.05)' }}
          />
        ))}
      </div>
    </div>
  );
}
