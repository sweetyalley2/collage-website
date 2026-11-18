"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Clock, ArrowRight } from "lucide-react";
import { INITIAL_COURSES } from "@/lib/data/cimsData";

export default function CoursesGrid() {
  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#ed8100] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full inline-block">
            Academic Programs 2026–27
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase">
            Our Flagship Courses
          </h2>
          <div className="w-16 h-1 bg-[#ed8100] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600">
            Professional degree and diploma programs under MAKAUT (CCPTR) with mandatory clinical postings and 5-star hotel rotations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_COURSES.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#ed8100] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#112555]/90 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                    {course.category}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/75 text-[#ffc923] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm">
                    <Clock size={11} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ed8100] block">
                    {course.degree}
                  </span>
                  <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors line-clamp-2 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-xs font-bold text-[#112555] group-hover:text-[#ed8100] flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight size={13} className="text-[#ed8100]" />
                  </Link>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase">
                    MAKAUT
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

