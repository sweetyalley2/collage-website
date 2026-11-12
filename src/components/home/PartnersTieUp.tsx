"use client";

import React from 'react';
import Image from 'next/image';
import { Building, Hospital, Hotel, Award, CheckCircle } from 'lucide-react';
import { CIMS_PARTNERS } from '@/lib/data/cimsData';

export default function PartnersTieUp() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#ed8100] text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
            Practical Training Infrastructure
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] tracking-tight mt-3">
            Institutional Tie-Ups &amp; Practical Training Partners
          </h2>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            Our established partnerships with leading hospitals, multi-cuisine luxury resorts, and clinical centres ensure students experience real-time professional environments.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CIMS_PARTNERS.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-center group"
            >
              <div>
                <div className="h-28 w-full bg-gray-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2 relative">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 text-[9px] font-bold uppercase bg-[#112555] text-white px-2 py-0.5 rounded shadow">
                    {partner.category}
                  </span>
                </div>
                
                <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors">
                  {partner.name}
                </h3>
                <p className="text-[11px] text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide flex items-center justify-center gap-1">
                  <CheckCircle size={12} />
                  <span>Active Training Partner</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
