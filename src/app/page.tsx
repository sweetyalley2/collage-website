"use client";

import React, { useState, useEffect } from 'react';
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

  // 1. Automatic Collage Change Timer (Transitions smoothly every 2.5 seconds)
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

      {/* 3. Reusable Enquiry Form Modal */}
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </div>
  );
}
