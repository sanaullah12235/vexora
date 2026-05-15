import { Section, FadeIn, Glow } from '../components/UI';
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Code, 
  CheckCircle, 
  Rocket, 
  Headphones 
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'We dive deep into your business goals, target audience, and market landscape to build a solid foundation.'
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    desc: 'Developing a comprehensive roadmap, choosing the right tech stack, and defining key performance indicators.'
  },
  {
    icon: PenTool,
    title: 'Design & UX',
    desc: 'Creating stunning visuals and intuitive user journeys that align with your brand identity.'
  },
  {
    icon: Code,
    title: 'Development',
    desc: 'Turning designs into reality with clean, scalable, and high-performance code.'
  },
  {
    icon: CheckCircle,
    title: 'Testing & QA',
    desc: 'Rigorous testing across all devices and browsers to ensure a bug-free, seamless experience.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Deploying your project to the world with a focus on stability and immediate performance.'
  },
  {
    icon: Headphones,
    title: 'Support & Growth',
    desc: 'Continuous monitoring, updates, and strategic advice to help your digital product grow.'
  }
];

const Process = () => {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <Glow color="cyan" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2" />
        <FadeIn>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">How We Work</span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our <span className="text-gradient">Process</span></h1>
          <p className="text-xl text-grayText max-w-3xl mx-auto leading-relaxed">
            A systematic, collaborative approach to delivering world-class digital solutions. From initial spark to final launch.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Connector Dot */}
                <div className="absolute left-[31px] md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                   <FadeIn direction={i % 2 === 0 ? 'right' : 'left'}>
                      <span className="text-4xl font-bold text-white/10 mb-2 block">0{i + 1}</span>
                      <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                      <p className="text-grayText leading-relaxed">{step.desc}</p>
                   </FadeIn>
                </div>

                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 z-10 backdrop-blur-md absolute left-0 md:relative md:left-auto">
                   <step.icon className="text-primary" size={28} />
                </div>

                {/* Empty spacer for grid alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to start the journey?</h2>
            <p className="text-grayText text-lg mb-8">
              Every great project starts with a simple conversation. Let's discuss your discovery phase today.
            </p>
            <button className="btn-primary">Book Discovery Call</button>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Process;
