"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, X, ArrowRight, Video, ChevronRight, CheckCircle, Award } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function TrainingVideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "vid-campus",
      title: "CIMS Campus Tour & Academic Infrastructure",
      category: "Campus Life",
      thumbnail: "/images/hero/cims-building.jpg",
      videoFile: "campus-tour.mp4",
      duration: "Complete Tour",
      desc: "Comprehensive tour of the CIMS campus, seminar halls, lecture theatres, student hostels, library, and sports amenities in Purba Medinipur, West Bengal."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">

      {/* HEADER BANNER */}
      <div className="bg-[#112555] text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Training Videos</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            CIMS TRAINING VIDEOS
          </h1>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Witness our students in action across live clinical hospital rounds, 5-star culinary production, diagnostic laboratories, and computing suites.
          </p>

        </div>
      </div>

      {/* VIDEO SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        <div className="max-w-2xl mx-auto">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid.videoFile)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="relative aspect-video w-full bg-gray-900 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#ed8100] text-white flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform duration-300">
                      <Play size={22} className="fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#112555]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {vid.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-[#ffc923] text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {vid.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ed8100] flex items-center gap-1 group-hover:underline">
                    <span>Watch Training Video</span>
                    <Play size={11} className="fill-current" />
                  </span>
                  <span className="text-[11px] text-gray-400 font-semibold">CIMS Official</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-black max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            <div className="relative pt-[56.25%] w-full bg-black">
              <video
                src={`/videos/${selectedVideo}`}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
