import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Search, Filter, Warehouse } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const MOCK_STORES = [
  { id: 1, name: "7-Eleven Mega Hub", address: "123 Energy Dr, Gaming District", lat: 37.42, lng: -122.08, flavors: ["Baja Blast", "Code Red"] },
  { id: 2, name: "Gamer Mart Pro", address: "456 Twitch Ave, Esports Center", lat: 37.45, lng: -122.12, flavors: ["Original", "Pitch Black"] },
  { id: 3, name: "Rush Grocery", address: "789 Adrenaline Blvd, Skate Park", lat: 37.40, lng: -122.05, flavors: ["Major Melon", "Original"] },
];

export default function Locator() {
  const [search, setSearch] = useState('');
  const [selectedStore, setSelectedStore] = useState<any>(null);

  if (!hasValidKey) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-dew-black text-white p-6">
        <div className="text-center max-w-lg p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl">
          <Warehouse size={64} className="mx-auto mb-6 text-dew-green" />
          <h2 className="text-4xl font-display font-black mb-6 uppercase tracking-tighter italic">Google Maps Key Required</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            To find the nearest stash of DEW, you need to provide a Google Maps API Key in the project secrets.
          </p>
          <div className="space-y-4 text-left bg-black/40 p-6 rounded-xl border border-white/5">
            <p className="text-xs font-bold text-dew-green uppercase tracking-widest">Quick Setup Instructions</p>
            <ol className="text-sm text-white/50 space-y-2 list-decimal list-inside">
              <li>Open <strong>Settings</strong> (⚙️ icon) in AI Studio</li>
              <li>Add a secret: <code>GOOGLE_MAPS_PLATFORM_KEY</code></li>
              <li>Paste your API key and save</li>
            </ol>
          </div>
          <p className="mt-8 text-xs text-white/30">The app will rebuild automatically after saving.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dew-black pt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 h-[calc(100vh-80px)] flex flex-col lg:flex-row gap-8">
        
        {/* Search Sidebar */}
        <div className="w-full lg:w-96 flex flex-col gap-6">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
            <h1 className="text-3xl font-display font-black mb-6 tracking-tighter uppercase italic">STASH <span className="text-dew-green">FINDER</span></h1>
            
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input 
                type="text" 
                placeholder="ENTER ZIP OR CITY" 
                className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:border-dew-green focus:outline-none transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 mb-6">
              <button className="flex-1 py-2 px-3 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                <Filter size={14} /> FLAVORS
              </button>
              <button className="flex-1 py-2 px-3 bg-dew-green text-black rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors">
                <Navigation size={14} /> NEAR ME
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10">
            {MOCK_STORES.map(store => (
              <motion.button
                key={store.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedStore(store)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all",
                  selectedStore?.id === store.id 
                    ? "bg-dew-green/10 border-dew-green" 
                    : "bg-white/5 border-white/10 hover:border-white/20"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-display font-bold text-lg leading-tight uppercase tracking-tighter">{store.name}</div>
                  <div className="text-[10px] font-black text-dew-green">2.4 MI</div>
                </div>
                <div className="text-xs text-white/50 mb-4">{store.address}</div>
                <div className="flex flex-wrap gap-2">
                  {store.flavors.map(f => (
                    <span key={f} className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-black uppercase border border-white/10 text-white/40">{f}</span>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-dew-green hover:text-dew-green transition-all">GET DIRECTIONS</button>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 rounded-3xl overflow-hidden border border-white/10 relative">
          <APIProvider apiKey={API_KEY}>
            <Map
              defaultCenter={{ lat: 37.42, lng: -122.08 }}
              defaultZoom={13}
              mapId="DEW_LOCATOR_MAP"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              colorScheme="DARK"
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              style={{ width: '100%', height: '100%' }}
            >
              {MOCK_STORES.map(store => (
                <AdvancedMarker 
                  key={store.id} 
                  position={{ lat: store.lat, lng: store.lng }}
                  onClick={() => setSelectedStore(store)}
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-dew-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={cn(
                      "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all shadow-lg",
                      selectedStore?.id === store.id ? "bg-dew-green border-white scale-125" : "bg-black border-dew-green"
                    )}>
                      <MapPin size={20} className={selectedStore?.id === store.id ? "text-black" : "text-dew-green"} />
                    </div>
                  </div>
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
          
          {/* Overlay HUD elements */}
          <div className="absolute top-6 right-6 flex flex-col gap-4">
             <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
               <div className="text-[10px] font-black text-dew-green mb-1 uppercase">Satellite Active</div>
               <div className="text-white font-display font-bold text-xs">SCANNING REGION 07</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
