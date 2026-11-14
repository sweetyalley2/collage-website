import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Stethoscope, 
  Hotel, 
  Laptop,
  ChevronRight,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { INITIAL_COURSES, CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Academic Programs & Faculties | Cambridge Institute of Management Studies",
  description: "Explore our university-affiliated undergraduate and diploma programs in Hospital Management, Hospitality & Hotel Administration, Paramedical Allied Health Sciences, and BCA.",
};

export default function CoursesPage() {
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
            <span className="text-[#ed8100]">Courses</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ALL COURSES &amp; PROGRAMMES
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            University-affiliated undergraduate and diploma programs under <strong>MAKAUT (CCPTR)</strong> &amp; <strong>Swami Vivekananda Foundation</strong> with 100% practical training.
          </p>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. COURSES LIST (ISHM PROGRAM CARDS)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        
        {INITIAL_COURSES.map((course) => (
          <div 
            key={course.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-[#ed8100] shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
          >
            
            {/* Image Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#112555]/95 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded shadow backdrop-blur-sm">
                  {course.category}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-[#ffc923] text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-2.5 py-1 rounded border border-orange-200 inline-block">
                  {course.degree} • {course.duration}
                </span>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#112555] group-hover:text-[#ed8100] transition-colors mt-2 leading-tight uppercase">
                  {course.title}
                </h2>

                <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Affiliation: <strong className="text-[#112555]">{course.affiliatedTo}</strong></span>
                  <span>Eligibility: <strong className="text-gray-700">{course.eligibility}</strong></span>
                </div>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {course.fullDesc}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-1.5 pt-2 border-t border-gray-100">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <span className="w-2 h-2 bg-[#ed8100] mt-1.5 flex-shrink-0" />
                    <span className="font-semibold">{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
                <Link
                  href={`/courses/${course.slug}`}
                  className="bg-[#112555] hover:bg-[#1c3786] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Detailed Curriculum</span>
                  <ChevronRight size={14} className="text-[#ffc923]" />
                </Link>

                <a
                  href="/#admission-form"
                  className="bg-[#ed8100] hover:bg-[#d97400] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all shadow-sm hover:shadow-md hover:scale-105"
                >
                  Apply Online 2026
                </a>
              </div>

            </div>

          </div>
        ))}

        {/* ─────────────────────────────────────────────────────────────
            3. ADMISSION CTA BANNER (ISHM STYLE)
        ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#112555] to-[#1c3786] text-white p-8 sm:p-12 rounded-2xl text-center space-y-4 border-t-4 border-[#ed8100] shadow-2xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#ffc923] bg-white/10 px-3 py-1 rounded">
            Admissions Open 2026-27
          </span>
          <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase text-white">
            Need Guidance Choosing Your Program?
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-200 leading-relaxed">
            Speak directly with our senior academic counselors to understand eligibility, fee structure, hostel facilities, and scholarship opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="/#admission-form"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Submit Admission Query
            </a>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="bg-white hover:bg-gray-100 text-[#112555] px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow"
            >
              <PhoneCall size={14} className="text-[#ed8100]" />
              <span>Call Helpline: {CIMS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
