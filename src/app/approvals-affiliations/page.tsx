import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Check, Building2, ExternalLink, Download, ChevronRight, PhoneCall } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Approvals & Affiliations | Cambridge Institute of Management Studies",
  description: "Official approvals, university affiliations and government recognitions of CIMS Group under MAKAUT (CCPTR) and Swami Vivekananda Foundation.",
};

export default function ApprovalsPage() {
  const approvalsList = [
    {
      title: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
      subtitle: "Centre for Collaborative Programmes, Training & Research (CCPTR)",
      desc: "Our undergraduate and management curricula operate under the academic supervision and curriculum guidelines of MAKAUT (formerly WBUT), the premier state university of West Bengal.",
      status: "Official University Affiliation",
      icon: "university"
    },
    {
      title: "Swami Vivekananda Foundation",
      subtitle: "Governing & Sponsoring Society (Established 2011)",
      desc: "Cambridge Institute of Management Studies is an academic initiative established in 2011 and administered by Swami Vivekananda Foundation, dedicated to quality professional higher education.",
      status: "Governing Trust",
      icon: "trust"
    },
    {
      title: "State Paramedical & Healthcare Regulatory Framework",
      subtitle: "West Bengal Healthcare & Clinical Diagnostic Standards",
      desc: "Clinical curricula, medical lab protocols, and diagnostic training standards comply with recognized health education norms, qualifying graduates for hospital pathology and imaging appointments.",
      status: "Clinical Training Standard",
      icon: "hospital"
    },
    {
      title: "Hospitality & Tourism Industry Standard Alignment",
      subtitle: "National & Global 5-Star Hotel Operational Standards",
      desc: "Hospitality and culinary arts syllabi designed in consultation with senior executive hoteliers and 5-star brand managers to fulfill contemporary culinary and accommodation management benchmarks.",
      status: "Industry Aligned Standard",
      icon: "hotel"
    }
  ];

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
            <span className="text-[#ed8100]">Approvals &amp; Affiliations</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            APPROVALS &amp; AFFILIATIONS
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Approved university curricula, institutional governance under <strong>Swami Vivekananda Foundation</strong>, and regulatory compliance.
          </p>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
            Academic Credibility &amp; Trust
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
            Recognized Higher Education You Can Rely On
          </h2>
          <div className="section-title-bar-center" />
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            All academic programs at Cambridge Institute of Management Studies adhere strictly to the highest standards of university oversight, transparent evaluation, and recognized professional certifications.
          </p>
        </div>

        {/* Approvals Cards */}
        <div className="space-y-6">
          {approvalsList.map((app, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 hover:border-[#ed8100] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 border border-orange-200 px-3 py-1 rounded">
                  {app.status}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#112555] group-hover:text-[#ed8100] transition-colors leading-tight">
                  {app.title}
                </h3>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{app.subtitle}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">{app.desc}</p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-[#ed8100] text-[#112555] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ShieldCheck size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#112555] to-[#1c3786] text-white p-8 sm:p-12 rounded-2xl text-center space-y-4 border-t-4 border-[#ed8100] shadow-2xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#ffc923] bg-white/10 px-3 py-1 rounded">
            Admissions &amp; Verification Desk
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
            Have Questions Regarding Accreditations or Admissions?
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-200 leading-relaxed">
            Our registrar office and academic counseling cell are readily available to assist you with curriculum verification, university enrollment, and admission criteria.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="/#admission-form"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Apply Online 2026
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
