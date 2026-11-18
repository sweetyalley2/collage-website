"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Send,
  ArrowRight,
  PhoneCall,
  X,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MapPin,
  Mail,
  User,
  BookOpen,
  Award
} from 'lucide-react';

interface CollageTile {
  src: string;
  alt: string;
  colSpan: string;
  rowSpan: string;
  rotation: string;
  zIndex: string;
  aspect: string;
}

interface CollageComposition {
  id: string;
  title: string;
  tiles: CollageTile[];
}

const COLLAGE_COMPOSITIONS: CollageComposition[] = [
  {
    "id": "comp-1",
    "title": "Campus & Specialized Labs",
    "tiles": [
      {
        "src": "/images/cims-photos/cims-photo-001.jpeg",
        "alt": "CIMS Campus Main Building & Entrance",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-002.jpeg",
        "alt": "Culinary Production & Kitchen Training",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-003.jpeg",
        "alt": "Paramedical Pathology & Diagnostic Lab",
        "colSpan": "hidden sm:block sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-004.jpeg",
        "alt": "Hospitality Service & Front Office",
        "colSpan": "hidden lg:block lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-005.jpeg",
        "alt": "Hospital Management Lecture Hall",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-006.jpeg",
        "alt": "Student Medical Laboratory Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-007.jpeg",
        "alt": "Institutional Seminar & Academic Symposium",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-008.jpeg",
        "alt": "Student Campus Activities & Teamwork",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      }
    ]
  },
  {
    "id": "comp-2",
    "title": "Hospitality & Clinical Diagnostics",
    "tiles": [
      {
        "src": "/images/cims-photos/cims-photo-012.jpeg",
        "alt": "Grand Convocation Ceremony",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-013.jpeg",
        "alt": "Clinical Ward Nursing & Patient Care",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-014.jpeg",
        "alt": "Bakery, Pastry & Confectionery Arts",
        "colSpan": "hidden sm:block sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-015.jpeg",
        "alt": "Hospital Administration Seminar Session",
        "colSpan": "hidden lg:block lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-016.jpeg",
        "alt": "Luxury Hotel Restaurant Mock Setup",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-017.jpeg",
        "alt": "Biochemistry Centrifuge Diagnostic Testing",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-018.jpeg",
        "alt": "Campus Gardens & Student Gathering",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-010.jpeg",
        "alt": "Advanced Computing & Coding Lab",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      }
    ]
  },
  {
    "id": "comp-3",
    "title": "Aviation, Fashion & Medical Technology",
    "tiles": [
      {
        "src": "/images/cims-photos/cims-photo-019.jpeg",
        "alt": "Aviation & In-Flight Service Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-020.jpeg",
        "alt": "Fashion & Garment Technology Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-021.jpeg",
        "alt": "Paramedical Hematology Cell Counting",
        "colSpan": "hidden sm:block sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-022.jpeg",
        "alt": "Culinary Masterclass by Executive Chef",
        "colSpan": "hidden lg:block lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-023.jpeg",
        "alt": "Superintendent Rounds & Hospital Training",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-024.jpeg",
        "alt": "BCA Software Engineering Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.8",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-025.jpeg",
        "alt": "Industry Mentorship & Interactive Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-026.jpeg",
        "alt": "Beverage Mixology & Hospitality Bar Craft",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      }
    ]
  },
  {
    "id": "comp-4",
    "title": "Medical Operations, Library & Degree Day",
    "tiles": [
      {
        "src": "/images/cims-photos/cims-photo-030.jpeg",
        "alt": "Degree Conferment & Academic Honors",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.8",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-031.jpeg",
        "alt": "Operation Theatre Technology Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-032.jpeg",
        "alt": "Five Star Hotel Concierge Simulation",
        "colSpan": "hidden sm:block sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-033.jpeg",
        "alt": "Medical Radiology & Diagnostic Imaging",
        "colSpan": "hidden lg:block lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-034.jpeg",
        "alt": "Independence Day Flag Hoisting & Assembly",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-035.jpeg",
        "alt": "Culinary Fruit & Vegetable Carving Art",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.4",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-029.jpeg",
        "alt": "Central Library & Digital Study Center",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.6",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-038.jpeg",
        "alt": "Campus Placement Drive & Interview Rounds",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.8",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      }
    ]
  },
  {
    "id": "comp-5",
    "title": "Smart Academics, Hospital Cases & Arts",
    "tiles": [
      {
        "src": "/images/cims-photos/cims-photo-039.jpeg",
        "alt": "Advanced Automated Clinical Analyzers",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-040.jpeg",
        "alt": "Fine Dining Banquet Protocol Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-041.jpeg",
        "alt": "Computer Programming & Web Tech Practical",
        "colSpan": "hidden sm:block sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.8",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-042.jpeg",
        "alt": "Healthcare Administration Strategy Forum",
        "colSpan": "hidden lg:block lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-photos/cims-photo-043.jpeg",
        "alt": "Human Anatomy & Physiology Practical Models",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-044.jpeg",
        "alt": "Specialty Coffee & Barista Service Lab",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-045.jpeg",
        "alt": "Triumphant Graduate Students in Robes",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-photos/cims-photo-047.jpeg",
        "alt": "CIMS Campus Modern Academic Infrastructure",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      }
    ]
  }
];

export default function HomePage() {
  // Active collage slide index (0 to 4)
  const [activeSlide, setActiveSlide] = useState(0);
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

  // 1. Automatic Collage Change Timer (Transitions every 5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % COLLAGE_COMPOSITIONS.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // 2. Preload all collage images to ensure seamless, flash-free transitions
  useEffect(() => {
    const urls = new Set<string>();
    COLLAGE_COMPOSITIONS.forEach((comp) => {
      comp.tiles.forEach((tile) => urls.add(tile.src));
    });
    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  // Form input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler connected to /api/inquiry
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
      className="relative w-full h-[calc(100vh-125px)] min-h-[580px] sm:min-h-[640px] max-h-[960px] overflow-hidden bg-slate-950 select-none flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          1. RECREATION OF REFERENCE VIDEO PHOTOGRAPHIC COLLAGE (BACKGROUND)
          - Multiple authentic CIMS photos visible simultaneously
          - Mixture of large, medium and small rectangular photographs
          - Slight diagonal rotation angles (-2 deg to +2 deg)
          - Clean white borders/frames with physical box shadows
          - Layered, tightly arranged mosaic layout without empty gaps
          - Automatic transition every 5.5s with smooth crossfade & Ken Burns zoom
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {COLLAGE_COMPOSITIONS.map((comp, compIdx) => {
          const isActive = compIdx === activeSlide;
          return (
            <div
              key={comp.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1200 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              {/* Cinematic subtle Ken Burns motion container */}
              <div className={`w-full h-full p-2 sm:p-4 lg:p-6 ${isActive ? 'animate-kenburns-subtle' : ''}`}>
                <div className="grid grid-cols-12 gap-2 sm:gap-3 lg:gap-4.5 w-full h-full items-center justify-center">
                  {comp.tiles.map((tile, tileIdx) => (
                    <div
                      key={tileIdx}
                      className={`${tile.colSpan} ${tile.rowSpan} ${tile.zIndex} relative group`}
                    >
                      {/* Clean White Frame / Border with Shadow & Diagonal Angle */}
                      <div
                        className={`bg-white p-1 sm:p-1.5 md:p-2 rounded-sm sm:rounded shadow-[0_8px_30px_rgba(0,0,0,0.5)] transform ${tile.rotation} transition-transform duration-500 hover:rotate-0 hover:scale-105 border border-white/90 overflow-hidden w-full`}
                      >
                        <div className={`relative w-full ${tile.aspect} overflow-hidden rounded-[2px] bg-slate-200`}>
                          <img
                            src={tile.src}
                            alt={tile.alt}
                            className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] select-none pointer-events-none"
                            loading={compIdx === 0 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Dark Vignette Overlay for Contrast & Button Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/45 z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 z-20 pointer-events-none" />

      {/* =========================================================================
          2. MINIMAL HOMEPAGE CONTENT: ONLY THE TWO REQUESTED BUTTONS
          - 1. Admission Form button (Links to /admission)
          - 2. Enquiry Form button (Opens interactive enquiry modal)
          - No extra homepage sections, no welcome text, no promotional previews
          ========================================================================= */}
      <div className="relative z-30 px-4 sm:px-6 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Subtle decorative college badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-[#ffc923] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-6 shadow-xl">
          <Sparkles size={14} className="text-[#ffc923]" />
          <span>Cambridge Institute of Management Studies</span>
        </div>

        {/* The Two Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none">
          {/* 1. Admission Form Button */}
          <Link
            href="/admission"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ed8100] via-[#ff9724] to-[#ed8100] bg-[length:200%_auto] hover:bg-right text-white font-heading font-extrabold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl shadow-[0_12px_40px_rgba(237,129,0,0.65)] hover:shadow-[0_16px_50px_rgba(237,129,0,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 uppercase tracking-wider text-center"
          >
            <GraduationCap size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Admission Form</span>
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* 2. Enquiry Form Button */}
          <button
            type="button"
            onClick={() => setIsEnquiryModalOpen(true)}
            className="group inline-flex items-center justify-center gap-3 bg-[#112555] hover:bg-[#0c1b3f] text-white font-heading font-extrabold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl shadow-[0_12px_40px_rgba(17,37,85,0.75)] hover:shadow-[0_16px_50px_rgba(17,37,85,0.95)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 uppercase tracking-wider text-center cursor-pointer"
          >
            <Send size={19} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            <span>Enquiry Form</span>
          </button>
        </div>

        {/* Small subtle session hint */}
        <p className="text-white/80 text-[11px] font-semibold mt-4 drop-shadow">
          Academic Session 2026–27 • Admissions &amp; Counseling Open
        </p>
      </div>

      {/* Collage Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
        {COLLAGE_COMPOSITIONS.map((comp, idx) => (
          <button
            key={comp.id}
            onClick={() => setActiveSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeSlide
                ? 'w-6 h-2 bg-[#ed8100]'
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Jump to collage ${idx + 1}: ${comp.title}`}
          />
        ))}
      </div>

      {/* =========================================================================
          3. INTERACTIVE ENQUIRY FORM MODAL (POPS UP ON CLICKING ENQUIRY FORM)
          - Connects to /api/inquiry
          - Sends instant email notification to official CIMS email
          - Stores submission in Admin Dashboard CMS Store
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
