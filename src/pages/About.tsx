import React from 'react';
import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { 
  History, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users2, 
  Briefcase, 
  Globe2 
} from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="text-center overflow-visible">
        <Glow color="cyan" className="w-[500px] h-[500px] -top-20 left-1/4" />
        <FadeIn>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Revolutionizing the <br /><span className="text-gradient">Digital Landscape</span></h1>
          <p className="text-xl text-grayText max-w-3xl mx-auto leading-relaxed">
            VEXORA was born from a vision to bridge the gap between complex engineering and elegant design. We're a team of dreamers, thinkers, and builders.
          </p>
        </FadeIn>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <FadeIn direction="right">
            <GlassCard className="h-full border-primary/20 bg-primary/5">
              <Target className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-grayText text-lg leading-relaxed">
                To empower businesses through cutting-edge digital solutions that drive growth, foster innovation, and create meaningful user experiences.
              </p>
            </GlassCard>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <GlassCard className="h-full border-accent/20 bg-accent/5">
              <Eye className="text-accent w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-grayText text-lg leading-relaxed">
                To be the global benchmark for digital excellence, where technology meets artistry to shape the future of the internet.
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>

      {/* Stats / Achievements */}
      <Section className="bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, label: 'Projects Delivered', val: '150+' },
              { icon: Users2, label: 'Experts Onboard', val: '25+' },
              { icon: Award, label: 'Awards Won', val: '12' },
              { icon: Globe2, label: 'Global Clients', val: '40+' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <stat.icon size={20} className="text-accent" />
                  </div>
                  <h4 className="text-4xl font-bold">{stat.val}</h4>
                  <p className="text-grayText font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Minds Behind <span className="text-gradient">VEXORA</span></h2>
              <p className="text-grayText">A collective of specialists dedicated to your success.</p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Alex Rivera', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { name: 'Sarah Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
              { name: 'Marcus Thorne', role: 'CTO', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="overflow-hidden p-0 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
