import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Users, 
  Zap, 
  Coffee, 
  Globe 
} from 'lucide-react';

const jobs = [
  {
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote / San Francisco',
    category: 'Engineering'
  },
  {
    title: 'Product Designer',
    type: 'Full-time',
    location: 'Remote / London',
    category: 'Design'
  },
  {
    title: 'Full Stack Engineer',
    type: 'Full-time',
    location: 'Remote',
    category: 'Engineering'
  },
  {
    title: 'Digital Marketing Manager',
    type: 'Full-time',
    location: 'New York',
    category: 'Marketing'
  }
];

const Careers = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="text-center">
        <Glow color="purple" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2" />
        <FadeIn>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Join Our Team</span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Let's Build the <span className="text-gradient">Future Together</span></h1>
          <p className="text-xl text-grayText max-w-3xl mx-auto">
            We're looking for passionate, innovative, and driven individuals to join our mission in redefining digital excellence.
          </p>
        </FadeIn>
      </Section>

      {/* Benefits */}
      <Section className="bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why VEXORA?</h2>
            <p className="text-grayText">We offer more than just a job; we offer a career where you can grow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world with our global distributed team.' },
              { icon: Zap, title: 'Fast Growth', desc: 'Opportunities for rapid career advancement in a scaling agency.' },
              { icon: Coffee, title: 'Culture', desc: 'A collaborative, inclusive, and fun environment where everyone thrives.' },
              { icon: Users, title: 'Top Talent', desc: 'Work alongside some of the brightest minds in the industry.' },
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                    <benefit.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-grayText leading-relaxed">{benefit.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Roles */}
      <Section id="open-roles">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">Open Positions</h2>
              <p className="text-grayText">Explore our current job openings and find your fit.</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">
              4 Open Roles
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="glass-card group p-6 hover:border-primary/50 cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">{job.category}</span>
                    <h4 className="text-2xl font-bold mb-3">{job.title}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-grayText">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3 bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary rounded-xl transition-all duration-300 font-bold flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Careers;
