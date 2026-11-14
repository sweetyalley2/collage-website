import React from 'react';
import Link from 'next/link';
import { Calendar, Bell, ArrowRight, Download, Share2, ChevronRight, Sparkles } from 'lucide-react';
import { INITIAL_NEWS, CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "News & Notices | Cambridge Institute of Management Studies",
  description: "Official notifications, admission announcements, academic calendars and campus placement notices of CIMS Group.",
};

export default function NewsNoticesPage() {
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
            <span className="text-[#ed8100]">News &amp; Notices</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            NEWS &amp; NOTICES
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest institutional circulars regarding admissions, examinations, scholarship verifications, and corporate placement cycles.
          </p>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
        
        {INITIAL_NEWS.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-gray-200 hover:border-[#ed8100] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 hover:-translate-y-1 group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                  item.isImportant ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-orange-50 text-[#ed8100] border border-orange-200'
                }`}>
                  {item.category} {item.isImportant && '• URGENT'}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                  <Calendar size={13} className="text-[#ed8100]" />
                  <span>{item.date}</span>
                </span>
              </div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase tracking-wider">
                Circular #{item.id}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
              {item.title}
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold">
              {item.summary}
            </p>

            <p className="text-xs text-gray-600 leading-relaxed pt-1">
              {item.content}
            </p>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <a
                href="/#admission-form"
                className="text-xs font-bold text-[#ed8100] hover:underline uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Inquire Regarding This Circular</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
