import React from 'react';
import Link from 'next/link';
import { Briefcase, Award, Check, Building2, Users, ArrowRight, PhoneCall, Download } from 'lucide-react';
import { CIMS_INFO, TOP_RECRUITERS } from '@/lib/data/cimsData';

export const metadata = {
  title: "Training & Placements | Cambridge Institute of Management Studies",
  description: "100% Placement assistance and mandatory clinical/hotel internships with Apollo, Fortis, Taj, Marriott, Hyatt, Medica and Wipro.",
};

export default function TrainingPlacementsPage() {
  const placementHighlights = [
    { stat: "1,700+", label: "Placements Accomplished" },
    { stat: "2,700+", label: "Internships Completed" },
    { stat: "120+", label: "Hospital & Corporate Recruiters" },
    { stat: "100%", label: "Placement Assistance Guarantee" }
  ];

  const placedStudents = [
    { name: "Subhajit Roy", course: "BBA Hospital Management", company: "Apollo Hospitals", package: "Healthcare Operations" },
    { name: "Priyanka Mondal", course: "B.Sc Hospitality & Hotel Admin", company: "JW Marriott", package: "Front Desk Executive" },
    { name: "Suman Sengupta", course: "B.Sc Medical Lab Tech (BMLT)", company: "Medica Superspecialty", package: "Chief Lab Technologist" },
    { name: "Ananya Maity", course: "BCA Computer Applications", company: "Wipro Technologies", package: "Associate Software Engineer" },
    { name: "Debashis Sau", course: "BBA Hospital Management", company: "Fortis Healthcare", package: "Quality Assurance Coordinator" },
    { name: "Tanmoy Bera", course: "B.Sc Hospitality & Hotel Admin", company: "The Taj Group", package: "Food & Beverage Associate" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Corporate Relations &amp; Career Development
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Training &amp; Placements
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Empowering students with structured clinical hospital rotations, 6-month luxury 5-star hotel internships, and 100% placement support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* Stats Row (IIMB Architectural Presentation) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {placementHighlights.map((h, i) => (
            <div key={i} className="bg-[#faf7ef] border-t-2 border-[#c5a059] border-x border-b border-[#ebdcb6] p-6 text-center shadow-sm">
              <div className="font-serif font-bold text-3xl sm:text-4xl text-[#0c1b33]">
                {h.stat}
              </div>
              <div className="text-xs font-bold text-gray-700 uppercase tracking-widest mt-1">
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Training Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935]">
              Systematic Career Preparation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c1b33] mt-1">
              Our Training &amp; Placement Methodology
            </h2>
            <div className="gold-divider-center mt-2 mb-3" />
            <p className="text-gray-600 text-xs sm:text-sm">
              A four-tier professional grooming matrix designed to transition students seamlessly from classroom to executive responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gray-200 border-t-2 border-t-[#0c1b33] hover:border-t-[#c5a059] shadow-sm space-y-2">
              <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] font-serif font-bold flex items-center justify-center">1</div>
              <h4 className="font-serif font-bold text-base text-[#0c1b33]">Simulated Labs &amp; Soft Skills</h4>
              <p className="text-xs text-gray-600 leading-relaxed">English executive communication, personality grooming, hospital bedside etiquette, and commercial culinary protocols.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 border-t-2 border-t-[#0c1b33] hover:border-t-[#c5a059] shadow-sm space-y-2">
              <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] font-serif font-bold flex items-center justify-center">2</div>
              <h4 className="font-serif font-bold text-base text-[#0c1b33]">Clinical &amp; Hotel Immersion</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Active hospital rounds at City Hospital and 6-month industrial stints across 5-star brand hotels (Taj, Marriott, Hyatt).</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 border-t-2 border-t-[#0c1b33] hover:border-t-[#c5a059] shadow-sm space-y-2">
              <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] font-serif font-bold flex items-center justify-center">3</div>
              <h4 className="font-serif font-bold text-base text-[#0c1b33]">Mock Interviews &amp; CV Clinic</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Rigorous mock panel interviews conducted by visiting medical directors and 5-star hotel general managers.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 border-t-2 border-t-[#0c1b33] hover:border-t-[#c5a059] shadow-sm space-y-2">
              <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] font-serif font-bold flex items-center justify-center">4</div>
              <h4 className="font-serif font-bold text-base text-[#0c1b33]">On-Campus Recruitment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Dedicated campus recruitment drives connecting graduating batches with 120+ hospital chains and corporate employers.</p>
            </div>
          </div>
        </div>

        {/* Selected Alumni Placements Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935]">
              Track Record
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c1b33] mt-1">
              Recent Alumni Placements
            </h3>
            <div className="gold-divider-center mt-2 mb-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placedStudents.map((st, i) => (
              <div key={i} className="p-5 bg-[#faf7ef] border border-[#ebdcb6] shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-serif font-bold text-base text-[#0c1b33]">{st.name}</h5>
                  <span className="text-[10px] font-bold text-[#9e7935] uppercase tracking-wider bg-white px-2 py-0.5 border border-[#ebdcb6]">{st.company}</span>
                </div>
                <p className="text-xs text-gray-600">{st.course}</p>
                <div className="text-xs font-semibold text-[#0c1b33] pt-2 border-t border-[#ebdcb6]">
                  Role: {st.package}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935]">
              Corporate Associations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c1b33] mt-1">
              Recruitment Partners Across Sectors
            </h3>
            <div className="gold-divider-center mt-2 mb-6" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TOP_RECRUITERS.map((r, i) => (
              <div key={i} className="p-4 bg-white border border-gray-200 text-center hover:border-[#c5a059] transition-colors shadow-sm">
                <span className="text-2xl mb-1 block">{r.logo}</span>
                <span className="font-serif font-bold text-xs text-[#0c1b33] block">{r.name}</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-wider">{r.sector}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0c1b33] text-white p-8 sm:p-12 text-center space-y-4 border-2 border-[#c5a059] shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#dfbe7d]">
            Join Our Placement Track
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Secure Your Professional Career at CIMS Group
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-300">
            Admissions for 2026-27 are currently open with 100% placement guidance and hospital internship guarantees.
          </p>
          <div className="pt-3">
            <Link
              href="/#admissions"
              className="inline-block bg-[#c5a059] hover:bg-[#b38e47] text-[#07101f] px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all shadow border border-[#dfbe7d]"
            >
              Apply Online 2026
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
