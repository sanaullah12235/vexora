import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-20">
      <Section className="text-center relative overflow-visible">
        <Glow color="purple" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <FadeIn>
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">EXCELLENCE IN EXECUTION</span>
          <h1 className="text-5xl lg:text-8xl font-bold mb-6 tracking-tighter">
            Premium <span className="text-gradient italic">Digital Services</span>
          </h1>
          <p className="text-xl text-grayText max-w-3xl mx-auto leading-relaxed">
            We deliver world-class digital solutions that combine cutting-edge technology with high-end aesthetics to help your brand dominate the digital landscape.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" distance={30}>
              <GlassCard className="h-full flex flex-col group p-10 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/0 group-hover:shadow-primary/20">
                    <service.icon size={32} />
                  </div>
                  <span className="text-sm font-bold text-white/10 group-hover:text-white/20 transition-colors tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-grayText leading-relaxed mb-10 flex-grow text-lg">
                  {service.shortDesc}
                </p>
                
                <Link 
                  to={`/services/${service.slug}`} 
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors group/link"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-secondary/20">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Need a custom <span className="text-gradient">solution?</span></h2>
            <p className="text-xl text-grayText mb-12 max-w-2xl mx-auto">
              Our team specializes in building bespoke digital products tailored to unique business challenges. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary px-12">Start Your Project</Link>
              <Link to="/consultation" className="btn-secondary px-12">Book a Call</Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Services;
