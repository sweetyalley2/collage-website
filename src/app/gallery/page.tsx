"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ChevronRight as BreadcrumbArrow, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

// 159 Authentic CIMS Photographs extracted directly from the user's uploaded ZIP
const TOTAL_PHOTOS = 159;
const ALL_GALLERY_IMAGES = Array.from({ length: TOTAL_PHOTOS }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/images/gallery/cims-gallery-${num}.jpg`;
});

const BATCH_SIZE = 30;

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIdx === null) return;
    if (e.key === 'Escape') {
      setSelectedIdx(null);
    } else if (e.key === 'ArrowRight') {
      setSelectedIdx((prev) => (prev !== null && prev < TOTAL_PHOTOS - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowLeft') {
      setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : TOTAL_PHOTOS - 1));
    }
  }, [selectedIdx]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, TOTAL_PHOTOS));
  };

  const displayedImages = ALL_GALLERY_IMAGES.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">
      
      {/* HEADER BANNER */}
      <div className="bg-[#112555] text-white py-10 sm:py-14 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <BreadcrumbArrow size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Campus Gallery</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            CIMS PHOTO GALLERY
          </h1>
          <div className="w-16 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-xl mx-auto">
            Official photographic showcase of CIMS college campus, practical labs, hospital clinical postings, culinary studios &amp; student activities.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-[11px] font-bold text-gray-200 border border-white/20 mt-1">
            <ImageIcon size={13} className="text-[#ffc923]" />
            <span>Showing {Math.min(visibleCount, TOTAL_PHOTOS)} of {TOTAL_PHOTOS} Photographs</span>
          </div>

        </div>
      </div>

      {/* PHOTO GALLERY GRID (PURE PICTURES ONLY - NO HEADINGS OR TEXT BELOW PICS) */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {displayedImages.map((src, idx) => (
            <div
              key={src}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ed8100] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`CIMS Photograph ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle hover icon overlay */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 size={18} className="text-[#ffc923]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if remaining photos */}
        {visibleCount < TOTAL_PHOTOS && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 bg-[#ed8100] hover:bg-[#d97400] text-white font-heading font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
            >
              <Sparkles size={16} className="text-[#ffc923]" />
              <span>Load More Photos ({TOTAL_PHOTOS - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </main>

      {/* LIGHTBOX MODAL WITH FULL-SCREEN IMAGE VIEW & FLIP NAVIGATION */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white py-2 px-2 z-10">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Photo {selectedIdx + 1} of {TOTAL_PHOTOS}
            </span>
            <button
              onClick={() => setSelectedIdx(null)}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo view"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Full-Size Image Container with Left/Right Buttons */}
          <div 
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : TOTAL_PHOTOS - 1));
              }}
              className="absolute left-1 sm:left-4 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-[#ed8100] text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 border border-white/30 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Enlarged Photo */}
            <img
              src={ALL_GALLERY_IMAGES[selectedIdx]}
              alt={`CIMS Photograph ${selectedIdx + 1}`}
              className="max-h-[80vh] max-w-full w-auto object-contain rounded-lg shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null && prev < TOTAL_PHOTOS - 1 ? prev + 1 : 0));
              }}
              className="absolute right-1 sm:right-4 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-[#ed8100] text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 border border-white/30 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom helper text */}
          <div className="py-2 text-[11px] text-gray-400">
            Use left and right arrow keys to browse photos • Esc to close
          </div>
        </div>
      )}

    </div>
  );
}
