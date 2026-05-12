import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, Music, Zap, User, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FEED_ITEMS = [
  { id: 1, user: "RiderX", action: "Nailed the 720 over the Baja Blast jump!", img: "https://images.unsplash.com/photo-1533560272473-77405299408d?auto=format&fit=crop&q=80&w=1000", likes: "24K", comments: "1.2K" },
  { id: 2, user: "NeonGamer", action: "New setup finally complete. Blue Shock status.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000", likes: "15K", comments: "892" },
  { id: 3, user: "DewFanatic", action: "Collection complete. Every limited can secured.", img: "https://images.unsplash.com/photo-1520156555610-746765275815?auto=format&fit=crop&q=80&w=1000", likes: "32K", comments: "2.4K" },
];

export default function Social() {
  return (
    <div className="min-h-screen bg-dew-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
           
           {/* Feed Section */}
           <div className="flex-1 space-y-12 w-full">
              <div className="flex justify-between items-center mb-12">
                 <h1 className="text-5xl md:text-7xl font-display font-black italic uppercase tracking-tighter leading-none uppercase">
                   REBEL <span className="text-dew-green">FEED</span>
                 </h1>
                 <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-dew-green">FOR YOU</button>
                    <button className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40">FOLLOWING</button>
                 </div>
              </div>

              {FEED_ITEMS.map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden"
                >
                   <div className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border-2 border-dew-green p-1">
                        <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center text-white/20"><User size={20} /></div>
                      </div>
                      <div>
                        <div className="font-display font-black uppercase italic tracking-tighter text-white">{item.user}</div>
                        <div className="text-[10px] font-black text-dew-green uppercase tracking-widest">VERIFIED REBEL</div>
                      </div>
                   </div>

                   <div className="aspect-[4/3] bg-black relative group cursor-pointer overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Action" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-20 h-20 rounded-full bg-dew-green text-black flex items-center justify-center shadow-2xl">
                          <Play fill="black" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                        <Music size={14} className="text-dew-green animate-spin-slow" />
                        <span className="text-[10px] font-black uppercase tracking-widest">DEW_THE_RUSH_REMIX.MP3</span>
                      </div>
                   </div>

                   <div className="p-8">
                      <p className="text-xl font-medium mb-8 leading-tight italic">"{item.action}"</p>
                      <div className="flex gap-8">
                        <SocialBtn icon={Heart} label={item.likes} />
                        <SocialBtn icon={MessageCircle} label={item.comments} />
                        <SocialBtn icon={Share2} label="SHARE" />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Sidebar Links */}
           <div className="w-full lg:w-80 space-y-8 sticky top-24">
              <div className="bg-dew-green/10 border border-dew-green/30 p-8 rounded-[2rem]">
                 <h3 className="text-xl font-display font-black italic uppercase mb-6 tracking-tighter">TRENDING SQUADS</h3>
                 <div className="space-y-4">
                    <TrendingHub name="#DEW_OR_DIE" count="2.4M posts" color="bg-dew-green" />
                    <TrendingHub name="#BAJA_BEATS" count="1.1M posts" color="bg-dew-cyan" />
                    <TrendingHub name="#LEVELUP_DROP" count="890K posts" color="bg-white" />
                 </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                 <h3 className="text-xl font-display font-black italic uppercase mb-6 tracking-tighter leading-tight">JOIN THE COMMUNITY HUB</h3>
                 <p className="text-white/40 text-xs mb-8 leading-relaxed">Connect with over 12 million members across Discord, Reddit, and Twitch.</p>
                 <button className="w-full py-4 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest hover:bg-dew-green transition-all flex items-center justify-center gap-2">
                   ENTER DISCORD <ExternalLink size={14} />
                 </button>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}

function SocialBtn({ icon: Icon, label }: any) {
  return (
    <button className="flex items-center gap-2 text-white/40 hover:text-dew-green transition-colors group">
       <Icon size={24} />
       <span className="text-xs font-black uppercase tracking-[0.2em]">{label}</span>
    </button>
  );
}

function TrendingHub({ name, count, color }: any) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
       <div className={cn("w-2 h-2 rounded-full", color)} />
       <div>
          <div className="text-xs font-black uppercase group-hover:text-dew-green transition-colors">{name}</div>
          <div className="text-[10px] text-white/40 font-bold">{count}</div>
       </div>
       <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
    </div>
  );
}

function ExternalLink({ size }: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
  );
}
