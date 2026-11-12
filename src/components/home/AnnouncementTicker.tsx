"use client";

import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AnnouncementTicker() {
  const notices = [
    "🔥 Admissions Open 2026-27 for BBA in Hospital Management & B.Sc in Hospitality & Hotel Administration",
    "⭐ Allied Health Science (BMLT, BMRIT, Critical Care) New Batch Enrollment Starting for July Session",
    "💼 100% Placement Assistance: Winter Campus Placement Drive Records 95%+ Selections in Premier Hospitals & 5-Star Hotels",
    "📜 Swami Vivekananda Merit-cum-Means Scholarship Verification Open at Academic Office",
    "📞 Direct Admission & Guidance Helpline: +91 8158881234 / +91 9007070004"
  ];

  return (
    <div className="bg-[#112555] text-white border-b border-[#1f3d82] py-2.5 px-4 overflow-hidden relative shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center">
        
        {/* Left Badge */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-[#ed8100] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded shadow-sm z-10 mr-4">
          <Bell size={13} className="animate-bounce" />
          <span>Notice:</span>
        </div>

        {/* Marquee Content */}
        <div className="overflow-hidden flex-1 relative whitespace-nowrap">
          <div className="animate-ticker inline-flex items-center space-x-12 text-xs font-medium text-gray-200">
            {notices.map((notice, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span>{notice}</span>
                <span className="text-[#ffc923] font-bold">★★★</span>
              </span>
            ))}
            {/* Repeat for seamless infinite marquee loop */}
            {notices.map((notice, idx) => (
              <span key={`dup-${idx}`} className="inline-flex items-center gap-2">
                <span>{notice}</span>
                <span className="text-[#ffc923] font-bold">★★★</span>
              </span>
            ))}
          </div>
        </div>

        {/* View All link */}
        <Link 
          href="/news-notices" 
          className="hidden md:flex items-center gap-1 text-[11px] font-bold text-[#ffc923] hover:text-white flex-shrink-0 ml-4 pl-3 border-l border-gray-600 transition-colors uppercase tracking-wider"
        >
          <span>All Notices</span>
          <ArrowRight size={12} />
        </Link>

      </div>
    </div>
  );
}
