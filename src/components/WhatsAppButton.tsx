import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "923289911658"; // Pakistan code + number
  const message = encodeURIComponent("Hi VEXORA! I visited your website and I’m interested in your services. I’d like to discuss my project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer overflow-hidden group"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-white rounded-full"
      />
      <MessageCircle size={32} className="text-white relative z-10" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
};

export default WhatsAppButton;
