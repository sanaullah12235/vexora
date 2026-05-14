import React, { useState } from 'react';
import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { Calendar as CalendarIcon, Clock, Video, CheckCircle2, ArrowRight } from 'lucide-react';

const Consultation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-20">
      <Section className="text-center">
        <Glow color="cyan" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2" />
        <FadeIn>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Let's Talk</span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Book a <span className="text-gradient">Free Consultation</span></h1>
          <p className="text-xl text-grayText max-w-2xl mx-auto">
            Ready to start your digital transformation? Schedule a 30-minute discovery call with our experts.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits / Info */}
            <div className="lg:col-span-1 space-y-8">
              <FadeIn direction="right">
                <h3 className="text-2xl font-bold mb-6">What to expect:</h3>
                <div className="space-y-6">
                  {[
                    'Detailed analysis of your project goals',
                    'Technical strategy recommendations',
                    'Initial timeline and cost estimate',
                    'Direct access to our senior engineers'
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                      <p className="text-grayText font-medium">{text}</p>
                    </div>
                  ))}
                </div>

                <GlassCard className="mt-12 p-6 border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                       <Video className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">Virtual Meeting</h4>
                      <p className="text-xs text-grayText">Zoom / Google Meet</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                       <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">30 Minutes</h4>
                      <p className="text-xs text-grayText">Discovery Session</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <GlassCard className="p-10">
                  {step === 1 ? (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold">1. Select Service</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {['Web Development', 'Mobile App', 'UI/UX Design', 'SaaS Platform'].map((service) => (
                            <button key={service} className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium text-left">
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-bold">2. Choose Date & Time</h4>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center space-y-4">
                           <CalendarIcon size={48} className="text-grayText opacity-50" />
                           <p className="text-grayText text-sm">Calendar integration coming soon...</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setStep(2)}
                        className="btn-primary w-full py-4 flex items-center justify-center gap-2 group"
                      >
                        Next Step
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <h4 className="text-xl font-bold">3. Your Information</h4>
                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-4">
                          <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
                          <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none" />
                        <textarea placeholder="Tell us a bit about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none resize-none" />
                        
                        <div className="flex gap-4 pt-4">
                          <button onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
                          <button className="btn-primary flex-[2]">Confirm Booking</button>
                        </div>
                      </form>
                    </div>
                  )}
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Consultation;
