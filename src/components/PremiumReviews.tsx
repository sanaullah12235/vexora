import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { GlassCard } from './UI';

const testimonials = [
  {
    name: 'Karthik Rao',
    role: 'Premium Client',
    content: 'The level of professionalism and technical expertise at VEXORA is truly world-class. They delivered a solution that exceeded all our expectations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Sneha Reddy',
    role: 'Premium Client',
    content: 'VEXORA transformed our digital presence. The new platform is not only beautiful but incredibly fast and user-friendly. A complete game changer.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Vikram Singh',
    role: 'Premium Client',
    content: 'Working with VEXORA was the best decision for our startup. Their agile approach and design-first mindset helped us launch in record time.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Meghana Iyer',
    role: 'Premium Client',
    content: 'The attention to detail and premium aesthetics that VEXORA brings to the table is unmatched. They truly understand luxury and performance.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
];

const PremiumReviews = () => {
  // Triple items for seamless loop
  const displayReviews = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="w-full relative py-12 overflow-hidden group">
      <div className="flex">
        <motion.div
          animate={{ x: [0, -1800] }} // Adjust based on card width + gap
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 pr-8 min-w-max hover:[animation-play-state:paused]"
        >
          {displayReviews.map((review, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="w-[400px] max-w-[90vw]"
            >
              <GlassCard className="h-full p-8 border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                
                <p className="text-lg text-grayText italic leading-relaxed mb-8 h-24 overflow-hidden">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img 
                    src={review.image} 
                    alt={`Testimonial from ${review.name} - VEXORA Client`} 
                    loading="lazy"
                    className="w-14 h-14 rounded-full border-2 border-primary/30 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg">{review.name}</h4>
                    <p className="text-accent text-sm font-medium tracking-widest uppercase">
                      {review.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Side Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default PremiumReviews;
