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
  Laptop
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
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
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/98 backdrop-blur-md py-3 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Institutional Brand Logo – Swami Vivekananda Foundation */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0" onClick={closeMobileMenu}>
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#ed8100] shadow-md group-hover:scale-105 transition-transform bg-white">
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
                <span className="font-heading font-extrabold text-lg sm:text-2xl text-[#112555] tracking-tight leading-none">
                  CIMS <span className="text-[#ed8100]">GROUP</span>
                </span>
                <span className="hidden xl:inline-block text-[10px] bg-blue-50 text-[#112555] px-1.5 py-0.5 rounded border border-blue-200 font-semibold">
                  ESTD 2011
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-gray-600 line-clamp-1 leading-tight mt-0.5">
                Cambridge Institute of Management Studies
              </p>
              <p className="text-[9px] text-gray-400 font-semibold tracking-wide hidden sm:block uppercase">
                Under MAKAUT (CCPTR) &amp; Swami Vivekananda Foundation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            <Link 
              href="/" 
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown (ISHM Mega-Menu Style) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1 rounded-md ${
                  pathname.startsWith('/about') ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
                }`}
              >
                <span>About</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 text-[#ed8100]" />
              </Link>

              <div className="absolute top-full left-0 w-[520px] bg-white shadow-2xl rounded-lg p-5 border-t-3 border-[#ed8100] border-x border-b border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="border-b border-gray-100 pb-2 mb-3">
                  <h3 className="font-heading font-extrabold text-[#112555] text-sm uppercase tracking-wider flex items-center gap-2">
                    <Building2 size={16} className="text-[#ed8100]" />
                    About CIMS Group
                  </h3>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 space-y-1 text-xs">
                    <div className="text-[10px] font-extrabold text-[#ed8100] uppercase tracking-wider mb-1">Institutional</div>
                    <Link href="/about" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Overview &amp; Heritage
                    </Link>
                    <Link href="/about#mission-vision" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Mission &amp; Vision
                    </Link>
                    <Link href="/about#leadership" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Director&apos;s Desk
                    </Link>
                    <Link href="/about#why-cims" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Why Choose CIMS
                    </Link>
                  </div>
                  <div className="col-span-4 space-y-1 text-xs">
                    <div className="text-[10px] font-extrabold text-[#ed8100] uppercase tracking-wider mb-1">Affiliations</div>
                    <Link href="/approvals-affiliations" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      MAKAUT (CCPTR)
                    </Link>
                    <Link href="/#tie-ups" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Hospital &amp; Hotel Tie-ups
                    </Link>
                    <Link href="/about#faculty" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Faculty Mentors
                    </Link>
                    <Link href="/about#awards" className="block py-1 font-semibold text-gray-700 hover:text-[#ed8100] transition-colors">
                      Awards &amp; Recognition
                    </Link>
                  </div>
                  <div className="col-span-4 bg-gray-50 p-2.5 rounded border border-gray-100 flex flex-col justify-between">
                    <div className="relative h-24 w-full rounded overflow-hidden">
                      <Image
                        src="/images/hero/cims-building.jpg"
                        alt="CIMS Campus"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 text-[10px] text-gray-600 leading-tight">
                      <span className="font-bold text-[#112555] block">CIMS Campus</span>
                      Purba Medinipur, WB • Est. 2011
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Dropdown (ISHM Programs Mega-Menu Style) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/courses"
                className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1 rounded-md ${
                  pathname.startsWith('/courses') ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
                }`}
              >
                <span>Courses</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 text-[#ed8100]" />
              </Link>

              <div className="absolute top-full left-0 w-[620px] bg-white shadow-2xl rounded-lg p-5 border-t-3 border-[#ed8100] border-x border-b border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="border-b border-gray-100 pb-2 mb-3 flex items-center justify-between">
                  <h3 className="font-heading font-extrabold text-[#112555] text-sm uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap size={16} className="text-[#ed8100]" />
                    University Affiliated Programs
                  </h3>
                  <Link href="/courses" className="text-xs font-bold text-[#ed8100] hover:underline">
                    View All Programs &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-7 space-y-2">
                    <div>
                      <div className="text-[10px] font-extrabold text-[#ed8100] uppercase tracking-wider mb-1">
                        Degree Programs
                      </div>
                      <div className="space-y-1">
                        <Link href="/courses/hospital-management" className="block text-xs font-bold text-[#112555] hover:text-[#ed8100] transition-colors">
                          BBA in Hospital Management
                          <span className="block text-[10px] text-gray-500 font-normal">3 Years • Hospital Administration &amp; Clinical Management</span>
                        </Link>
                        <Link href="/courses/hospitality-hotel-management" className="block text-xs font-bold text-[#112555] hover:text-[#ed8100] transition-colors">
                          B.Sc in Hospitality &amp; Hotel Administration
                          <span className="block text-[10px] text-gray-500 font-normal">3 Years • 5-Star Hotel Training &amp; Professional Career</span>
                        </Link>
                        <Link href="/courses/bca" className="block text-xs font-bold text-[#112555] hover:text-[#ed8100] transition-colors">
                          BCA - Bachelor of Computer Applications
                          <span className="block text-[10px] text-gray-500 font-normal">3 Years • Software, Web, Cloud &amp; Full-Stack</span>
                        </Link>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-[10px] font-extrabold text-[#ed8100] uppercase tracking-wider mb-1">
                        Allied Health &amp; Paramedical
                      </div>
                      <Link href="/courses/allied-health-science" className="block text-xs font-bold text-[#112555] hover:text-[#ed8100] transition-colors">
                        Paramedical Sciences (BMLT, BMRIT, Critical Care, OTT)
                        <span className="block text-[10px] text-gray-500 font-normal">3-4 Years • Hospital Clinical Postings &amp; Diagnostic Labs</span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-5 bg-gradient-to-br from-blue-50/70 to-orange-50/50 p-3 rounded-lg border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="relative h-28 w-full rounded overflow-hidden shadow-sm">
                        <Image
                          src="/images/hero/campus-photo.jpg"
                          alt="Practical Training"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-2 text-[11px] font-bold text-[#112555]">
                        100% Practical Training
                      </div>
                      <p className="text-[10px] text-gray-600 mt-0.5 leading-snug">
                        Rotations at City Hospital, Fortis, Medica, and luxury chains Taj, Hyatt &amp; Marriott.
                      </p>
                    </div>
                    <Link
                      href="/#admission-form"
                      className="mt-3 block text-center bg-[#ed8100] hover:bg-[#d97400] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 rounded shadow-sm"
                    >
                      Enquire for 2026 Batch
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/training-placements" 
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/training-placements' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
              }`}
            >
              Placement
            </Link>

            <Link 
              href="/approvals-affiliations" 
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/approvals-affiliations' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
              }`}
            >
              Affiliations
            </Link>

            <Link 
              href="/gallery" 
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/gallery' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
              }`}
            >
              Gallery
            </Link>

            <Link 
              href="/news-notices" 
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/news-notices' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
              }`}
            >
              News &amp; Notice
            </Link>

            <Link 
              href="/contact" 
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-md ${
                pathname === '/contact' ? 'text-[#ed8100] bg-orange-50/70' : 'text-[#112555] hover:text-[#ed8100] hover:underline decoration-2 decoration-[#ed8100]'
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* Right Action CTA Buttons & ISHM "Need Help" Box */}
          <div className="hidden sm:flex items-center space-x-2.5 xl:space-x-3 flex-shrink-0">
            {/* ISHM Style Yellow Call Widget */}
            <div className="hidden 2xl:flex items-center bg-[#ffc923] text-[#112555] px-3 py-1.5 rounded-md shadow-sm border border-yellow-400">
              <div className="animate-phone-ring text-[#112555] mr-2">
                <PhoneCall size={15} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] font-black uppercase tracking-wider text-gray-800">Need Help?</span>
                <a href={`tel:${CIMS_INFO.phone}`} className="text-xs font-black tracking-tight hover:underline">
                  {CIMS_INFO.phone}
                </a>
              </div>
            </div>

            <a 
              href="/#admission-form" 
              className="bg-[#ed8100] hover:bg-[#d97400] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <GraduationCap size={16} />
              <span>Admission 2026</span>
            </a>

            <a 
              href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-md transition-all flex items-center gap-1.5"
            >
              <Download size={14} />
              <span className="hidden xl:inline">Brochure</span>
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] z-50 bg-black/60 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div 
            className="w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-3 pb-6 border-b border-gray-100">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className="font-bold text-base text-[#112555] hover:text-[#ed8100] py-1"
              >
                Home
              </Link>

              {/* About Us Submenu */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-about')}
                  className="flex items-center justify-between w-full font-bold text-base text-[#112555] hover:text-[#ed8100] py-1"
                >
                  <span>About Us</span>
                  <ChevronDown size={16} className={activeDropdown === 'mobile-about' ? 'rotate-180' : ''} />
                </button>
                {activeDropdown === 'mobile-about' && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded-lg mt-1">
                    <Link href="/about" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Overview &amp; Heritage</Link>
                    <Link href="/about#mission-vision" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Vision &amp; Mission</Link>
                    <Link href="/about#leadership" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Leadership Desk</Link>
                    <Link href="/about#faculty" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Faculty &amp; Mentors</Link>
                    <Link href="/about#why-cims" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Why CIMS</Link>
                  </div>
                )}
              </div>

              {/* Courses Submenu */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-courses')}
                  className="flex items-center justify-between w-full font-bold text-base text-[#112555] hover:text-[#ed8100] py-1"
                >
                  <span>Courses</span>
                  <ChevronDown size={16} className={activeDropdown === 'mobile-courses' ? 'rotate-180' : ''} />
                </button>
                {activeDropdown === 'mobile-courses' && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded-lg mt-1">
                    <Link href="/courses/hospital-management" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Hospital Management</Link>
                    <Link href="/courses/hospitality-hotel-management" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Hospitality &amp; Hotel Management</Link>
                    <Link href="/courses/allied-health-science" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">Allied Health Sciences (Paramedical)</Link>
                    <Link href="/courses/bca" onClick={closeMobileMenu} className="block text-sm text-gray-700 py-1">BCA - Computer Applications</Link>
                    <Link href="/courses" onClick={closeMobileMenu} className="block text-sm font-semibold text-[#ed8100] py-1">All Courses Overview</Link>
                  </div>
                )}
              </div>

              <Link href="/training-placements" onClick={closeMobileMenu} className="font-bold text-base text-[#112555] hover:text-[#ed8100] py-1">
                Training &amp; Placements
              </Link>
              <Link href="/approvals-affiliations" onClick={closeMobileMenu} className="font-bold text-base text-[#112555] hover:text-[#ed8100] py-1">
                Approvals &amp; Affiliations
              </Link>
              <Link href="/gallery" onClick={closeMobileMenu} className="font-bold text-base text-[#112555] hover:text-[#ed8100] py-1">
                Gallery
              </Link>
              <Link href="/news-notices" onClick={closeMobileMenu} className="font-bold text-base text-[#112555] hover:text-[#ed8100] py-1">
                News &amp; Notices
              </Link>
              <Link href="/contact" onClick={closeMobileMenu} className="font-bold text-base text-[#112555] hover:text-[#ed8100] py-1">
                Contact Us
              </Link>
            </div>

            <div className="pt-6 space-y-3">
              <Link 
                href="/#admission-form" 
                onClick={closeMobileMenu}
                className="w-full block text-center bg-[#ed8100] text-white py-3 rounded-lg font-bold text-sm shadow-md"
              >
                Apply for Admission 2026
              </Link>
              <a 
                href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border border-[#112555] text-[#112555] py-2.5 rounded-lg font-bold text-sm"
              >
                Download E-Prospectus
              </a>
              <div className="pt-2 text-center text-xs text-gray-500">
                Helpline: <a href={`tel:${CIMS_INFO.phone}`} className="font-bold text-[#112555]">{CIMS_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
