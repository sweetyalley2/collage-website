"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  Building2, 
  HeartHandshake, 
  Stethoscope, 
  GraduationCap, 
  ShieldCheck, 
  Laptop, 
  CheckCircle,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function WhyJoinCIMS() {
  const points = [
    {
      icon: <Award className="text-[#ed8100]" size={26} />,
      title: "15+ Years Legacy of Academic Excellence",
      desc: "Founded in 2011 under Swami Vivekananda Foundation, recognized as one of West Bengal's foremost institutes for healthcare and hospitality management."
    },
    {
      icon: <Building2 className="text-[#112555]" size={26} />,
      title: "Active Clinical & 5-Star Hotel Tie-Ups",
      desc: "Rotational clinical training at City Hospital & partner diagnostic networks, alongside mandatory industrial internships in Taj, Marriott, and Hyatt."
    },
    {
      icon: <HeartHandshake className="text-[#ed8100]" size={26} />,
      title: "100% Dedicated Placement Assistance",
      desc: "Over 1,700+ students placed successfully with 120+ active national recruiters across hospital systems, luxury resorts, diagnostic chains, and IT companies."
    },
    {
      icon: <ShieldCheck className="text-emerald-700" size={26} />,
      title: "Curriculum Aligned with MAKAUT (CCPTR)",
      desc: "Approved university frameworks incorporating NABH guidelines, modern patient administration protocols, and contemporary software programming."
    },
    {
      icon: <Laptop className="text-indigo-600" size={26} />,
      title: "State-of-the-Art Simulation Labs",
      desc: "Advanced medical diagnostic labs, computerized simulation hospital front desk, modern commercial culinary kitchen, and high-speed IT labs."
    },
    {
      icon: <GraduationCap className="text-[#ed8100]" size={26} />,
      title: "Education Loan & Scholarship Facility",
      desc: "Full facilitation for Swami Vivekananda Merit-cum-Means Scholarship, student credit cards, and tie-ups with leading nationalized banks."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="advantage">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ed8100] text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
            Institutional Distinction
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] tracking-tight mt-3">
            Why Choose CIMS Group?
          </h2>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            We deliver industry immersion right from day one, transforming ambitious students into skilled, ethical, and high-earning leaders.
          </p>
        </div>

        {/* 6 Grid Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#112555] group-hover:text-white transition-all">
                {pt.icon}
              </div>
              <h3 className="font-heading font-extrabold text-lg text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                {pt.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Experience Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#112555] via-[#162f6b] to-[#112555] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border-2 border-[#ed8100]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#ffc923] text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded">
                Free Academic &amp; Career Counseling
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
                Not Sure Which Program Suits Your Career Ambition?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Speak directly with our senior admission mentors for course eligibility evaluation, fee installments, hostel accommodation assistance, and career scope in Kolkata &amp; abroad.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="bg-[#ed8100] hover:bg-[#d97400] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                >
                  <PhoneCall size={15} />
                  <span>Call Helpline: {CIMS_INFO.phone}</span>
                </a>
                <a
                  href="#admission-form"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Request Callback
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-full max-w-xs">
                <div className="text-4xl font-extrabold text-[#ffc923] font-heading">
                  98.4%
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-white mt-1">
                  Placement Success Rate
                </div>
                <p className="text-[11px] text-gray-300 mt-2">
                  Verified across healthcare, 5-star hotels &amp; diagnostic pathology networks.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
