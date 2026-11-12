"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/918158881234?text=${encodeURIComponent(
    "Hello CIMS Admissions Desk, I would like to inquire about admissions for 2026 academic session."
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3">
      
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Admission Chat"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <span className="absolute right-full mr-3 bg-gray-900/90 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat with Admission Desk
        </span>
        <MessageCircle size={24} className="fill-current" />
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${CIMS_INFO.phone}`}
        aria-label="Direct Admission Helpline"
        className="group relative flex items-center bg-[#ed8100] hover:bg-[#d97400] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <span className="absolute right-full mr-3 bg-gray-900/90 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Call Helpline: {CIMS_INFO.phone}
        </span>
        <Phone size={22} className="fill-current" />
      </a>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-[#112555] hover:bg-[#1a377d] text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-600"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
