import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Zap, Timer, Flame, Share2, ArrowRight, RefreshCw, Trophy, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import confetti from 'canvas-confetti';

export default function Promotions() {
  const [timeLeft, setTimeLeft] = useState(3600 * 24 + 4321);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSpin = () => {
    setIsSpinning(true);
    setResult(null);
    setTimeout(() => {
      setIsSpinning(false);
      const options = ['EXCLUSIVE HOODIE', '100 XP BOOST', 'BOTTLE BOX', 'RETRY', 'LEGENDARY DECAL'];
      const win = options[Math.floor(Math.random() * options.length)];
      setResult(win);
      if (win !== 'RETRY') {
        confetti({
          particleCount: 150,
          spread: 70,
          colors: ['#00FF00', '#CCFF00', '#FFFFFF']
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dew-black pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Urgent Header */}
        <div className="bg-dew-green p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 mb-20 border-4 border-black">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-dew-green text-[10px] font-black uppercase tracking-widest mb-4 rounded">
                <Timer size={14} /> LIVE DROP
             </div>
             <h1 className="text-6xl md:text-8xl font-display font-black text-black italic tracking-tighter leading-none mb-4 uppercase">
                LIMITED <br /> <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">OFFER</span>
             </h1>
             <p className="text-black/60 font-bold max-w-sm">
                Enter the daily draw before the vault seals. Legendary gear is up for grabs for the next few hours.
             </p>
          </div>
          <div className="flex flex-col items-center">
             <div className="text-[12px] font-black text-black/40 uppercase mb-2">Vault Seals In</div>
             <div className="text-6xl md:text-8xl font-display font-black text-black italic tracking-tighter">
                {formatTime(timeLeft)}
             </div>
             <button className="mt-8 w-full py-5 bg-black text-dew-green font-black rounded-2xl border-b-4 border-white/20 hover:translate-y-1 transition-transform uppercase tracking-widest italic">
                CLAIM YOUR ENTRY
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Spin Section */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
                <Sparkles size={32} className="text-dew-green animate-pulse" />
            </div>
            
            <h2 className="text-4xl font-display font-black italic uppercase italic tracking-tighter mb-12 text-center">
               DAILY <span className="text-dew-green">SPIN-TO-WIN</span>
            </h2>
            
            <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12">
               <motion.div 
                 animate={isSpinning ? { rotate: 3600 } : { rotate: 0 }}
                 transition={{ duration: 2, ease: "circInOut" }}
                 className="w-full h-full rounded-full border-8 border-dew-green flex items-center justify-center relative bg-black shadow-[0_0_50px_rgba(0,255,0,0.2)]"
               >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-full bg-white/10" />
                    <div className="w-full h-1 bg-white/10" />
                  </div>
                  <Gift size={64} className="text-dew-green opacity-20" />
               </motion.div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-dew-green z-20" />
            </div>

            <AnimatePresence>
               {result && (
                 <motion.div 
                   initial={{ scale: 0.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="mb-8 p-4 bg-dew-green text-black font-black uppercase text-2xl italic tracking-tighter rounded-xl"
                 >
                   WON: {result}
                 </motion.div>
               )}
            </AnimatePresence>

            <button 
              onClick={handleSpin}
              disabled={isSpinning}
              className={cn(
                "px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] italic transition-all",
                isSpinning ? "bg-white/10 text-white/20" : "bg-dew-green text-black shadow-[0_0_30px_rgba(0,255,0,0.4)] hover:scale-105"
              )}
            >
              {isSpinning ? 'SPINNING...' : 'IGNITE THE SPIN'}
            </button>
          </div>

          {/* Social Proof / Sidebar */}
          <div className="space-y-8">
             <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                <h3 className="text-xl font-display font-black italic uppercase mb-6 tracking-tighter flex items-center gap-2">
                   <Trophy size={18} className="text-dew-lime" /> RECENT WINS
                </h3>
                <div className="space-y-4">
                   <WinItem name="GamerX99" prize="Gaming Rig" time="2m ago" />
                   <WinItem name="DewQueen" prize="1 Year Flavor Box" time="5m ago" />
                   <WinItem name="VoltRush" prize="Exclusive Merch" time="12m ago" />
                   <WinItem name="NeonWraith" prize="Trip to Dew Tour" time="1h ago" />
                </div>
             </div>

             <div className="bg-[linear-gradient(45deg,#00FF00,#CCFF00)] p-8 rounded-[2rem] text-black">
                <h3 className="text-2xl font-display font-black italic uppercase mb-4 tracking-tighter leading-none">
                  BOOST YOUR <br /> CHANCES
                </h3>
                <p className="font-bold text-sm mb-6 opacity-60">Invite a fellow rebel to join the squad and get 5 extra spins instantly.</p>
                <button className="w-full py-4 bg-black text-white font-black rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-3">
                   <Share2 size={16} /> SHARE TO WIN
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function WinItem({ name, prize, time }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
       <div>
         <div className="text-xs font-black uppercase text-white leading-none mb-1">{name}</div>
         <div className="text-[10px] text-white/40 uppercase tracking-widest">{prize}</div>
       </div>
       <div className="text-[10px] font-black text-dew-green">{time}</div>
    </div>
  );
}
