import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <Link to="/" className="flex items-center gap-2 group">
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

      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-grayText'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <Link to="/consultation" className="btn-primary py-2 px-6 text-sm">
        Get Free Quote
      </Link>
    </motion.nav>
  );
};

export default Navbar;
