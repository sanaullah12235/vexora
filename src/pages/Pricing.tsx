import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { Check, Zap, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '15,000',
      currency: 'PKR',
      desc: 'Perfect for small startups and personal brands looking to establish a presence.',
      icon: Zap,
      features: [
        'Custom 5-Page Website',
        'Responsive Design',
        'Basic SEO Setup',
        '1 Month Support',
        'Contact Form Integration'
      ],
      color: 'white'
    },
    {
      name: 'Professional',
      price: '25,000',
      currency: 'PKR',
      desc: 'Ideal for growing businesses that need a high-performance, custom digital solution.',
      icon: Rocket,
      features: [
        'Custom 10-Page Website',
        'Advanced UI/UX Design',
        'CMS Integration',
        'Speed Optimization',
        '3 Months Support',
        'SEO Strategy'
      ],
      color: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      currency: '',
      desc: 'Tailored solutions for large organizations requiring complex systems and scale.',
      icon: Shield,
      features: [
        'Unlimited Pages',
        'Custom Web Applications',
        'Full E-commerce Setup',
        'API & Third-party Sync',
        'Priority 24/7 Support',
        'Security Audit'
      ],
      color: 'accent'
    }
  ];

  return (
    <div className="pt-20">
      <Section className="text-center relative overflow-visible">
        <Glow color="purple" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <FadeIn>
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">INVEST IN EXCELLENCE</span>
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 tracking-tighter">Transparent <span className="text-gradient italic">Pricing</span></h1>
          <p className="text-xl text-grayText max-w-2xl mx-auto leading-relaxed">
            Premium quality at competitive rates. Choose the plan that best fits your business goals.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" className="h-full">
              <div className={`relative h-full transition-transform duration-500 hover:scale-[1.02] ${plan.popular ? 'z-10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                    Most Popular
                  </div>
                )}
                <GlassCard className={`h-full flex flex-col p-10 ${plan.popular ? 'border-primary/40 bg-white/[0.04] shadow-2xl shadow-primary/10' : 'border-white/5'}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white'}`}>
                    <plan.icon size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black tracking-tighter">
                      {plan.price !== 'Custom' && <span className="text-2xl font-bold mr-1">{plan.currency}</span>}
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && <span className="text-grayText font-medium">/project</span>}
                  </div>
                  
                  <p className="text-grayText mb-10 text-lg leading-relaxed h-20 overflow-hidden">
                    {plan.desc}
                  </p>
                  
                  <div className="space-y-5 mb-12 flex-grow">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-4 group/item">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${plan.popular ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white/40'}`}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-grayText group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-500 text-center ${
                      plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </Link>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Pricing FAQ Preview */}
      <Section className="bg-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
             <h2 className="text-3xl font-bold mb-6">Need a custom quote?</h2>
             <p className="text-grayText text-lg mb-10">
               For complex projects or long-term partnerships, we provide tailored pricing that fits your specific requirements.
             </p>
             <Link to="/contact" className="btn-secondary px-10">Request Custom Quote</Link>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
