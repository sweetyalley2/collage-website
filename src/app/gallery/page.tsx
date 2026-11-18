"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Sparkles, ChevronRight, Eye, PhoneCall, GraduationCap, Building2, Stethoscope, Hotel, Award } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Hospital Training' | 'Hospitality' | 'Medical Labs' | 'Events' | 'Student Life';
  image: string;
  description: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<GalleryPhoto | null>(null);

  const categories = [
    'All',
    'Campus',
    'Hospital Training',
    'Hospitality',
    'Medical Labs',
    'Events',
    'Student Life'
  ];

  // Authentic CIMS Photographs extracted directly from CIMS IMAGE.zip
  const cimsGalleryPhotos: GalleryPhoto[] = [
    {
      id: "photo-01",
      title: "CIMS Campus Academic Building & Student Assembly",
      category: "Campus",
      image: "/images/cims-photos/cims-photo-001.jpeg",
      description: "Students gathered in front of the CIMS main academic facility in Purba Medinipur, West Bengal."
    },
    {
      id: "photo-02",
      title: "Culinary Arts & Food Production Commercial Kitchen",
      category: "Hospitality",
      image: "/images/cims-photos/cims-photo-002.jpeg",
      description: "Hospitality students in chef whites undergoing practical culinary production and food presentation."
    },
    {
      id: "photo-03",
      title: "Paramedical Pathology & Diagnostic Lab Immersion",
      category: "Medical Labs",
      image: "/images/cims-photos/cims-photo-003.jpeg",
      description: "Hands-on diagnostic hematology and clinical biochemistry testing using automated analyzers."
    },
    {
      id: "photo-04",
      title: "Beverage Service & F&B Hospitality Workshop",
      category: "Hospitality",
      image: "/images/cims-photos/cims-photo-004.jpeg",
      description: "Practical dining etiquette, banquet service, and mixology training under senior hospitality mentors."
    },
    {
      id: "photo-05",
      title: "Healthcare Administration Lecture Theatre",
      category: "Hospital Training",
      image: "/images/cims-photos/cims-photo-005.jpeg",
      description: "Students attending an executive hospital operations, NABH standards, and medical records seminar."
    },
    {
      id: "photo-06",
      title: "Clinical Rotations & Patient Care Briefings",
      category: "Hospital Training",
      image: "/images/cims-photos/cims-photo-006.jpeg",
      description: "Faculty doctors briefing students prior to bedside clinical rounds at partner City Hospital."
    },
    {
      id: "photo-07",
      title: "Annual Institutional Seminar & Leadership Desk",
      category: "Events",
      image: "/images/cims-photos/cims-photo-007.jpeg",
      description: "Swami Vivekananda Foundation annual academic conclave with invited healthcare and hospitality dignitaries."
    },
    {
      id: "photo-08",
      title: "Student Group & Campus Life Collaboration",
      category: "Student Life",
      image: "/images/cims-photos/cims-photo-008.jpeg",
      description: "Students collaborating on campus projects, study groups, and extracurricular cultural activities."
    },
    {
      id: "photo-09",
      title: "Practical Hospital Operations & Emergency Training",
      category: "Hospital Training",
      image: "/images/cims-photos/cims-photo-009.jpeg",
      description: "Simulation of emergency ward coordination, patient intake, and bed management."
    },
    {
      id: "photo-10",
      title: "Computer Applications & IT Laboratory Suite",
      category: "Campus",
      image: "/images/cims-photos/cims-photo-010.jpeg",
      description: "Air-conditioned computing lab equipped with high-speed development workstations and cloud tools."
    },
    {
      id: "photo-11",
      title: "Operation Theatre (BOTT) Practical Instrumentation",
      category: "Medical Labs",
      image: "/images/cims-photos/cims-photo-011.jpeg",
      description: "Sterilization techniques, surgical instrumentation layout, and anesthesia equipment training."
    },
    {
      id: "photo-12",
      title: "Convocation & Placement Honor Ceremony",
      category: "Events",
      image: "/images/cims-photos/cims-photo-012.jpeg",
      description: "Graduating CIMS students celebrating their appointment letters with Apollo, Fortis, Taj, and Marriott."
    },
    {
      id: "photo-13",
      title: "Bakery & Confectionery Practical Masterclass",
      category: "Hospitality",
      image: "/images/cims-photos/cims-photo-013.jpeg",
      description: "Students crafting artisanal breads, European pastries, and confectionery presentation."
    },
    {
      id: "photo-14",
      title: "Campus Balconies & Academic Architecture",
      category: "Campus",
      image: "/images/cims-photos/cims-photo-014.jpeg",
      description: "Architectural view of the CIMS multi-story campus building with students between lectures."
    },
    {
      id: "photo-15",
      title: "Microbiology & Automated Analyzer Demonstrations",
      category: "Medical Labs",
      image: "/images/cims-photos/cims-photo-015.jpeg",
      description: "Senior laboratory technician demonstrating specimen preparation and microbiological culturing."
    },
    {
      id: "photo-16",
      title: "Youth Cultural Fest & Educational Seminar",
      category: "Student Life",
      image: "/images/cims-photos/cims-photo-016.jpeg",
      description: "Campus cultural celebrations, student talent exhibitions, and youth festival performances."
    },
    {
      id: "photo-17",
      title: "Hotel Front Office & PMS Software Lab",
      category: "Hospitality",
      image: "/images/cims-photos/cims-photo-017.jpeg",
      description: "Simulated front desk operations using global hotel Property Management Systems (PMS)."
    },
    {
      id: "photo-18",
      title: "Medical Radiology & Imaging (BMRIT) Darkroom & X-Ray",
      category: "Medical Labs",
      image: "/images/cims-photos/cims-photo-018.jpeg",
      description: "Radiographic positioning, radiation protection, and digital imaging workstation training."
    }
  ];

  const filteredPhotos = activeCategory === 'All'
    ? cimsGalleryPhotos
    : cimsGalleryPhotos.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">
      
      {/* HEADER BANNER */}
      <div className="bg-[#112555] text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Campus Gallery</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            CAMPUS LIFE &amp; FACILITIES GALLERY
          </h1>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Authentic photographs of CIMS campus life, hospital rotations, culinary arts kitchens, medical diagnostic labs, and seminars.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ed8100] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#112555]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-bold">
                  <Eye size={16} className="text-[#ffc923]" />
                  <span>Enlarge Photo</span>
                </div>
              </div>

              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-sm text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase">
                  <span>CIMS Official Photo</span>
                  <span className="text-[#ed8100]">View &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#112555] text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-[#ed8100] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  {lightboxImg.category}
                </span>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-white">
                  {lightboxImg.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X size={18} />
              </button>
            </div>

            <div className="bg-gray-900 p-2 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded"
              />
            </div>

            <div className="bg-gray-50 px-5 py-3.5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <p className="text-gray-600 font-medium">
                {lightboxImg.description}
              </p>
              <button
                onClick={() => setLightboxImg(null)}
                className="bg-[#112555] hover:bg-[#1a3880] text-white text-xs font-bold px-4 py-1.5 rounded transition-colors self-end sm:self-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
