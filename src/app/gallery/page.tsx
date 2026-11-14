"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { INITIAL_GALLERY, GalleryItem } from '@/lib/data/cimsData';
import { X, Sparkles, ChevronRight, Eye, PhoneCall } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hospital Training', 'Medical Labs', 'Hospitality', 'Campus', 'Events'];

  const filtered = activeCategory === 'All'
    ? INITIAL_GALLERY
    : INITIAL_GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (ISHM NAVY BANNER WITH BREADCRUMBS)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#112555] text-white py-14 sm:py-16 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Campus Gallery</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            CAMPUS LIFE &amp; FACILITIES GALLERY
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Visual glimpses of clinical hospital training, practical medical diagnostic laboratories, 5-star hotel kitchens, and student activities.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        {/* Category Filter Tabs (ISHM Style) */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-gray-100 text-[#112555] hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col hover:-translate-y-1.5"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute top-3 left-3 bg-[#112555]/95 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded shadow backdrop-blur-sm">
                  {item.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-[#ed8100] text-white flex items-center justify-center shadow-lg">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div 
            className="bg-white max-w-3xl w-full rounded-2xl border-4 border-[#ed8100] shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#112555] text-white flex items-center justify-center hover:bg-[#ed8100] transition-colors shadow"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="relative h-[380px] sm:h-[460px] bg-gray-900">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-white border-t border-gray-200">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                {lightboxImg.category}
              </span>
              <h4 className="font-heading font-extrabold text-xl text-[#112555] mt-2">
                {lightboxImg.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                {lightboxImg.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
