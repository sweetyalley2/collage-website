"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  GraduationCap, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  Lock 
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function Footer() {
  return (
    <footer className="bg-[#0b1736] text-gray-300 pt-16 pb-8 border-t-4 border-[#ed8100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer (Matches ISHM 4-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: About & Institution Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#ed8100] shadow-md bg-white">
                <Image
                  src="/images/logo/svf-logo.jpg"
                  alt="Swami Vivekananda Foundation, West Bengal"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  CIMS <span className="text-[#ed8100]">GROUP</span>
                </span>
                <p className="text-[11px] text-gray-400 font-medium">Cambridge Institute of Management Studies</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-300">
              Established in 2011 under the aegis of <span className="text-white font-semibold">Swami Vivekananda Foundation</span> and affiliated with <span className="text-white font-semibold">MAKAUT (CCPTR)</span>. For over 15 years, CIMS has been at the forefront of providing premier professional education in Healthcare, Hospitality, Paramedical, and IT.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Connect With Us:</span>
              <div className="flex items-center space-x-3">
                <a href={CIMS_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-colors text-gray-400">
                  <Facebook size={16} />
                </a>
                <a href={CIMS_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-colors text-gray-400">
                  <Twitter size={16} />
                </a>
                <a href={CIMS_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-colors text-gray-400">
                  <Linkedin size={16} />
                </a>
                <a href={CIMS_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-colors text-gray-400">
                  <Instagram size={16} />
                </a>
                <a href={CIMS_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-gray-800 hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-colors text-gray-400">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Facts (Matches ISHM Reference Section) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-[#ed8100] pl-3">
              Quick Facts
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>Ranked leading college in West Bengal for Hospital Management &amp; Paramedical Studies.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>Live clinical exposure in multispecialty hospitals (City Hospital &amp; partner healthcare networks).</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>Mandatory industrial internships in 5-Star luxury hotels (Taj, Marriott, Hyatt).</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>100% Placement assistance with 1,700+ successful career placements done.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>Approved under MAKAUT (CCPTR) and recognized state regulatory frameworks.</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-[#ed8100] pl-3">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/courses/hospital-management" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>BBA in Hospital Management</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/hospitality-hotel-management" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>B.Sc in Hospitality &amp; Hotel Admin</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/allied-health-science" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>B.Sc Medical Lab Technology (BMLT)</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/allied-health-science" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>Radiology &amp; Imaging Technology (BMRIT)</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/allied-health-science" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>Operation Theatre Technology (BOTT)</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/bca" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>BCA - Computer Applications</span>
                </Link>
              </li>
              <li>
                <Link href="/training-placements" className="hover:text-[#ed8100] flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={13} className="text-[#ed8100]" />
                  <span>Training &amp; Placement Cell</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Helpline */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-[#ed8100] pl-3">
              Campus &amp; Admissions
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Campus:</strong> Purba Medinipur, West Bengal, India.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Kolkata Office:</strong> Admissions &amp; Counseling Hub, Kolkata, West Bengal.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#ed8100] flex-shrink-0" />
                <a href={`tel:${CIMS_INFO.phone}`} className="hover:text-[#ed8100] font-bold text-white transition-colors">
                  {CIMS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#ed8100] flex-shrink-0" />
                <a href={`mailto:${CIMS_INFO.email}`} className="hover:text-white transition-colors">
                  {CIMS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#ed8100] flex-shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
              <Link 
                href="/#admission-form" 
                className="inline-block bg-[#ed8100] hover:bg-[#d97400] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded shadow transition-colors"
              >
                Apply Online 2026
              </Link>

              {/* ISHM Style Number of Visitors Badge */}
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[#ed8100] tracking-wider block">Total Visitors</span>
                <span className="text-sm font-black text-white font-mono tracking-widest bg-gray-900/80 px-2 py-0.5 rounded border border-gray-700">184,950+</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-3">
          <p>
            &copy; {new Date().getFullYear()} Cambridge Institute of Management Studies (CIMS Group). All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/approvals-affiliations" className="hover:text-white transition-colors">
              Approvals &amp; Affiliations
            </Link>
            <span>•</span>
            <Link href="/news-notices" className="hover:text-white transition-colors">
              Latest Notices
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
