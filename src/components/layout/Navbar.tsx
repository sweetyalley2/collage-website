"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Download, 
  PhoneCall, 
  Building2, 
  Award, 
  BookOpen, 
  Image as ImageIcon, 
  Bell, 
  Mail,
  ShieldCheck,
  Stethoscope,
  Hotel,
  Laptop,
  Plane,
  Scissors,
  Globe,
  Video,
  ExternalLink,
  Briefcase,
  Home,
  Sparkles
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';
import EnquiryModal from '@/components/EnquiryModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/98 backdrop-blur-md py-2.5 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Institutional Brand Logo – Swami Vivekananda Foundation */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0" onClick={closeMobileMenu}>
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#ed8100] shadow-md group-hover:scale-105 transition-transform bg-white">
              <Image
                src="/images/logo/svf-logo.jpg"
                alt="Swami Vivekananda Foundation, West Bengal"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-xl text-[#112555] tracking-tight leading-none">
                  CIMS <span className="text-[#ed8100]">GROUP</span>
                </span>
                <span className="hidden xl:inline-block text-[9px] bg-blue-50 text-[#112555] px-1.5 py-0.5 rounded border border-blue-200 font-bold">
                  ESTD 2011
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-gray-700 line-clamp-1 leading-tight mt-0.5">
                Cambridge Institute of Management Studies
              </p>
              <p className="text-[8px] text-gray-400 font-semibold tracking-wide hidden sm:block uppercase">
                Under MAKAUT (CCPTR) &amp; Swami Vivekananda Foundation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Part 1: Exact 10-Item Order) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            
            {/* 1. Home */}
            <Link 
              href="/" 
              className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              Home
            </Link>

            {/* 2. About */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 rounded-md ${
                  pathname.startsWith('/about') ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
                }`}
              >
                <span>About</span>
                <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200 text-[#ed8100]" />
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-xl p-4 border-t-3 border-[#ed8100] border-x border-b border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] font-extrabold text-[#ed8100] uppercase tracking-wider pb-1 mb-1 border-b border-gray-100">
                    Institutional Heritage
                  </div>
                  <Link href="/about#mission-vision" className="block p-2 rounded-lg font-bold text-gray-700 hover:text-[#ed8100] hover:bg-orange-50/60 transition-colors">
                    Mission &amp; Vision
                    <span className="block text-[10px] text-gray-500 font-normal">Core values &amp; educational philosophy</span>
                  </Link>
                  <Link href="/about#director-desk" className="block p-2 rounded-lg font-bold text-gray-700 hover:text-[#ed8100] hover:bg-orange-50/60 transition-colors">
                    Director&apos;s Desk
                    <span className="block text-[10px] text-gray-500 font-normal">Leadership message &amp; institutional roadmap</span>
                  </Link>
                  <Link href="/about#why-cims" className="block p-2 rounded-lg font-bold text-gray-700 hover:text-[#ed8100] hover:bg-orange-50/60 transition-colors">
                    Why CIMS
                    <span className="block text-[10px] text-gray-500 font-normal">Distinct institutional highlights &amp; advantages</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Courses */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/courses"
                className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 rounded-md ${
                  pathname.startsWith('/courses') ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
                }`}
              >
                <span>Courses</span>
                <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200 text-[#ed8100]" />
              </Link>

              <div className="absolute top-full left-0 w-[580px] bg-white shadow-2xl rounded-xl p-5 border-t-3 border-[#ed8100] border-x border-b border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="border-b border-gray-100 pb-2 mb-3 flex items-center justify-between">
                  <h3 className="font-heading font-extrabold text-[#112555] text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap size={15} className="text-[#ed8100]" />
                    Academic Programs Under MAKAUT (CCPTR)
                  </h3>
                  <Link href="/courses" className="text-[11px] font-bold text-[#ed8100] hover:underline">
                    All Courses &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <Link href="/courses/hospitality-hotel-management" className="p-2 rounded-lg hover:bg-orange-50/60 transition-colors block border border-transparent hover:border-orange-100">
                    <span className="font-bold text-[#112555] hover:text-[#ed8100] block">Hospitality &amp; Hotel Management</span>
                    <span className="text-[10px] text-gray-500">3 Years • 5-Star Hotel Rotations &amp; Culinary</span>
                  </Link>
                  <Link href="/courses/hospital-management" className="p-2 rounded-lg hover:bg-orange-50/60 transition-colors block border border-transparent hover:border-orange-100">
                    <span className="font-bold text-[#112555] hover:text-[#ed8100] block">Hospital Management</span>
                    <span className="text-[10px] text-gray-500">3 Years • Clinical Postings at City Hospital</span>
                  </Link>
                  <Link href="/courses/bca" className="p-2 rounded-lg hover:bg-orange-50/60 transition-colors block border border-transparent hover:border-orange-100">
                    <span className="font-bold text-[#112555] hover:text-[#ed8100] block">Computer Application (BCA)</span>
                    <span className="text-[10px] text-gray-500">3 Years • Full-Stack, Software &amp; Cloud</span>
                  </Link>
                  <Link href="/courses/allied-health-science" className="p-2 rounded-lg hover:bg-orange-50/60 transition-colors block border border-transparent hover:border-orange-100">
                    <span className="font-bold text-[#112555] hover:text-[#ed8100] block">Applied Health Science (Paramedical)</span>
                    <span className="text-[10px] text-gray-500">BMLT / BMRIT / BOTT / DMLT Diagnostics</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Placement */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('placement')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href="/placement" 
                className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 rounded-md ${
                  pathname.startsWith('/placement') || pathname.startsWith('/training-placements') ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
                }`}
              >
                <span>Placement</span>
                <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200 text-[#ed8100]" />
              </Link>

              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl p-3 border-t-3 border-[#ed8100] border-x border-b border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="space-y-1 text-xs">
                  <Link href="/placement" className="block p-2 rounded-lg font-bold text-gray-700 hover:text-[#ed8100] hover:bg-orange-50/60 transition-colors">
                    Recent Placements (2023–2024)
                    <span className="block text-[10px] text-gray-500 font-normal">Official verified student posters</span>
                  </Link>
                  <Link href="/placement#records" className="block p-2 rounded-lg font-bold text-gray-700 hover:text-[#ed8100] hover:bg-orange-50/60 transition-colors">
                    Placement Record Database
                    <span className="block text-[10px] text-gray-500 font-normal">Search by hospital, hotel &amp; student</span>
                  </Link>
                  <Link href="/training-placements" className="block p-2 rounded-lg font-bold text-gray-700 hover:text-[#ed8100] hover:bg-orange-50/60 transition-colors">
                    Training &amp; Placement Cell
                    <span className="block text-[10px] text-gray-500 font-normal">Recruiter network &amp; internship process</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Abroad Internship & Placement */}
            <Link 
              href="/abroad-placement" 
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/abroad-placement' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              Abroad Internship &amp; Placement
            </Link>

            {/* 6. Training Videos */}
            <Link 
              href="/training-videos" 
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/training-videos' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              Training Videos
            </Link>

            {/* 7. News & Notice */}
            <Link 
              href="/news-notices" 
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/news-notices' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              News &amp; Notice
            </Link>

            {/* 8. Gallery */}
            <Link 
              href="/gallery" 
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/gallery' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              Gallery
            </Link>

            {/* 9. Useful Links */}
            <Link 
              href="/useful-links" 
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/useful-links' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              Useful Links
            </Link>

            {/* 10. Contact Us */}
            <Link 
              href="/contact" 
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/contact' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100]'
              }`}
            >
              Contact Us
            </Link>

          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2 xl:space-x-2.5 flex-shrink-0">
            {/* ISHM Style Yellow Call Widget */}
            <div className="hidden 2xl:flex items-center bg-[#ffc923] text-[#112555] px-2.5 py-1 rounded-md shadow-sm border border-yellow-400">
              <div className="animate-phone-ring text-[#112555] mr-1.5">
                <PhoneCall size={14} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[8px] font-black uppercase tracking-wider text-gray-800">Help Desk</span>
                <a href={`tel:${CIMS_INFO.phone}`} className="text-xs font-black tracking-tight hover:underline">
                  {CIMS_INFO.phone}
                </a>
              </div>
            </div>

            <Link 
              href="/admission" 
              className="bg-[#ed8100] hover:bg-[#d97400] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-md shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <GraduationCap size={15} />
              <span>Admission 2026</span>
            </Link>

            <a 
              href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-md transition-all flex items-center gap-1"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Brochure</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a 
              href={`tel:${CIMS_INFO.phone}`}
              className="p-2 text-[#ed8100] hover:bg-orange-50 rounded-full"
              aria-label="Call Helpline"
            >
              <PhoneCall size={20} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#112555] hover:bg-gray-100 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Exact 10-Item Navigation Flow) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] z-50 bg-black/60 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div 
            className="w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2 pb-6 border-b border-gray-100 text-sm font-bold text-[#112555]">
              
              {/* 1. Home */}
              <Link href="/" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                1. Home
              </Link>

              {/* 2. About */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-about')}
                  className="flex items-center justify-between w-full hover:text-[#ed8100] py-1 text-left"
                >
                  <span>2. About</span>
                  <ChevronDown size={15} className={activeDropdown === 'mobile-about' ? 'rotate-180' : ''} />
                </button>
                {activeDropdown === 'mobile-about' && (
                  <div className="pl-4 py-2 space-y-1.5 bg-gray-50 rounded-lg mt-1 text-xs font-semibold text-gray-700">
                    <Link href="/about#mission-vision" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Mission &amp; Vision</Link>
                    <Link href="/about#director-desk" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Director&apos;s Desk</Link>
                    <Link href="/about#why-cims" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Why CIMS</Link>
                  </div>
                )}
              </div>

              {/* 3. Courses */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-courses')}
                  className="flex items-center justify-between w-full hover:text-[#ed8100] py-1 text-left"
                >
                  <span>3. Courses</span>
                  <ChevronDown size={15} className={activeDropdown === 'mobile-courses' ? 'rotate-180' : ''} />
                </button>
                {activeDropdown === 'mobile-courses' && (
                  <div className="pl-4 py-2 space-y-1.5 bg-gray-50 rounded-lg mt-1 text-xs font-semibold text-gray-700">
                    <Link href="/courses/hospitality-hotel-management" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Hospitality &amp; Hotel Management</Link>
                    <Link href="/courses/hospital-management" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Hospital Management</Link>
                    <Link href="/courses/bca" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Computer Application (BCA)</Link>
                    <Link href="/courses/allied-health-science" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Applied Health Science (Paramedical)</Link>
                    <Link href="/courses" onClick={closeMobileMenu} className="block py-1 text-[#ed8100] font-bold">• View All 4 Courses</Link>
                  </div>
                )}
              </div>

              {/* 4. Placement */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-placement')}
                  className="flex items-center justify-between w-full hover:text-[#ed8100] py-1 text-left"
                >
                  <span>4. Placement</span>
                  <ChevronDown size={15} className={activeDropdown === 'mobile-placement' ? 'rotate-180' : ''} />
                </button>
                {activeDropdown === 'mobile-placement' && (
                  <div className="pl-4 py-2 space-y-1.5 bg-gray-50 rounded-lg mt-1 text-xs font-semibold text-gray-700">
                    <Link href="/placement" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Recent Placements (2023–2024)</Link>
                    <Link href="/placement#records" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Placement Record Database</Link>
                    <Link href="/training-placements" onClick={closeMobileMenu} className="block py-1 hover:text-[#ed8100]">• Training &amp; Placement Cell</Link>
                  </div>
                )}
              </div>

              {/* 5. Abroad Internship & Placement */}
              <Link href="/abroad-placement" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                5. Abroad Internship &amp; Placement
              </Link>

              {/* 6. Training Videos */}
              <Link href="/training-videos" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                6. Training Videos
              </Link>

              {/* 7. News & Notice */}
              <Link href="/news-notices" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                7. News &amp; Notice
              </Link>

              {/* 8. Gallery */}
              <Link href="/gallery" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                8. Gallery
              </Link>

              {/* 9. Useful Links */}
              <Link href="/useful-links" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                9. Useful Links
              </Link>

              {/* 10. Contact Us */}
              <Link href="/contact" onClick={closeMobileMenu} className="hover:text-[#ed8100] py-1">
                10. Contact Us
              </Link>

            </div>

            <div className="pt-5 space-y-2.5">
              <Link 
                href="/admission" 
                onClick={closeMobileMenu}
                className="w-full block text-center bg-[#ed8100] text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow"
              >
                Apply Online 2026
              </Link>
              <a 
                href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border border-[#112555] text-[#112555] py-2 rounded-lg font-bold text-xs uppercase tracking-wider"
              >
                Download E-Brochure
              </a>
              <div className="pt-2 text-center text-xs text-gray-500">
                Helpline: <a href={`tel:${CIMS_INFO.phone}`} className="font-bold text-[#112555]">{CIMS_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Floating Right Side Tabs: 1. ONLINE ADMISSION FORM, 2. ENQUIRY FORM */}
      <div className="fixed right-0 top-[60%] sm:top-[58%] -translate-y-1/2 z-40 flex flex-col items-end gap-2 sm:gap-2.5 select-none">
        {/* 1. ONLINE ADMISSION FORM (Slightly reduced size on mobile, positioned clear of navigation) */}
        <Link
          href="/admission"
          aria-label="Online Admission Form"
          className="bg-[#ed8100] hover:bg-[#d97400] text-white text-[9px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest py-2 sm:py-3 px-1 sm:px-2 rounded-l-md shadow-xl flex items-center gap-1 transition-all hover:pr-2.5 cursor-pointer group"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span>ONLINE ADMISSION FORM</span>
        </Link>

        {/* 2. ENQUIRY FORM (Directly below ONLINE ADMISSION FORM with matching size & spacing) */}
        <button
          type="button"
          onClick={() => setIsEnquiryOpen(true)}
          aria-label="Enquiry Form"
          className="bg-[#ed8100] hover:bg-[#d97400] text-white text-[9px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest py-2 sm:py-3 px-1 sm:px-2 rounded-l-md shadow-xl flex items-center gap-1 transition-all hover:pr-2.5 cursor-pointer group"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span>ENQUIRY FORM</span>
        </button>
      </div>

      {/* Reusable Enquiry Form Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </header>
  );
}
