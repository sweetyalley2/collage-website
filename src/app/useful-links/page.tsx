import React from 'react';
import Link from 'next/link';
import { ExternalLink, Globe, GraduationCap, Award, ShieldCheck, ChevronRight, FileText, CheckCircle } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Useful Links & Government Portals | Cambridge Institute of Management Studies",
  description: "Official educational portals, MAKAUT university links, scholarship portals, and student credit card schemes for CIMS students.",
};

export default function UsefulLinksPage() {
  const linkCategories = [
    {
      category: "University & Accreditation Portals",
      links: [
        {
          title: "MAKAUT Official Website",
          desc: "Maulana Abul Kalam Azad University of Technology, West Bengal (formerly WBUT).",
          url: "https://makautwb.ac.in/",
          badge: "Affiliating University"
        },
        {
          title: "MAKAUT CCPTR Portal",
          desc: "Centre for Collaborative Programmes, Training and Research (CCPTR) official guidelines and course frameworks.",
          url: "https://makautwb.ac.in/",
          badge: "Affiliation Authority"
        },
        {
          title: "University Grants Commission (UGC)",
          desc: "Apex regulatory body for higher education in India under the Ministry of Education.",
          url: "https://www.ugc.ac.in/",
          badge: "Govt. of India"
        },
        {
          title: "National Assessment and Accreditation Council (NAAC)",
          desc: "Institutional quality assessment standards and higher educational benchmarks.",
          url: "http://www.naac.gov.in/",
          badge: "Accreditation Body"
        }
      ]
    },
    {
      category: "Scholarship & Financial Assistance Schemes",
      links: [
        {
          title: "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)",
          desc: "Government of West Bengal scholarship scheme for meritorious students from economically challenged backgrounds.",
          url: "https://svmcm.wbhed.gov.in/",
          badge: "State Scholarship"
        },
        {
          title: "West Bengal Student Credit Card Scheme (WBSCC)",
          desc: "Low-interest collateral-free education credit up to ₹10 Lakhs provided by Govt. of West Bengal.",
          url: "https://wbscc.wb.gov.in/",
          badge: "Student Credit"
        },
        {
          title: "National Scholarship Portal (NSP)",
          desc: "Single-window electronic platform for Central and State government welfare scholarships.",
          url: "https://scholarships.gov.in/",
          badge: "Central Govt"
        },
        {
          title: "Aikyashree Scholarship Portal",
          desc: "West Bengal State Government scholarship for students belonging to minority communities.",
          url: "https://wbmdfcscholarship.in/",
          badge: "Minority Welfare"
        }
      ]
    },
    {
      category: "Institutional & Student Portals",
      links: [
        {
          title: "CIMS Online Admission Application 2026",
          desc: "Direct online application portal for BBA Hospital Management, B.Sc Hospitality, Paramedical, BCA and Aviation.",
          url: "/admission",
          badge: "CIMS Portal",
          internal: true
        },
        {
          title: "CIMS Academic Prospectus & Brochure",
          desc: "Download official PDF prospectus containing complete fee structure, laboratory syllabus, and eligibility.",
          url: "https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf",
          badge: "Official PDF"
        },
        {
          title: "Recent Placement Records (2023–2024)",
          desc: "Inspect verified placement dossiers, hospital rotational postings, and 5-star hotel appointments.",
          url: "/placement",
          badge: "Placement Cell",
          internal: true
        },
        {
          title: "CIMS Contact & Counseling Helpline",
          desc: "Connect directly with our senior admission counselors for course guidance and campus visitation.",
          url: "/contact",
          badge: "Admissions Desk",
          internal: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">

      {/* HEADER BANNER */}
      <div className="bg-[#112555] text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Useful Links</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ALL USEFUL LINKS &amp; PORTALS
          </h1>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Essential educational gateways, university affiliation guidelines, government scholarship schemes, and institutional resources.
          </p>

        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {linkCategories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <div className="border-b border-gray-200 pb-2 flex items-center justify-between">
              <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#112555] uppercase tracking-wide">
                {cat.category}
              </h2>
              <span className="text-xs text-gray-400 font-semibold">{cat.links.length} Resources</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.links.map((link, lIdx) => (
                <div
                  key={lIdx}
                  className="bg-white p-5 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-orange-50 text-[#ed8100] border border-orange-200 tracking-wider">
                        {link.badge}
                      </span>
                      {link.internal ? (
                        <ChevronRight size={15} className="text-gray-400 group-hover:text-[#ed8100] transition-colors" />
                      ) : (
                        <ExternalLink size={15} className="text-gray-400 group-hover:text-[#ed8100] transition-colors" />
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {link.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-3">
                    {link.internal ? (
                      <Link
                        href={link.url}
                        className="text-xs font-bold text-[#ed8100] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Open Portal</span>
                        <ChevronRight size={13} />
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#ed8100] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Visit Website</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
