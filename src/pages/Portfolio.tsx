import { useState } from 'react';
import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { Eye, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Quantum Enterprise',
    category: 'Business Websites',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    desc: 'High-performance corporate platform with advanced analytics integration.',
    tech: ['React', 'Next.js', 'Tailwind']
  },
  {
    id: 2,
    title: 'Aura Luxury Store',
    category: 'E-commerce Stores',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
    desc: 'Premium fashion experience with seamless headless checkout.',
    tech: ['Shopify', 'Hydrogen', 'Oxygen']
  },
  {
    id: 3,
    title: 'Nova Banking App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    desc: 'Fintech application featuring real-time transactions and biometric security.',
    tech: ['React Native', 'Firebase']
  },
  {
    id: 4,
    title: 'Nexus Data Hub',
    category: 'SaaS Dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    desc: 'Complex data visualization system for enterprise-level monitoring.',
    tech: ['D3.js', 'TypeScript', 'Node.js']
  },
  {
    id: 5,
    title: 'Summit Peak',
    category: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c05d?auto=format&fit=crop&q=80&w=800',
    desc: 'Ultra-modern marketing page for a high-growth travel startup.',
    tech: ['Framer Motion', 'Vite']
  },
  {
    id: 6,
    title: 'HealthPulse',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    desc: 'AI-driven wellness companion with personalized tracking.',
    tech: ['Flutter', 'TensorFlow']
  }
];

const categories = ['All', 'Business Websites', 'E-commerce Stores', 'Mobile Apps', 'SaaS Dashboards', 'Landing Pages'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="text-center relative overflow-visible pt-32">
        <Glow color="cyan" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />
        <FadeIn>
          <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">OUR PORTFOLIO</span>
          <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tighter">Our <span className="text-gradient italic">Work</span></h1>
          <p className="text-xl text-grayText max-w-3xl mx-auto leading-relaxed">
            Explore recent projects crafted by VEXORA. We combine technical excellence with artistic vision to deliver digital perfection.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl border font-bold uppercase tracking-widest text-xs transition-all duration-500 ${
                  filter === cat 
                  ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' 
                  : 'bg-white/5 border-white/10 text-grayText hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="group p-0 overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-700">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} - ${project.category} project by VEXORA`} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Hover Overlay - Now the entire overlay is a Link to fix single-click navigation */}
                      <Link 
                        to="/contact" 
                        className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md flex flex-col justify-center items-center text-center p-12 translate-y-4 group-hover:translate-y-0 z-20 cursor-pointer"
                      >
                         <span className="text-accent font-black tracking-widest text-[10px] uppercase mb-4">{project.category}</span>
                         <h3 className="text-4xl font-bold mb-4 tracking-tight">{project.title}</h3>
                         <p className="text-grayText text-lg leading-relaxed mb-8 max-w-sm">{project.desc}</p>
                         
                         <div className="flex flex-wrap justify-center gap-2 mb-10">
                            {project.tech.map((t) => (
                              <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 uppercase tracking-widest">{t}</span>
                            ))}
                         </div>

                         <div className="flex gap-4">
                            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                               <Eye size={24} />
                            </div>
                            <div className="px-8 h-14 rounded-full border border-white/20 flex items-center justify-center font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-background transition-all">
                               View Project
                            </div>
                         </div>
                      </Link>

                      {/* Default Tag */}
                      <div className="absolute top-6 left-6 group-hover:opacity-0 transition-opacity">
                         <span className="px-4 py-2 rounded-xl bg-background/60 backdrop-blur-md text-[10px] font-bold text-accent border border-white/10 uppercase tracking-widest">
                           {project.category}
                         </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      {/* Featured Case Study Section */}
      <Section className="mt-20">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="p-0 overflow-hidden border-primary/20 bg-primary/5">
             <div className="grid lg:grid-cols-2 items-center">
                <div className="p-12 lg:p-20 order-2 lg:order-1">
                   <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-6 block">FEATURED PROJECT</span>
                   <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter leading-tight">Revolutionizing Enterprise Analytics</h2>
                   <p className="text-xl text-grayText mb-12 leading-relaxed">
                      Discover how we helped Nexus Data Hub scale their dashboard to support 500k concurrent users while maintaining a premium design language.
                   </p>
                   <Link to="/services" className="btn-primary flex items-center justify-center gap-3 w-fit px-12">
                      View Case Study <ArrowRight size={20} />
                   </Link>
                </div>
                <div className="h-[400px] lg:h-full order-1 lg:order-2 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" alt="Nexus Data Hub Case Study - Enterprise Analytics by VEXORA" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
             </div>
          </GlassCard>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
           <FadeIn>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter">Ready to be our next <span className="text-gradient italic">success story?</span></h2>
              <p className="text-xl text-grayText mb-12">
                Let's discuss how we can bring your vision to life with world-class engineering and design.
              </p>
              <Link to="/contact" className="btn-primary px-16 text-lg">Start Project</Link>
           </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
