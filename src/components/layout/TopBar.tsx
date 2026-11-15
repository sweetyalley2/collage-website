"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Download,
  GraduationCap
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function TopBar() {
  return (
    <div className="bg-[#0c1c44] text-gray-200 text-xs border-b border-[#1b2f68] transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
          
          {/* Left: Social & Helplines (Matches ISHM Top Bar) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center md:justify-start">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-[#ed8100] uppercase tracking-wider text-[11px] hidden sm:inline">
                Get Social:
              </span>
              <div className="flex items-center space-x-2">
                <a 
                  href={CIMS_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="hover:text-[#ed8100] transition-colors p-1"
                >
                  <Facebook size={13} />
                </a>
                <a 
                  href={CIMS_INFO.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="hover:text-[#ed8100] transition-colors p-1"
                >
                  <Twitter size={13} />
                </a>
                <a 
                  href={CIMS_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="hover:text-[#ed8100] transition-colors p-1"
                >
                  <Linkedin size={13} />
                </a>
                <a 
                  href={CIMS_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="hover:text-[#ed8100] transition-colors p-1"
                >
                  <Instagram size={13} />
                </a>
                <a 
                  href={CIMS_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  className="hover:text-[#ed8100] transition-colors p-1"
                >
                  <Youtube size={13} />
                </a>
              </div>
            </div>

            <span className="text-gray-600 hidden sm:inline">|</span>

            {/* Direct Phone Helpline */}
            <div className="flex items-center space-x-1.5">
              <Phone size={12} className="text-[#ed8100]" />
              <span className="text-gray-300">Admission:</span>
              <a 
                href={`tel:${CIMS_INFO.phone}`} 
                className="font-bold text-white hover:text-[#ed8100] transition-colors"
              >
                {CIMS_INFO.phone}
              </a>
            </div>

            {/* Email Contact */}
            <div className="hidden lg:flex items-center space-x-1.5">
              <Mail size={12} className="text-[#ed8100]" />
              <a 
                href={`mailto:${CIMS_INFO.email}`} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {CIMS_INFO.email}
              </a>
            </div>
          </div>

          {/* Right: Admission CTA & Brochure (Clean without Student Portal or Fee Payment) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link 
              href="/admission" 
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-3 py-1 rounded font-bold uppercase tracking-wide text-[10px] transition-transform hover:scale-105 shadow-sm flex items-center gap-1"
            >
              <GraduationCap size={12} />
              <span>Apply Now 2026</span>
            </Link>

            <a 
              href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ed8100] flex items-center gap-1 transition-colors text-[11px] font-semibold text-gray-300"
            >
              <Download size={12} className="text-[#ed8100]" />
              <span>E-Brochure</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
