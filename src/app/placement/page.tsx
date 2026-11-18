"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  Building2,
  MapPin,
  Search,
  GraduationCap,
  Calendar,
  CheckCircle,
  Award,
  ChevronRight,
  Eye,
  X,
  Stethoscope,
  Hotel,
  ShieldCheck,
  PhoneCall,
  Download,
  Filter
} from 'lucide-react';
import { 
  CIMS_PLACED_STUDENTS_2023_2024, 
  TOP_RECRUITERS, 
  CIMS_INFO,
  PlacementRecord 
} from '@/lib/data/cimsData';

export default function PlacementPage() {
  const [activeCourseTab, setActiveCourseTab] = useState<'all' | 'hospital' | 'hospitality'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<PlacementRecord | null>(null);

  // Filtered list based on course category and search query
  const filteredRecords = useMemo(() => {
    return CIMS_PLACED_STUDENTS_2023_2024.filter((rec) => {
      // Course tab filter
      if (activeCourseTab === 'hospital' && rec.course !== 'Hospital Management') return false;
      if (activeCourseTab === 'hospitality' && rec.course !== 'Hospitality Management') return false;

      // Search filter across student name, company, training org, placement org
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchName = rec.studentName.toLowerCase().includes(query);
        const matchCompany = rec.company.toLowerCase().includes(query);
        const matchTraining = (rec.trainingOrg || '').toLowerCase().includes(query);
        const matchPlacement = (rec.placementOrg || '').toLowerCase().includes(query);
        const matchLocation = (rec.location || '').toLowerCase().includes(query);
        return matchName || matchCompany || matchTraining || matchPlacement || matchLocation;
      }

      return true;
    });
  }, [activeCourseTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* Hero Banner with ISHM Style Typography */}
      <section className="bg-gradient-to-r from-[#0d1d42] via-[#112555] to-[#1a3880] text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ed8100]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ed8100]/20 border border-[#ed8100]/50 text-[#ffc923] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award size={14} />
            <span>Academic Session 2023–2024 Official Placement Record</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Recent Placements
          </h1>
          <div className="w-20 h-1.5 bg-[#ed8100] mx-auto rounded-full" />

          <p className="max-w-3xl mx-auto text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
            Cambridge Institute of Management Studies (CIMS Group), under Swami Vivekananda Foundation and affiliated with MAKAUT (CCPTR), takes immense pride in presenting the authentic student placement and internship records for the <strong>2023–2024 academic year</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/20 font-semibold flex items-center gap-1.5">
              <CheckCircle size={15} className="text-[#ed8100]" />
              40 Verified Student Dossiers
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/20 font-semibold flex items-center gap-1.5">
              <Building2 size={15} className="text-[#ed8100]" />
              Multispecialty Hospitals &amp; 5-Star Hotel Chains
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/20 font-semibold flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#ed8100]" />
              100% Placement Record
            </span>
          </div>
        </div>
      </section>

      {/* Main Placement Cards Showcase & Filter Desk */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="records">

        {/* Filter Controls Bar (Part 5) */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCourseTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeCourseTab === 'all'
                  ? 'bg-[#112555] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Placements ({CIMS_PLACED_STUDENTS_2023_2024.length})
            </button>
            <button
              onClick={() => setActiveCourseTab('hospital')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCourseTab === 'hospital'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Stethoscope size={14} />
              <span>Hospital Management (20)</span>
            </button>
            <button
              onClick={() => setActiveCourseTab('hospitality')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCourseTab === 'hospitality'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Hotel size={14} />
              <span>Hospitality Management (20)</span>
            </button>
            <span className="bg-orange-50 text-[#ed8100] border border-orange-200 text-xs font-black px-3 py-1.5 rounded-lg uppercase hidden xl:inline-block">
              Batch: 2023–2024
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student, hospital, hotel..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition bg-white"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-600 px-1">
          <span>
            Showing <strong>{filteredRecords.length}</strong> placement records for session <strong>2023–2024</strong>
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#ed8100] hover:underline font-bold"
            >
              Clear Search Filter
            </button>
          )}
        </div>

        {/* Placement Poster Cards Grid (Part 3 & 4) */}
        {filteredRecords.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-3">
            <Briefcase size={36} className="mx-auto text-gray-300" />
            <h3 className="font-heading font-extrabold text-base text-[#112555]">
              No placement records match your search criteria.
            </h3>
            <p className="text-xs text-gray-500">
              Try searching by student name, hospital/hotel partner, or select &quot;All Placements&quot;.
            </p>
            <button
              onClick={() => { setActiveCourseTab('all'); setSearchQuery(''); }}
              className="mt-2 bg-[#ed8100] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRecords.map((rec) => {
              const isHospital = rec.course === 'Hospital Management';
              return (
                <div
                  key={rec.id}
                  onClick={() => setSelectedRecord(rec)}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#ed8100] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between relative"
                >
                  {/* Top Company Branding Header */}
                  <div className="bg-[#112555] text-white p-3.5 flex items-center justify-between border-b-2 border-[#ed8100]">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      {isHospital ? (
                        <Stethoscope size={15} className="text-[#ed8100] shrink-0" />
                      ) : (
                        <Hotel size={15} className="text-[#ffc923] shrink-0" />
                      )}
                      <span className="font-heading font-extrabold text-xs tracking-tight line-clamp-1">
                        {rec.company}
                      </span>
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-white/20 tracking-wider shrink-0 ml-1">
                      {rec.year}
                    </span>
                  </div>

                  {/* Poster Main Body: Background + Foreground Student Image + Diagonal Ribbon */}
                  <div className="relative h-60 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors" />

                    {/* Watermark Logo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <Image
                        src="/images/logo/svf-logo.jpg"
                        alt="CIMS Watermark"
                        width={180}
                        height={180}
                        className="object-contain"
                      />
                    </div>

                    {/* Student Photograph Foreground */}
                    {rec.image ? (
                      <div className="relative w-36 h-44 rounded-xl overflow-hidden border-3 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 z-10 bg-white">
                        <img
                          src={rec.image}
                          alt={rec.studentName}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      /* Neutral Professional Placeholder Badge */
                      <div className="relative w-36 h-44 rounded-xl overflow-hidden border-3 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 z-10 bg-gradient-to-b from-[#112555] to-[#1c3786] flex flex-col items-center justify-center text-white p-3 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
                          <GraduationCap size={32} className="text-[#ffc923]" />
                        </div>
                        <span className="font-heading font-black text-xs uppercase tracking-wider text-[#ffc923]">
                          Placed Graduate
                        </span>
                        <span className="text-[10px] text-white/80 mt-1">CIMS Alumni</span>
                      </div>
                    )}

                    {/* Diagonal Colored Banner: "Placed at [Company Name]" */}
                    <div className="absolute top-4 -right-12 rotate-45 bg-[#ed8100] text-white text-[9px] font-black uppercase tracking-wider py-1 px-12 shadow-lg z-20 text-center pointer-events-none">
                      PLACED
                    </div>

                    {/* Click overlay indicator */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center text-white gap-1.5 font-bold text-xs backdrop-blur-[1px]">
                      <Eye size={16} className="text-[#ffc923]" />
                      <span>View Placement Dossier</span>
                    </div>
                  </div>

                  {/* Student Name Colored Label (Part 3) */}
                  <div className="bg-[#ed8100] text-white px-4 py-2 text-center shadow-sm">
                    <h3 className="font-heading font-extrabold text-sm tracking-wide uppercase line-clamp-1">
                      {rec.studentName}
                    </h3>
                  </div>

                  {/* Course & Training Details at Bottom */}
                  <div className="p-4 space-y-2 text-xs bg-white flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <GraduationCap size={14} className="text-[#ed8100] shrink-0" />
                        <span className="font-bold text-gray-800 line-clamp-1">{rec.course}</span>
                      </div>

                      <div className="flex items-start gap-1.5 text-gray-500 text-[11px]">
                        <Building2 size={13} className="text-[#112555] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong>Training:</strong> {rec.trainingOrg || rec.company}
                        </span>
                      </div>

                      <div className="flex items-start gap-1.5 text-emerald-700 text-[11px] font-semibold">
                        <CheckCircle size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong>Placed At:</strong> {rec.placementOrg || rec.company}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      <span>Batch 2023–2024</span>
                      <span className="text-[#ed8100] flex items-center gap-0.5 group-hover:underline">
                        Details &rarr;
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Recruiter Logos Grid */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Corporate Relations
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#112555] uppercase">
              Leading Healthcare &amp; Hospitality Recruiters
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto rounded-full" />
            <p className="text-xs text-gray-600">
              Premier hospital networks and international 5-star brand hotels regularly recruit graduating CIMS students.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {TOP_RECRUITERS.map((r, i) => (
              <div
                key={i}
                className="p-3 bg-white border border-gray-200 rounded-xl hover:border-[#ed8100] hover:shadow-md transition-all flex flex-col items-center justify-center text-center group min-h-[110px]"
              >
                <div className="h-12 w-full flex items-center justify-center mb-1">
                  <img
                    src={r.logo}
                    alt={`${r.name} recruiter logo`}
                    className="max-h-11 max-w-[110px] w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <span className="font-heading font-bold text-[11px] text-[#112555] leading-tight line-clamp-1">
                  {r.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-gray-500 mt-0.5">
                  {r.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Dossier Modal View (Part 5) */}
      {selectedRecord && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedRecord(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#112555] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-[#ed8100] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  Academic Year {selectedRecord.year}
                </span>
                <h3 className="font-heading font-extrabold text-base sm:text-lg">
                  {selectedRecord.studentName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close record modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                
                {/* Photo Display */}
                <div className="w-36 h-44 rounded-xl overflow-hidden border-4 border-[#112555] shadow-lg flex-shrink-0 bg-gray-50 flex items-center justify-center">
                  {selectedRecord.image ? (
                    <img
                      src={selectedRecord.image}
                      alt={selectedRecord.studentName}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-center p-3">
                      <GraduationCap size={44} className="mx-auto text-[#ed8100] mb-2" />
                      <span className="text-[10px] font-bold text-[#112555] uppercase block">
                        Verified Student
                      </span>
                    </div>
                  )}
                </div>

                {/* Details List */}
                <div className="space-y-3 flex-1 text-xs w-full">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      Student Full Name
                    </span>
                    <h4 className="font-heading font-extrabold text-lg text-[#112555]">
                      {selectedRecord.studentName}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                        Academic Program
                      </span>
                      <p className="font-bold text-[#ed8100] mt-0.5">
                        {selectedRecord.course}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                        Academic Session
                      </span>
                      <p className="font-bold text-gray-800 mt-0.5">
                        {selectedRecord.year}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      Training Organization
                    </span>
                    <p className="font-semibold text-gray-700 mt-0.5">
                      {selectedRecord.trainingOrg || selectedRecord.company}
                    </p>
                  </div>

                  <div className="pt-1">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                      Placement Organization
                    </span>
                    <p className="font-extrabold text-emerald-700 text-sm mt-0.5">
                      {selectedRecord.placementOrg || selectedRecord.company}
                    </p>
                  </div>
                </div>

              </div>

              {/* Institution Seal Badge */}
              <div className="bg-blue-50/80 p-3.5 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#ed8100]" />
                  <div>
                    <span className="font-bold text-[#112555] block">
                      Verified CIMS Training &amp; Placement Cell Record
                    </span>
                    <span className="text-[10px] text-gray-500">
                      Under Swami Vivekananda Foundation &amp; MAKAUT CCPTR
                    </span>
                  </div>
                </div>
                <Link
                  href="/admission"
                  className="bg-[#ed8100] hover:bg-[#d97400] text-white px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider shadow"
                >
                  Apply 2026
                </Link>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500">
                Official CIMS Student Record Ref: {selectedRecord.id}
              </span>
              <button
                onClick={() => setSelectedRecord(null)}
                className="bg-[#112555] hover:bg-[#1a3880] text-white text-xs font-bold px-4 py-1.5 rounded transition-colors cursor-pointer"
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
