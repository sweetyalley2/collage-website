"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Send,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award
} from 'lucide-react';

interface InsetTile {
  src: string;
  alt: string;
  caption: string;
  rotation: string;
  hideOnMobile?: boolean;
}

interface CollageSlide {
  id: string;
  discipline: string;
  subtitle: string;
  focalPhoto: {
    src: string;
    alt: string;
  };
  insetTiles: InsetTile[];
}

// 5 ISHM-Inspired Collage Compositions Using Authentic CIMS Optimized Photographs
const COLLAGE_SLIDES: CollageSlide[] = [
  {
    id: 'slide-hospitality',
    discipline: 'Hotel & Hospitality Management',
    subtitle: '5-Star Luxury Hotel Internships • Culinary, F&B & Front Office Live Training',
    focalPhoto: {
      src: '/images/cims-optimized/cims-photo-002.webp',
      alt: 'Live Culinary Kitchen Practical with Executive Chef & Students'
    },
    insetTiles: [
      {
        src: '/images/cims-optimized/cims-photo-004.webp',
        alt: 'Hospitality Front Office & Concierge Training',
        caption: 'Front Office Protocol',
        rotation: '-rotate-2 sm:-rotate-3'
      },
      {
        src: '/images/cims-optimized/cims-photo-014.webp',
        alt: 'Bakery, Pastry & Confectionery Arts',
        caption: 'Confectionery Arts',
        rotation: 'rotate-1 sm:rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-016.webp',
        alt: 'Fine Dining Restaurant Table Layout',
        caption: 'F&B Service Setup',
        rotation: '-rotate-1 sm:-rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-026.webp',
        alt: 'Mocktail & Beverage Mixology Lab',
        caption: 'Beverage Mixology',
        rotation: 'rotate-2 sm:rotate-3',
        hideOnMobile: true
      }
    ]
  },
  {
    id: 'slide-hospital',
    discipline: 'Hospital Management & Healthcare',
    subtitle: 'Multispecialty Hospital Tie-ups • Clinical Administration & Operations Training',
    focalPhoto: {
      src: '/images/cims-optimized/cims-photo-005.webp',
      alt: 'Hospital Management Seminar Hall & Administrative Case Studies'
    },
    insetTiles: [
      {
        src: '/images/cims-optimized/cims-photo-013.webp',
        alt: 'Clinical Ward Patient Care Protocols',
        caption: 'Clinical Care Setup',
        rotation: 'rotate-2 sm:rotate-3'
      },
      {
        src: '/images/cims-optimized/cims-photo-015.webp',
        alt: 'Healthcare Administration Lecture Session',
        caption: 'Hospital Admin Rounds',
        rotation: '-rotate-2 sm:-rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-023.webp',
        alt: 'Superintendent Guidance & Practical Rounds',
        caption: 'Superintendent Rounds',
        rotation: 'rotate-1 sm:rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-037.webp',
        alt: 'Medical Records & Case History Discussion',
        caption: 'Healthcare Operations',
        rotation: '-rotate-1 sm:-rotate-3',
        hideOnMobile: true
      }
    ]
  },
  {
    id: 'slide-paramedical',
    discipline: 'Paramedical & Allied Health Sciences',
    subtitle: 'Advanced Pathology Laboratories • BMLT, Radiology & OT Technology Practicals',
    focalPhoto: {
      src: '/images/cims-optimized/cims-photo-003.webp',
      alt: 'Advanced Pathology Diagnostic Lab & Microscopic Analysis'
    },
    insetTiles: [
      {
        src: '/images/cims-optimized/cims-photo-006.webp',
        alt: 'Paramedical Hematology & Blood Testing',
        caption: 'Hematology Practical',
        rotation: '-rotate-2 sm:-rotate-3'
      },
      {
        src: '/images/cims-optimized/cims-photo-017.webp',
        alt: 'Biochemistry Centrifuge Diagnostic Equipment',
        caption: 'Biochemistry Lab',
        rotation: 'rotate-2 sm:rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-021.webp',
        alt: 'Diagnostic Microscopy Cell Morphology',
        caption: 'Cell Morphology',
        rotation: '-rotate-1 sm:-rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-031.webp',
        alt: 'Operation Theatre Technology Practical',
        caption: 'OT Equipment Practical',
        rotation: 'rotate-1 sm:rotate-3',
        hideOnMobile: true
      }
    ]
  },
  {
    id: 'slide-computing',
    discipline: 'Computer Application & IT (BCA)',
    subtitle: 'Modern Computing Labs • Software Engineering, Coding & Digital Innovation',
    focalPhoto: {
      src: '/images/cims-optimized/cims-photo-010.webp',
      alt: 'High-Tech Computing Laboratory with Modern Workstations'
    },
    insetTiles: [
      {
        src: '/images/cims-optimized/cims-photo-024.webp',
        alt: 'Software Engineering & Programming Practical',
        caption: 'Software Development',
        rotation: 'rotate-2 sm:rotate-3'
      },
      {
        src: '/images/cims-optimized/cims-photo-029.webp',
        alt: 'Digital Library & Information Center',
        caption: 'Digital Tech Library',
        rotation: '-rotate-2 sm:-rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-041.webp',
        alt: 'Algorithms & Full-Stack Web Development Workshop',
        caption: 'Algorithm Workshop',
        rotation: 'rotate-1 sm:rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-019.webp',
        alt: 'Aviation & Airport Passenger System Training',
        caption: 'Aviation IT Systems',
        rotation: '-rotate-1 sm:-rotate-3',
        hideOnMobile: true
      }
    ]
  },
  {
    id: 'slide-campus',
    discipline: 'Campus Life & Academic Convocation',
    subtitle: 'ESTD 2011 • Approved Under MAKAUT (CCPTR) & Swami Vivekananda Foundation',
    focalPhoto: {
      src: '/images/cims-optimized/cims-photo-001.webp',
      alt: 'CIMS Main Campus Building & Educational Infrastructure'
    },
    insetTiles: [
      {
        src: '/images/cims-optimized/cims-photo-012.webp',
        alt: 'Grand Academic Convocation Procession',
        caption: 'Convocation Procession',
        rotation: '-rotate-2 sm:-rotate-3'
      },
      {
        src: '/images/cims-optimized/cims-photo-030.webp',
        alt: 'Degree Conferment & Student Academic Honors',
        caption: 'Degree Conferment',
        rotation: 'rotate-2 sm:rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-034.webp',
        alt: 'National Assembly & Campus Flag Hoisting',
        caption: 'Campus Assembly',
        rotation: '-rotate-1 sm:-rotate-2'
      },
      {
        src: '/images/cims-optimized/cims-photo-038.webp',
        alt: 'Placement Drive & Campus Interviews',
        caption: 'Placement Drive',
        rotation: 'rotate-1 sm:rotate-3',
        hideOnMobile: true
      }
    ]
  }
];

