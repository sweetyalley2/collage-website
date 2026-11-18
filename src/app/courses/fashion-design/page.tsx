import React from 'react';
import Link from 'next/link';
import { Scissors, Check, Clock, Award, ShieldCheck, ArrowRight, PhoneCall, Building2, ChevronRight, Palette, Sparkles } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Fashion Design & Apparel Technology | Cambridge Institute of Management Studies",
  description: "B.Sc & Diploma in Fashion Design, Apparel Technology, and Merchandising at CIMS College under MAKAUT CCPTR framework.",
};

export default function FashionDesignCoursePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* HEADER BANNER */}
      <div className="bg-[#112555] text-white py-14 sm:py-16 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <Link href="/courses" className="hover:text-[#ed8100] transition-colors">Courses</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Fashion Design</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            FASHION DESIGN &amp; APPAREL TECHNOLOGY
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Approved under <strong>MAKAUT (CCPTR)</strong> • Creative Garment Construction, Digital Textile CAD &amp; Retail Merchandising.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
                Creative Arts &amp; Fashion Studio
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-3">
                Shape Trends with Modern Fashion &amp; Apparel Innovation
              </h2>
              <div className="w-16 h-1 bg-[#ed8100] my-3 rounded-full" />
              <p className="text-gray-700 text-sm leading-relaxed">
                The global fashion and apparel manufacturing ecosystem is undergoing an exciting digital revolution, bridging traditional tailoring with digital 3D pattern development, sustainable textile sciences, and e-commerce merchandising. The <strong>Fashion Design and Apparel Technology Program</strong> at CIMS nurtures creative flair with rigorous technical garment engineering, visual styling, fashion illustration, fabric testing, and luxury brand retail operations.
              </p>
            </div>

            {/* Core Benefits */}
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-xl text-[#112555] uppercase tracking-wide">
                Distinct Highlights of the CIMS Fashion Design Program:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    Garment Construction Labs
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Modern industrial sewing machines, draping mannequins, pattern drafting tables, and fabric processing equipment.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    Digital Fashion CAD
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Computer-aided textile designing, digital fashion illustration, print rendering, and 3D virtual fashion software.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    Runway Shows &amp; Exhibitions
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Annual campus design showcases, model portfolio development, and live fashion runway presentations.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all">
                  <div className="font-heading font-bold text-base text-[#112555] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ed8100] rounded-full" />
                    Apparel Brand Placements
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Internships and career pathways with prominent fashion retailers, export garment houses, and lifestyle boutiques.</p>
                </div>
              </div>
            </div>

            {/* Career Roles */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 space-y-3">
              <h3 className="font-heading font-extrabold text-base text-[#112555] uppercase tracking-wide">
                Key Professional Roles for Graduates:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2"><Check size={14} className="text-[#ed8100]" /> Fashion Apparel Designer</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#ed8100]" /> Visual Merchandiser &amp; Window Stylist</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#ed8100]" /> Fashion CAD Illustrator</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#ed8100]" /> Quality Assurance &amp; Garment Merchandiser</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#ed8100]" /> Costume Stylist for Media &amp; Film</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-[#ed8100]" /> Independent Boutique Entrepreneur</div>
              </div>
            </div>

          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#112555] text-white p-6 rounded-2xl shadow-xl border-t-4 border-[#ed8100] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ed8100]">Course Overview</span>
                <Scissors size={20} className="text-[#ffc923]" />
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-white/60 block uppercase font-bold text-[10px]">Program Duration</span>
                  <span className="font-bold text-sm text-white">3 Years Full-Time / 1 Year Diploma</span>
                </div>
                <div>
                  <span className="text-white/60 block uppercase font-bold text-[10px]">Eligibility Criteria</span>
                  <span className="font-bold text-sm text-white">10+2 Passed (Any Stream)</span>
                </div>
                <div>
                  <span className="text-white/60 block uppercase font-bold text-[10px]">Affiliation</span>
                  <span className="font-bold text-sm text-white">MAKAUT (CCPTR) &amp; SVF Framework</span>
                </div>
                <div>
                  <span className="text-white/60 block uppercase font-bold text-[10px]">Admission Intake</span>
                  <span className="font-bold text-sm text-[#ffc923]">Academic Session 2026–2027</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 space-y-2">
                <Link
                  href="/admission"
                  className="w-full block text-center bg-[#ed8100] hover:bg-[#d97400] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg transition"
                >
                  Apply Online for 2026
                </Link>
                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white py-2.5 rounded-lg text-xs font-semibold transition"
                >
                  <PhoneCall size={14} className="text-[#ed8100]" />
                  <span>Call: {CIMS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs space-y-2 text-center">
              <ShieldCheck size={28} className="mx-auto text-emerald-600" />
              <h4 className="font-heading font-extrabold text-[#112555]">Recognized Education Trust</h4>
              <p className="text-gray-500 text-[11px]">
                Under Swami Vivekananda Foundation. Dedicated scholarships and student credit card assistance provided.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
