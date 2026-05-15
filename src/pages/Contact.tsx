import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Briefcase, 
  Globe, 
  Code2 
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <Section className="text-center relative overflow-visible">
        <Glow color="purple" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />
        <FadeIn>
          <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">GET IN TOUCH</span>
          <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tighter">Let's Build Something <br /><span className="text-gradient italic">Extraordinary</span></h1>
          <p className="text-xl text-grayText max-w-2xl mx-auto leading-relaxed">
            Ready to take your digital presence to the next level? Reach out today and let's discuss your vision.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <FadeIn direction="right">
              <h3 className="text-3xl font-bold mb-8 tracking-tight">Contact Information</h3>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email Us', val: 'hello@vexora.agency' },
                  { icon: Phone, label: 'Call Us', val: '03289911658' },
                  { icon: MessageSquare, label: 'WhatsApp', val: '03289911658' },
                  { icon: MapPin, label: 'Our Office', val: 'Wah Cantt, New City Phase 2, Golden Square' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors shadow-lg">
                      <item.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-lg text-white font-bold group-hover:text-primary transition-colors">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12">
                <h4 className="text-xl font-bold mb-6 tracking-tight">Follow Us</h4>
                <div className="flex gap-4">
                  {[Briefcase, Globe, Code2].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300 shadow-sm">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <GlassCard className="p-10 border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-grayText uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white transition-all placeholder:opacity-30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-grayText uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white transition-all placeholder:opacity-30"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-grayText uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="03289911658" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white transition-all placeholder:opacity-30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-grayText uppercase tracking-widest ml-1">Subject</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white transition-all appearance-none">
                        <option className="bg-background">Web Development</option>
                        <option className="bg-background">Mobile App</option>
                        <option className="bg-background">UI/UX Design</option>
                        <option className="bg-background">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-grayText uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="Tell us about your project vision..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent text-white transition-all resize-none placeholder:opacity-30"
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 group text-lg font-black uppercase tracking-widest">
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
