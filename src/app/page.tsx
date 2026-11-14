"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  ArrowRight,
  PhoneCall,
  Download,
  Send,
  Play,
  GraduationCap,
  Award,
  Building2,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
  ExternalLink,
  X,
  Star,
  Users,
  Briefcase,
  HeartHandshake,
  Check,
  Eye,
  Building,
  Facebook,
  Youtube,
  Instagram,
  Globe
} from 'lucide-react';
import { 
  CIMS_INFO, 
  INITIAL_COURSES, 
  CIMS_PARTNERS, 
  TOP_RECRUITERS,
  INDUSTRY_SUPPORT_BRANDS,
  CIMS_PLACED_STUDENTS_2024,
  CIMS_PLACED_STUDENTS_2025,
  ALL_PLACEMENT_RECORDS,
  PlacementRecord
} from '@/lib/data/cimsData';

import CoursesGrid from '@/components/CoursesGrid';
import CoursesCarousel from '@/components/CoursesCarousel';

export default function HomePage() {
  // Placement Gallery Modal & Filter State
  const [selectedPlacement, setSelectedPlacement] = useState<PlacementRecord | null>(null);
  const [placementFilterYear, setPlacementFilterYear] = useState<'2024' | '2025' | 'all'>('2024');

  // Filtered placement records based on user batch tab selection
  const filteredPlacementRecords =
    placementFilterYear === '2024'
      ? CIMS_PLACED_STUDENTS_2024
      : placementFilterYear === '2025'
      ? CIMS_PLACED_STUDENTS_2025
      : ALL_PLACEMENT_RECORDS;

  // Hero Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'BBA in Hospital Management',
    qualification: '10+2 / Higher Secondary',
    city: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Video Modal State
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setFormSubmitted(true);
    } catch (e) {
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  ];

  const studentSpotlights = [
    {
      name: "Subhajit Roy",
      course: "BBA in Hospital Management",
      company: "Apollo Hospitals",
      role: "Operations Executive",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      badge: "Hospital Management",
      quote: "The clinical hospital rotations at City Hospital gave me the real-world skills to manage hospital administrative wings confidently."
    },
    {
      name: "Priyanka Mondal",
      course: "B.Sc in Hospitality & Hotel Admin",
      company: "JW Marriott",
      role: "Front Office Associate",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      badge: "Hospitality & Tourism",
      quote: "CIMS provided unmatched grooming and 6 months 5-star hotel training. Getting placed at JW Marriott was my dream career start."
    },
    {
      name: "Suman Sengupta",
      course: "B.Sc Medical Lab Tech (BMLT)",
      company: "Medica Superspecialty",
      role: "Diagnostic Lab Technologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
      badge: "Paramedical",
      quote: "Working with automated biochemistry analyzers and daily pathology rounds made me job-ready before graduation."
    },
    {
      name: "Ananya Maity",
      course: "BCA - Computer Applications",
      company: "Wipro Technologies",
      role: "Associate Software Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      badge: "IT & Computing",
      quote: "The high-spec computer lab and full-stack dev projects helped me clear campus placement with top IT recruiters."
    },
    {
      name: "Tanmoy Bera",
      course: "B.Sc in Hospitality & Hotel Admin",
      company: "The Taj Group",
      role: "Food & Beverage Associate",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      badge: "Hospitality",
      quote: "Hands-on culinary labs and luxury hospitality mentorship prepared me for 5-star brand guest service standards."
    },
    {
      name: "Sneha Mondal",
      course: "BBA in Hospital Management",
      company: "Fortis Healthcare",
      role: "Quality Assurance Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      badge: "Hospital Management",
      quote: "Learning NABH quality accreditation protocols during college opened fast-track leadership opportunities for me."
    }
  ];

  const allCourses = [
    {
      title: "BBA in Hospital Management",
      degree: "BBA-HM",
      duration: "3 - 4 Years",
      slug: "hospital-management",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/campus-students-group.jpg",
      badge: "Hospital Management",
      desc: "Healthcare operations, patient care administration, hospital finance, NABH protocols & clinical internships."
    },
    {
      title: "B.Sc in Hospitality & Hotel Administration",
      degree: "B.Sc HHA",
      duration: "3 Years",
      slug: "hospitality-hotel-management",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg",
      badge: "Hospitality & Tourism",
      desc: "Culinary arts, front desk suites, food & beverage production, mixology & 6 months 5-star hotel training."
    },
    {
      title: "B.Sc Medical Laboratory Technology (BMLT)",
      degree: "B.Sc Paramedical",
      duration: "3 - 4 Years",
      slug: "allied-health-science",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-campus-group-photo.jpg",
      badge: "Allied Health",
      desc: "Diagnostic pathology, biochemistry analyzers, clinical microbiology, hematology and blood banking."
    },
    {
      title: "B.Sc Medical Radiology & Imaging Technology (BMRIT)",
      degree: "B.Sc Paramedical",
      duration: "3 - 4 Years",
      slug: "allied-health-science",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      badge: "Allied Health",
      desc: "Digital X-ray imaging, computed tomography (CT Scan), MRI protocols, and radiologic physics."
    },
    {
      title: "B.Sc Operation Theatre Technology (BOTT)",
      degree: "B.Sc Paramedical",
      duration: "3 - 4 Years",
      slug: "allied-health-science",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
      badge: "Allied Health",
      desc: "Surgical instrumentation, sterile processing, anesthesia assistance and critical surgery monitoring."
    },
    {
      title: "BCA - Bachelor of Computer Applications",
      degree: "BCA",
      duration: "3 - 4 Years",
      slug: "bca",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      badge: "Computing",
      desc: "Software engineering, full-stack web and cloud systems, Python, AI algorithms and IT campus placements."
    },
    {
      title: "Diploma in Hotel Management & Aviation",
      degree: "Diploma",
      duration: "1 - 2 Years",
      slug: "hospitality-hotel-management",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
      badge: "Diploma",
      desc: "Fast-track professional training in hospitality services, front office and aviation ground operations."
    },
    {
      title: "Masters in Hospital Administration (MHA)",
      degree: "Postgraduate Degree",
      duration: "2 Years",
      slug: "hospital-management",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
      badge: "Master Degree",
      desc: "Advanced healthcare leadership, hospital economics, health policy, quality accreditation and bioethics."
    }
  ];

  const galleryItems = [
    { title: "Practical Hospital Operations Training", category: "Hospital Training", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
    { title: "Culinary & Food Production Kitchen", category: "Hospitality", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" },
    { title: "Automated Paramedical Pathology Lab", category: "Medical Labs", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop" },
    { title: "State-of-the-Art Computer Application Lab", category: "Campus", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
    { title: "Clinical Rotations & Patient Interaction", category: "Hospital Training", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop" },
    { title: "Annual Cultural Fest & Freshers Welcome", category: "Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" }
  ];

  const whyJoinPoints = [
    "Multiple Government Recognition & MAKAUT (CCPTR) Affiliated",
    "Affordable Course Fee with Easy Installment Options",
    "National & International Internships in 5-Star Hotels & Hospitals",
    "Global Industry Exposure & Hospital Administration Rotations",
    "Modern Diagnostic Laboratories & Commercial Kitchen Labs",
    "100% Placement Assistance with 1,700+ Placed Students",
    "Swami Vivekananda Foundation Scholarship & Education Loan Support"
  ];

  const videos = [
    {
      id: "vid-1",
      title: "Hospital Management Clinical Training at City Hospital",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      youtubeId: "BlYjpccOmJE"
    },
    {
      id: "vid-2",
      title: "5-Star Luxury Hotel Training & Culinary Masterclass",
      duration: "4:20",
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
      youtubeId: "KaIootmRKfk"
    },
    {
      id: "vid-3",
      title: "Advanced Paramedical Diagnostic Pathology & Radiology Lab",
      duration: "5:10",
      thumbnail: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop",
      youtubeId: "1XWDaknwgZ4"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION WITH VIDEO BACKGROUND
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0d1d42] overflow-hidden min-h-[620px] lg:min-h-[680px] flex items-center">

        {/* CIMS Training Tour Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero/cims-building.jpg"
          >
            <source src="/videos/campus-tour.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1d42]/90 via-[#0d1d42]/75 to-[#0d1d42]/50" />
        </div>

        {/* Floating Animated Ambient Glows */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#ed8100]/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1c3786]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 text-white space-y-5">

              {/* SVF Logo + Institution Header */}
              <div className="flex items-center gap-4 mb-2">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#ffc923] shadow-lg bg-white">
                  <Image
                    src="/images/logo/svf-logo.jpg"
                    alt="Swami Vivekananda Foundation, West Bengal"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div>
                  <p className="text-[#ffc923] text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight">
                    Swami Vivekananda Foundation
                  </p>
                  <p className="text-white/90 text-[10px] sm:text-xs font-semibold leading-tight">
                    West Bengal • MAKAUT (CCPTR) Affiliated
                  </p>
                  {/* 15+ Years Badge */}
                  <span className="inline-flex items-center gap-1 mt-1 bg-[#ed8100] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    <Award size={11} />
                    15+ Years EDUCATIONAL TRUST
                  </span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/CIMSCollege?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CIMS Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] border border-white/20 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Facebook size={15} className="text-white" />
                </a>
                <a
                  href="https://youtube.com/@CIMSCollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CIMS YouTube"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] border border-white/20 hover:border-[#FF0000] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Youtube size={15} className="text-white" />
                </a>
                <a
                  href="https://instagram.com/cimscollege?igshid=YWJhMjlhZTc="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CIMS Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888] border border-white/20 hover:border-[#E1306C] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Instagram size={15} className="text-white" />
                </a>
                <a
                  href="https://cimsgroup.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CIMS Official Website"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ed8100] border border-white/20 hover:border-[#ed8100] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Globe size={15} className="text-white" />
                </a>
                <span className="text-white/50 text-[10px] font-medium ml-1">Follow Us</span>
              </div>

              {/* Animated Glowing Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ed8100]/25 border border-[#ed8100]/60 text-[#ffc923] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse-subtle shadow-badge">
                <span className="w-2 h-2 rounded-full bg-[#ed8100] animate-ping" />
                <span>Admission Open 2026-27 • 100% Placement Assistance</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
                Launch Your Global Career in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc923] via-[#ff9724] to-[#ed8100]">
                  Healthcare &amp; Hospitality
                </span>
              </h1>

              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-xl">
                Join <strong>Cambridge Institute of Management Studies (CIMS Group)</strong>, a premier unit of <strong>Swami Vivekananda Foundation</strong> affiliated to <strong>MAKAUT (CCPTR)</strong>. Experience mandatory clinical rotations at <strong>City Hospital</strong> and paid industrial internships across India&apos;s leading 5-star brand hotels.
              </p>

              {/* Student Community Floating Trust Badge (Student Pictures) */}
              <div className="flex flex-wrap items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-md animate-float">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {studentAvatars.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="CIMS Enrolled Student"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-[#ed8100] object-cover"
                    />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1 text-[#ffc923] text-xs">
                    {"★★★★★"}
                    <span className="font-bold text-white ml-1">4.9 / 5</span>
                  </div>
                  <span className="text-gray-200 text-[11px] font-medium">
                    Trusted by <strong>1,700+ Successful Alumni</strong>
                  </span>
                </div>
              </div>

              {/* ISHM Style Key Highlight Checkmarks */}
              <div className="space-y-2 pt-1 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#ed8100] flex-shrink-0" />
                  <span>100% Guaranteed Job Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#ed8100] flex-shrink-0" />
                  <span>Practical Clinical Hospital Rotations at City Hospital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#ed8100] flex-shrink-0" />
                  <span>6 Months Industrial Exposure in 5-Star Luxury Hotels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#ed8100] flex-shrink-0" />
                  <span>Approved Curriculum under MAKAUT CCPTR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  href="#admission-form"
                  className="btn-shimmer bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Apply Now 2026</span>
                  <ArrowRight size={15} />
                </a>

                <button
                  onClick={() => setSelectedVideo('campus-tour.mp4')}
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-5 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 group"
                >
                  <Play size={14} className="fill-current text-[#ffc923] group-hover:scale-110 transition-transform" />
                  <span>Watch Campus Tour</span>
                </button>

                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="text-gray-300 hover:text-white flex items-center gap-2 text-xs font-bold py-1"
                >
                  <PhoneCall size={14} className="text-[#ed8100]" />
                  <span>{CIMS_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Hero: Campus Photo + Admission Form stacked */}
            <div className="lg:col-span-5 space-y-4" id="admission-form">

              {/* Campus Building Photo Card */}
              <div className="relative w-full overflow-hidden rounded-2xl border-4 border-[#112555] shadow-2xl" style={{ aspectRatio: '3/4', minHeight: '320px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/cims-building.jpg"
                  alt="CIMS Campus Building – Students on Balconies, Cambridge Institute of Management Studies"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d42]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#112555]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/20">
                    CIMS Campus, Kolkata
                  </span>
                  <span className="bg-[#ed8100]/90 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                    Est. 2011
                  </span>
                </div>
              </div>

              {/* Admission Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border-t-4 border-[#ed8100] text-gray-800">

                <div className="mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-2 py-0.5 rounded">
                      Admission Open 2026-27
                    </span>
                    <h3 className="font-heading text-xl font-extrabold text-[#112555] mt-1">
                      Quick Admission Inquiry
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#112555] flex items-center justify-center font-bold">
                    <GraduationCap size={22} className="text-[#ed8100]" />
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={28} />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[#112555]">
                      Thank You, {formData.name || 'Candidate'}!
                    </h4>
                    <p className="text-xs text-gray-600 max-w-xs mx-auto">
                      Your admission request has been received. Our senior counselor will call you within 24 hours with complete course fee and scholarship details.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#ed8100] underline mt-2"
                    >
                      Submit another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Candidate Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Phone No. *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="10-digit Mobile"
                          className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="Email Address"
                          className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Select Course *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      >
                        <option value="BBA in Hospital Management">BBA in Hospital Management</option>
                        <option value="B.Sc in Hospitality & Hotel Administration">B.Sc Hospitality &amp; Hotel Admin</option>
                        <option value="B.Sc Medical Laboratory Technology (BMLT)">B.Sc Medical Lab Tech (BMLT)</option>
                        <option value="B.Sc Medical Radiology & Imaging (BMRIT)">B.Sc Radiology &amp; Imaging (BMRIT)</option>
                        <option value="B.Sc Operation Theatre Technology (BOTT)">B.Sc Operation Theatre Tech (BOTT)</option>
                        <option value="BCA - Bachelor of Computer Applications">BCA - Computer Applications</option>
                        <option value="Diploma in Hotel Management & Aviation">Diploma in Hotel Management</option>
                        <option value="Masters in Hospital Administration (MHA)">Masters in Hospital Administration</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Qualification
                        </label>
                        <select
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                        >
                          <option value="10+2 / Higher Secondary">10+2 / Higher Secondary</option>
                          <option value="10th Pass">10th Pass</option>
                          <option value="Graduate Any Stream">Graduate</option>
                          <option value="Diploma Pass">Diploma Pass</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          placeholder="Current City"
                          className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="btn-shimmer w-full bg-[#ed8100] hover:bg-[#d97400] text-white py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-2"
                    >
                      {formSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Admission Query</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-gray-400 text-center leading-tight">
                      We value your privacy. A representative will contact you with admission details.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE 4 COUNTERS STRIP (ISHM SIGNATURE COLORFUL CARDS)
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

            {/* Box 1 (Orange / Pink) */}
            <div className="bg-[#F7941E] text-white rounded-lg p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-r border-white/20 glow-on-hover">
              <span className="text-[11px] uppercase font-bold tracking-wider opacity-90 block">OVER</span>
              <div className="font-heading text-3xl sm:text-4xl font-black my-1">
                1700+
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                PLACEMENT DONE
              </h3>
            </div>

            {/* Box 2 (Deep Navy) */}
            <div className="bg-[#142857] text-white rounded-lg p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-r border-white/20">
              <span className="text-[11px] uppercase font-bold tracking-wider opacity-90 block">OVER</span>
              <div className="font-heading text-3xl sm:text-4xl font-black my-1">
                2700+
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                INTERNSHIP DONE YET
              </h3>
            </div>

            {/* Box 3 (Crimson Red) */}
            <div className="bg-[#bb2226] text-white rounded-lg p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-r border-white/20">
              <span className="text-[11px] uppercase font-bold tracking-wider opacity-90 block">OVER</span>
              <div className="font-heading text-3xl sm:text-4xl font-black my-1">
                100%
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                EDUCATION LOAN APPROVED
              </h3>
            </div>

            {/* Box 4 (Amber Orange) */}
            <div className="bg-[#ed8100] text-white rounded-lg p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 glow-on-hover">
              <span className="text-[11px] uppercase font-bold tracking-wider opacity-90 block">OVER</span>
              <div className="font-heading text-3xl sm:text-4xl font-black my-1">
                100%
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                SCHOLARSHIP AVAILED
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. NEWS & NOTICE MARQUEE TICKER (ISHM STYLE)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#112555] text-white py-2.5 px-4 mt-8 overflow-hidden shadow-inner border-y border-[#1c3786]">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex-shrink-0 bg-[#ed8100] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded mr-3 shadow flex items-center gap-1">
            <Sparkles size={11} />
            <span>Latest Circular</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap text-xs font-semibold text-gray-200">
            <div className="animate-ticker">
              <span className="mx-6">
                📢 <strong>Admissions Open 2026:</strong> Applications officially invited for BBA Hospital Management, B.Sc Hospitality, Paramedical &amp; BCA.
              </span>
              <span className="mx-6 text-[#ed8100]">★</span>
              <span className="mx-6">
                🏥 <strong>Clinical Hospital Rotations:</strong> Direct practical rounds with City Hospital and Dillons 24x7 HD network.
              </span>
              <span className="mx-6 text-[#ed8100]">★</span>
              <span className="mx-6">
                🏨 <strong>5-Star Hotel Placements:</strong> Mandatory industrial internships in Taj, Marriott, Hyatt, and ITC hotels.
              </span>
              <span className="mx-6 text-[#ed8100]">★</span>
              <span className="mx-6">
                📞 <strong>Direct Helpline:</strong> {CIMS_INFO.phone} | Kolkata Counseling Hub Open Mon – Sat.
              </span>
            </div>
          </div>
        </div>
      </div>



      {/* ─────────────────────────────────────────────────────────────
          5. ALL COURSES SECTION (ISHM "all_courcess" SECTION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="all-courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Explore Our Programs
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#ed8100] uppercase tracking-wide">
              ALL COURSES
            </h2>
            <div className="w-16 h-1 bg-[#112555] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              University-affiliated undergraduate and diploma programs under MAKAUT (CCPTR) and Swami Vivekananda Foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCourses.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col justify-between group hover:-translate-y-1.5 glow-on-hover"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#112555]/90 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow backdrop-blur-sm">
                      {c.badge}
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-[#ffc923] text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                      <Clock size={11} />
                      <span>{c.duration}</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ed8100] block">
                      {c.degree}
                    </span>
                    <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug line-clamp-2 mt-1">
                      {c.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/courses/${c.slug}`}
                      className="text-xs font-bold text-[#112555] hover:text-[#ed8100] flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ChevronRight size={13} />
                    </Link>
                    <a
                      href="#admission-form"
                      className="bg-[#ed8100] hover:bg-[#d97400] text-white text-[11px] font-bold uppercase px-3.5 py-1.5 rounded shadow transition-all hover:scale-105"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#112555] hover:bg-[#1c3786] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>View All Programs &amp; Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. STUDY TOURS & TRAINING VIDEOS (ISHM "study-ved" SECTION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200" id="study-tours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Practical Immersion
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              CIMS TRAINING &amp; PRACTICAL LAB TOURS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Watch our students undergo live clinical hospital rotations, culinary arts production, and automated pathology lab operations.
            </p>
          </div>

                      <div className="flex justify-center">
              <video
                src="/videos/cims-training-practical-lab-tour-enhanced-1080p.mp4"
                controls
                className="w-full max-w-4xl rounded-lg shadow-lg"
                poster="/videos/cims-training-practical-lab-tour-poster.jpg"
              />
            </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. GALLERY SECTION (MATCHES ISHM GALLERY)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Visual Glimpses
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              CAMPUS LIFE &amp; FACILITIES
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Experience the campus facilities, hospital training wings, and student life at CIMS College.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer bg-gray-900 hover:-translate-y-1.5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ed8100] bg-black/60 px-2 py-0.5 rounded w-max mb-1.5 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-sm leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white px-6 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>View Full Campus Photo Archive</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. WHY JOIN CIMS (MATCHES ISHM "WHY JOIN ISHM" SECTION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200" id="why-join">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase text-[#ed8100] tracking-wider">
                Excellence in Professional Education
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-tight">
                WHY JOIN CIMS
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#ed8100]">
                Endless opportunities await at Cambridge Institute of Management Studies!
              </p>

              {/* ISHM Style Square Icon Bullet List */}
              <div className="pt-2 space-y-3">
                {whyJoinPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 bg-[#ed8100] mt-1.5 flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-gray-800">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <a
                  href="#admission-form"
                  className="bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Apply for Admission 2026
                </a>
                <Link
                  href="/about"
                  className="border border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white px-5 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all"
                >
                  About Our Heritage
                </Link>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#112555] group bg-white">
                <img
                  src="/images/hero/cims-building.jpg"
                  alt="CIMS Campus Building – Students on Balconies, Cambridge Institute of Management Studies"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#ed8100] text-white p-4 rounded-xl shadow-xl hidden sm:block animate-float">
                <div className="font-heading font-black text-2xl">15+ Years</div>
                <div className="text-[11px] font-bold uppercase tracking-wider">Educational Trust</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. TIE-UPS & INDUSTRY ASSOCIATIONS (MATCHES ISHM TIE-UP)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="tie-ups">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Sub-block A: Verified Industry Support Brands */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
                Industry Support &amp; Practical Training Network
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
                HOSPITAL &amp; INDUSTRY TIE-UPS
              </h2>
              <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Verified industry support and healthcare collaborations providing student internships, practical rotations, and industrial exposure across India.
              </p>
            </div>

            {/* 12 Verified Industry Support Brands Grid */}
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

          {/* Sub-block B: Official Institutional Partners (cimsgroup.org/partners/) */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
                Official Institutional Training Wings
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#112555] uppercase tracking-wide">
                OUR ACCREDITED PARTNERS
              </h3>
              <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Dedicated training hospital units, luxury resort properties, and 24x7 diagnostic pathology facilities from our official partners network.
              </p>
            </div>

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

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. PLACEMENT & RECRUITERS (MATCHES ISHM "PLACEMENT")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200" id="placement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Career Records &amp; Corporate Relations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              PLACEMENT &amp; CORPORATE RECRUITERS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Leading IT conglomerates, international 5-star luxury hotel chains, and premier multispecialty hospital groups regularly recruit graduating CIMS students.
            </p>
          </div>

          {/* Part A: Corporate & Hotel Recruiter Logos */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <span className="text-[11px] font-extrabold text-[#ed8100] uppercase tracking-wider">
                  Top Recruiters
                </span>
                <h3 className="font-heading text-lg font-bold text-[#112555]">
                  Corporate IT &amp; Luxury Hospitality Recruitment Partners
                </h3>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-400">
                12 Verified Recruiter Brands
              </span>
            </div>

            {/* Recruiter Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {TOP_RECRUITERS.map((r, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-gray-50/70 border border-gray-200 rounded-xl hover:border-[#ed8100] hover:bg-white hover:shadow-md transition-all flex flex-col items-center justify-center text-center group min-h-[110px]"
                >
                  <div className="h-12 w-full flex items-center justify-center mb-1.5">
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

          {/* Part B: Student Placement Records Gallery */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-extrabold text-[#ed8100] uppercase tracking-wider">
                  Authentic Placement Records
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#112555] uppercase">
                  OUR PLACED STUDENTS {placementFilterYear === 'all' ? '(ALL BATCHES)' : `BATCH ${placementFilterYear}`}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Click on any placement card to view the official student record and hospital/hotel placement proof.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg w-max self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('2024')}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
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
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
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
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                    placementFilterYear === 'all'
                      ? 'bg-[#ed8100] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  All Records ({ALL_PLACEMENT_RECORDS.length})
                </button>
              </div>
            </div>

            {/* Placement Records Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredPlacementRecords.map((record) => (
                <div
                  key={record.id}
                  onClick={() => setSelectedPlacement(record)}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ed8100] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col"
                >
                  {/* Photo Container */}
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

                  {/* Details */}
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

            {/* Clear "View All Placement Records" CTA */}
            <div className="text-center pt-6">
              <Link
                href="/training-placements"
                className="inline-flex items-center gap-2 bg-[#ed8100] hover:bg-[#d97400] text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <span>View All Placement Records &amp; Career Details</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10.5. TESTIMONIALS & INDUSTRY SPEAKS (MATCHES ISHM "#Testimonials")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Student &amp; Mentor Voices
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              TESTIMONIALS &amp; INDUSTRY SPEAKS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Hear from our successfully placed alumni, clinical hospital superintendents, and executive hospitality mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ffc923] text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;The hands‑on clinical exposure and live hospital postings at City Hospital prepared me to lead an inpatient floor team at Apollo right after graduation.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#112555] text-white font-bold text-xs flex items-center justify-center">
                  RS
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-[#112555]">Riya Sharma</h4>
                  <p className="text-[10px] text-[#ed8100] font-bold">Placed at Apollo Hospitals</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ffc923] text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;CIMS gave me real‑world kitchen labs and a 6‑month mandatory internship that landed me a guest service management role at Marriott Hotels.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#112555] text-white font-bold text-xs flex items-center justify-center">
                  AP
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-[#112555]">Amit Patel</h4>
                  <p className="text-[10px] text-[#ed8100] font-bold">Placed at Marriott Hotels</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ffc923] text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;CIMS paramedical and hospital administration interns demonstrate exceptional diagnostic discipline and patient care standards during rotations.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ed8100] text-white font-bold text-xs flex items-center justify-center">
                  SM
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-[#112555]">Dr. S. K. Mukherjee</h4>
                  <p className="text-[10px] text-gray-500 font-semibold">Medical Superintendent, City Hospital</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-[#ed8100] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ffc923] text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;The practical rigor of CIMS computing labs equipped me with modern full-stack development skills, clearing my TCS placement interview smoothly.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#112555] text-white font-bold text-xs flex items-center justify-center">
                  SB
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-[#112555]">Souvik Biswas</h4>
                  <p className="text-[10px] text-[#ed8100] font-bold">Placed at TCS (BCA Batch)</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. NEWS & NOTICE (MATCHES ISHM "News & Notice")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
                Official Updates
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
                NEWS &amp; NOTICE
              </h2>
              <div className="w-16 h-1 bg-[#ed8100] mt-2 rounded-full" />
            </div>

            <Link
              href="/news-notices"
              className="mt-3 sm:mt-0 text-xs font-bold text-[#ed8100] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Circulars</span>
              <ChevronRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2 hover:shadow-md transition-shadow">
              <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded uppercase">
                Admission 2026-27
              </span>
              <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                Admission Open 2026 in Kolkata Colleges: Your Guide to Hotel Management &amp; Computer Applications
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Official circular for 2026 academic admissions. Applications open for BBA Hospital Management, B.Sc Hospitality, Paramedical and BCA under MAKAUT (CCPTR).
              </p>
              <div className="pt-2 text-[11px] text-gray-400">April 2026</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2 hover:shadow-md transition-shadow">
              <span className="text-[10px] font-bold text-[#ed8100] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded uppercase">
                Career Guide
              </span>
              <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                Sky-High Careers: B.Sc Hotel Management Kolkata Admissions 2026 &amp; Aviation Guide
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Career insights into 5-star hotel brand training, executive hospitality paths, and aviation ground operations with Taj, Marriott, Hyatt, and ITC.
              </p>
              <div className="pt-2 text-[11px] text-gray-400">March 2026</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2 hover:shadow-md transition-shadow">
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded uppercase">
                Placement Drive
              </span>
              <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                Annual Hospital &amp; 5-Star Hotel Placement Drive Concludes with 100% Placement Record
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                CIMS Training &amp; Placement Cell announces successful placement cycle across Apollo Hospitals, Fortis, Medica, Taj Group, and Wipro.
              </p>
              <div className="pt-2 text-[11px] text-gray-400">February 2026</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. BOTTOM ADMISSION BANNER (MATCHES ISHM FOOTER CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#112555] to-[#1c3786] text-white py-12 border-t-4 border-[#ed8100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ffc923] bg-white/10 px-3 py-1 rounded">
            Admissions Helpline 2026
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold">
            Begin Your Journey Towards a Successful Career
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Take the first step towards an exciting professional career in healthcare administration, hospitality, or computing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#admission-form"
              className="btn-shimmer bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Apply Online 2026
            </a>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="bg-white text-[#112555] hover:bg-gray-100 px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
            >
              <PhoneCall size={14} className="text-[#ed8100]" />
              <span>Call Helpline: {CIMS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/918158881234?text=${encodeURIComponent("Hello CIMS Admissions Desk, I would like to inquire about admissions for 2026.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
            >
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-black max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            <div className="relative pt-[56.25%] w-full bg-black">
              {selectedVideo?.endsWith('.mp4') ? (
                <video
                  src={`/videos/${selectedVideo}`}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="CIMS Training Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}
            </div>
          </div>
        </div>
      )}

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
