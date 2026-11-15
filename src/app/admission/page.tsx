"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Upload, 
  Camera, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Lock, 
  ShieldCheck, 
  FileText, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Building2, 
  Sparkles, 
  HelpCircle,
  RotateCcw,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function OnlineAdmissionPage() {
  // Form State
  const [formData, setFormData] = useState({
    // Student Details
    studentName: '',
    guardianName: '',
    motherName: '',
    idType: 'Aadhaar Card',
    idNumber: '',
    dob: '',
    telephoneNumber: '',
    alternativeNumber: '',
    email: '',
    bloodGroup: 'O+',
    gender: 'Male',
    category: 'General',
    nationality: 'Indian',

    // Address Details
    presentAddress: '',
    permanentAddress: '',
    sameAsPresent: true,
    city: '',
    district: 'Purba Medinipur',
    state: 'West Bengal',
    pinCode: '',

    // Course Selection
    appliedCourse: 'BBA in Hospital Management',
    session: '2026-2027',
    hostelRequired: false,
    transportRequired: false,

    // Academic Qualifications
    class10Board: 'WBBSE',
    class10School: '',
    class10Year: '2024',
    class10Percentage: '',

    class12Board: 'WBCHSE',
    class12Stream: 'Science',
    class12School: '',
    class12Year: '2026',
    class12Percentage: '',

    // Declaration
    declarationAccepted: false,
    applicantSignature: ''
  });

  // Photo Upload State
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFileName, setPhotoFileName] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    applicationNo: string;
    studentName: string;
    course: string;
    timestamp: string;
  } | null>(null);

  // Handle Photo Change
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setPhotoError('Please upload a valid image file (JPG, PNG, or WebP).');
      return;
    }

    // Validate size (max 3MB)
    if (file.size > 3 * 1024 * 1024) {
      setPhotoError('Image file size must be less than 3 MB.');
      return;
    }

    setPhotoFileName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    setPhotoFileName(null);
    setPhotoError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
        ...(name === 'sameAsPresent' && checked ? { permanentAddress: prev.presentAddress } : {})
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        ...(name === 'presentAddress' && prev.sameAsPresent ? { permanentAddress: value } : {})
      }));
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Frontend Validations
    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      setFormError('Please enter the student\'s full legal name.');
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    if (!formData.guardianName.trim() || formData.guardianName.trim().length < 2) {
      setFormError('Please enter father\'s / guardian\'s name.');
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    const cleanPhone = formData.telephoneNumber.replace(/[^\d]/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please provide a valid 10-digit primary telephone / WhatsApp number.');
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      setFormError('Please provide a valid email address.');
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }

    if (!formData.dob) {
      setFormError('Please select date of birth.');
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }

    if (!formData.presentAddress.trim()) {
      setFormError('Please enter your present residential address.');
      window.scrollTo({ top: 600, behavior: 'smooth' });
      return;
    }

    const cleanPin = formData.pinCode.replace(/[^\d]/g, '');
    if (cleanPin.length !== 6) {
      setFormError('Please provide a valid 6-digit residential PIN code.');
      window.scrollTo({ top: 600, behavior: 'smooth' });
      return;
    }

    if (!formData.declarationAccepted) {
      setFormError('Please confirm and accept the student declaration undertaking checkbox.');
      return;
    }

    if (!formData.applicantSignature.trim()) {
      setFormError('Please type the applicant\'s full name as a digital signature.');
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        studentName: formData.studentName.trim(),
        guardianName: formData.guardianName.trim(),
        motherName: formData.motherName.trim(),
        idType: formData.idType,
        idNumber: formData.idNumber.trim(),
        dob: formData.dob,
        telephoneNumber: formData.telephoneNumber.trim(),
        alternativeNumber: formData.alternativeNumber.trim(),
        email: formData.email.trim(),
        bloodGroup: formData.bloodGroup,
        gender: formData.gender,
        category: formData.category,
        nationality: formData.nationality,
        presentAddress: formData.presentAddress.trim(),
        permanentAddress: formData.sameAsPresent ? formData.presentAddress.trim() : formData.permanentAddress.trim(),
        city: formData.city.trim(),
        district: formData.district.trim(),
        state: formData.state.trim(),
        pinCode: formData.pinCode.trim(),
        appliedCourse: formData.appliedCourse,
        session: formData.session,
        hostelRequired: formData.hostelRequired,
        transportRequired: formData.transportRequired,
        class10: {
          board: formData.class10Board,
          institution: formData.class10School.trim(),
          passingYear: formData.class10Year,
          percentage: formData.class10Percentage.trim()
        },
        class12: {
          board: formData.class12Board,
          stream: formData.class12Stream,
          institution: formData.class12School.trim(),
          passingYear: formData.class12Year,
          percentage: formData.class12Percentage.trim()
        },
        declarationAccepted: formData.declarationAccepted,
        applicantSignature: formData.applicantSignature.trim(),
        photoBase64: photoPreview,
        photoFileName: photoFileName
      };

      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit admission application.');
      }

      setSubmittedData({
        applicationNo: data.applicationNo || 'CIMS-2026-SUBMITTED',
        studentName: formData.studentName.trim(),
        course: formData.appliedCourse,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })
      });

      window.scrollTo({ top: 150, behavior: 'smooth' });

    } catch (err: any) {
      console.error('Submission error:', err);
      setFormError(err.message || 'Network error occurred while submitting. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#112555]">Online Admission Application 2026-27</span>
        </div>

        {/* ============================================================== */}
        {/* SUCCESS VIEW (RECEIPT & CONFIRMATION)                          */}
        {/* ============================================================== */}
        {submittedData ? (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-6 sm:p-10 print:p-2 print:border-none">
            
            {/* Header for Print and Display */}
            <div className="text-center pb-8 border-b-2 border-gray-100 space-y-3">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-1">
                <CheckCircle2 size={48} className="animate-bounce" />
              </div>
              <div className="inline-block bg-[#112555] text-[#ffc923] text-xs font-black uppercase tracking-wider px-3 py-1 rounded">
                Under Swami Vivekananda Foundation &amp; MAKAUT (CCPTR)
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#112555] tracking-tight">
                Cambridge Institute of Management Studies
              </h1>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Official Admission Application Acknowledgment Receipt – Session 2026-2027
              </p>
            </div>

            {/* Application Summary Box */}
            <div className="my-8 bg-gradient-to-br from-blue-50/70 to-orange-50/40 p-6 rounded-xl border border-blue-100 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200/70">
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Application Reference Number</div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#112555] tracking-tight">
                    {submittedData.applicationNo}
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <CheckCircle2 size={14} />
                    <span>Application Received</span>
                  </span>
                  <div className="text-[11px] text-gray-500 font-medium mt-1">
                    Submitted: {submittedData.timestamp}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-gray-500 font-semibold">Candidate Legal Name:</span>
                  <p className="font-bold text-[#112555] text-sm">{submittedData.studentName}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 font-semibold">Program Applied:</span>
                  <p className="font-bold text-[#ed8100] text-sm">{submittedData.course}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 font-semibold">Primary Contact / WhatsApp:</span>
                  <p className="font-bold text-gray-800">{formData.telephoneNumber}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 font-semibold">Registered Email ID:</span>
                  <p className="font-bold text-gray-800">{formData.email}</p>
                </div>
              </div>
            </div>

            {/* Next Steps for Student */}
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200 text-xs">
              <h3 className="font-heading font-extrabold text-[#112555] text-sm uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={16} className="text-[#ed8100]" />
                Next Steps for Admission Finalization:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Counselor Verification:</strong> A senior CIMS academic counselor will call your telephone number within <strong>24 business hours</strong> to verify your academic documents and course preferences.
                </li>
                <li>
                  <strong>Seat Confirmation &amp; Scholarship:</strong> Candidates eligible for Swami Vivekananda Foundation Merit Scholarship will receive written confirmation along with official fee breakdown.
                </li>
                <li>
                  <strong>Physical / Spot Document Verification:</strong> You may visit the CIMS Campus at NH-116, Chaitanyapur, Haldia, Purba Medinipur, or the Kolkata Admissions Office with original mark sheets.
                </li>
              </ol>

              <div className="pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
                <span>Direct Admission Helpline: <strong className="text-[#112555]">{CIMS_INFO.phone}</strong></span>
                <span>Official Admissions Email: <strong className="text-[#112555]">{CIMS_INFO.email}</strong></span>
              </div>
            </div>

            {/* Action Buttons (Hidden when printing) */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
              <button
                onClick={handlePrintReceipt}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#112555] hover:bg-[#1c3786] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <Printer size={16} />
                <span>Print Application Receipt</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      studentName: '',
                      guardianName: '',
                      motherName: '',
                      idType: 'Aadhaar Card',
                      idNumber: '',
                      dob: '',
                      telephoneNumber: '',
                      alternativeNumber: '',
                      email: '',
                      bloodGroup: 'O+',
                      gender: 'Male',
                      category: 'General',
                      nationality: 'Indian',
                      presentAddress: '',
                      permanentAddress: '',
                      sameAsPresent: true,
                      city: '',
                      district: 'Purba Medinipur',
                      state: 'West Bengal',
                      pinCode: '',
                      appliedCourse: 'BBA in Hospital Management',
                      session: '2026-2027',
                      hostelRequired: false,
                      transportRequired: false,
                      class10Board: 'WBBSE',
                      class10School: '',
                      class10Year: '2024',
                      class10Percentage: '',
                      class12Board: 'WBCHSE',
                      class12Stream: 'Science',
                      class12School: '',
                      class12Year: '2026',
                      class12Percentage: '',
                      declarationAccepted: false,
                      applicantSignature: ''
                    });
                    removePhoto();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors"
                >
                  <RotateCcw size={15} />
                  <span>Submit Another Application</span>
                </button>

                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ed8100] hover:bg-[#d97400] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <span>Return to Home</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        ) : (
          /* ============================================================== */
          /* ADMISSION APPLICATION FORM                                     */
          /* ============================================================== */
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Top Official Header Banner */}
            <div className="bg-gradient-to-r from-[#112555] via-[#162e6e] to-[#112555] text-white p-6 sm:p-8 border-b-4 border-[#ed8100]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full p-1.5 flex-shrink-0 shadow-md border-2 border-[#ed8100]">
                    <Image
                      src="/images/logo/svf-logo.jpg"
                      alt="Swami Vivekananda Foundation Logo"
                      fill
                      className="object-contain rounded-full p-1"
                    />
                  </div>
                  <div>
                    <span className="inline-block bg-[#ed8100] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded mb-1">
                      Swami Vivekananda Foundation
                    </span>
                    <h1 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-white leading-tight">
                      Cambridge Institute of Management Studies
                    </h1>
                    <p className="text-xs text-gray-300 mt-1 flex flex-wrap items-center gap-2">
                      <span>Affiliated with <strong>MAKAUT (CCPTR)</strong></span>
                      <span className="hidden sm:inline">•</span>
                      <span>Govt. Approved Higher Education</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3.5 sm:text-right space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-orange-300 font-bold">
                    Official Admissions Desk
                  </div>
                  <div className="font-heading font-black text-lg text-white">
                    Session 2026 - 2027
                  </div>
                  <div className="text-[11px] text-gray-200">
                    Helpline: <strong className="text-white">{CIMS_INFO.phone}</strong>
                  </div>
                </div>

              </div>
            </div>

            {/* Error Banner */}
            {formError && (
              <div className="m-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md flex items-start space-x-3 text-red-700 text-xs">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-600" />
                <div className="flex-1">
                  <span className="font-bold">Please correct the following: </span>
                  <span>{formError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10">

              {/* ============================================================== */}
              {/* SECTION 0: PHOTO UPLOAD & OFFICE USE ONLY                      */}
              {/* ============================================================== */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* 1. Student Photograph Upload Field */}
                <div className="lg:col-span-5 bg-gray-50/80 p-5 rounded-xl border border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-heading font-extrabold text-[#112555] uppercase tracking-wider">
                      Student Photograph <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] font-semibold text-gray-400">Passport Size</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Photo Container */}
                    <div className="relative w-32 h-40 bg-white rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center overflow-hidden shadow-inner flex-shrink-0 group hover:border-[#ed8100] transition-colors">
                      {photoPreview ? (
                        <Image
                          src={photoPreview}
                          alt="Student Photograph Preview"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="text-center p-3 space-y-1.5 text-gray-400">
                          <Camera size={26} className="mx-auto text-gray-400 group-hover:text-[#ed8100] transition-colors" />
                          <span className="block text-[10px] font-bold text-gray-500 leading-tight">
                            Affix / Upload Recent Photo
                          </span>
                          <span className="block text-[8px] text-gray-400">3.5cm × 4.5cm</span>
                        </div>
                      )}
                    </div>

                    {/* Controls */}
                    <div className="space-y-2 text-center sm:text-left flex-1">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="student-photo-input"
                      />
                      <label
                        htmlFor="student-photo-input"
                        className="cursor-pointer inline-flex items-center gap-1.5 bg-[#112555] hover:bg-[#1c3786] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-md shadow-sm transition-all"
                      >
                        <Upload size={13} />
                        <span>{photoPreview ? 'Change Photo' : 'Upload Photo'}</span>
                      </label>

                      {photoPreview && (
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="block text-[10px] text-red-600 font-bold hover:underline mt-1"
                        >
                          Remove Photo
                        </button>
                      )}

                      <p className="text-[10px] text-gray-500 leading-relaxed">
                        Max file size: <strong>3 MB</strong>. Formats accepted: <strong>JPG, PNG, WebP</strong>.
                      </p>
                      {photoError && (
                        <p className="text-[10px] text-red-600 font-bold">{photoError}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Office Use Only Section (Restricted / Read-Only for Public) */}
                <div className="lg:col-span-7 bg-slate-50 p-5 rounded-xl border border-slate-200 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                    <div className="flex items-center space-x-2 text-slate-700">
                      <Lock size={15} className="text-[#ed8100]" />
                      <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-800">
                        For Office Use Only (Authorized Staff Only)
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">
                      <ShieldCheck size={11} />
                      <span>Restricted Section</span>
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-500 mb-3 italic">
                    Note: This section is exclusively reserved for the CIMS Academic Office, Spot Verification &amp; Registrar Desk. Student applicants do not edit these fields.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Batch / Session
                      </label>
                      <input
                        type="text"
                        value="Batch 2026-2027 (Regular)"
                        disabled
                        readOnly
                        className="w-full bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1.5 rounded text-xs cursor-not-allowed font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Application Ref. No.
                      </label>
                      <input
                        type="text"
                        value="Auto-Generated Upon Submit"
                        disabled
                        readOnly
                        className="w-full bg-slate-100 border border-slate-200 text-slate-500 px-3 py-1.5 rounded text-xs cursor-not-allowed italic"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Office Remarks / Others
                      </label>
                      <input
                        type="text"
                        value="Pending Document Verification & Seat Allotment (Staff Desk)"
                        disabled
                        readOnly
                        className="w-full bg-slate-100 border border-slate-200 text-slate-500 px-3 py-1.5 rounded text-xs cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* ============================================================== */}
              {/* SECTION 1: COURSE & PROGRAM SELECTION                         */}
              {/* ============================================================== */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-[#112555] border-b border-gray-100 pb-2">
                  <GraduationCap size={20} className="text-[#ed8100]" />
                  <h2 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider">
                    1. Program / Course Selection
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  
                  <div className="lg:col-span-2">
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Program Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="appliedCourse"
                      value={formData.appliedCourse}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 font-semibold bg-white outline-none transition-colors"
                    >
                      <option value="BBA in Hospital Management">BBA in Hospital Management (3/4 Years Honours) – MAKAUT</option>
                      <option value="B.Sc in Hospitality & Hotel Administration">B.Sc in Hospitality &amp; Hotel Administration (3 Years) – MAKAUT</option>
                      <option value="Bachelor of Computer Applications (BCA)">Bachelor of Computer Applications - BCA (3/4 Years Honours) – MAKAUT</option>
                      <option value="B.Sc in Medical Laboratory Technology (BMLT)">B.Sc in Medical Laboratory Technology (BMLT) – Paramedical</option>
                      <option value="B.Sc in Medical Radiology & Imaging Technology (BMRIT)">B.Sc in Medical Radiology &amp; Imaging Technology (BMRIT)</option>
                      <option value="Bachelor of Operation Theatre Technology (BOTT)">Bachelor of Operation Theatre Technology (BOTT)</option>
                      <option value="Diploma in Hotel Management & Catering Technology">Diploma in Hotel Management &amp; Catering Technology (1-2 Years)</option>
                      <option value="Diploma in Medical Lab Technology (DMLT)">Diploma in Medical Lab Technology (DMLT - 2 Years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Academic Session
                    </label>
                    <input
                      type="text"
                      name="session"
                      value={formData.session}
                      readOnly
                      className="w-full border border-gray-200 bg-gray-50 text-gray-700 rounded-lg px-3.5 py-2.5 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Hostel Accommodation
                    </label>
                    <select
                      name="hostelRequired"
                      value={formData.hostelRequired ? 'true' : 'false'}
                      onChange={(e) => setFormData(prev => ({ ...prev, hostelRequired: e.target.value === 'true' }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 bg-white"
                    >
                      <option value="false">No – Day Scholar / Self Arranged</option>
                      <option value="true">Yes – College Hostel Required</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Campus Transport / Bus
                    </label>
                    <select
                      name="transportRequired"
                      value={formData.transportRequired ? 'true' : 'false'}
                      onChange={(e) => setFormData(prev => ({ ...prev, transportRequired: e.target.value === 'true' }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 bg-white"
                    >
                      <option value="false">No – Self Commute</option>
                      <option value="true">Yes – Campus Bus Route Required</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Admission Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 bg-white"
                    >
                      <option value="General">General / Unreserved</option>
                      <option value="SC">SC (Scheduled Caste)</option>
                      <option value="ST">ST (Scheduled Tribe)</option>
                      <option value="OBC-A">OBC-A</option>
                      <option value="OBC-B">OBC-B</option>
                      <option value="EWS">EWS (Economically Weaker Section)</option>
                    </select>
                  </div>

                </div>
              </div>

              {/* ============================================================== */}
              {/* SECTION 2: STUDENT PERSONAL DETAILS                            */}
              {/* ============================================================== */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-[#112555] border-b border-gray-100 pb-2">
                  <User size={20} className="text-[#ed8100]" />
                  <h2 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider">
                    2. Student Personal Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  
                  {/* Student Name */}
                  <div className="lg:col-span-2">
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Student Full Name (in block letters as per 10th certificate) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. RAHUL MUKHERJEE"
                      className="w-full uppercase border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 bg-white"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Guardian Name */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Father&apos;s / Guardian&apos;s Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Soumitra Mukherjee"
                      className="w-full border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                    />
                  </div>

                  {/* Mother's Name */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Mother&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Mukherjee"
                      className="w-full border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                    />
                  </div>

                  {/* ID Proof Type */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      ID Proof Document <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="idType"
                      value={formData.idType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 bg-white"
                    >
                      <option value="Aadhaar Card">Aadhaar Card</option>
                      <option value="Voter ID Card">Voter ID Card</option>
                      <option value="Passport">Passport</option>
                      <option value="School / College ID">School / College ID Card</option>
                    </select>
                  </div>

                  {/* ID Number (Masked input for privacy) */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      ID Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 12-digit Aadhaar / ID"
                      className="w-full border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                    />
                    <span className="text-[9px] text-gray-400 mt-0.5 block">
                      Protected under CIMS Privacy Policy. Complete number is never publicly displayed.
                    </span>
                  </div>

                  {/* Blood Group */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Blood Group <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-gray-900 bg-white font-semibold"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  {/* Telephone Number */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Telephone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500 font-bold text-xs">+91</span>
                      <input
                        type="tel"
                        name="telephoneNumber"
                        value={formData.telephoneNumber}
                        onChange={handleChange}
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        className="w-full pl-11 border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors font-bold"
                      />
                    </div>
                  </div>

                  {/* Alternative Number */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Alternative / Guardian Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500 font-bold text-xs">+91</span>
                      <input
                        type="tel"
                        name="alternativeNumber"
                        value={formData.alternativeNumber}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="Alternative contact"
                        className="w-full pl-11 border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email ID */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Student Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="student@example.com"
                      className="w-full border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none transition-colors"
                    />
                  </div>

                </div>
              </div>

              {/* ============================================================== */}
              {/* SECTION 3: ADDRESS DETAILS                                    */}
              {/* ============================================================== */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-[#112555] border-b border-gray-100 pb-2">
                  <MapPin size={20} className="text-[#ed8100]" />
                  <h2 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider">
                    3. Address &amp; Communication Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  
                  {/* City */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      City / Town <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Haldia / Kolkata"
                      className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  {/* District */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Purba Medinipur"
                      className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  {/* PIN Code */}
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      PIN Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      maxLength={6}
                      placeholder="e.g. 721645"
                      className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2.5 text-xs text-gray-900 outline-none font-bold"
                    />
                  </div>

                  {/* Present Address */}
                  <div className="sm:col-span-2 lg:col-span-4">
                    <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                      Present Residential Address (Vill/Street, Post Office, Police Station) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleChange}
                      rows={2}
                      required
                      placeholder="House / Flat No., Village / Street, P.O., P.S., Landmark"
                      className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2 text-xs text-gray-900 outline-none"
                    />
                  </div>

                  {/* Same as present checkbox */}
                  <div className="sm:col-span-2 lg:col-span-4 flex items-center space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="sameAsPresent"
                      name="sameAsPresent"
                      checked={formData.sameAsPresent}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#ed8100] rounded border-gray-300 focus:ring-[#ed8100]"
                    />
                    <label htmlFor="sameAsPresent" className="text-xs font-semibold text-gray-700 cursor-pointer">
                      Permanent Address is same as Present Residential Address
                    </label>
                  </div>

                  {/* Permanent Address (if different) */}
                  {!formData.sameAsPresent && (
                    <div className="sm:col-span-2 lg:col-span-4 animate-fade-in">
                      <label className="block font-bold text-gray-700 uppercase tracking-wide mb-1 text-[11px]">
                        Permanent Residential Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        rows={2}
                        required={!formData.sameAsPresent}
                        placeholder="Permanent residential address details"
                        className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2 text-xs text-gray-900 outline-none"
                      />
                    </div>
                  )}

                </div>
              </div>

              {/* ============================================================== */}
              {/* SECTION 4: ACADEMIC QUALIFICATIONS                             */}
              {/* ============================================================== */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-[#112555] border-b border-gray-100 pb-2">
                  <FileText size={20} className="text-[#ed8100]" />
                  <h2 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider">
                    4. Academic Record &amp; Prior Education
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Class 10 (Secondary) */}
                  <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200">
                    <div className="font-bold text-xs text-[#112555] uppercase tracking-wide mb-2">
                      Secondary (10th Standard / Madhyamik / ICSE / CBSE)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Board / Council</label>
                        <input
                          type="text"
                          name="class10Board"
                          value={formData.class10Board}
                          onChange={handleChange}
                          placeholder="e.g. WBBSE / CBSE / ICSE"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">School Name</label>
                        <input
                          type="text"
                          name="class10School"
                          value={formData.class10School}
                          onChange={handleChange}
                          placeholder="School name"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Year of Passing</label>
                        <input
                          type="text"
                          name="class10Year"
                          value={formData.class10Year}
                          onChange={handleChange}
                          placeholder="e.g. 2024"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Percentage (%)</label>
                        <input
                          type="text"
                          name="class10Percentage"
                          value={formData.class10Percentage}
                          onChange={handleChange}
                          placeholder="e.g. 78.5%"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Class 12 (Higher Secondary) */}
                  <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200">
                    <div className="font-bold text-xs text-[#112555] uppercase tracking-wide mb-2">
                      Higher Secondary (12th Standard / WBCHSE / ISC / CBSE / Diploma)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Board / Council</label>
                        <input
                          type="text"
                          name="class12Board"
                          value={formData.class12Board}
                          onChange={handleChange}
                          placeholder="e.g. WBCHSE / CBSE / ISC"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Stream</label>
                        <select
                          name="class12Stream"
                          value={formData.class12Stream}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        >
                          <option value="Science">Science</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Arts / Humanities">Arts / Humanities</option>
                          <option value="Vocational / Diploma">Vocational / Diploma</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Institution Name</label>
                        <input
                          type="text"
                          name="class12School"
                          value={formData.class12School}
                          onChange={handleChange}
                          placeholder="College / School"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Passing Year</label>
                        <input
                          type="text"
                          name="class12Year"
                          value={formData.class12Year}
                          onChange={handleChange}
                          placeholder="e.g. 2026 / Appearing"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Percentage (%)</label>
                        <input
                          type="text"
                          name="class12Percentage"
                          value={formData.class12Percentage}
                          onChange={handleChange}
                          placeholder="e.g. 82% or Appearing"
                          className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs bg-white font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================== */}
              {/* SECTION 5: DECLARATION & SUBMIT                                */}
              {/* ============================================================== */}
              <div className="space-y-6 pt-4 border-t border-gray-100">
                <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-200/80 space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="declarationAccepted"
                      name="declarationAccepted"
                      checked={formData.declarationAccepted}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-[#ed8100] rounded border-gray-300 focus:ring-[#ed8100] mt-1"
                    />
                    <label htmlFor="declarationAccepted" className="text-xs text-gray-800 leading-relaxed cursor-pointer">
                      <strong>Student &amp; Guardian Undertaking:</strong> I hereby declare that all the statements and particulars made in this online application form are true, complete, and correct to the best of my knowledge and belief. I agree to abide by the academic rules, attendance codes, and institutional regulations of Cambridge Institute of Management Studies (CIMS) and MAKAUT (CCPTR).
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-orange-200/60 text-xs">
                    <div>
                      <label className="block font-bold text-gray-800 uppercase tracking-wide mb-1 text-[11px]">
                        Applicant Digital Signature (Type Full Legal Name) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="applicantSignature"
                        value={formData.applicantSignature}
                        onChange={handleChange}
                        required
                        placeholder="Type Full Name"
                        className="w-full border border-gray-300 focus:border-[#ed8100] rounded-lg px-3.5 py-2 text-xs text-gray-900 font-mono font-bold bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-800 uppercase tracking-wide mb-1 text-[11px]">
                        Application Date
                      </label>
                      <input
                        type="text"
                        value={new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
                        readOnly
                        className="w-full border border-gray-200 bg-white/70 rounded-lg px-3.5 py-2 text-xs text-gray-600 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Application Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Your application data is transmitted securely to CIMS Admissions Office.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ed8100] hover:bg-[#d97400] disabled:bg-gray-400 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <GraduationCap size={18} />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
