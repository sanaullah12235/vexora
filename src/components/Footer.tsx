import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CircuitBoard, Code2, Globe, Briefcase, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <CircuitBoard className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-tighter text-white">VEXORA</span>
          </Link>
          <p className="text-grayText leading-relaxed">
            Helping startups and businesses grow through modern, high-performing digital solutions. Premium design meets world-class engineering.
          </p>
          <div className="flex gap-4">
            {[Code2, Globe, Briefcase, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-accent hover:text-accent transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-grayText">
            <li><Link to="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Mobile Apps</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">UI/UX Design</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">SaaS Solutions</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">SEO Optimization</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-grayText">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Our Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Latest News</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-grayText mb-6">Stay updated with the latest tech trends and agency news.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex-1 focus:outline-none focus:border-accent text-sm"
            />
            <button className="bg-primary hover:bg-primary/90 p-2 rounded-full transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
      
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-grayText text-center md:text-left">
        <div className="space-y-1">
          <p>© 2026 VEXORA Digital Agency. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-widest opacity-50">Wah Cantt, New City Phase 2, Golden Square | 03289911658</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
