"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope, 
  Hotel, 
  ShieldCheck, 
  Laptop 
} from 'lucide-react';
import { Course } from '@/lib/data/cimsData';

interface Props {
  courses: Course[];
}

export default function FeaturedCourses({ courses }: Props) {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Hospital Management', 'Hospitality', 'Allied Health', 'Computer Applications'];

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hospital Management':
        return <Stethoscope size={16} className="text-[#112555]" />;
      case 'Hospitality':
        return <Hotel size={16} className="text-[#ed8100]" />;
      case 'Allied Health':
        return <ShieldCheck size={16} className="text-emerald-700" />;
      case 'Computer Applications':
        return <Laptop size={16} className="text-indigo-600" />;
      default:
        return <GraduationCap size={16} className="text-[#ed8100]" />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching ISHM reference */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-[#ed8100] text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full mb-3 border border-orange-100">
            Industry Aligned Education
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] tracking-tight">
            Our Flagship Academic Programs
          </h2>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            Curated to meet the explosive global demand in Healthcare Administration, Luxury Hospitality, Diagnostic Paramedical Sciences, and Modern Software Development.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#112555] text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover border border-gray-100 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              
              {/* Course Thumbnail Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Category & Duration Badges */}
                <div className="absolute top-3 left-3 bg-[#112555]/90 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow backdrop-blur-sm flex items-center gap-1">
                  {getCategoryIcon(course.category)}
                  <span>{course.category}</span>
                </div>

                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5">
                  <Clock size={13} className="text-[#ffc923]" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ed8100] block mb-1">
                    {course.degree}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {course.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                    {course.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-700">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-xs font-bold text-[#112555] hover:text-[#ed8100] flex items-center gap-1 group/btn"
                  >
                    <span>Details</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="#admission-form"
                    className="bg-[#ed8100] hover:bg-[#d97400] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded shadow-sm hover:shadow transition-colors"
                  >
                    Apply Now
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* View All Programs Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#112555] hover:bg-[#1c3786] text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>View All Programs &amp; Detailed Curriculum</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
