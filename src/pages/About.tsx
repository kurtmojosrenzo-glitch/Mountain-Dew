import React from 'react';
import { motion } from 'motion/react';
import { History, Zap, Shield, Trophy, Mountain, Users, Globe, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 overflow-hidden">
      
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden">
         <div className="absolute inset-0 z-0 scale-110">
            <img 
               src="https://images.unsplash.com/photo-1541625602330-2277a1c4b6c3?auto=format&fit=crop&q=80&w=2070" 
               className="w-full h-full object-cover opacity-30 grayscale blur-[4px]"
               alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
         </div>
         
         <div className="relative z-10 text-center max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
               The Legend of Intensity
            </motion.div>
            
            <h1 className="text-7xl md:text-9xl font-display font-black italic uppercase leading-[0.85] tracking-tighter mb-10">
              BORN IN THE <br /> <span className="text-dew-green">HIGHLANDS</span>
            </h1>
            
            <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed">
              We didn't just create a drink. We sparked a movement. For over 80 years, we've fueled the adrenaline of those who refuse to stand still.
            </p>
         </div>
         
         {/* Floating Elements */}
         <div className="absolute bottom-10 left-10 flex gap-4 text-xs font-black opacity-20">
            <span>EST. 1940</span>
            <span>•</span>
            <span>INTENSITY CERTIFIED</span>
         </div>
      </section>

      {/* Timeline Story */}
      <section className="max-w-7xl mx-auto px-4 py-32">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            <div className="space-y-40">
               <TimelineItem 
                 year="1940" 
                 title="The Distillers Choice" 
                 desc="Created in Knoxville, Tennessee, as the first 'hillbilly soda' mixer, designed with extra bite."
                 icon={Mountain}
               />
               <TimelineItem 
                 year="1964" 
                 title="Pepsico Integration" 
                 desc="Bold expansion takes the Dew nationwide, fueling a new generation of high-energy consumers."
                 icon={Shield}
               />
               <TimelineItem 
                 year="2004" 
                 title="Baja Blast Invasion" 
                 desc="The first ever restaurant-exclusive flavor creates a cult following that changes beverage history."
                 icon={Zap}
               />
               <TimelineItem 
                 year="TODAY" 
                 title="The Meta Future" 
                 desc="Leading the charge in gaming, esports, and extreme sports culture globally."
                 icon={Globe}
               />
            </div>

            <div className="sticky top-40 h-fit bg-white/5 border border-white/10 p-12 rounded-[3rem]">
               <h3 className="text-3xl font-display font-black italic uppercase mb-8 tracking-tighter text-dew-green leading-none">
                 OUR <br /> MISSION
               </h3>
               <p className="text-white/60 text-lg mb-10 leading-relaxed italic">
                 "To provide the fuel for the boldest moments in human potential. We exist at the intersection of energy, culture, and pure adrenaline."
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <div className="text-4xl font-display font-black italic text-white mb-2">100M+</div>
                     <div className="text-[10px] font-black uppercase text-white/40 tracking-widest leading-none">REBELS WORLDWIDE</div>
                  </div>
                  <div>
                     <div className="text-4xl font-display font-black italic text-white mb-2">50+</div>
                     <div className="text-[10px] font-black uppercase text-white/40 tracking-widest leading-none">FLAVOR VARIANTS</div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* Culture Values */}
      <section className="bg-dew-green py-32 text-black">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase text-center mb-20 tracking-tighter">
               WHAT WE <span className="text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">STAND FOR</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <ValueBox 
                 title="REBELLION" 
                 desc="Challenging the status quo since day one. If it's safe, we're not doing it."
               />
               <ValueBox 
                 title="INTENSITY" 
                 desc="Whatever we do, we do it at 100%. No filters, no holding back, just raw energy."
               />
               <ValueBox 
                 title="COMMUNITY" 
                 desc="A global squad of gamers, athletes, and creators. We win together."
               />
            </div>
         </div>
      </section>

    </div>
  );
}

function TimelineItem({ year, title, desc, icon: Icon }: any) {
  return (
    <div className="group relative">
       <div className="text-8xl font-display font-black italic text-white/5 absolute -top-12 -left-8 pointer-events-none group-hover:text-dew-green/10 transition-colors">{year}</div>
       <Icon className="text-dew-green mb-6" size={48} />
       <h3 className="text-4xl font-display font-black italic uppercase tracking-tighter mb-4">{title}</h3>
       <p className="text-white/40 text-lg leading-relaxed max-w-sm">{desc}</p>
    </div>
  );
}

function ValueBox({ title, desc }: any) {
  return (
    <div className="p-12 border-2 border-black rounded-[2rem] hover:bg-black hover:text-dew-green transition-all cursor-default">
       <h3 className="text-4xl font-display font-black italic uppercase tracking-tighter mb-4">{title}</h3>
       <p className="font-bold text-sm opacity-60">{desc}</p>
    </div>
  );
}
