import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const FadeIn = ({ children, delay = 0, direction = 'up', distance = 20 }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', distance?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`glass-card p-8 group hover:border-primary/30 ${className}`}>
      {children}
    </div>
  );
};

export const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <section id={id} className={`py-24 px-6 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export const Glow = ({ color = 'purple', className = '' }: { color?: 'purple' | 'cyan', className?: string }) => {
  return (
    <div className={`${color === 'purple' ? 'glow-purple' : 'glow-cyan'} ${className}`} />
  );
};

export const Accordion = ({ items }: { items: { q: string, a: string }[] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="glass-card overflow-hidden">
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full p-6 text-left flex items-center justify-between"
          >
            <span className="text-lg font-bold">{item.q}</span>
            <motion.span 
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              className="text-accent"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-grayText leading-relaxed border-t border-white/5">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};
