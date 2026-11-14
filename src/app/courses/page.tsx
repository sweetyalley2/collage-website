import React from 'react';
import Link from 'next/link';
import { Clock, GraduationCap, ArrowRight, Check, ShieldCheck, Stethoscope, Hotel, Laptop } from 'lucide-react';
import { INITIAL_COURSES } from '@/lib/data/cimsData';

export const metadata = {
  title: "Academic Programs & Faculties | Cambridge Institute of Management Studies",
  description: "Explore our university-affiliated undergraduate and diploma programs in Hospital Management, Hospitality & Hotel Administration, Paramedical Allied Health Sciences, and BCA.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Banner (IIMB Academic Style) */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Curricula &amp; Professional Faculties
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Academic Programs
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Approved under MAKAUT (CCPTR) and national regulatory frameworks, integrating rigorous academic foundations with structured hospital clinical rotations and luxury 5-star hotel internships.
          </p>
        </div>
      </div>

      {/* Courses List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {INITIAL_COURSES.map((course, idx) => (
          <div 
            key={course.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 border border-gray-200 bg-white hover:border-[#c5a059] shadow-sm hover:shadow-lg transition-all"
          >
            
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 w-full overflow-hidden border border-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0c1b33]/90 text-[#dfbe7d] text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#c5a059]/40 backdrop-blur-sm">
                  {course.category}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-2.5 py-0.5 border border-[#ebdcb6]">
                  {course.degree} • {course.duration}
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0c1b33] mt-2">
                  {course.title}
                </h2>
                <div className="text-xs text-gray-500 font-sans mt-1">
                  Affiliation: <span className="text-[#0c1b33] font-semibold">{course.affiliatedTo}</span> | Eligibility: <span className="text-gray-700 font-medium">{course.eligibility}</span>
                </div>
              </div>

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {course.fullDesc}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-gray-100">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <Check size={14} className="text-[#c5a059] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                <Link
                  href={`/courses/${course.slug}`}
                  className="bg-[#0c1b33] hover:bg-[#13284d] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Detailed Syllabus &amp; Career Track</span>
                  <ArrowRight size={13} className="text-[#c5a059]" />
                </Link>
                <Link
                  href="/#admissions"
                  className="bg-[#c5a059] hover:bg-[#b38e47] text-[#07101f] text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors border border-[#dfbe7d] shadow-sm"
                >
                  Apply Online 2026
                </Link>
              </div>

            </div>

          </div>
        ))}
      </div>



    </div>
  );
}
