import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Search, 
  Settings, 
  CheckCircle2,
  Lock,
  BarChart3,
  Zap,
  Rocket,
  Shield,
  Layers,
  ShieldCheck,
  Globe,
  Mail,
  Phone,
  Send,
  MessageSquare,
  Activity,
  Layout,
  Star
} from 'lucide-react';
import { Section, FadeIn, GlassCard, Glow, Counter, Accordion } from '../components/UI';
import { Link } from 'react-router-dom';
import BrandSlider from '../components/BrandSlider';
import PremiumReviews from '../components/PremiumReviews';

const Home = () => {
  const faqs = [
    { q: 'How long does a typical project take?', a: 'Depending on the complexity, a standard website takes 4-6 weeks, while complex SaaS platforms or mobile apps can take 3-6 months.' },
    { q: 'What is your pricing model?', a: 'We primarily work on a project-based pricing model, starting with a 50% upfront deposit. We also offer monthly retainer options for ongoing maintenance and support.' },
    { q: 'Do you provide post-launch support?', a: 'Yes, all our projects include a minimum of 1 month of premium support. We also offer extended maintenance plans to keep your product secure and up-to-date.' },
    { q: 'Will I own the source code?', a: 'Absolutely. Once the final payment is made, you own 100% of the intellectual property and source code for your project.' }
  ];

  const pricingPlans = [
    {
      name: 'Starter Package',
      price: '15,000',
      currency: 'PKR',
      features: ['5 Page Website', 'Mobile Responsive', 'Contact Form', 'Basic SEO', 'Fast Delivery'],
      icon: Zap,
      popular: false
    },
    {
      name: 'Professional Package',
      price: '25,000',
      currency: 'PKR',
      features: ['10 Page Website', 'Premium Design', 'Advanced Animations', 'SEO Optimization', 'Performance Optimization', 'Priority Support'],
      icon: Rocket,
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'Contact Us',
      currency: '',
      features: ['Custom Solution', 'Unlimited Pages', 'App Development', 'Full Support'],
      icon: Shield,
      popular: false
    }
  ];

  const whatsappUrl = "https://wa.me/923289911658?text=" + encodeURIComponent("Hi VEXORA! I visited your website and I’m interested in your services. I’d like to discuss my project.");

  return (
    <div className="pt-20">
      {/* OPTIMIZED HERO SECTION */}
      <Section className="min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center relative overflow-hidden py-12 lg:py-0">
        <div className="absolute inset-0 -z-10">
          <Glow color="purple" className="w-[600px] h-[600px] -top-20 -left-20 opacity-20" />
          <Glow color="cyan" className="w-[500px] h-[500px] bottom-0 -right-10 opacity-15" />
          
          <motion.div 
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white/5 rounded-full opacity-10"
          />
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full px-6">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-[9px] font-black uppercase tracking-[0.2em]">Next-Gen Digital Agency</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight max-w-2xl mx-auto lg:mx-0">
                Premium <span className="text-gradient italic">Websites</span> & Apps That Help Your Business Grow
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg lg:text-xl text-grayText max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                VEXORA builds modern websites and digital experiences designed to <span className="text-white">impress, perform, and convert</span>.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6} className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/consultation" className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4">
                  Get Free Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary flex items-center justify-center gap-2 text-base px-8 py-4 group">
                  <MessageSquare size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 border-t border-white/5">
                {['Fast Delivery', 'Premium Design', 'Affordable Pricing', 'Ongoing Support'].map((text) => (
                  <div key={text} className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <CheckCircle2 size={12} className="text-accent" />
                    {text}
                  </div>
                ))}
              </div>

              {/* Mini Stats */}
              <div className="flex justify-center lg:justify-start items-center gap-8 lg:gap-12 opacity-60">
                 {[
                   { label: 'Projects', val: '50+' },
                   { label: 'Satisfaction', val: '100%' },
                   { label: 'Support', val: '24/7' },
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center lg:items-start">
                      <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">{stat.val}</span>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-accent mt-1">{stat.label}</span>
                   </div>
                 ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Balanced Visual Area */}
          <FadeIn delay={0.8} direction="left" distance={30} className="relative">
             <div className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center">
                {/* Dashboard / Laptop Mockup (Scaled down) */}
                <div className="relative z-10 w-full bg-[#1c2230] rounded-xl border border-white/10 shadow-2xl overflow-hidden shadow-primary/5">
                   <div className="flex items-center gap-1 px-3 py-2 bg-white/5 border-b border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                   </div>
                   <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                      alt="Dashboard Preview" 
                      className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                   />
                </div>

                {/* Floating Mobile Mockup (Scaled down) */}
                <motion.div 
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-6 -right-2 w-36 bg-[#0B0F1A] rounded-[2rem] border-[3px] border-white/10 shadow-2xl p-1.5 z-20 hidden md:block overflow-hidden"
                >
                   <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300" 
                      alt="App Mockup" 
                      className="w-full rounded-[1.7rem] aspect-[9/19] object-cover"
                   />
                </motion.div>

                {/* Floating UI Cards (Subtle and small) */}
                <motion.div 
                   animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 -left-6 glass-card p-3 z-20 border-primary/20 shadow-primary/5 shadow-lg backdrop-blur-md"
                >
                   <div className="flex gap-2.5 items-center">
                      <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                         <Activity className="text-primary" size={14} />
                      </div>
                      <div>
                         <p className="text-[8px] font-black uppercase text-white/30 tracking-widest">Growth</p>
                         <p className="text-xs font-bold text-white">99.9%</p>
                      </div>
                   </div>
                </motion.div>

                <motion.div 
                   animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute top-1/2 -right-10 glass-card p-3 z-20 border-accent/20 shadow-accent/5 shadow-lg backdrop-blur-md"
                >
                   <div className="flex gap-2.5 items-center">
                      <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
                         <Layout className="text-accent" size={14} />
                      </div>
                      <div>
                         <p className="text-[8px] font-black uppercase text-white/30 tracking-widest">UX Design</p>
                         <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-accent text-accent" />)}
                         </div>
                      </div>
                   </div>
                </motion.div>
             </div>
          </FadeIn>
        </div>
      </Section>

      <BrandSlider />

      {/* Services Overview */}
      <Section id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-bold">Comprehensive <span className="text-gradient">Digital Services</span></h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-grayText max-w-2xl mx-auto text-lg leading-relaxed">We offer a wide range of premium services tailored to your business needs.</p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: 'Web Development', desc: 'Custom, high-performance websites built with the latest technologies.', slug: 'web-development' },
              { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile applications for iOS and Android.', slug: 'mobile-app-development' },
              { icon: Palette, title: 'UI/UX Design', desc: 'User-centric designs that are visually stunning and highly functional.', slug: 'ui-ux-design' },
              { icon: ShoppingCart, title: 'E-commerce', desc: 'Scalable online stores that drive sales and provide seamless shopping experiences.', slug: 'ecommerce-development' },
              { icon: Search, title: 'SEO Optimization', desc: 'Data-driven strategies to boost your search engine rankings and visibility.', slug: 'seo-optimization' },
              { icon: Settings, title: 'Maintenance', desc: 'Ongoing support and updates to ensure your digital products stay secure and fast.', slug: 'website-maintenance' },
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link to={`/services/${service.slug}`}>
                  <GlassCard className="h-full space-y-4 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-grayText leading-relaxed">{service.desc}</p>
                  </GlassCard>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Redesigned "Why Work With VEXORA?" Section */}
      <Section className="relative overflow-visible bg-secondary/30 border-y border-white/5">
        <Glow color="purple" className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter">Why Work With <span className="text-gradient italic">VEXORA?</span></h2>
              <p className="text-xl text-grayText max-w-3xl mx-auto leading-relaxed font-medium">
                We combine strategy, design, and development to build digital experiences that help businesses grow.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Premium Quality', desc: 'Beautiful, high-performance websites and apps.' },
              { icon: Rocket, title: 'Fast Delivery', desc: 'Efficient process with on-time project delivery.' },
              { icon: Palette, title: 'Modern Design', desc: 'Cutting-edge UI/UX built for conversions.' },
              { icon: Search, title: 'SEO Optimized', desc: 'Built to rank better and load faster.' },
              { icon: Layers, title: 'Scalable Solutions', desc: 'Designed to grow with your business.' },
              { icon: Shield, title: 'Ongoing Support', desc: 'Reliable maintenance and support after launch.' },
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <GlassCard className="p-10 group hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] -z-10 group-hover:bg-primary/10 transition-all duration-700 group-hover:scale-110" />
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/0 group-hover:shadow-primary/20">
                    <feature.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{feature.title}</h4>
                  <p className="text-grayText leading-relaxed text-lg">{feature.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Redesigned Testimonials Section */}
      <Section className="overflow-visible bg-background">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">WHAT OUR CLIENTS SAY</span>
            <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter">GUEST <span className="text-gradient">EXPERIENCES</span></h2>
            <p className="text-grayText mt-6 max-w-2xl mx-auto text-lg leading-relaxed">Don't just take our word for it. Hear from the brands we've helped grow.</p>
          </FadeIn>
        </div>
        <PremiumReviews />
      </Section>

      {/* NEW: Simple Pricing Section */}
      <Section id="pricing" className="bg-secondary/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter italic">Simple <span className="text-gradient">Pricing</span></h2>
              <p className="text-xl text-grayText max-w-3xl mx-auto leading-relaxed">
                Choose the package that fits your business.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
                <div className={`relative h-full transition-all duration-700 hover:scale-[1.02] ${plan.popular ? 'z-10' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-primary/30 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <GlassCard className={`h-full flex flex-col p-12 ${plan.popular ? 'border-primary/40 bg-white/[0.04] shadow-2xl shadow-primary/10' : 'border-white/5'}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/50'}`}>
                      <plan.icon size={32} />
                    </div>
                    
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">{plan.name}</h3>
                    
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-6xl font-black tracking-tighter">
                        {plan.price !== 'Contact Us' && <span className="text-2xl font-bold mr-1 text-white/30">{plan.currency}</span>}
                        {plan.price}
                      </span>
                      {plan.price !== 'Contact Us' && <span className="text-grayText font-bold uppercase tracking-widest text-[10px]">/project</span>}
                    </div>
                    
                    <div className="space-y-6 mb-16 flex-grow">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-4 group/item">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${plan.popular ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white/20'}`}>
                            <CheckCircle2 size={12} strokeWidth={4} />
                          </div>
                          <span className="text-sm font-bold text-white/60 group-hover/item:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/contact" 
                      className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 text-center ${
                        plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20' 
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      {plan.price === 'Contact Us' ? 'Contact Us' : 'Get Started'}
                    </Link>
                  </GlassCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* NEW: Contact Section on Home Page */}
      <Section id="contact" className="overflow-visible bg-background relative">
        <Glow color="cyan" className="w-[800px] h-[800px] -bottom-40 -right-40 opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <FadeIn>
              <h2 className="text-4xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">Let’s Build Something <br /><span className="text-gradient italic">Amazing</span></h2>
              <p className="text-xl lg:text-2xl text-grayText max-w-3xl mx-auto leading-relaxed font-medium">
                Tell us about your project and we’ll help bring it to life.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <FadeIn direction="right">
                <div className="space-y-10">
                  {[
                    { icon: Phone, label: 'Call Us', val: '03289911658' },
                    { icon: MessageSquare, label: 'WhatsApp Us', val: '03289911658' },
                    { icon: Mail, label: 'Email Address', val: 'hello@vexora.agency' },
                    { icon: Globe, label: 'Our Location', val: 'Wah Cantt, New City Phase 2, Golden Square' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-xl">
                        <item.icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">{item.label}</p>
                        <p className="text-xl text-white font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-16 border-t border-white/5 mt-16">
                   <h4 className="text-sm font-black uppercase tracking-[0.4em] mb-8 text-white/30">Connect With Vexora</h4>
                   <div className="flex gap-5">
                      {[Globe, Code2, Rocket, Smartphone].map((Icon, i) => (
                        <a key={i} href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent/5 hover:text-accent transition-all duration-500 shadow-2xl">
                           <Icon size={24} />
                        </a>
                      ))}
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Premium Form */}
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <GlassCard className="p-10 lg:p-16 border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />
                  <form className="grid md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Your Full Name</label>
                      <input type="text" placeholder="Karthik Rao" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white/[0.05] text-white transition-all text-lg font-bold placeholder:opacity-20" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Email Address</label>
                      <input type="email" placeholder="karthik@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white/[0.05] text-white transition-all text-lg font-bold placeholder:opacity-20" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Phone Number</label>
                      <input type="text" placeholder="03289911658" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white/[0.05] text-white transition-all text-lg font-bold placeholder:opacity-20" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Service Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white/[0.05] text-white transition-all text-lg font-bold appearance-none">
                        <option className="bg-background">Web Development</option>
                        <option className="bg-background">Mobile App</option>
                        <option className="bg-background">UI/UX Design</option>
                        <option className="bg-background">E-commerce</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Project vision</label>
                      <textarea rows={5} placeholder="Describe your masterpiece..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 focus:outline-none focus:border-accent focus:bg-white/[0.05] text-white transition-all text-lg font-bold resize-none placeholder:opacity-20"></textarea>
                    </div>
                    <div className="md:col-span-2 pt-6">
                      <button className="btn-primary w-full py-6 flex items-center justify-center gap-4 group text-xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/30">
                         Ignite Project
                         <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                      </button>
                    </div>
                  </form>
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
