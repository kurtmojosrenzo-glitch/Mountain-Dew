import React, { Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Ghost, Zap, Trophy, MapPin, Gift, Star, ShoppingBag, Info, Users, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// Lazy load pages for performance
const HomePage = React.lazy(() => import('./pages/Home'));
const ProductsPage = React.lazy(() => import('./pages/Products'));
const LocatorPage = React.lazy(() => import('./pages/Locator'));
const GamingPage = React.lazy(() => import('./pages/Gaming'));
const ExtremePage = React.lazy(() => import('./pages/Extreme'));
const PromotionsPage = React.lazy(() => import('./pages/Promotions'));
const RewardsPage = React.lazy(() => import('./pages/Rewards'));
const MerchPage = React.lazy(() => import('./pages/Merch'));
const AboutPage = React.lazy(() => import('./pages/About'));
const SocialPage = React.lazy(() => import('./pages/Social'));

const NAV_LINKS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Flavors', path: '/products', icon: Zap },
  { name: 'Gaming', path: '/gaming', icon: Trophy },
  { name: 'Extreme', path: '/extreme', icon: Ghost },
  { name: 'Locator', path: '/locator', icon: MapPin },
  { name: 'Win', path: '/promotions', icon: Gift },
  { name: 'Rewards', path: '/rewards', icon: Star },
  { name: 'Shop', path: '/merch', icon: ShoppingBag },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-dew-black overflow-x-hidden font-sans">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 scanline z-[60] pointer-events-none opacity-30" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col group leading-none">
            <span className="text-3xl font-display italic tracking-tighter text-dew-green group-hover:neon-text-glow transition-all">
              MTN DEW
            </span>
            <span className="text-[8px] tracking-[0.3em] font-bold opacity-40 text-dew-green">CORE_PROTOCOL_V4.2</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "uppercase font-display italic font-bold text-xs tracking-widest transition-all hover:text-white flex items-center gap-2",
                  location.pathname === link.path ? "text-dew-green scale-110 neon-text-glow" : "text-dew-green/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/rewards" className="px-4 py-1 border border-dew-green rounded-sm neon-border-glow hover:bg-dew-green hover:text-black transition-all">
               <span className="text-[10px] font-black uppercase tracking-widest">LOG_IN_REWARDS</span>
            </Link>
          </div>

          <button 
            className="lg:hidden text-dew-green hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-black uppercase italic text-white hover:text-dew-green transition-colors flex items-center gap-4"
                >
                  <link.icon size={32} className="text-dew-green" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div className="flex items-center justify-center h-[calc(100vh-80px)]">
              <Zap className="text-dew-green animate-pulse" size={64} />
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/locator" element={<LocatorPage />} />
              <Route path="/gaming" element={<GamingPage />} />
              <Route path="/extreme" element={<ExtremePage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/merch" element={<MerchPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/social" element={<SocialPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="px-10 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest font-bold z-40 bg-[#050505] mt-20">
        <div className="flex flex-col md:flex-row gap-6 uppercase mb-4 md:mb-0">
          <Link to="/" className="text-dew-green hover:neon-text-glow transition-all italic font-display text-lg">MTN DEW</Link>
          <div className="flex gap-6 items-center">
            <span className="text-dew-green">#DEWENERGY</span>
            <Link to="/about" className="opacity-50 hover:opacity-100 transition-opacity">TERMS_OF_USE</Link>
            <Link to="/about" className="opacity-50 hover:opacity-100 transition-opacity">PRIVACY_PROTOCOL</Link>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="opacity-50 uppercase tracking-[0.2em]">SYSTEMS_NOMINAL</span>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-dew-green rounded-sm neon-border-glow"></div>
            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
