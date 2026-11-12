import React from 'react';
import Link from 'next/link';
import { Hotel, Check, Award, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "Hospitality & Hotel Management | Cambridge Institute of Management Studies",
  description: "B.Sc in Hospitality & Hotel Administration with 6 months mandatory 5-star hotel training at Taj, Marriott, Hyatt, and ITC.",
};

export default function HospitalityPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Faculty of Hospitality &amp; Culinary Arts
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hospitality &amp; Hotel Administration
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            B.Sc &amp; Diploma Programs with mandatory 6 months industrial training in luxury 5-star brand hotels across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
                Global Hospitality Leadership
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0c1b33] mt-3">
                Mastering the Art &amp; Science of Luxury Guest Experiences
              </h2>
              <div className="gold-divider mt-2 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Step into the vibrant global hospitality and tourism industry with CIMS. Acclaimed as the premier Hospitality and Hotel Management institute in West Bengal, CIMS integrates hands-on commercial food production kitchens, simulated front desk suites, mock bar setups, and mandatory 6-month industrial internships in 5-star luxury brand hotels including <strong>The Taj Group</strong>, <strong>JW Marriott</strong>, <strong>Hyatt Regency</strong>, and <strong>ITC Hotels</strong>.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Why Study Hospitality at CIMS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">5-Star Brand Internships</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Guaranteed 6-month industrial training in Taj, Marriott, Hyatt, Radisson, and ITC hotels.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">Commercial Culinary Kitchens</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Modern baking, international culinary arts, butchery, and food production training labs.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">Global Career Opportunities</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Placement pathways across international hotels, luxury cruise liners, and commercial aviation.</p>
                </div>
                <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059]">
                  <div className="font-serif font-bold text-base text-[#0c1b33]">Recognized Degree Curriculum</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Aligned with national tourism standards and MAKAUT educational frameworks.</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-xl text-[#0c1b33]">
                Career Profiles in Global Hospitality:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Hotel General Manager Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Executive Chef &amp; Food Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Front Office Operations Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Food &amp; Beverage Director</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Luxury Cruise Liner Executive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#c5a059]" />
                  <span>Aviation Ground Services &amp; Cabin Crew</span>
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
                  <span className="font-bold text-[#0c1b33]">B.Sc HHA / Diploma</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Duration:</span>
                  <span className="font-bold text-[#0c1b33]">3 Years (Degree) / 1-2 Yrs (Dip)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Eligibility:</span>
                  <span className="font-bold text-[#0c1b33]">10+2 Any Stream</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-gray-500 font-semibold">Internship:</span>
                  <span className="font-bold text-[#0c1b33]">6 Months in 5-Star Hotels</span>
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
