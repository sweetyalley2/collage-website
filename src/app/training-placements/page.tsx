"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  Award, 
  Check, 
  Building2, 
  Users, 
  ArrowRight, 
  PhoneCall, 
  Download, 
  MapPin, 
  Eye, 
  X,
  ChevronRight,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { 
  CIMS_INFO, 
  TOP_RECRUITERS, 
  INDUSTRY_SUPPORT_BRANDS, 
  CIMS_PARTNERS, 
  CIMS_PLACED_STUDENTS_2024, 
  CIMS_PLACED_STUDENTS_2025, 
  ALL_PLACEMENT_RECORDS, 
  PlacementRecord 
} from '@/lib/data/cimsData';

export default function TrainingPlacementsPage() {
  const [selectedPlacement, setSelectedPlacement] = useState<PlacementRecord | null>(null);
  const [placementFilterYear, setPlacementFilterYear] = useState<'2024' | '2025' | 'all'>('2024');

  const filteredPlacementRecords =
    placementFilterYear === '2024'
      ? CIMS_PLACED_STUDENTS_2024
      : placementFilterYear === '2025'
      ? CIMS_PLACED_STUDENTS_2025
      : ALL_PLACEMENT_RECORDS;

  const placementHighlights = [
    { stat: "1,700+", label: "Placements Accomplished" },
    { stat: "2,700+", label: "Internships Completed" },
    { stat: "120+", label: "Recruitment & Hospital Ties" },
    { stat: "100%", label: "Placement Assistance" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#112555] text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15" 
          style={{ backgroundImage: `url('/images/gallery/campus-life/cims-campus-group-photo.jpg')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112555] via-[#142857]/95 to-[#112555]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ed8100] bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <GraduationCap size={15} />
            <span>Corporate Relations &amp; Career Development Cell</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
            Training &amp; Placements
          </h1>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto rounded-full" />
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Authentic placement records, corporate recruitments, multi-specialty clinical rotations, and luxury 5-star hotel internships at CIMS Group.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-300 pt-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-white font-semibold">Training &amp; Placements</span>
          </div>
        </div>
      </div>

      {/* Counters Strip */}
      <div className="w-full bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {placementHighlights.map((h, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 border-t-4 border-t-[#ed8100] p-6 text-center shadow-lg rounded-xl hover:-translate-y-1 transition-transform"
              >
                <div className="font-heading font-black text-3xl sm:text-4xl text-[#112555]">
                  {h.stat}
                </div>
                <div className="text-xs font-extrabold text-gray-600 uppercase tracking-wider mt-1.5">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ─────────────────────────────────────────────────────────────
            SECTION 1: PLACEMENT & CORPORATE RECRUITERS
        ───────────────────────────────────────────────────────────── */}
        <section className="space-y-12" id="records">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              SECTION 1: CAREER RECORDS &amp; RECRUITERS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-1">
              PLACEMENT &amp; CORPORATE RECRUITERS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              CIMS students are recruited by India&apos;s leading technology corporations, 5-star luxury hotel chains, and premier healthcare organizations.
            </p>
          </div>

          {/* Part A: Corporate & Hotel Recruiter Logos Grid */}
          <div className="bg-gray-50/70 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
              <div>
                <span className="text-[11px] font-extrabold text-[#ed8100] uppercase tracking-wider">
                  Recruiter Network
                </span>
                <h3 className="font-heading text-lg font-bold text-[#112555]">
                  Corporate IT &amp; Hospitality Recruiting Partners
                </h3>
              </div>
              <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 w-max">
                12 Verified Recruiter Brands
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {TOP_RECRUITERS.map((r, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#ed8100] hover:shadow-md transition-all flex flex-col items-center justify-center text-center group min-h-[120px]"
                >
                  <div className="h-12 w-full flex items-center justify-center mb-2">
                    <img
                      src={r.logo}
                      alt={`${r.name} recruiter logo`}
                      className="max-h-12 max-w-[120px] w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-heading font-bold text-xs text-[#112555] leading-tight line-clamp-1">
                    {r.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">
                    {r.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: Authentic Student Placement Gallery */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <span className="text-[11px] font-extrabold text-[#ed8100] uppercase tracking-wider">
                  Verified Records from Original Training &amp; Placements
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#112555] uppercase">
                  OUR PLACED STUDENTS {placementFilterYear === 'all' ? '(ALL BATCHES)' : `BATCH ${placementFilterYear}`}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Click on any card to view the official student photograph and placement proof.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-lg w-max self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('2024')}
                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                    placementFilterYear === '2024'
                      ? 'bg-[#112555] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  2024 Batch ({CIMS_PLACED_STUDENTS_2024.length})
                </button>
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('2025')}
                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                    placementFilterYear === '2025'
                      ? 'bg-[#112555] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  2025 Batch ({CIMS_PLACED_STUDENTS_2025.length})
                </button>
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('all')}
                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                    placementFilterYear === 'all'
                      ? 'bg-[#ed8100] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  All Records ({ALL_PLACEMENT_RECORDS.length})
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPlacementRecords.map((record) => (
                <div
                  key={record.id}
                  onClick={() => setSelectedPlacement(record)}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ed8100] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col"
                >
                  <div className="relative bg-gray-50 overflow-hidden aspect-[4/3] flex items-center justify-center border-b border-gray-100">
                    <img
                      src={record.image}
                      alt={`Placed Student - ${record.studentName}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white">
                      <Eye size={18} className="text-[#ffc923]" />
                      <span className="text-xs font-bold">View Full Record</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-[#112555]/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                      {record.year}
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                        {record.studentName}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                        <MapPin size={12} className="text-[#ed8100] shrink-0" />
                        <span>{record.location}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100 flex items-start gap-1.5 text-[11px] text-[#112555] font-semibold">
                      <Building2 size={13} className="text-[#ed8100] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-tight">{record.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 2: HOSPITAL & INDUSTRY TIE-UPS
        ───────────────────────────────────────────────────────────── */}
        <section className="space-y-12 pt-8 border-t border-gray-200" id="tie-ups">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              SECTION 2: INDUSTRY SUPPORT &amp; TIE-UPS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-1">
              HOSPITAL &amp; INDUSTRY TIE-UPS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Verified industry support and institutional training partners providing hands-on clinical training, medical rotations, hotel internships, and IT development.
            </p>
          </div>

          {/* Sub-block A: Verified Industry Support Brands */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#112555] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ed8100] rounded-full inline-block" />
              <span>Verified Industry Support Brands</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {INDUSTRY_SUPPORT_BRANDS.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#ed8100] hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group min-h-[140px]"
                >
                  <div className="h-16 w-full flex items-center justify-center p-1 mb-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="max-h-14 max-w-[120px] w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-[#112555] leading-tight">
                    {brand.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-1 px-2 py-0.5 bg-gray-50 rounded">
                    {brand.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-block B: Official Institutional Partners from https://cimsgroup.org/partners/ */}
          <div className="space-y-4 pt-4">
            <h3 className="font-heading text-lg font-bold text-[#112555] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ed8100] rounded-full inline-block" />
              <span>Official Institutional Training Wings</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CIMS_PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden relative">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#112555] text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                      {partner.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            Training Methodology Matrix
        ───────────────────────────────────────────────────────────── */}
        <div className="space-y-8 pt-8 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ed8100]">
              Systematic Career Preparation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] mt-1 uppercase">
              Our 4-Tier Training &amp; Placement Methodology
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 mb-3 rounded-full" />
            <p className="text-gray-600 text-xs sm:text-sm">
              A comprehensive professional grooming matrix designed to transition students seamlessly from classroom theory to executive responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gray-200 border-t-4 border-t-[#112555] hover:border-t-[#ed8100] shadow-sm rounded-xl space-y-2">
              <div className="w-10 h-10 bg-[#112555] text-white font-heading font-extrabold rounded-lg flex items-center justify-center">1</div>
              <h4 className="font-heading font-bold text-base text-[#112555]">Simulated Labs &amp; Soft Skills</h4>
              <p className="text-xs text-gray-600 leading-relaxed">English executive communication, personality grooming, hospital bedside etiquette, and commercial culinary protocols.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 border-t-4 border-t-[#112555] hover:border-t-[#ed8100] shadow-sm rounded-xl space-y-2">
              <div className="w-10 h-10 bg-[#112555] text-white font-heading font-extrabold rounded-lg flex items-center justify-center">2</div>
              <h4 className="font-heading font-bold text-base text-[#112555]">Clinical &amp; Hotel Immersion</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Active hospital rounds at City Hospital and 6-month industrial stints across 5-star brand hotels (Taj, Marriott, Hyatt).</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 border-t-4 border-t-[#112555] hover:border-t-[#ed8100] shadow-sm rounded-xl space-y-2">
              <div className="w-10 h-10 bg-[#112555] text-white font-heading font-extrabold rounded-lg flex items-center justify-center">3</div>
              <h4 className="font-heading font-bold text-base text-[#112555]">Mock Interviews &amp; CV Clinic</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Rigorous mock panel interviews conducted by visiting medical directors, IT leaders, and 5-star hotel general managers.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 border-t-4 border-t-[#112555] hover:border-t-[#ed8100] shadow-sm rounded-xl space-y-2">
              <div className="w-10 h-10 bg-[#112555] text-white font-heading font-extrabold rounded-lg flex items-center justify-center">4</div>
              <h4 className="font-heading font-bold text-base text-[#112555]">On-Campus Recruitment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Dedicated campus recruitment drives connecting graduating batches with 120+ hospital chains, IT companies, and hotel employers.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#112555] text-white p-8 sm:p-12 text-center space-y-4 rounded-2xl border-t-4 border-[#ed8100] shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ffc923]">
            Join Our Placement Track
          </span>
          <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
            Secure Your Professional Career at CIMS Group
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-300">
            Admissions for 2026-27 are currently open with 100% placement guidance and hospital internship guarantees.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <Link
              href="/#admission-form"
              className="inline-block bg-[#ed8100] hover:bg-[#d97400] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg"
            >
              Apply Online 2026
            </Link>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-white text-[#112555] hover:bg-gray-100 px-6 py-3.5 font-bold text-xs uppercase tracking-wider rounded transition-all shadow"
            >
              <PhoneCall size={14} className="text-[#ed8100]" />
              <span>Helpline: {CIMS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Placement Record Lightbox Modal */}
      {selectedPlacement && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPlacement(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#112555] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-[#ed8100] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  Batch {selectedPlacement.year}
                </span>
                <h3 className="font-heading font-extrabold text-base sm:text-lg">
                  {selectedPlacement.studentName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPlacement(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close record modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Image & Info */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center p-2 max-h-[480px]">
                <img
                  src={selectedPlacement.image}
                  alt={`Placed Student Record - ${selectedPlacement.studentName}`}
                  className="max-h-[440px] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    Placement Organization
                  </span>
                  <p className="font-bold text-[#112555] text-sm mt-0.5">
                    {selectedPlacement.company}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    Hometown / Origin
                  </span>
                  <p className="font-bold text-[#ed8100] text-sm mt-0.5">
                    {selectedPlacement.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500">
                Verified CIMS Training &amp; Placement Record
              </span>
              <button
                onClick={() => setSelectedPlacement(null)}
                className="bg-[#112555] hover:bg-[#1a3880] text-white text-xs font-bold px-4 py-1.5 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
