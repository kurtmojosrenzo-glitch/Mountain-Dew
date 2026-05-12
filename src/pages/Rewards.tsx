import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Zap, Target, ArrowRight, Gift, Trophy, Hexagon, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Rewards() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Profile Stats Header */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 bg-white/5 border border-white/10 rounded-[2rem] p-10 flex items-center gap-10">
            <div className="relative">
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-dew-green p-2">
                  <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                    <User size={48} className="text-white/20" />
                  </div>
               </div>
               <div className="absolute -bottom-2 right-0 bg-dew-green text-black font-black px-3 py-1 rounded-full text-sm">LVL 42</div>
            </div>
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-dew-green/20 text-dew-green text-[10px] font-black uppercase tracking-widest mb-4 rounded">
                  <Shield size={14} /> ELITE REBEL STATUS
               </div>
               <h1 className="text-4xl md:text-5xl font-display font-black italic tracking-tighter mb-2 uppercase">REBEL_LEADER_01</h1>
               <div className="w-full md:w-80 h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    className="h-full bg-dew-green shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  />
               </div>
               <div className="flex justify-between mt-2 text-[10px] font-black text-white/40 uppercase tracking-widest">
                  <span>2,450 XP TO NEXT TIER</span>
                  <span className="text-white">RANK: 1,421</span>
               </div>
            </div>
          </div>

          <StatBox label="DEW COINS" val="12,450" icon={Star} color="text-yellow-400" />
          <StatBox label="MISSIONS DONE" val="84" icon={Target} color="text-white" />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Daily Missions */}
           <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
              <h2 className="text-2xl font-display font-black italic uppercase mb-8 tracking-tighter flex items-center gap-3">
                 <Zap size={24} className="text-dew-green" /> DAILY MISSIONS
              </h2>
              <div className="space-y-6">
                 <MissionItem title="Share a Flavor" xp="100" done={true} />
                 <MissionItem title="Watch Esports Livestream" xp="250" progress={60} />
                 <MissionItem title="Scan 2 Can QR Codes" xp="500" progress={0} />
                 <MissionItem title="Find a Nearby Retailer" xp="200" done={false} />
              </div>
           </div>

           {/* Redeem Shop */}
           <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
              <div className="flex justify-between items-center mb-10">
                 <h2 className="text-2xl font-display font-black italic uppercase tracking-tighter">REDEEM BOUNTIES</h2>
                 <button className="text-xs font-black uppercase text-dew-green flex items-center gap-2 hover:translate-x-1 transition-transform">
                    VIEW ALL <ArrowRight size={14} />
                 </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <BountyCard 
                   title="ELITE GAMER HOODIE" 
                   cost="5,000" 
                   img="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000" 
                 />
                 <BountyCard 
                   title="BAJA BLAST KEYCAPS" 
                   cost="2,500" 
                   img="https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&q=80&w=1000"
                 />
              </div>
           </div>

        </div>

        {/* Progression Map */}
        <section className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute rotate-45 scale-150 top-0 left-0 text-[100px] font-black uppercase tracking-tighter italic">REWARDS • REWARDS • REWARDS</div>
           </div>
           
           <h2 className="text-center text-4xl font-display font-black italic uppercase mb-16 tracking-tighter relative z-10">
              PROGRESSION <span className="text-dew-green">TIERS</span>
           </h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
              <Tier icon={Zap} label="RECRUIT" active />
              <div className="hidden md:block flex-1 h-1 bg-dew-green/20" />
              <Tier icon={Shield} label="OFFICER" active />
              <div className="hidden md:block flex-1 h-1 bg-dew-green/20" />
              <Tier icon={Trophy} label="COMMANDER" active />
              <div className="hidden md:block flex-1 h-1 bg-white/10" />
              <Tier icon={Hexagon} label="THE LEGEND" />
           </div>
        </section>

      </div>
    </div>
  );
}

function StatBox({ label, val, icon: Icon, color }: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:border-dew-green/50 transition-colors">
       <Icon className={cn("mb-6", color)} size={32} />
       <div className="text-[10px] font-black text-white/40 uppercase mb-2 tracking-widest">{label}</div>
       <div className="text-4xl font-display font-black italic tracking-tighter">{val}</div>
    </div>
  );
}

function MissionItem({ title, xp, done, progress }: any) {
  return (
    <div className={cn(
      "p-6 rounded-2xl border transition-all",
      done ? "bg-dew-green/10 border-dew-green/50" : "bg-black/40 border-white/5"
    )}>
       <div className="flex justify-between items-center mb-4">
          <span className={cn("text-sm font-bold uppercase", done ? "text-dew-green" : "text-white")}>{title}</span>
          <span className="text-[10px] font-black bg-white/5 px-2 py-1 rounded text-white/40">+{xp} XP</span>
       </div>
       {progress !== undefined && !done && (
         <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-dew-cyan" style={{ width: `${progress}%` }} />
         </div>
       )}
       {done && <div className="text-[10px] font-black text-dew-green uppercase tracking-widest">CLAIMED</div>}
    </div>
  );
}

function BountyCard({ title, cost, img }: any) {
  return (
    <div className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10">
       <img src={img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt={title} />
       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
       <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-xl font-display font-black italic uppercase tracking-tighter mb-2">{title}</h3>
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-1 text-dew-green">
                <Star size={16} />
                <span className="text-sm font-black">{cost} COINS</span>
             </div>
             <button className="bg-white text-black font-black px-4 py-2 rounded text-[10px] uppercase tracking-widest hover:bg-dew-green transition-colors">REDEEM</button>
          </div>
       </div>
    </div>
  );
}

function Tier({ icon: Icon, label, active }: any) {
  return (
    <div className="flex flex-col items-center gap-4">
       <div className={cn(
         "w-20 h-20 rounded-2xl border-2 flex items-center justify-center transition-all",
         active ? "bg-dew-green border-white text-black shadow-[0_0_20px_rgba(0,255,0,0.5)]" : "bg-black border-white/20 text-white/20"
       )}>
          <Icon size={32} />
       </div>
       <div className={cn("text-xs font-black uppercase tracking-widest", active ? "text-white" : "text-white/20")}>{label}</div>
    </div>
  );
}
