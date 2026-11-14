import React from 'react';
import Link from 'next/link';
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
  BookOpen
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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Page Header (IIMB Academic Style Banner) */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Institutional Legacy &amp; Leadership
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            About CIMS Group
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Leading Institute in West Bengal delivering university-affiliated professional education, practical clinical hospital rotations, and luxury hospitality immersion.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* Heritage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
              ESTABLISHED IN 2011 • 15+ YEARS OF EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c1b33] leading-tight">
              A Distinguished Seat of Professional Higher Education
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Cambridge Institute of Management Studies (CIMS Group)</strong> is a distinguished academic institution operating under the governance of <strong>Swami Vivekananda Foundation</strong>, approved and affiliated with <strong>Maulana Abul Kalam Azad University of Technology (MAKAUT) under CCPTR</strong>.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Founded in 2011, CIMS was conceptualized to transform the standard paradigm of undergraduate professional education. Instead of confining students to traditional chalk-and-talk lectures, CIMS pioneered an intensive experiential model: integrating rigorous university syllabi with active clinical hospital rotations at <strong>City Hospital</strong> and mandatory 6-month industrial stints across India&apos;s leading 5-star luxury hotel chains.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                <div className="font-serif font-bold text-2xl sm:text-3xl text-[#0c1b33]">1,700+</div>
                <div className="text-xs text-gray-600 font-semibold mt-0.5 uppercase tracking-wider">Successful Placements</div>
              </div>
              <div className="p-4 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                <div className="font-serif font-bold text-2xl sm:text-3xl text-[#0c1b33]">15+ Years</div>
                <div className="text-xs text-gray-600 font-semibold mt-0.5 uppercase tracking-wider">Educational Leadership</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="border-4 border-white shadow-2xl overflow-hidden relative">
              <img
                src="/images/hero/cims-building.jpg"
                alt="CIMS Campus Building"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0c1b33]/90 border-l-3 border-[#c5a059] text-white text-xs">
                Purba Medinipur Campus, West Bengal
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#c5a059] pointer-events-none" />
          </div>
        </div>

        {/* Vision & Mission (IIMB Dignified Cards) */}
        <div id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0c1b33] text-white p-8 sm:p-10 border-t-4 border-[#c5a059] shadow-md space-y-3">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-[#dfbe7d] border border-[#c5a059]/40 mb-2">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#dfbe7d]">Our Vision</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              To be the benchmark academic institution in Eastern India for Healthcare Management, Hospitality, Paramedical and Computer Applications education—fostering globally competent, socially responsible, and ethically grounded leaders.
            </p>
          </div>

          <div className="bg-[#faf7ef] p-8 sm:p-10 border-t-4 border-[#0c1b33] border-x border-b border-[#ebdcb6] shadow-md space-y-3">
            <div className="w-12 h-12 bg-[#0c1b33] flex items-center justify-center text-[#dfbe7d] mb-2">
              <Award size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0c1b33]">Our Mission</h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              To deliver practical, high-impact professional education through modern diagnostic laboratories, simulated hospital administration suites, active hotel industrial trainings, and continuous mentorship by industry experts.
            </p>
          </div>
        </div>

        {/* Faculty & Academic Mentors Section */}
        <div id="faculty" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935]">
              Academic Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c1b33] mt-1">
              Faculty &amp; Academic Mentors
            </h2>
            <div className="gold-divider-center mt-2 mb-3" />
            <p className="text-gray-600 text-xs sm:text-sm">
              Distinguished academicians, hospital administrators, and seasoned hospitality leaders guiding your professional trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((fac, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 border-t-2 border-[#0c1b33] hover:border-[#c5a059] border-x border-b border-gray-200 shadow-sm hover:shadow-md transition-all space-y-2"
              >
                <div className="w-12 h-12 rounded-none bg-[#0c1b33] text-[#dfbe7d] font-serif font-bold text-lg flex items-center justify-center border border-[#c5a059]/40 mb-3">
                  {fac.name[0]}
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0c1b33] leading-snug">{fac.name}</h4>
                <p className="text-xs font-semibold text-[#9e7935] uppercase tracking-wider">{fac.designation}</p>
                <p className="text-xs text-gray-500 pt-1 border-t border-gray-100">Department of {fac.department}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admissions CTA Banner */}
        <div className="bg-[#0c1b33] text-white p-8 sm:p-12 text-center space-y-4 border-2 border-[#c5a059] shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#dfbe7d]">
            Admissions Session 2026-27
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Begin Your Career Journey at CIMS Group
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-300">
            Admissions open for July 2026 session. Merit scholarships and education loan assistance available under Swami Vivekananda Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Link
              href="/#admissions"
              className="bg-[#c5a059] hover:bg-[#b38e47] text-[#07101f] px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all shadow border border-[#dfbe7d]"
            >
              Apply Online 2026
            </Link>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="border border-white hover:bg-white hover:text-[#0c1b33] text-white px-6 py-3 font-semibold text-xs uppercase tracking-widest transition-all flex items-center gap-1.5"
            >
              <PhoneCall size={14} className="text-[#c5a059]" />
              <span>Call Helpline: {CIMS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
