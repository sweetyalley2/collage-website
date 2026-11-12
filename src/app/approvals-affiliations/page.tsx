import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Check, Building2, ExternalLink, Download } from 'lucide-react';
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
      status: "Official University Affiliation"
    },
    {
      title: "Swami Vivekananda Foundation",
      subtitle: "Governing & Sponsoring Society (Established 2011)",
      desc: "Cambridge Institute of Management Studies is an academic initiative established in 2011 and administered by Swami Vivekananda Foundation, dedicated to quality professional higher education.",
      status: "Governing Body"
    },
    {
      title: "State Paramedical & Healthcare Regulatory Framework",
      subtitle: "West Bengal Healthcare & Clinical Diagnostic Standards",
      desc: "Clinical curricula, medical lab protocols, and diagnostic training standards comply with recognized health education norms, qualifying graduates for hospital pathology and imaging appointments.",
      status: "Clinical Training Standard"
    },
    {
      title: "Hospitality & Tourism Industry Standard Alignment",
      subtitle: "National & Global 5-Star Hotel Operational Standards",
      desc: "Hospitality and culinary arts syllabi designed in consultation with senior executive hoteliers and 5-star brand managers to fulfill contemporary culinary and accommodation management benchmarks.",
      status: "Industry Aligned Standard"
    }
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
            Institutional Accreditation &amp; Governance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Approvals &amp; Affiliations
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Approved university curricula, institutional governance under Swami Vivekananda Foundation, and regulatory compliance.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
            Academic Credibility &amp; Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c1b33]">
            Recognized Higher Education You Can Rely On
          </h2>
          <div className="gold-divider-center mt-2 mb-3" />
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            All academic programs at Cambridge Institute of Management Studies adhere strictly to the highest standards of university oversight, transparent evaluation, and recognized professional certifications.
          </p>
        </div>

        <div className="space-y-6">
          {approvalsList.map((app, idx) => (
            <div 
              key={idx} 
              className="bg-[#faf7ef] border-t-2 border-[#0c1b33] hover:border-[#c5a059] border-x border-b border-[#ebdcb6] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e7935] bg-white border border-[#ebdcb6] px-2.5 py-0.5">
                  {app.status}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#0c1b33]">{app.title}</h3>
                <h4 className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider">{app.subtitle}</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl">{app.desc}</p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#0c1b33] text-[#dfbe7d] flex items-center justify-center border border-[#c5a059]/40">
                  <ShieldCheck size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-200 space-y-4">
          <h4 className="font-serif font-bold text-xl text-[#0c1b33]">
            Have Questions Regarding Accreditations or Admissions?
          </h4>
          <p className="text-xs text-gray-600">
            Our registrar office and academic counseling cell are readily available to assist you.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/#admissions"
              className="bg-[#0c1b33] hover:bg-[#13284d] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              Apply Online 2026
            </Link>
            <Link
              href="/contact"
              className="border border-[#0c1b33] text-[#0c1b33] hover:bg-[#0c1b33] hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Contact Admissions
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
