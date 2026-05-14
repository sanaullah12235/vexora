import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GlassCard } from './UI';

const testimonials = [
  {
    name: 'David Miller',
    role: 'CEO at QuantumTech',
    content: 'VEXORA transformed our vision into a stunning digital reality. Their attention to detail and engineering prowess is unmatched in the industry.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Sophia Williams',
    role: 'Founder of Aura Fashion',
    content: 'The e-commerce platform built by VEXORA increased our conversion rate by 45%. Truly a world-class team with a deep understanding of UX.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'James Wilson',
    role: 'CTO at FintechPro',
    content: 'Highly professional and technical team. They delivered our mobile app ahead of schedule and with features we hadn\'t even considered.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-12 text-center relative overflow-hidden">
             <Quote className="absolute top-6 left-6 text-primary/10 w-24 h-24 -z-10" />
             <div className="flex justify-center gap-1 mb-8">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} size={18} className="fill-accent text-accent" />
               ))}
             </div>
             <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 italic">
               "{testimonials[index].content}"
             </p>
             <div className="flex flex-col items-center">
               <img 
                 src={testimonials[index].avatar} 
                 alt={testimonials[index].name} 
                 className="w-16 h-16 rounded-full border-2 border-primary mb-4"
               />
               <h4 className="text-xl font-bold">{testimonials[index].name}</h4>
               <p className="text-grayText">{testimonials[index].role}</p>
             </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
