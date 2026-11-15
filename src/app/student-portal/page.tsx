"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  UserCheck,
  Lock,
  GraduationCap,
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText,
  CreditCard,
  Clock,
  Download,
  BookOpen,
  Building2,
  LogOut,
  Bell,
  Check,
  ChevronRight,
  ShieldCheck,
  Phone,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function StudentPortalPage() {
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState('');
  const [dob, setDob] = useState('');
  const [stream, setStream] = useState('Hospital Management');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Active Dashboard Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'attendance' | 'results' | 'schedule' | 'fees' | 'downloads'>('overview');

  // Mock Student Data
  const student = {
    name: "Rohan Sengupta",
    rollNo: enrollmentId || "CIMS/2024/HM-104",
    registrationNo: "MAKAUT-CCPTR-2024-8842",
    course: "BBA in Hospital Management",
    stream: stream,
    semester: "Semester 4 (2026 Academic Year)",
    batch: "2024 – 2027",
    affiliation: "MAKAUT (CCPTR) & Swami Vivekananda Foundation",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&auto=format&fit=crop",
    hospitalPosting: "City Hospital – Inpatient Operations Wing",
    attendanceOverall: 89.2,
    cgpa: 8.75,
    feeStatus: "Cleared (Semester 4)",
    pendingDues: "₹ 0.00"
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollmentId.trim()) {
      setErrorMsg("Please enter your Student Roll / Enrollment ID.");
      return;
    }
    setErrorMsg('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 600);
  };

  const handleQuickDemoLogin = () => {
    setEnrollmentId("CIMS/2024/HM-104");
    setDob("2004-06-15");
    setStream("Hospital Management");
    setErrorMsg('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 400);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">

      {/* Top Banner Header */}
      <section className="bg-gradient-to-r from-[#0d1d42] via-[#112555] to-[#1a3880] text-white py-8 border-b-4 border-[#ed8100] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ed8100]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#ffc923] shadow-md bg-white flex-shrink-0">
              <Image
                src="/images/logo/svf-logo.jpg"
                alt="Swami Vivekananda Foundation Logo"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                  CIMS <span className="text-[#ed8100]">STUDENT PORTAL</span>
                </span>
                <span className="bg-[#ed8100] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                  Active 2026
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-0.5">
                Cambridge Institute of Management Studies • MAKAUT (CCPTR) Affiliated
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-bold text-gray-300 hover:text-white px-3 py-1.5 rounded border border-white/20 hover:border-white transition-colors"
            >
              &larr; Back to Main Website
            </Link>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="text-xs font-bold bg-[#ed8100] hover:bg-[#d97400] text-white px-3.5 py-1.5 rounded transition-all flex items-center gap-1.5 shadow"
            >
              <Phone size={13} />
              <span>Exam Cell Helpline</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {!isLoggedIn ? (
          /* ─────────────────────────────────────────────────────────────
              LOGIN VIEW
          ───────────────────────────────────────────────────────────── */
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
              
              <div className="bg-[#112555] p-6 text-white text-center border-b-4 border-[#ed8100]">
                <div className="w-14 h-14 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-3 text-[#ffc923] shadow-inner border border-white/20">
                  <UserCheck size={28} />
                </div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight">
                  Student Login
                </h2>
                <p className="text-xs text-gray-300 mt-1">
                  Access live attendance, semester grade cards, clinical hospital postings &amp; fee receipts.
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-4">

                {/* Demo Quick Login Helper */}
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck size={16} className="text-[#ed8100] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#112555] block">Quick Testing / Evaluator Access</span>
                      <p className="text-[11px] text-gray-600 mt-0.5">
                        Click below to sign in instantly as a verified sample student.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleQuickDemoLogin}
                    disabled={loading}
                    className="w-full bg-[#112555] hover:bg-[#1a3880] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Instant Demo Student Login (One-Click)</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-3 text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                    Or Enter Student Credentials
                  </span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Student Roll / Enrollment ID *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CIMS/2024/HM-104"
                      value={enrollmentId}
                      onChange={(e) => setEnrollmentId(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">
                      Printed on your CIMS Student ID card or admission invoice.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Date of Birth / Password *
                    </label>
                    <input
                      type="password"
                      placeholder="DD/MM/YYYY or Student Password"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Academic Stream
                    </label>
                    <select
                      value={stream}
                      onChange={(e) => setStream(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                    >
                      <option value="Hospital Management">BBA in Hospital Management (BBA-HM)</option>
                      <option value="Hospitality & Hotel Admin">B.Sc Hospitality &amp; Hotel Administration (B.Sc HHA)</option>
                      <option value="Paramedical Sciences">B.Sc Medical Lab Tech (BMLT) / Paramedical</option>
                      <option value="Computer Applications">BCA - Computer Applications</option>
                      <option value="Masters Hospital Admin">Masters in Hospital Administration (MHA)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-shimmer w-full bg-[#ed8100] hover:bg-[#d97400] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Verifying Credentials...</span>
                    ) : (
                      <>
                        <Lock size={14} />
                        <span>Sign In to Student Portal</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <a href={`tel:${CIMS_INFO.phone}`} className="hover:text-[#ed8100] flex items-center gap-1">
                    <HelpCircle size={13} />
                    <span>Forgot ID / Password?</span>
                  </a>
                  <Link href="/contact" className="hover:text-[#ed8100] font-semibold">
                    Contact Academic Desk
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* ─────────────────────────────────────────────────────────────
              AUTHENTICATED STUDENT DASHBOARD
          ───────────────────────────────────────────────────────────── */
          <div className="space-y-6">

            {/* Profile Overview Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-3 border-[#ed8100] shadow-md bg-gray-100 flex-shrink-0">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="font-heading font-black text-xl sm:text-2xl text-[#112555]">
                        {student.name}
                      </h2>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Active Student
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#ed8100]">
                      {student.course} • {student.semester}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 pt-1">
                      <span><strong>Roll:</strong> {student.rollNo}</span>
                      <span><strong>Reg:</strong> {student.registrationNo}</span>
                      <span><strong>Batch:</strong> {student.batch}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 self-stretch md:self-auto justify-end">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-right hidden sm:block">
                    <span className="text-[10px] font-bold text-gray-500 uppercase block">Clinical Rotation Hospital</span>
                    <span className="font-bold text-[#112555]">{student.hospitalPosting}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-gray-300"
                  >
                    <LogOut size={14} />
                    <span>Logout</span>
                  </button>
                </div>

              </div>

              {/* 4 Overview Quick Stats Tiles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="bg-[#f8fafc] p-4 rounded-xl border border-gray-200">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    Overall Attendance
                  </span>
                  <div className="font-heading text-2xl font-black text-[#112555] my-0.5">
                    {student.attendanceOverall}%
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    Eligible for Exams
                  </span>
                </div>

                <div className="bg-[#f8fafc] p-4 rounded-xl border border-gray-200">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    Current Cumulative CGPA
                  </span>
                  <div className="font-heading text-2xl font-black text-[#ed8100] my-0.5">
                    {student.cgpa} / 10
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">
                    Rank 3 in Department
                  </span>
                </div>

                <div className="bg-[#f8fafc] p-4 rounded-xl border border-gray-200">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    Clinical Hospital Hours
                  </span>
                  <div className="font-heading text-2xl font-black text-[#112555] my-0.5">
                    140 / 160 Hrs
                  </div>
                  <span className="text-[10px] text-blue-700 font-bold">
                    City Hospital Logged
                  </span>
                </div>

                <div className="bg-[#f8fafc] p-4 rounded-xl border border-gray-200">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    Semester 4 Fee Status
                  </span>
                  <div className="font-heading text-xl font-black text-emerald-700 my-1">
                    PAID IN FULL
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">
                    Receipt #CIMS-2026-8842
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200">
              {[
                { id: 'overview', label: 'Dashboard Overview', icon: BookOpen },
                { id: 'attendance', label: 'Attendance Log', icon: CheckCircle2 },
                { id: 'results', label: 'Grade Cards & Transcripts', icon: GraduationCap },
                { id: 'schedule', label: 'Clinical & Class Routine', icon: Calendar },
                { id: 'fees', label: 'Fee Payment & Receipts', icon: CreditCard },
                { id: 'downloads', label: 'Downloads & Admit Card', icon: Download }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#112555] text-white shadow-md'
                        : 'bg-white text-gray-600 hover:text-[#112555] hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-[#ffc923]' : 'text-gray-400'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT PANELS */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Latest Academic Circulars */}
                <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h3 className="font-heading font-extrabold text-base text-[#112555] flex items-center gap-2">
                      <Bell size={16} className="text-[#ed8100]" />
                      <span>Official Academic Notices for Enrolled Students</span>
                    </h3>
                    <span className="text-[10px] font-bold text-[#ed8100] uppercase bg-orange-50 px-2 py-0.5 rounded">
                      Session 2026
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          Clinical Schedule
                        </span>
                        <span className="text-[10px] text-gray-400">May 15, 2026</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#112555]">
                        Mandatory Hospital Operations Rotation at City Hospital (Batch 2024-2027)
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        All Semester 4 students are requested to report to the Medical Superintendent office at City Hospital at 8:45 AM in full institutional uniform with lab coats and logbooks.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          University Examination
                        </span>
                        <span className="text-[10px] text-gray-400">May 10, 2026</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#112555]">
                        MAKAUT (CCPTR) Semester Examination Form Fill-Up &amp; Admit Card Release
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Online university examination form fill-up has commenced. Eligible candidates with over 75% attendance can download their verified admit card from the Downloads tab.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          Industry Workshop
                        </span>
                        <span className="text-[10px] text-gray-400">April 28, 2026</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#112555]">
                        NABH Hospital Accreditation &amp; Quality Management Seminar by Apollo Executives
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Special executive grooming workshop by guest hospital administrators from Apollo Hospitals Kolkata in CIMS Seminar Hall 1.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Action Shortcuts */}
                <div className="lg:col-span-4 space-y-6">
                  
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                    <h4 className="font-heading font-bold text-sm text-[#112555] uppercase tracking-wider">
                      Student Quick Actions
                    </h4>
                    
                    <button
                      onClick={() => setActiveTab('downloads')}
                      className="w-full p-3 bg-blue-50/70 hover:bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-between text-xs font-bold text-[#112555] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Download size={15} className="text-[#ed8100]" />
                        <span>Download Semester 4 Admit Card</span>
                      </div>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      onClick={() => setActiveTab('attendance')}
                      className="w-full p-3 bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-900 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-emerald-700" />
                        <span>View Subject-Wise Attendance Log</span>
                      </div>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      onClick={() => setActiveTab('fees')}
                      className="w-full p-3 bg-orange-50/70 hover:bg-orange-100 border border-orange-200 rounded-xl flex items-center justify-between text-xs font-bold text-[#ed8100] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard size={15} className="text-[#ed8100]" />
                        <span>Download Semester Fee Receipt</span>
                      </div>
                      <ChevronRight size={14} />
                    </button>

                    <Link
                      href="/pay-fee"
                      className="w-full p-3 bg-[#112555] hover:bg-[#1a3880] text-white rounded-xl flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard size={15} className="text-[#ffc923]" />
                        <span>Pay Semester Fee Online</span>
                      </div>
                      <ChevronRight size={14} />
                    </Link>
                  </div>

                  {/* Mentorship Support Card */}
                  <div className="bg-gradient-to-br from-[#112555] to-[#1a3880] text-white p-6 rounded-2xl space-y-2 shadow-md">
                    <span className="text-[10px] font-extrabold uppercase text-[#ffc923] tracking-wider">
                      Academic Guidance Desk
                    </span>
                    <h4 className="font-heading font-bold text-sm">
                      Need Assistance with Rotations or Exams?
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Reach out directly to your assigned faculty mentor or the CIMS Examination Controller.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`tel:${CIMS_INFO.phone}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffc923] hover:underline"
                      >
                        <Phone size={12} />
                        <span>Helpline: {CIMS_INFO.phone}</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {activeTab === 'attendance' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                    Subject-Wise Attendance Breakdown – Semester 4
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Minimum 75% attendance required under MAKAUT (CCPTR) academic regulations.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { subject: "Hospital Administration & Floor Operations", attended: 46, total: 50, pct: 92, faculty: "Dr. S. K. Mukherjee" },
                    { subject: "Medical Records Management & NABH Quality Protocols", attended: 44, total: 50, pct: 88, faculty: "Prof. P. Sengupta" },
                    { subject: "Healthcare Economics & Hospital Billing Systems", attended: 43, total: 50, pct: 86, faculty: "Dr. R. Banerjee" },
                    { subject: "Clinical Hospital Ward Postings (City Hospital Rounds)", attended: 47, total: 50, pct: 94, faculty: "City Hospital Mentors" },
                    { subject: "Diagnostic Pathology & Paramedical Equipment Briefings", attended: 43, total: 50, pct: 86, faculty: "Prof. S. Das" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <div>
                          <span className="font-bold text-[#112555] text-sm">{item.subject}</span>
                          <span className="text-gray-400 block text-[11px]">Faculty Mentor: {item.faculty}</span>
                        </div>
                        <div className="sm:text-right">
                          <span className="font-heading font-black text-base text-[#112555]">{item.pct}%</span>
                          <span className="text-gray-500 text-[11px] block">Attended {item.attended} of {item.total} Classes</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#ed8100] h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                    University Semester Grade Cards &amp; Transcripts
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Official semester evaluations conducted under MAKAUT (CCPTR) grading standards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ed8100] uppercase">Semester 1</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PASSED</span>
                    </div>
                    <div className="font-heading font-black text-2xl text-[#112555]">
                      SGPA 8.60 <span className="text-xs font-bold text-gray-400">/ 10</span>
                    </div>
                    <p className="text-xs text-gray-500">Letter Grade: A+ (Outstanding Performance)</p>
                    <button
                      onClick={() => alert("Downloading Semester 1 Official Marks Transcript...")}
                      className="w-full text-center py-2 bg-white border border-gray-300 hover:border-[#112555] rounded-lg text-xs font-bold text-[#112555] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download size={13} />
                      <span>Download Transcript PDF</span>
                    </button>
                  </div>

                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ed8100] uppercase">Semester 2</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PASSED</span>
                    </div>
                    <div className="font-heading font-black text-2xl text-[#112555]">
                      SGPA 8.80 <span className="text-xs font-bold text-gray-400">/ 10</span>
                    </div>
                    <p className="text-xs text-gray-500">Letter Grade: A+ (Outstanding Performance)</p>
                    <button
                      onClick={() => alert("Downloading Semester 2 Official Marks Transcript...")}
                      className="w-full text-center py-2 bg-white border border-gray-300 hover:border-[#112555] rounded-lg text-xs font-bold text-[#112555] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download size={13} />
                      <span>Download Transcript PDF</span>
                    </button>
                  </div>

                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ed8100] uppercase">Semester 3</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PASSED</span>
                    </div>
                    <div className="font-heading font-black text-2xl text-[#112555]">
                      SGPA 8.75 <span className="text-xs font-bold text-gray-400">/ 10</span>
                    </div>
                    <p className="text-xs text-gray-500">Letter Grade: A+ (Outstanding Performance)</p>
                    <button
                      onClick={() => alert("Downloading Semester 3 Official Marks Transcript...")}
                      className="w-full text-center py-2 bg-white border border-gray-300 hover:border-[#112555] rounded-lg text-xs font-bold text-[#112555] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download size={13} />
                      <span>Download Transcript PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                    Weekly Clinical Rotation &amp; Academic Timetable
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Semester 4 Routine • Clinical Hospital Postings at City Hospital
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#112555] text-white">
                        <th className="p-3 font-bold uppercase tracking-wider">Day</th>
                        <th className="p-3 font-bold uppercase tracking-wider">9:30 AM – 11:00 AM</th>
                        <th className="p-3 font-bold uppercase tracking-wider">11:15 AM – 1:00 PM</th>
                        <th className="p-3 font-bold uppercase tracking-wider">2:00 PM – 4:30 PM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Monday</td>
                        <td className="p-3">Hospital Floor Management (Room 201)</td>
                        <td className="p-3">Healthcare Economics &amp; Billing</td>
                        <td className="p-3 text-[#ed8100] font-semibold">City Hospital Ward Case Presentation</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Tuesday</td>
                        <td className="p-3">Medical Records &amp; Informatics</td>
                        <td className="p-3">NABH Quality Standards</td>
                        <td className="p-3 text-[#ed8100] font-semibold">Hospital Simulation Lab Exercise</td>
                      </tr>
                      <tr className="hover:bg-blue-50/50 bg-blue-50/20">
                        <td className="p-3 font-bold text-[#112555]">Wednesday</td>
                        <td colSpan={3} className="p-3 font-bold text-blue-900">
                          🏥 Mandatory Practical Rotations at City Hospital (OPD &amp; Inpatient Wards)
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50 bg-blue-50/20">
                        <td className="p-3 font-bold text-[#112555]">Thursday</td>
                        <td colSpan={3} className="p-3 font-bold text-blue-900">
                          🏥 Mandatory Practical Rotations at City Hospital (Diagnostic &amp; Billing Desk)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Friday</td>
                        <td className="p-3">Biochemistry &amp; Pathology Briefing</td>
                        <td className="p-3">Hospital Legal &amp; Ethical Frameworks</td>
                        <td className="p-3 text-[#ed8100] font-semibold">Student Mentor Review &amp; Logbook Sign-off</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Saturday</td>
                        <td className="p-3">Executive Soft Skills &amp; Grooming</td>
                        <td className="p-3" colSpan={2}>Special Guest Lecture by Leading Hospital Superintendant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'fees' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                      Fee Payment Ledger &amp; Invoices
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Account Statement under Swami Vivekananda Foundation
                    </p>
                  </div>
                  <Link
                    href="/pay-fee"
                    className="bg-[#ed8100] hover:bg-[#d97400] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <CreditCard size={14} />
                    <span>Pay Next Semester Fee Online</span>
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#112555] text-white">
                        <th className="p-3 font-bold uppercase">Installment</th>
                        <th className="p-3 font-bold uppercase">Description</th>
                        <th className="p-3 font-bold uppercase">Amount</th>
                        <th className="p-3 font-bold uppercase">Paid Date</th>
                        <th className="p-3 font-bold uppercase">Status</th>
                        <th className="p-3 font-bold uppercase">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Sem 1 Fee</td>
                        <td className="p-3">Admission &amp; Tuition Fee Installment 1</td>
                        <td className="p-3 font-bold">₹ 35,000</td>
                        <td className="p-3">Aug 12, 2024</td>
                        <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PAID</span></td>
                        <td className="p-3"><button onClick={() => alert("Downloading Receipt #CIMS-REC-01")} className="text-[#ed8100] font-bold hover:underline">Download PDF</button></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Sem 2 Fee</td>
                        <td className="p-3">Tuition Fee &amp; Hospital Clinical Charges</td>
                        <td className="p-3 font-bold">₹ 35,000</td>
                        <td className="p-3">Jan 18, 2025</td>
                        <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PAID</span></td>
                        <td className="p-3"><button onClick={() => alert("Downloading Receipt #CIMS-REC-02")} className="text-[#ed8100] font-bold hover:underline">Download PDF</button></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Sem 3 Fee</td>
                        <td className="p-3">Tuition Fee &amp; Examination Registration</td>
                        <td className="p-3 font-bold">₹ 35,000</td>
                        <td className="p-3">Jul 22, 2025</td>
                        <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PAID</span></td>
                        <td className="p-3"><button onClick={() => alert("Downloading Receipt #CIMS-REC-03")} className="text-[#ed8100] font-bold hover:underline">Download PDF</button></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#112555]">Sem 4 Fee</td>
                        <td className="p-3">Tuition Fee &amp; City Hospital Rotation Fee</td>
                        <td className="p-3 font-bold">₹ 35,000</td>
                        <td className="p-3">Jan 15, 2026</td>
                        <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">PAID</span></td>
                        <td className="p-3"><button onClick={() => alert("Downloading Receipt #CIMS-REC-04")} className="text-[#ed8100] font-bold hover:underline">Download PDF</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                    Academic Downloads &amp; Examination Documents
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Verified university admit cards, syllabus outlines, and clinical logbook templates.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-[#112555]">Semester 4 Examination Admit Card</h4>
                        <span className="text-[10px] text-gray-400">Verified by MAKAUT CCPTR</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Downloading Official Semester 4 Admit Card...")}
                      className="bg-[#112555] hover:bg-[#ed8100] text-white p-2 rounded-lg text-xs font-bold transition-colors"
                      title="Download Admit Card"
                    >
                      <Download size={14} />
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#ed8100] flex items-center justify-center font-bold">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-[#112555]">Official CIMS Course Brochure</h4>
                        <span className="text-[10px] text-gray-400">PDF • Syllabus &amp; Hospital Rotations</span>
                      </div>
                    </div>
                    <a
                      href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#112555] hover:bg-[#ed8100] text-white p-2 rounded-lg text-xs font-bold transition-colors"
                      title="Download Brochure"
                    >
                      <Download size={14} />
                    </a>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-[#112555]">City Hospital Clinical Logbook Template</h4>
                        <span className="text-[10px] text-gray-400">Mandatory rotation daily record sheet</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Downloading Clinical Rotation Logbook Sheet...")}
                      className="bg-[#112555] hover:bg-[#ed8100] text-white p-2 rounded-lg text-xs font-bold transition-colors"
                      title="Download Logbook"
                    >
                      <Download size={14} />
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-[#112555]">MAKAUT (CCPTR) Academic Calendar 2026-27</h4>
                        <span className="text-[10px] text-gray-400">Term dates, exams &amp; holidays</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Downloading Academic Calendar 2026-27...")}
                      className="bg-[#112555] hover:bg-[#ed8100] text-white p-2 rounded-lg text-xs font-bold transition-colors"
                      title="Download Academic Calendar"
                    >
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}
