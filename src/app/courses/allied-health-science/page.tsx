import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Check, Award, ArrowRight, PhoneCall, Stethoscope } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Allied Health Sciences & Paramedical | Cambridge Institute of Management Studies",
  description: "B.Sc Medical Laboratory Technology (BMLT), Radiology (BMRIT), and Operation Theatre Technology (BOTT) with practical diagnostic lab training.",
};

export default function AlliedHealthPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Faculty of Clinical Paramedical Sciences
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Allied Health Sciences (BMLT / BMRIT / BOTT)
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Advanced diagnostic laboratory training, digital medical imaging protocols, and intensive surgical theatre clinical rotations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
                Clinical Precision &amp; Diagnostics
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0c1b33] mt-3">
                The Backbone of Modern Medical Diagnostic Healthcare
              </h2>
              <div className="gold-divider mt-2 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Allied Health and Paramedical professionals play a critical role in clinical diagnostics and surgical care. CIMS Paramedical College in West Bengal delivers high-caliber clinical exposure across three core specializations: <strong>B.Sc Medical Laboratory Technology (BMLT)</strong>, <strong>B.Sc Medical Radiology &amp; Imaging Technology (BMRIT)</strong>, and <strong>B.Sc Operation Theatre Technology (BOTT)</strong>. Backed by automated biochemistry analyzers, clinical hematology instrumentation, and daily rotations at partner hospital pathology wings.
              </p>
            </div>

            {/* Core Specializations */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Core Clinical Disciplines at CIMS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#faf7ef] border-t-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">BMLT</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Medical Lab Technology: clinical pathology, automated analyzers, microbiology, and blood banking.</p>
                </div>
                <div className="p-4 bg-[#faf7ef] border-t-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">BMRIT</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Radiology &amp; Imaging: digital X-ray, computed tomography (CT scan), MRI protocols, and radiologic physics.</p>
                </div>
                <div className="p-4 bg-[#faf7ef] border-t-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">BOTT</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Operation Theatre: sterile surgical processing, anesthesia assistance, and critical surgery monitoring.</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Clinical Career Pathways:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Senior Medical Lab Technologist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Radiologic Technologist &amp; MRI Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Operation Theatre Surgical Assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Critical Care &amp; Emergency Diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Diagnostic Centre Wing Supervisor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Hospital Blood Bank Officer</span>
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
                  <span className="font-bold text-[#0c1b33]">B.Sc &amp; Clinical Diploma</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Duration:</span>
                  <span className="font-bold text-[#0c1b33]">3 - 4 Years (incl. Internship)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Eligibility:</span>
                  <span className="font-bold text-[#0c1b33] text-right">10+2 with PCB (Science)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Hospital Rounds:</span>
                  <span className="font-bold text-[#0c1b33]">City Hospital &amp; Dillons</span>
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