export default function HomePage() {
  // Active collage slide (0 to 4)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Enquiry Form Modal State
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'BBA in Hospital Management',
    qualification: '10+2 / Higher Secondary',
    city: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // 1. Automatic Collage Change Timer: changes every 3.5 seconds (Requirement: 3-4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % COLLAGE_SLIDES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // 2. Preload the next collage images in advance (Performance Optimization)
  useEffect(() => {
    const nextIdx = (currentSlide + 1) % COLLAGE_SLIDES.length;
    const nextSlide = COLLAGE_SLIDES[nextIdx];
    
    // Preload focal photo
    const img1 = new window.Image();
    img1.src = nextSlide.focalPhoto.src;
    
    // Preload inset tiles
    nextSlide.insetTiles.forEach((tile) => {
      const img = new window.Image();
      img.src = tile.src;
    });
  }, [currentSlide]);

  // Preload initial batch on mount
  useEffect(() => {
    COLLAGE_SLIDES.slice(0, 2).forEach((slide) => {
      const focal = new window.Image();
      focal.src = slide.focalPhoto.src;
      slide.insetTiles.forEach((t) => {
        const inset = new window.Image();
        inset.src = t.src;
      });
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError('Please enter a valid candidate name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^\d]/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile contact number.');
      return;
    }

    setFormSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        setFormError(data.error || 'Unable to submit enquiry. Please try again.');
      }
    } catch (err) {
      setFormError('Network connection issue. Please check your internet or call helpline.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const resetFormModal = () => {
    setIsEnquiryModalOpen(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormError('');
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: 'BBA in Hospital Management',
        qualification: '10+2 / Higher Secondary',
        city: '',
        message: ''
      });
    }, 300);
  };

  return (
    <div 
      className="relative w-full h-[calc(100vh-125px)] min-h-[580px] sm:min-h-[640px] max-h-[920px] overflow-hidden bg-[#071129] select-none flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          1. ISHM-STYLE CIMS PHOTOGRAPHIC COLLAGE BACKGROUND
          - Large full-width photographic hero
          - Multiple photographs visible simultaneously (focal + 3-4 inset tiles)
          - Combination of large, medium and small image tiles with clean white borders
          - Asymmetrical angled layout matching ISHM
          - Automatic transition every 3.5 seconds with smooth crossfade
          - Preloaded next composition, optimized WebP images (<80KB per tile)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {COLLAGE_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <div className={`relative w-full h-full overflow-hidden ${isActive ? 'animate-kenburns-subtle' : ''}`}>
                
                {/* A. Large Focal Background Photograph */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={slide.focalPhoto.src}
                    alt={slide.focalPhoto.alt}
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  {/* Subtle directional gradients for legibility & contrast */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071129]/95 via-[#071129]/70 to-transparent sm:via-[#071129]/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071129]/90 via-black/25 to-black/40" />
                </div>

                {/* B. ISHM-Style Discipline Heading & Ribbon (Top-Left) */}
                <div className="absolute top-6 sm:top-10 lg:top-14 left-4 sm:left-8 lg:left-14 z-20 max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-[#ed8100] text-white font-extrabold text-[11px] sm:text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg mb-2">
                    <Sparkles size={13} className="text-white" />
                    <span>CIMS ACADEMIC PROGRAMME</span>
                  </div>
                  <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] leading-tight">
                    {slide.discipline}
                  </h1>
                  <p className="text-gray-200 text-xs sm:text-sm font-medium mt-1.5 drop-shadow max-w-lg hidden sm:block">
                    {slide.subtitle}
                  </p>
                </div>

                {/* C. ISHM-Style Multiple Inset Photographic Tiles (Bottom-Right / Spread) */}
                <div className="absolute right-3 sm:right-6 lg:right-12 bottom-16 sm:bottom-12 z-20 flex flex-row items-end gap-2 sm:gap-3.5 max-w-[92vw] sm:max-w-2xl overflow-hidden">
                  {slide.insetTiles.map((tile, tIdx) => (
                    <div
                      key={tIdx}
                      className={`relative bg-white p-1 sm:p-1.5 rounded-md shadow-[0_12px_35px_rgba(0,0,0,0.65)] border border-white/95 transform transition-all duration-500 hover:scale-105 hover:rotate-0 ${tile.rotation} ${tile.hideOnMobile ? 'hidden sm:block' : ''}`}
                    >
                      <div className="relative w-24 sm:w-32 md:w-40 aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-200">
                        <img
                          src={tile.src}
                          alt={tile.alt}
                          className="w-full h-full object-cover"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                        />
                      </div>
                      <div className="bg-[#112555] text-white text-[9px] sm:text-[10px] font-bold px-1 py-0.5 mt-1 rounded text-center truncate max-w-full">
                        {tile.caption}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Vignette for Foreground Button Prominence */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 z-20 pointer-events-none" />

      {/* =========================================================================
          2. MINIMAL HOMEPAGE CONTENT: ONLY THE TWO REQUESTED BUTTONS
          - 1. Admission Form button (opens existing /admission page)
          - 2. Enquiry Form button (opens interactive enquiry modal)
          - No extra headings, no descriptions, no statistics, no extra sections
          ========================================================================= */}
      <div className="relative z-30 px-4 w-full max-w-md sm:max-w-xl mx-auto flex flex-col items-center justify-center text-center mt-14 sm:mt-20">
        
        {/* Floating Action Buttons Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 w-full max-w-sm sm:max-w-none">
          {/* 1. Admission Form Button */}
          <Link
            href="/admission"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ed8100] via-[#ff9724] to-[#ed8100] bg-[length:200%_auto] hover:bg-right text-white font-heading font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl shadow-[0_12px_40px_rgba(237,129,0,0.65)] hover:shadow-[0_16px_50px_rgba(237,129,0,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 uppercase tracking-wider text-center"
          >
            <GraduationCap size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Admission Form</span>
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* 2. Enquiry Form Button */}
          <button
            type="button"
            onClick={() => setIsEnquiryModalOpen(true)}
            className="group inline-flex items-center justify-center gap-3 bg-[#112555] hover:bg-[#0c1b3f] text-white font-heading font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl shadow-[0_12px_40px_rgba(17,37,85,0.75)] hover:shadow-[0_16px_50px_rgba(17,37,85,0.95)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 uppercase tracking-wider text-center cursor-pointer"
          >
            <Send size={19} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            <span>Enquiry Form</span>
          </button>
        </div>

        {/* Subtle academic badge pill */}
        <p className="text-white/90 text-[11px] font-semibold mt-4 drop-shadow bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
          Academic Session 2026–27 • Admissions &amp; Counseling Open
        </p>
      </div>

      {/* ISHM-Style Collage Composition Dots & Controls */}
      <div className="absolute bottom-4 left-4 sm:left-8 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + COLLAGE_SLIDES.length) % COLLAGE_SLIDES.length)}
          className="text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Previous Collage"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-1.5">
          {COLLAGE_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-6 h-2 bg-[#ed8100]'
                  : 'w-2 h-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Jump to ${slide.discipline}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % COLLAGE_SLIDES.length)}
          className="text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Next Collage"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* =========================================================================
          3. ENQUIRY FORM MODAL (POPS UP ON CLICKING ENQUIRY FORM BUTTON)
          - Submits to /api/inquiry
          - Dispatches email notification to cambridge567@gmail.com
          - Stores lead in Admin Dashboard CMS store
          ========================================================================= */}
      {isEnquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#112555] to-[#1e3a8a] text-white p-5 sm:p-6 relative">
              <button
                type="button"
                onClick={resetFormModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors cursor-pointer"
                aria-label="Close Enquiry Form"
              >
                <X size={20} />
              </button>
              <span className="text-[#ffc923] text-xs font-extrabold uppercase tracking-wider block mb-1">
                Admissions 2026–2027
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                CIMS Admission Enquiry
              </h3>
              <p className="text-xs text-gray-200 mt-1">
                Submit your query. Our academic counsellor will contact you within 24 hours.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#112555]">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-[#112555]">{formData.name}</span>. Your details have been delivered to the CIMS Admissions Office. Our team will get in touch at <span className="font-bold text-[#112555]">{formData.phone}</span> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetFormModal}
                      className="bg-[#112555] hover:bg-[#0c1b3f] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Candidate Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                      Candidate Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sen"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@email.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Course of Interest */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                      Course of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all bg-white"
                    >
                      <option value="BBA in Hospital Management">BBA in Hospital Management (MAKAUT CCPTR)</option>
                      <option value="B.Sc Hospitality & Hotel Administration">B.Sc Hospitality &amp; Hotel Administration (MAKAUT)</option>
                      <option value="Bachelor of Computer Application (BCA)">Bachelor of Computer Application (BCA)</option>
                      <option value="Aviation & Airport Operations">Aviation &amp; Airport Operations</option>
                      <option value="Fashion Design & Apparel Technology">Fashion Design &amp; Apparel Technology</option>
                      <option value="Allied Health Sciences & Paramedical">Allied Health Sciences &amp; Paramedical (BMLT/BMRIT)</option>
                    </select>
                  </div>

                  {/* Qualification & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                        Qualification
                      </label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all bg-white"
                      >
                        <option value="10+2 / Higher Secondary">10+2 / Higher Secondary</option>
                        <option value="Graduation Passed / Appearing">Graduation Passed / Appearing</option>
                        <option value="Secondary (10th)">Secondary (10th)</option>
                        <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                        City / District
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Kolkata / Medinipur"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                      Message / Any Question (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your questions regarding admission, hostel or fees..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3 px-4 bg-gradient-to-r from-[#ed8100] to-[#ff9724] hover:from-[#d97400] hover:to-[#ed8100] text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
