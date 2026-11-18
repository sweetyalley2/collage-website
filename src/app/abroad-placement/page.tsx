import React from 'react';
import Link from 'next/link';
import { Globe, Plane, Award, Building2, CheckCircle, ArrowRight, ShieldCheck, PhoneCall, GraduationCap, ChevronRight, MapPin } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Abroad Internship & Placement Guidance | Cambridge Institute of Management Studies",
  description: "Global internship training and overseas career guidance for hospitality and healthcare management students at CIMS College.",
};

export default function AbroadPlacementPage() {
  const abroadHighlights = [
    {
      title: "Luxury Hospitality Global Internships",
      desc: "Comprehensive grooming and orientation for prestigious 5-star international hotel chains and luxury resort destinations.",
      tags: ["F&B Service", "Culinary Production", "Front Office Management"]
    },
    {
      title: "International Hospital Administration Standards",
      desc: "Curriculum aligned with international healthcare benchmarks, JCI quality metrics, and NABH patient safety protocols.",
      tags: ["Healthcare Ops", "Quality Assurance", "Medical Records"]
    },
    {
      title: "Personality Grooming & Embassy Interview Prep",
      desc: "Structured training modules in communicative English, foreign culture orientation, visa interview simulation, and professional etiquette.",
      tags: ["Mock Interviews", "Visa Guidance", "Language Skills"]
    },
    {
      title: "Global Alumnus Mentorship Network",
      desc: "Connect directly with graduating CIMS alumni working across leading international hospitality brands and healthcare consortiums.",
      tags: ["Alumni Mentors", "Career Coaching", "Direct Referrals"]
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
            <Link href="/placement" className="hover:text-[#ed8100] transition-colors">Placement</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Abroad Internship &amp; Placement</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ABROAD INTERNSHIP &amp; PLACEMENT
          </h1>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Global career pathways, international hospitality training orientation, and overseas career guidance for CIMS students under <strong>Swami Vivekananda Foundation</strong>.
          </p>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
              International Career Guidance Wing
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase leading-tight">
              Empowering Students for World-Class Career Opportunities
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] rounded-full" />
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              At Cambridge Institute of Management Studies (CIMS Group), we believe that professional training in hospitality, healthcare management, and computing should have no geographical limits. Our dedicated <strong>International Training &amp; Placement Cell</strong> provides students with comprehensive preparation, language fluency, embassy interview training, and career pathway coaching to pursue internships and career roles with global standards.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#ed8100] shrink-0" />
                <span>Orientation for 5-star international hotel chain internships and cruise line hospitality.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#ed8100] shrink-0" />
                <span>Guidance on visa applications, international documentation, and overseas work regulations.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#ed8100] shrink-0" />
                <span>Specialized communicative English and international dining etiquette training modules.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#ed8100] shrink-0" />
                <span>Affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT) under CCPTR.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/admission"
                className="bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md transition"
              >
                Apply for 2026 Batch
              </Link>
              <Link
                href="/placement"
                className="border-2 border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition"
              >
                View Placement Records
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#112555] bg-white">
              <img
                src="/images/cims-photos/cims-photo-001.jpeg"
                alt="CIMS Students Group"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#ed8100] text-white p-4 rounded-xl shadow-xl hidden sm:block">
              <div className="font-heading font-black text-2xl">Global Vision</div>
              <div className="text-[11px] font-bold uppercase tracking-wider">CIMS Training Cell</div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">Preparation Matrix</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#112555] uppercase mt-1">
              How CIMS Prepares Students for Global Careers
            </h3>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {abroadHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ed8100] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ed8100] flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#112555] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1 mt-4">
                  {item.tags.map((t, ti) => (
                    <span key={ti} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
