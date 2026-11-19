"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function WhyJoinCIMS() {
  const top10Reasons = [
    {
      num: "01",
      title: "Experienced Leadership",
      desc: "CIMS is led by a team of successful management professionals with over 15 years of industry experience, ensuring expert guidance and mentorship."
    },
    {
      num: "02",
      title: "Value-Based Career Development",
      desc: "We offer a holistic approach to career development, focusing on values that help students live fulfilling, successful, and meaningful lives."
    },
    {
      num: "03",
      title: "Advanced Digital Infrastructure",
      desc: "Our classrooms are equipped with cutting-edge audio-video facilities, enhancing the learning experience and keeping students engaged."
    },
    {
      num: "04",
      title: "Up-to-Date Curriculum",
      desc: "We continuously update our curriculum to align with current market demands and global trends. Each day begins with the National Anthem, followed by grooming sessions and topic discussions to foster personal and professional growth."
    },
    {
      num: "05",
      title: "Earn While You Learn",
      desc: "CIMS provides casual training opportunities where students can apply their skills in real-world settings and earn an income alongside their studies."
    },
    {
      num: "06",
      title: "100% Job Assistance",
      desc: "We guarantee job assistance in top sectors, including hospitals, 5-star hotels, resorts, cruise lines, ship catering, banks, MNCs abroad, and more."
    },
    {
      num: "07",
      title: "Multiple Placement Opportunities",
      desc: "Students benefit from multiple placement options and lifetime support with our \"Lifetime Guaranteed Placement Card,\" ensuring ongoing career assistance even after graduation."
    },
    {
      num: "08",
      title: "Practical Exposure",
      desc: "Gain hands-on experience through fieldwork, mini-projects, and industrial visits, bridging the gap between classroom learning and real-world application."
    },
    {
      num: "09",
      title: "Affordable Fees with Flexible Payment Options",
      desc: "Our courses are offered at reasonable rates, with easy installment plans to ensure education is accessible to all."
    },
    {
      num: "10",
      title: "Scholarship Opportunities",
      desc: "We provide three types of scholarships to support deserving students, making education more affordable for those in need."
    }
  ];

  return (
    <section className="py-20 bg-[#112555] text-white relative overflow-hidden" id="why-cims">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#ffc923]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#ed8100]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#ffc923] text-[#112555] font-black uppercase text-xs sm:text-sm px-5 py-2 rounded-md shadow-lg tracking-wider mb-3">
            TOP 10 REASONS TO JOIN CIMS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 uppercase">
            Why Choose CIMS Group?
          </h2>
          <div className="w-20 h-1 bg-[#ffc923] mx-auto mt-4 rounded-full" />
          <p className="text-gray-200 text-sm sm:text-base mt-4 leading-relaxed">
            Discover what makes Cambridge Institute of Management Studies the premier destination for ambitious professionals.
          </p>
        </div>

        {/* 10 Grid Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {top10Reasons.map((reason) => (
            <div 
              key={reason.num}
              className="bg-[#0b1b42]/85 hover:bg-[#0b1b42] p-6 sm:p-7 rounded-2xl border border-blue-400/20 hover:border-[#ffc923]/70 transition-all duration-300 shadow-lg group hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ffc923] text-[#112555] font-heading font-black text-lg flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  {reason.num}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#ffc923] leading-snug group-hover:text-yellow-300 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-100 text-xs sm:text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-16 bg-[#0b1b42] rounded-3xl p-8 sm:p-10 border border-[#ffc923]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-extrabold text-xl text-white">
              Ready to Advance Your Professional Career?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak with our senior admission mentors or submit an online application today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#admission-form"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              Apply Online 2026
            </Link>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="border border-[#ffc923] text-[#ffc923] hover:bg-[#ffc923] hover:text-[#112555] px-5 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <PhoneCall size={14} />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
