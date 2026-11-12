"use client";

import React, { useState } from 'react';
import { INITIAL_GALLERY, GalleryItem } from '@/lib/data/cimsData';
import { X, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hospital Training', 'Medical Labs', 'Hospitality', 'Campus', 'Events'];

  const filtered = activeCategory === 'All'
    ? INITIAL_GALLERY
    : INITIAL_GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Visual Experience &amp; Photo-Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Campus Life &amp; Facilities
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            A visual documentation of clinical hospital rounds, state-of-the-art diagnostic laboratories, commercial culinary suites, and campus events.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        {/* Category Tabs (IIMB Clean Minimalist Buttons) */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-[#0c1b33] text-[#dfbe7d] border-b-2 border-[#c5a059] shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
              className="group bg-white border border-gray-200 hover:border-[#c5a059] shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90" />
                <div className="absolute top-3 left-3 bg-[#0c1b33]/90 text-[#dfbe7d] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 border border-[#c5a059]/40 backdrop-blur-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h3 className="font-serif font-bold text-base text-[#0c1b33] group-hover:text-[#9e7935] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 font-sans mt-1.5 leading-relaxed">
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
            className="bg-white max-w-3xl w-full border-2 border-[#c5a059] shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#0c1b33] text-[#dfbe7d] flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="relative h-[380px] sm:h-[460px] bg-gray-900">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#faf7ef] border-t border-[#ebdcb6]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e7935] bg-white px-2 py-0.5 border border-[#ebdcb6]">
                {lightboxImg.category}
              </span>
              <h4 className="font-serif font-bold text-xl text-[#0c1b33] mt-1.5">
                {lightboxImg.title}
              </h4>
              <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                {lightboxImg.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
