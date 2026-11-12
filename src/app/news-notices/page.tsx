import React from 'react';
import Link from 'next/link';
import { Calendar, Bell, ArrowRight, Download, Share2 } from 'lucide-react';
import { INITIAL_NEWS } from '@/lib/data/cimsData';

export const metadata = {
  title: "News & Notices | Cambridge Institute of Management Studies",
  description: "Official notifications, admission announcements, academic calendars and campus placement notices of CIMS Group.",
};

export default function NewsNoticesPage() {
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
            Official Circulars &amp; Communiqués
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            News &amp; Notices
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Stay informed with the latest institutional circulars regarding admissions, examinations, scholarship verifications, and corporate placement cycles.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
        
        {INITIAL_NEWS.map((item) => (
          <div 
            key={item.id}
            className="bg-[#faf7ef] border-t-2 border-[#0c1b33] hover:border-[#c5a059] border-x border-b border-[#ebdcb6] p-6 sm:p-8 hover:shadow-md transition-all space-y-3.5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ebdcb6] pb-3">
              <div className="flex items-center gap-2.5">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 border ${
                  item.isImportant ? 'bg-red-50 text-red-700 border-red-200' : 'bg-white text-[#9e7935] border-[#ebdcb6]'
                }`}>
                  {item.category} {item.isImportant && '• URGENT'}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                  <Calendar size={13} className="text-[#c5a059]" />
                  <span>{item.date}</span>
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#0c1b33] bg-white px-2.5 py-0.5 border border-[#ebdcb6] uppercase tracking-wider">
                Ref Circular #{item.id}
              </span>
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0c1b33]">
              {item.title}
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {item.summary}
            </p>

            <p className="text-xs text-gray-600 leading-relaxed pt-2">
              {item.content}
            </p>

            <div className="pt-3 border-t border-[#ebdcb6] flex items-center justify-between">
              <Link
                href="/#admissions"
                className="text-xs font-bold text-[#0c1b33] hover:text-[#9e7935] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Inquire regarding this circular</span>
                <ArrowRight size={13} className="text-[#c5a059]" />
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
