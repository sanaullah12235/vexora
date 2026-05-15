import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircuitBoard, Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group z-50">
        <div className="relative">
          <CircuitBoard className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full blur-[2px]"
          />
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white">VEXORA</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => 
              `text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-white/60'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop CTA + Hamburger */}
      <div className="flex items-center gap-4">
        <Link to="/consultation" className="hidden sm:inline-flex btn-primary py-2 px-6 text-sm">
          Get Free Quote
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:border-primary/50 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background z-40 flex flex-col pt-32 px-10"
          >
            {/* Background Glows for Mobile Menu */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-accent/10 blur-[120px] rounded-full -z-10" />

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `relative flex items-end gap-4 group transition-all duration-300 ${isActive ? 'text-accent' : 'text-white'}`
                    }
                  >
                    <span className="text-xs font-black text-white/20 mb-2 group-hover:text-accent/40 transition-colors tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                      {link.name}
                    </span>
                    <div className="h-[2px] w-0 group-hover:w-12 bg-accent transition-all duration-500 mb-2" />
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pt-8 mt-4 border-t border-white/5"
              >
                <Link to="/consultation" className="btn-primary w-full py-5 text-center text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/20">
                  Get Free Quote
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
