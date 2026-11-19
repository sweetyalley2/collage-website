import React from 'react';
import Link from 'next/link';
import { Laptop, Check, Award, ArrowRight, PhoneCall, Code, Cloud, ChevronRight } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Computer Application | Cambridge Institute of Management Studies",
  description: "Computer Application course with high-speed computing labs, full-stack software development, cloud systems, and campus placement drives.",
};

export default function ComputerApplicationPage() {
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
            <Link href="/courses" className="hover:text-[#ed8100] transition-colors">Courses</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Computer Application</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            COMPUTER APPLICATION
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Software Engineering, Cloud Systems, Modern AI Algorithms &amp; IT Industry Placements.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
                Modern Software &amp; Cloud Engineering
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-3">
                Empowering Next-Generation Software Engineers &amp; Tech Leaders
              </h2>
              <div className="section-title-bar" />
              <p className="text-gray-700 text-sm leading-relaxed">
                The Computer Application program at CIMS College is designed to bridge the gap between theoretical computer science and modern enterprise software practices. Students acquire hands-on proficiency in full-stack web and mobile engineering, Python, Java, cloud architectures, database administration, and artificial intelligence algorithms.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-xl text-[#112555] uppercase tracking-wide">
                Computer Application Core Computing Pillars at CIMS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    High-Speed Development Lab
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Dedicated air-conditioned computing infrastructure with gigabit connectivity and modern dev tools.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    Full-Stack &amp; Cloud Stacks
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Curriculum emphasizing React, Next.js, Python, Java, cloud deployments, and RESTful APIs.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    IT Placement Drives
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">On-campus and pooled recruitment drives with leading tech consultancies including TCS, Wipro, and Infosys.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    Industry-Aligned Professional Curriculum
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Comprehensive curriculum qualifying graduates for advanced software engineering careers and global IT employment.</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-4 pt-2">
              <h3 className="font-heading font-extrabold text-xl text-[#112555] uppercase tracking-wide">
                Target Tech Careers:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 bg-[#ed8100] flex-shrink-0" />
                  <span className="font-semibold">Full-Stack Web &amp; Mobile Software Engineer</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 bg-[#ed8100] flex-shrink-0" />
                  <span className="font-semibold">Cloud &amp; DevOps Specialist</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 bg-[#ed8100] flex-shrink-0" />
                  <span className="font-semibold">Enterprise Database Administrator (SQL/NoSQL)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 bg-[#ed8100] flex-shrink-0" />
                  <span className="font-semibold">Software Quality Assurance &amp; Testing</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 bg-[#ed8100] flex-shrink-0" />
                  <span className="font-semibold">Systems &amp; Network Analyst</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 bg-[#ed8100] flex-shrink-0" />
                  <span className="font-semibold">Data Analytics &amp; Python Developer</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Quick Admissions Card (ISHM Style) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border-t-4 border-[#ed8100] border-x border-b border-gray-200 shadow-xl space-y-4">
              <h4 className="font-heading font-extrabold text-lg text-[#112555] uppercase tracking-wide">
                Program Summary
              </h4>
              <div className="space-y-3 text-xs text-gray-700 divide-y divide-gray-100">
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Course:</span>
                  <span className="font-bold text-[#112555]">Computer Application</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Duration:</span>
                  <span className="font-bold text-[#112555]">3 - 4 Years (incl. Projects)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Eligibility:</span>
                  <span className="font-bold text-[#112555] text-right">10+2 with Math/CS/IP</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Training:</span>
                  <span className="font-bold text-[#112555]">Full-Time Practical</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                <a
                  href="/#admission-form"
                  className="w-full block text-center bg-[#ed8100] hover:bg-[#d97400] text-white py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Apply Online for 2026
                </a>
                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="w-full block text-center border border-[#112555] text-[#112555] py-2.5 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#112555] hover:text-white transition-colors"
                >
                  Helpline: {CIMS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
