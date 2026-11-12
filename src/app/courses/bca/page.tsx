import React from 'react';
import Link from 'next/link';
import { Laptop, Check, Award, ArrowRight, PhoneCall, Code, Cloud } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "BCA - Bachelor of Computer Applications | Cambridge Institute of Management Studies",
  description: "BCA course under MAKAUT (CCPTR) with high-speed computing labs, full-stack software development, cloud systems, and campus placement drives.",
};

export default function BCAPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Faculty of Computing &amp; Information Technology
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Bachelor of Computer Applications (BCA)
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Approved under MAKAUT (CCPTR) • Software Engineering, Cloud Systems, Modern AI Algorithms &amp; IT Placements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
                Modern Software &amp; Cloud Engineering
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0c1b33] mt-3">
                Empowering Next-Generation Software Engineers &amp; Tech Leaders
              </h2>
              <div className="gold-divider mt-2 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed">
                The Bachelor of Computer Applications (BCA) program at CIMS College is designed to bridge the gap between theoretical computer science and modern enterprise software practices. Structured under the MAKAUT (CCPTR) academic framework, students acquire hands-on proficiency in full-stack web and mobile engineering, Python, Java, cloud architectures, database administration, and artificial intelligence algorithms.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                BCA Core Computing Pillars at CIMS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">High-Speed Development Lab</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Dedicated air-conditioned computing infrastructure with gigabit connectivity and modern dev tools.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">Full-Stack &amp; Cloud Stacks</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Curriculum emphasizing React, Next.js, Python, Java, cloud deployments, and RESTful APIs.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">IT Placement Drives</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">On-campus and pooled recruitment drives with leading tech consultancies including TCS and Wipro.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">MAKAUT (CCPTR) Degree</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Recognized university degree qualifying graduates for MCA, M.Sc, and global IT employment.</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Target Tech Careers:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Full-Stack Web &amp; Mobile Software Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Cloud &amp; DevOps Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Enterprise Database Administrator (SQL/NoSQL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Software Quality Assurance &amp; Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Systems &amp; Network Analyst</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Data Analytics &amp; Python Developer</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Quick Admissions Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#faf7ef] p-6 border-t-4 border-[#0c1b33] border-x border-b border-[#ebdcb6] shadow-md space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#0c1b33]">Program Summary</h4>
              <div className="space-y-3 text-xs text-gray-700 divide-y divide-gray-200">
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Degree:</span>
                  <span className="font-bold text-[#0c1b33]">BCA (Undergraduate)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Duration:</span>
                  <span className="font-bold text-[#0c1b33]">3 - 4 Years (incl. Projects)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Eligibility:</span>
                  <span className="font-bold text-[#0c1b33] text-right">10+2 with Math/CS/IP</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Affiliation:</span>
                  <span className="font-bold text-[#0c1b33]">MAKAUT (CCPTR)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href="/#admissions"
                  className="w-full block text-center bg-[#c5a059] hover:bg-[#b38e47] text-[#07101f] py-3 font-bold text-xs uppercase tracking-widest shadow-sm transition-colors border border-[#dfbe7d]"
                >
                  Apply Online for 2026
                </Link>
                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="w-full block text-center border border-[#0c1b33] text-[#0c1b33] py-2.5 font-semibold text-xs uppercase tracking-widest hover:bg-[#0c1b33] hover:text-white transition-colors"
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
