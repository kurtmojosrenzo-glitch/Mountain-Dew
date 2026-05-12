import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Search, Filter, ArrowRight, Star, Heart, ZoomIn, ShoppingCart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const PRODUCTS = [
  { id: 1, name: "REBEL HUD HOODIE", price: 59.99, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000", tag: "NEW" },
  { id: 2, name: "GAMER PRO JERSEY", price: 74.99, img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000", tag: "BESTSELLER" },
  { id: 3, name: "DEW SKATE DECK", price: 85.00, img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=1000", tag: "LIMITED" },
  { id: 4, name: "NEON GAMING CAP", price: 29.99, img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=1000", tag: "COLLECTIBLE" },
  { id: 5, name: "VOLTAGE BACKPACK", price: 110.00, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000", tag: "GEAR" },
  { id: 6, name: "XP BOOST BRACELET", price: 15.00, img: "https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&q=80&w=1000", tag: "ACCESSORY" },
];

export default function Merch() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <div className="min-h-screen bg-dew-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header HUD */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/10 pb-16">
          <div>
            <div className="flex items-center gap-2 text-dew-green mb-4">
               <ShoppingBag size={20} />
               <span className="text-xs font-black uppercase tracking-[0.2em]">Supply Depot Activated</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-black italic tracking-tighter leading-none uppercase">
              DEW <span className="text-dew-green">GEAR</span>
            </h1>
          </div>
          <div className="flex gap-4">
             <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Search size={18} className="text-white/40" />
                <input placeholder="SEARCH GEAR" className="bg-transparent border-none outline-none text-xs font-bold uppercase w-40" />
             </div>
             <button className="bg-dew-green p-3 rounded-xl text-black hover:bg-white transition-colors">
                <Filter size={18} />
             </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
           {['ALL', 'APPAREL', 'GAMING', 'ACCESSORIES', 'LIMITED'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={cn(
                 "px-8 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase border transition-all",
                 activeTab === tab ? "bg-dew-green border-dew-green text-black" : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
               )}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {PRODUCTS.map(product => (
             <motion.div 
               key={product.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               whileHover={{ y: -10 }}
               className="group bg-white/5 border border-white/5 rounded-3xl overflow-hidden relative"
             >
                <div className="aspect-[4/5] relative overflow-hidden">
                   <img 
                     src={product.img} 
                     alt={product.name} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                   
                   <div className="absolute top-6 left-6 px-3 py-1 bg-dew-green text-black text-[10px] font-black uppercase rounded">
                      {product.tag}
                   </div>
                   
                   <div className="absolute top-6 right-6 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform">
                      <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-dew-green hover:text-black transition-colors">
                         <Heart size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-dew-green hover:text-black transition-colors">
                         <ZoomIn size={18} />
                      </button>
                   </div>
                </div>

                <div className="p-8">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display font-black italic text-2xl uppercase tracking-tighter leading-tight max-w-[70%]">{product.name}</h3>
                      <div className="text-xl font-display font-black text-dew-green">${product.price}</div>
                   </div>
                   
                   <button className="w-full py-4 bg-black border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-xl flex items-center justify-center gap-3 hover:bg-dew-green hover:text-black hover:border-dew-green transition-all">
                      <ShoppingCart size={16} /> ADD TO CART
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Promo Banner */}
        <section className="mt-20 p-12 lg:p-20 bg-dew-green rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border-b-8 border-black shadow-[0_0_50px_rgba(0,255,0,0.2)]">
           <div className="relative z-10 max-w-lg">
              <div className="text-xs font-black text-black/40 uppercase mb-4 tracking-[0.3em]">Exclusive Access</div>
              <h2 className="text-6xl lg:text-7xl font-display font-black text-black italic uppercase leading-none mb-6">
                DROP <br /> <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">DEW 04</span>
              </h2>
              <p className="text-black/60 font-bold mb-8">Collector's items available only for the next 48 hours. Secure yours before they're gone for good.</p>
              <button className="bg-black text-dew-green px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3">
                 SHOP THE DROP <ArrowRight size={16} />
              </button>
           </div>
           
           <div className="relative z-10 w-full md:w-1/2 flex justify-center">
              <motion.div 
                animate={{ rotate: 10, y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-80 bg-black/10 rounded-3xl border-4 border-black border-dashed flex items-center justify-center"
              >
                 <ShoppingBag size={80} className="text-black opacity-20" />
              </motion.div>
           </div>
        </section>

      </div>
    </div>
  );
}
