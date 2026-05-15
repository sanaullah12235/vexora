import { useParams, Navigate, Link } from 'react-router-dom';
import { Section, FadeIn, GlassCard, Glow, Accordion } from '../components/UI';
import { servicesData } from '../data/services';
import { CheckCircle2, ArrowLeft, Zap, Cpu, Target } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center pt-32">
        <Glow color="purple" className="w-[600px] h-[600px] -top-20 left-0 opacity-20" />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <Link to="/services" className="flex items-center gap-2 text-accent font-bold mb-8 hover:gap-4 transition-all">
              <ArrowLeft size={20} /> Back to Services
            </Link>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tighter">
              {service.title}
            </h1>
            <p className="text-xl text-grayText mb-10 leading-relaxed max-w-xl">
              {service.fullDesc}
            </p>
            <div className="flex gap-4">
              <Link to="/consultation" className="btn-primary">Book Consultation</Link>
              <Link to="/portfolio" className="btn-secondary">View Work</Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative">
            <div className="glass-card p-4 aspect-square flex items-center justify-center bg-primary/5 border-primary/20">
              <service.icon size={200} className="text-primary opacity-20 absolute" />
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                {service.features.slice(0, 4).map((f, i) => (
                  <GlassCard key={i} className="flex flex-col justify-center items-center text-center p-6 border-white/5">
                    <CheckCircle2 size={32} className="text-accent mb-4" />
                    <span className="text-sm font-bold uppercase tracking-widest">{f}</span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Overview & Key Features */}
      <Section className="bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6">Key <span className="text-gradient">Features</span></h2>
              <p className="text-grayText leading-relaxed">
                We provide a comprehensive set of features designed to ensure the success and longevity of your project.
              </p>
            </FadeIn>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap size={20} className="text-primary" />
                    </div>
                    <p className="text-lg font-medium text-white/80">{feature}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="max-w-7xl mx-auto text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our <span className="text-gradient">Process</span></h2>
            <p className="text-grayText max-w-2xl mx-auto">
              We follow a strict, results-driven methodology to ensure every project is delivered to the highest standard.
            </p>
          </FadeIn>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {service.process.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative group">
              <div className="w-40 h-40 rounded-full border border-white/10 flex flex-col items-center justify-center bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500">
                <span className="text-3xl font-bold text-white/10 group-hover:text-primary transition-colors mb-2">0{i + 1}</span>
                <span className="text-sm font-bold uppercase tracking-widest">{p}</span>
              </div>
              {i < service.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-4 h-[1px] bg-white/10" />
              )}
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits & Tech Stack */}
      <Section className="bg-secondary/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <Target className="text-accent" /> Benefits for You
            </h3>
            <div className="space-y-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass-card border-white/5">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="text-lg text-grayText">{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <Cpu className="text-primary" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {service.tech.map((t, i) => (
                <span key={i} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold uppercase tracking-widest text-sm hover:border-primary transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ & CTA */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service <span className="text-gradient">FAQs</span></h2>
          </div>
          <Accordion items={service.faqs} />
          
          <div className="mt-32 text-center">
            <GlassCard className="py-20 px-8 bg-primary/5 border-primary/20">
              <h3 className="text-4xl lg:text-6xl font-bold mb-8">Ready to elevate your <span className="text-gradient">brand?</span></h3>
              <p className="text-xl text-grayText mb-12">
                Let's discuss how our {service.title} services can transform your business.
              </p>
              <Link to="/contact" className="btn-primary px-12">Get Started Now</Link>
            </GlassCard>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetail;
