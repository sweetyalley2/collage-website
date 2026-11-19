"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, GraduationCap, ChevronRight, PhoneCall, Award, Building2, ShieldCheck, HeartHandshake } from 'lucide-react';
import EnquiryModal from '@/components/EnquiryModal';

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
        "src": "/images/cims-optimized/cims-photo-001.webp",
        "alt": "CIMS Campus Main Building & Entrance",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-002.webp",
        "alt": "Culinary Production & Kitchen Training",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-003.webp",
        "alt": "Paramedical Pathology & Diagnostic Lab",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-004.webp",
        "alt": "Hospitality Service & Front Office",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-005.webp",
        "alt": "Hospital Management Lecture Hall",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-006.webp",
        "alt": "Student Medical Laboratory Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-007.webp",
        "alt": "Institutional Seminar & Academic Symposium",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-008.webp",
        "alt": "Student Campus Activities & Teamwork",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-009.webp",
        "alt": "Emergency Care & Clinical Simulation",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-010.webp",
        "alt": "IT & High-Speed Development Lab",
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
        "src": "/images/cims-optimized/cims-photo-012.webp",
        "alt": "Grand Convocation Ceremony",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-013.webp",
        "alt": "Clinical Ward Nursing & Patient Care",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-014.webp",
        "alt": "Bakery, Pastry & Confectionery Arts",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-015.webp",
        "alt": "Hospital Administration Seminar Session",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-016.webp",
        "alt": "Luxury Hotel Restaurant Mock Setup",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-017.webp",
        "alt": "Biochemistry Centrifuge Diagnostic Testing",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-018.webp",
        "alt": "Campus Gardens & Student Gathering",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-010.webp",
        "alt": "Advanced Computing & Coding Lab",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-011.webp",
        "alt": "Operation Theatre Protocol & Equipment Training",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-009.webp",
        "alt": "Clinical Management Practical Simulation",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
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
        "src": "/images/cims-optimized/cims-photo-019.webp",
        "alt": "Aviation & In-Flight Service Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-020.webp",
        "alt": "Fashion & Garment Technology Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-021.webp",
        "alt": "Paramedical Hematology Cell Counting",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-022.webp",
        "alt": "Culinary Masterclass by Executive Chef",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-023.webp",
        "alt": "Superintendent Rounds & Hospital Training",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-024.webp",
        "alt": "BCA Software Engineering Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.8",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-025.webp",
        "alt": "Industry Mentorship & Interactive Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-026.webp",
        "alt": "Beverage Mixology & Hospitality Bar Craft",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-027.webp",
        "alt": "Hospital Operations & Executive Conference",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-028.webp",
        "alt": "Clinical Rotation Briefing & Rounds",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
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
        "src": "/images/cims-optimized/cims-photo-030.webp",
        "alt": "Degree Conferment & Academic Honors",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.8",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-031.webp",
        "alt": "Operation Theatre Technology Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-032.webp",
        "alt": "Five Star Hotel Concierge Simulation",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-033.webp",
        "alt": "Medical Radiology & Diagnostic Imaging",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-2",
        "zIndex": "z-10",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-034.webp",
        "alt": "Independence Day Flag Hoisting & Assembly",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-035.webp",
        "alt": "Culinary Fruit & Vegetable Carving Art",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.4",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-029.webp",
        "alt": "Central Library & Digital Study Center",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.6",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-038.webp",
        "alt": "Campus Placement Drive & Interview Rounds",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.8",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-036.webp",
        "alt": "Hospital Inpatient Ward Management Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-037.webp",
        "alt": "Food Science & Bakery Creation Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.5",
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
        "src": "/images/cims-optimized/cims-photo-039.webp",
        "alt": "Advanced Automated Clinical Analyzers",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-040.webp",
        "alt": "Fine Dining Banquet Protocol Workshop",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-041.webp",
        "alt": "Computer Programming & Web Tech Practical",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.8",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-042.webp",
        "alt": "Healthcare Administration Strategy Forum",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-2",
        "rotation": "rotate-1 sm:rotate-1.5",
        "zIndex": "z-20",
        "aspect": "aspect-[3/4]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-043.webp",
        "alt": "Human Anatomy & Physiology Practical Models",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-1.2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-044.webp",
        "alt": "Specialty Coffee & Barista Service Lab",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-045.webp",
        "alt": "Triumphant Graduate Students in Robes",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-047.webp",
        "alt": "CIMS Campus Modern Academic Infrastructure",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "rotate-1 sm:rotate-2",
        "zIndex": "z-20",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-046.webp",
        "alt": "Clinical Diagnostic Laboratory Session",
        "colSpan": "col-span-6 sm:col-span-4 lg:col-span-3",
        "rowSpan": "row-span-1",
        "rotation": "-rotate-1 sm:-rotate-1.5",
        "zIndex": "z-10",
        "aspect": "aspect-[4/3] sm:aspect-[16/10]"
      },
      {
        "src": "/images/cims-optimized/cims-photo-048.webp",
        "alt": "Culinary Masterclass & Fine Dining Banquet",
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

  // Enquiry Form Modal State
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // 1. Automatic Admission Enquiry Popup on homepage visit (once per browsing session)
  useEffect(() => {
    try {
      const popupClosed = sessionStorage.getItem('cims_popup_closed');
      if (!popupClosed) {
        const timer = setTimeout(() => {
          setIsEnquiryModalOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case sessionStorage is restricted in sandbox/privacy mode
    }
  }, []);

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    try {
      sessionStorage.setItem('cims_popup_closed', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  // 2. Automatic Collage Change Timer (Transitions smoothly every 2.5 seconds)
  useEffect(() => {
    if (isEnquiryModalOpen) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % COLLAGE_COMPOSITIONS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isEnquiryModalOpen]);

  // 2. Progressive preloader: preloads upcoming slide images without jamming initial page load
  useEffect(() => {
    const nextIdx = (activeSlide + 1) % COLLAGE_COMPOSITIONS.length;
    const nextComp = COLLAGE_COMPOSITIONS[nextIdx];
    if (nextComp) {
      nextComp.tiles.forEach((tile) => {
        const img = new window.Image();
        img.src = tile.src;
      });
    }
  }, [activeSlide]);

  return (
    <>
      <div className="relative w-full h-[calc(100vh-75px)] sm:h-[calc(100vh-125px)] min-h-[520px] sm:min-h-[640px] max-h-[960px] overflow-hidden bg-slate-950 select-none flex items-center justify-center">
      


      {/* =========================================================================
          1. FULL-WIDTH MULTI-PHOTO COLLAGE BACKGROUND
          - Multiple authentic CIMS photos visible simultaneously
          - Clean white frames with shadow and slight diagonal angles
          - Auto-transitions every 2.5s with smooth 0.7s crossfade
          - High performance WebP images
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {COLLAGE_COMPOSITIONS.map((comp, compIdx) => {
          const isActive = compIdx === activeSlide;
          // Performance optimization: Mount active and adjacent slides only (reduces DOM & GPU image decoders by 50%+)
          const isAdjacent = compIdx === (activeSlide + 1) % COLLAGE_COMPOSITIONS.length || compIdx === (activeSlide - 1 + COLLAGE_COMPOSITIONS.length) % COLLAGE_COMPOSITIONS.length;
          if (!isActive && !isAdjacent) return null;

          return (
            <div
              key={comp.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
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
                            decoding="async"
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
          2. FRONT PAGE – PROMINENT HEADINGS & SEPARATE CIMS GROUP SECTION
          - "WELCOME TO CIMS WORLD" heading
          - "CIMS GROUP" in large, prominent, clearly visible typography
          - Separate CIMS GROUP section/point highlighting institutional identity
          ========================================================================= */}
      <div className="absolute inset-0 z-25 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 pointer-events-auto">
          
          {/* Welcome Message */}
          <div className="inline-flex items-center gap-2 bg-[#ffc923] text-[#112555] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-2xl border border-yellow-300">
            <span className="w-2 h-2 bg-[#112555] rounded-full animate-ping" />
            <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-widest">
              WELCOME TO CIMS WORLD
            </span>
          </div>

          {/* CIMS GROUP Heading - Large, Prominent, Clearly Visible */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            CIMS GROUP
          </h1>

          <div className="w-24 h-1.5 bg-[#ed8100] mx-auto rounded-full shadow-lg" />

          {/* Subtitle / Legacy Note */}
          <p className="text-gray-100 text-xs sm:text-sm md:text-base font-semibold max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Cambridge Institute of Management Studies • Under Swami Vivekananda Foundation • 17 Years of Industry Experience
          </p>

          {/* Separate CIMS GROUP Point / Action Strip on Homepage */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/documents/cims-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CIMS-Brochure.pdf"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 border border-orange-400"
            >
              <Download size={15} />
              <span>Download Brochure</span>
            </a>
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="bg-[#112555]/90 hover:bg-[#112555] text-white hover:text-[#ffc923] px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 border border-white/30 backdrop-blur-md cursor-pointer"
            >
              <GraduationCap size={15} className="text-[#ffc923]" />
              <span>Admission Enquiry</span>
            </button>
          </div>

        </div>
      </div>

      {/* Collage Slide Indicators (Dots) */}
      <div className="absolute bottom-4 right-4 sm:left-1/2 sm:-translate-x-1/2 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
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

      {/* 3. Reusable Admission Enquiry Popup Modal */}
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={handleCloseEnquiryModal} />
    </div>

    {/* =========================================================================
        3. SEPARATE CIMS GROUP SECTION ON HOMEPAGE
        - Dedicated section highlighting CIMS GROUP identity
        - The 4 Academic Programs
        - 17 Years Experience, Swami Vivekananda Foundation governance
        - Download New Brochure option
        ========================================================================= */}
    <section className="py-16 sm:py-20 bg-white border-t-4 border-[#ed8100] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block">
            Institutional Heritage • Estd. 2011
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#112555] uppercase tracking-tight">
            CIMS GROUP
          </h2>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong>Cambridge Institute of Management Studies (CIMS Group)</strong> is a premier seat of higher learning operating under the governance of <strong>Swami Vivekananda Foundation</strong>, with <strong>17 years of industry experience</strong> in transforming ambitious youth into skilled, confident professionals.
          </p>
        </div>

        {/* 4 Core Academic Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Hospital Management */}
          <div className="bg-[#f8fafc] hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#112555] group-hover:bg-[#ed8100] text-white flex items-center justify-center transition-colors">
              <Building2 size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
              Hospital Management
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Hospital operations, patient care administration, healthcare finance, and clinical rotations at City Hospital.
            </p>
            <div className="pt-2 border-t border-gray-100">
              <Link href="/courses/hospital-management" className="text-xs font-bold text-[#ed8100] hover:underline flex items-center gap-1">
                <span>Explore Course</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* 2. Hospitality & Hotel Management */}
          <div className="bg-[#f8fafc] hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#112555] group-hover:bg-[#ed8100] text-white flex items-center justify-center transition-colors">
              <Award size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
              Hospitality &amp; Hotel Management
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              6 Months Industrial Internship + 6 Months Job Internship • 5-Star Brand – 6 Months • Raiganj University Curriculum.
            </p>
            <div className="pt-2 border-t border-gray-100">
              <Link href="/courses/hospitality-hotel-management" className="text-xs font-bold text-[#ed8100] hover:underline flex items-center gap-1">
                <span>Explore Course</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* 3. Allied Health Science */}
          <div className="bg-[#f8fafc] hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#112555] group-hover:bg-[#ed8100] text-white flex items-center justify-center transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
              Allied Health Science
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Clinical diagnostic pathology, medical imaging (BMLT / BMRIT / BOTT) with hands-on hospital laboratory rotations.
            </p>
            <div className="pt-2 border-t border-gray-100">
              <Link href="/courses/allied-health-science" className="text-xs font-bold text-[#ed8100] hover:underline flex items-center gap-1">
                <span>Explore Course</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* 4. Computer Application */}
          <div className="bg-[#f8fafc] hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#112555] group-hover:bg-[#ed8100] text-white flex items-center justify-center transition-colors">
              <HeartHandshake size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
              Computer Application
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Full-stack software engineering, cloud systems, web technology, modern databases, and industry IT placement drives.
            </p>
            <div className="pt-2 border-t border-gray-100">
              <Link href="/courses/bca" className="text-xs font-bold text-[#ed8100] hover:underline flex items-center gap-1">
                <span>Explore Course</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* New Brochure Download Banner */}
        <div className="bg-gradient-to-r from-[#112555] to-[#1e3a8a] text-white p-6 sm:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#ed8100]/30">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[#ffc923] text-xs font-extrabold uppercase tracking-wider block">
              Official Information Prospectus
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
              Download the New CIMS College Brochure
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
              Get full details on all four academic programs, admission criteria, fee structure, 17 years industry experience, and 100% job assistance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/documents/cims-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CIMS-Brochure.pdf"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <Download size={16} />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  </>
  );
}
