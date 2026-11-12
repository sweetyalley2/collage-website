import React from 'react';
import Link from 'next/link';
import { Stethoscope, Check, Clock, Award, ShieldCheck, ArrowRight, PhoneCall, Building2 } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "BBA in Hospital Management | Cambridge Institute of Management Studies",
  description: "Premier Hospital Management College in West Bengal. BBA in Hospital Management with clinical rotations at City Hospital and MAKAUT (CCPTR) affiliation.",
};

export default function HospitalManagementPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Faculty of Healthcare Administration
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            BBA in Hospital Management
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Approved under MAKAUT (CCPTR) • Experiential clinical rotations with City Hospital &amp; leading multispecialty chains.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
                Academic Scope &amp; Rigor
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0c1b33] mt-3">
                Leading the Transformation of Healthcare Operations
              </h2>
              <div className="gold-divider mt-2 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed">
                The healthcare delivery ecosystem is expanding exponentially across India and globally, generating massive demand for specialized healthcare administrators who understand clinical workflows, patient safety ethics, and commercial operational management. The <strong>BBA in Hospital Management (BBA-HM)</strong> at CIMS equips students with thorough command over hospital departments, emergency services, NABH accreditation standards, medical records, healthcare economics, and digital Hospital Information Systems (HIS).
              </p>
            </div>

            {/* Core Benefits */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Distinct Advantages of the CIMS Hospital Management Track:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">Direct Clinical Immersion</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Live rotational training at partner City Hospital and multispecialty healthcare centres in West Bengal.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">NABH &amp; NABL Standards</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Rigorous training on hospital accreditation standards, patient safety audits, and biomedical protocols.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">Corporate Hospital Placements</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">100% placement track with Apollo Hospitals, Fortis, AMRI, Medica, and Peerless Hospital.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">MAKAUT (CCPTR) Curriculum</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Recognized university degree conferring eligibility for public and private healthcare roles globally.</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Career Profiles &amp; Executive Pathways:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Hospital Operations Executive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Quality Assurance &amp; NABH Coordinator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Patient Relationship &amp; Floor Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Healthcare Marketing &amp; Public Relations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Health Insurance &amp; TPA Coordinator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Medical Tourism Facilitator</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Quick Admissions Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#faf7ef] p-6 border-t-4 border-[#0c1b33] border-x border-b border-[#ebdcb6] shadow-md space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#0c1b33]">Program Summary</h4>
              <div className="space-y-3 text-xs text-gray-700 divide-y divide-gray-200">
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Degree:</span>
                  <span className="font-bold text-[#0c1b33]">BBA-HM (Undergraduate)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Duration:</span>
                  <span className="font-bold text-[#0c1b33]">3 - 4 Years (incl. Internship)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Eligibility:</span>
                  <span className="font-bold text-[#0c1b33] text-right">10+2 Any Stream</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Affiliation:</span>
                  <span className="font-bold text-[#0c1b33]">MAKAUT (CCPTR)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href="/#admissions"
                  className="w-full block text-center bg-[#c5a059] hover:bg-[#b38e47] text-[#07101f] py-3 font-bold text-xs uppercase tracking-widest shadow-sm transition-colors border border-[#dfbe7d]"
                >
                  Apply Online for 2026
                </Link>
                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="w-full block text-center border border-[#0c1b33] text-[#0c1b33] py-2.5 font-semibold text-xs uppercase tracking-widest hover:bg-[#0c1b33] hover:text-white transition-colors"
                >
                  Helpline: {CIMS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
