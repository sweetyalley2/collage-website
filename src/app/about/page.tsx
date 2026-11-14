import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Award, 
  Target, 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  PhoneCall, 
  Download,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "About Us | Cambridge Institute of Management Studies (CIMS Group)",
  description: "Learn about CIMS Group - established in 2011 under Swami Vivekananda Foundation and affiliated with MAKAUT (CCPTR). Discover our leadership, mission, vision and faculty.",
};

export default function AboutPage() {
  const facultyMembers = [
    { name: "Prithwis Guchchait", designation: "Academic Coordinator & Senior Mentor", department: "Hospital Management" },
    { name: "Debashree Pramanik Manna", designation: "Head of Department", department: "Hospitality & Hotel Admin" },
    { name: "Kushal Dutta Roy", designation: "Assistant Professor", department: "Computer Applications" },
    { name: "Arpita Das", designation: "Clinical Faculty & Lab Instructor", department: "Allied Health Sciences" },
    { name: "Prasenjit Manna", designation: "Training & Placement Officer", department: "Placement Cell" },
    { name: "Debaprasad Das", designation: "Senior Lecturer", department: "Management Studies" }
  ];

  const whyChoosePoints = [
    "Approved and affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT CCPTR).",
    "Over 15 years of uninterrupted excellence under Swami Vivekananda Foundation (Estd. 2011).",
    "Mandatory practical clinical rotations at City Hospital and diagnostic labs.",
    "Structured 6-month industrial internships across 5-star luxury hotels (Taj, Marriott, Hyatt).",
    "100% placement track record with 1,700+ placed alumni across India.",
    "Government merit scholarships and 100% education loan assistance support."
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. PAGE HEADER BANNER (ISHM NAVY BANNER WITH BREADCRUMBS)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#112555] text-white py-14 sm:py-16 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">About Us</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ABOUT CIMS GROUP
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            A Premier Seat of Higher Education under <strong>Swami Vivekananda Foundation</strong> • Affiliated to <strong>MAKAUT (CCPTR)</strong> • Estd. 2011
          </p>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERITAGE & INSTITUTIONAL PROFILE
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
              15+ YEARS EDUCATIONAL TRUST • ESTD. 2011
            </span>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] leading-tight uppercase">
              Transforming Lives Through University Education &amp; Practical Training
            </h2>
            <div className="section-title-bar" />

            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Cambridge Institute of Management Studies (CIMS Group)</strong> is a premier academic institution operating under the governance of <strong>Swami Vivekananda Foundation</strong>, approved and affiliated with <strong>Maulana Abul Kalam Azad University of Technology (MAKAUT) under CCPTR</strong>.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Founded in 2011, CIMS was established to revolutionize professional education in Eastern India. Blending university academic curricula with live practical immersion, CIMS requires every student to undergo structured clinical rotations at <strong>City Hospital</strong> and full-time industrial internships across India&apos;s leading 5-star brand hotels and corporate IT centers.
            </p>

            {/* 4 Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3.5 bg-orange-50 border-t-3 border-[#ed8100] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-[#ed8100]">1700+</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Placements Done</div>
              </div>
              <div className="p-3.5 bg-blue-50 border-t-3 border-[#112555] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-[#112555]">15+ Yrs</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Estd. 2011</div>
              </div>
              <div className="p-3.5 bg-red-50 border-t-3 border-[#bb2226] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-[#bb2226]">100%</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Loan Support</div>
              </div>
              <div className="p-3.5 bg-yellow-50 border-t-3 border-[#ffc923] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-amber-600">MAKAUT</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">CCPTR Affiliated</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/#admission-form"
                className="inline-flex items-center gap-2 bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Apply for Admission 2026</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: CIMS Campus Building Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#112555] bg-white group">
              <img
                src="/images/hero/cims-building.jpg"
                alt="CIMS Campus Building – Cambridge Institute of Management Studies"
                className="w-full h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112555]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg shadow border-l-4 border-[#ed8100] text-gray-800 text-xs pointer-events-none">
                <div className="font-bold text-[#112555] text-sm">CIMS Campus Building</div>
                <div className="text-[11px] text-gray-600">Purba Medinipur, West Bengal • Under Swami Vivekananda Foundation</div>
              </div>
            </div>
            
            {/* 15+ Years Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#ed8100] text-white p-3.5 rounded-xl shadow-xl hidden sm:block">
              <div className="font-heading font-black text-2xl leading-none">15+ Years</div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider mt-1">Educational Trust</div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. VISION & MISSION CARDS (ISHM MODERN CARDS)
        ───────────────────────────────────────────────────────────── */}
        <div id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#112555] text-white p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#ed8100] space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#ffc923] border border-white/20">
              <Target size={26} />
            </div>
            <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide">
              Our Vision
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              To be the benchmark academic institution in Eastern India for Healthcare Management, Hospitality, Paramedical and Computer Applications education—fostering globally competent, socially responsible, and ethically grounded leaders.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#ed8100] border-x border-b border-gray-200 space-y-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ed8100] border border-orange-200">
              <Award size={26} />
            </div>
            <h3 className="font-heading text-2xl font-black uppercase text-[#112555] tracking-wide">
              Our Mission
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              To deliver practical, high-impact professional education through modern diagnostic laboratories, simulated hospital administration suites, active hotel industrial trainings, and continuous mentorship by industry experts.
            </p>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. WHY CHOOSE CIMS (ISHM SQUARE BULLET LAYOUT)
        ───────────────────────────────────────────────────────────── */}
        <div id="why-cims" className="bg-[#f8fafc] p-8 sm:p-12 rounded-2xl border border-gray-200 space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase text-[#ed8100] tracking-wider">
              Academic &amp; Industrial Advantages
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#112555] uppercase tracking-wide mt-1">
              WHY CHOOSE CIMS GROUP
            </h2>
            <div className="section-title-bar" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChoosePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                <span className="w-2.5 h-2.5 bg-[#ed8100] mt-1.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. FACULTY & MENTORS (ISHM CARDS)
        ───────────────────────────────────────────────────────────── */}
        <div id="faculty" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100]">
              Academic Leadership
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-1">
              FACULTY &amp; ACADEMIC MENTORS
            </h2>
            <div className="section-title-bar-center" />
            <p className="text-gray-600 text-xs sm:text-sm">
              Distinguished academicians, hospital administrators, and seasoned hospitality leaders guiding your professional trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((fac, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-[#112555] group-hover:bg-[#ed8100] text-white font-heading font-black text-lg flex items-center justify-center transition-colors">
                  {fac.name[0]}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                    {fac.name}
                  </h4>
                  <p className="text-xs font-bold text-[#ed8100] uppercase tracking-wider mt-0.5">
                    {fac.designation}
                  </p>
                </div>
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                  Department of {fac.department}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            6. ADMISSION CTA BANNER (ISHM FOOTER CTA STYLE)
        ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#112555] to-[#1c3786] text-white p-8 sm:p-12 rounded-2xl text-center space-y-4 border-t-4 border-[#ed8100] shadow-2xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#ffc923] bg-white/10 px-3 py-1 rounded">
            Admissions Session 2026-27
          </span>
          <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase text-white">
            Begin Your Career Journey at CIMS Group
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-200 leading-relaxed">
            Admissions officially open for July 2026 batch. Merit scholarships and 100% education loan approval assistance available under Swami Vivekananda Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-3">
            <Link
              href="/#admission-form"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Apply Online 2026
            </Link>
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
