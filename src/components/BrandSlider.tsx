import { motion } from 'framer-motion';
import { 
  Shield, 
  Cpu, 
  Activity, 
  Zap, 
  Globe 
} from 'lucide-react';

const brands = [
  { name: 'TechFlow', icon: Zap },
  { name: 'Quantum', icon: Cpu },
  { name: 'Nexus', icon: Shield },
  { name: 'Aura', icon: Activity },
  { name: 'Summit', icon: Globe },
];

const BrandSlider = () => {
  // Triple the items to ensure seamless loop
  const displayBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-sm font-bold text-grayText uppercase tracking-[0.3em] text-center opacity-60">
          Trusted by ambitious brands worldwide
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust based on width of brands list
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 pr-12 min-w-max"
        >
          {displayBrands.map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-8 py-4 glass-card border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.05]"
            >
              <brand.icon size={24} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="text-xl font-bold tracking-tighter text-white opacity-40 group-hover:opacity-100 transition-opacity">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade Gradients for Luxury Look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default BrandSlider;
