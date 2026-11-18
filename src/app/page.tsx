"use client";

import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
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
  Globe,
  FileText,
  ShieldCheck,
  Trophy,
  Stethoscope,
  Hotel
} from 'lucide-react';
import { 
  CIMS_INFO, 
  INITIAL_COURSES, 
  CIMS_PARTNERS, 
  TOP_RECRUITERS,
  INDUSTRY_SUPPORT_BRANDS,
  CIMS_PLACED_STUDENTS_2023_2024,
  CIMS_PLACED_STUDENTS_2024,
  CIMS_PLACED_STUDENTS_2025,
  ALL_PLACEMENT_RECORDS,
  PlacementRecord
} from '@/lib/data/cimsData';

export default function HomePage() {
  // Placement Gallery Modal & Filter State
  const [selectedPlacement, setSelectedPlacement] = useState<PlacementRecord | null>(null);
  const [placementFilterYear, setPlacementFilterYear] = useState<'2023-2024' | '2024' | '2025' | 'all'>('2023-2024');

  // Filtered placement records based on user batch tab selection
  const filteredPlacementRecords =
    placementFilterYear === '2023-2024'
      ? CIMS_PLACED_STUDENTS_2023_2024
      : placementFilterYear === '2024'
      ? CIMS_PLACED_STUDENTS_2024
      : placementFilterYear === '2025'
      ? CIMS_PLACED_STUDENTS_2025
      : ALL_PLACEMENT_RECORDS;

  // Hero Quick Enquiry Form State
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
  const [formError, setFormError] = useState('');

  // Video Modal State
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Gallery Tab & Lightbox State
  const [activeGalleryTab, setActiveGalleryTab] = useState<'ALL' | 'HOSPITAL' | 'HOSPITALITY' | 'CAMPUS'>('ALL');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<{ title: string; category: string; image: string } | null>(null);

  // Tie-Up Tab State
  const [activeTieUpTab, setActiveTieUpTab] = useState<'ALL' | 'HOSPITAL' | 'HOTEL'>('ALL');

  // Testimonials Carousel State
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError('Please enter a valid candidate name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^\d]/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile contact number.');
      return;
    }

    setFormSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setFormError(data.error || 'Failed to submit enquiry. Please call our helpline.');
      }
    } catch {
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  ];

  const allCourses = [
    {
      title: "BBA in Hospital Management",
      degree: "Bachelor of Business Administration",
      duration: "3 Years Full-Time",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/campus-students-group.jpg",
      desc: "Comprehensive training in clinical administration, healthcare finance, hospital operations, and OPD management with mandatory City Hospital rotations.",
      slug: "hospital-management",
      badge: "MAKAUT CCPTR"
    },
    {
      title: "B.Sc in Hospitality & Hotel Administration",
      degree: "Bachelor of Science",
      duration: "3 Years Full-Time",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg",
      desc: "Premier 5-star hotel training covering food production, beverage management, front office, and guest relations with 6 months paid hotel internships.",
      slug: "hospitality-hotel-management",
      badge: "MAKAUT CCPTR"
    },
    {
      title: "B.Sc Medical Laboratory Technology (BMLT)",
      degree: "Bachelor of Science",
      duration: "3 Years + 6 Mo Internship",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-campus-group-photo.jpg",
      desc: "Clinical pathology, hematology, microbiology, and clinical biochemistry diagnostics in modern automated laboratories.",
      slug: "allied-health-science",
      badge: "MAKAUT CCPTR"
    },
    {
      title: "BCA - Bachelor of Computer Applications",
      degree: "Bachelor Degree",
      duration: "3 Years Full-Time",
      image: "/images/hero/campus-photo.jpg",
      desc: "High-demand IT degree specializing in full-stack web technologies, modern databases, software development, cloud systems, and cybersecurity.",
      slug: "bca",
      badge: "MAKAUT CCPTR"
    },
    {
      title: "B.Sc Medical Radiology & Imaging Technology (BMRIT)",
      degree: "Bachelor of Science",
      duration: "3 Years + 6 Mo Internship",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/institute-profile-photo.jpg",
      desc: "Diagnostic radiographic imaging, CT scan protocols, MRI assistance, and patient radiation safety under senior radiologists.",
      slug: "allied-health-science",
      badge: "Paramedical Council"
    },
    {
      title: "B.Sc Operation Theatre Technology (BOTT)",
      degree: "Bachelor of Science",
      duration: "3 Years + 6 Mo Internship",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/campus-students-group.jpg",
      desc: "Surgical instrumentation, sterile surgical suite maintenance, anesthesia assisting, and patient post-op observation.",
      slug: "allied-health-science",
      badge: "Paramedical Council"
    },
    {
      title: "Diploma in Medical Laboratory Technology (DMLT)",
      degree: "Diploma Program",
      duration: "2 Years Full-Time",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-campus-group-photo.jpg",
      desc: "Practical diploma focusing on clinical pathology specimens, blood banking, biochemical analyzer operation, and rapid diagnostics.",
      slug: "allied-health-science",
      badge: "State Recognized"
    },
    {
      title: "Diploma in Hotel Management & Catering Tech",
      degree: "Diploma Program",
      duration: "1–2 Years Full-Time",
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg",
      desc: "Fast-track professional diploma focusing on culinary arts, bakery production, F&B service, and housekeeping leadership in 5-star hotels.",
      slug: "hospitality-hotel-management",
      badge: "State Recognized"
    }
  ];

  const trainingVideos = [
    {
      id: "vid-1",
      title: "Hospital Clinical Postings & Bedside Training",
      thumbnail: "/images/experience-life/CIMS_Campus_Gallery_Photos/campus-students-group.jpg",
      videoFile: "campus-tour.mp4",
      desc: "Live clinical rotations at City Hospital covering patient intake, vital monitoring, and hospital administration."
    },
    {
      id: "vid-2",
      title: "Food Production & Commercial Kitchen Labs",
      thumbnail: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg",
      videoFile: "campus-tour.mp4",
      desc: "Students mastering multi-cuisine culinary arts, bakery techniques, and high-volume banquet service."
    },
    {
      id: "vid-3",
      title: "Paramedical Diagnostic Pathology & Hematology",
      thumbnail: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-campus-group-photo.jpg",
      videoFile: "campus-tour.mp4",
      desc: "Automated biochemistry analyzers, clinical microscopy, and hematology investigations."
    },
    {
      id: "vid-4",
      title: "Computer Applications & High-Performance IT Lab",
      thumbnail: "/images/hero/campus-photo.jpg",
      videoFile: "campus-tour.mp4",
      desc: "Hands-on software development, full-stack programming, and corporate IT placement grooming."
    }
  ];

  const galleryItems = [
    { 
      title: "Practical Hospital Operations Training", 
      category: "Hospital Training", 
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/campus-students-group.jpg" 
    },
    { 
      title: "Culinary & Food Production Kitchen", 
      category: "Hospitality", 
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg" 
    },
    { 
      title: "Automated Paramedical Pathology Lab", 
      category: "Medical Labs", 
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-campus-group-photo.jpg" 
    },
    { 
      title: "CIMS Campus Academic Building & Infrastructure", 
      category: "Campus Life", 
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-building-students.jpg" 
    },
    { 
      title: "Clinical Rotations & Healthcare Briefings", 
      category: "Hospital Training", 
      image: "/images/experience-life/CIMS_Campus_Gallery_Photos/institute-profile-photo.jpg" 
    },
    { 
      title: "State-of-the-Art Computer Application Lab", 
      category: "IT & Computing", 
      image: "/images/hero/campus-photo.jpg" 
    }
  ];

  const filteredGalleryItems = galleryItems.filter((item) => {
    if (activeGalleryTab === 'ALL') return true;
    if (activeGalleryTab === 'HOSPITAL') return item.category.toLowerCase().includes('hospital') || item.category.toLowerCase().includes('medical');
    if (activeGalleryTab === 'HOSPITALITY') return item.category.toLowerCase().includes('hospitality') || item.category.toLowerCase().includes('culinary');
    if (activeGalleryTab === 'CAMPUS') return item.category.toLowerCase().includes('campus') || item.category.toLowerCase().includes('it');
    return true;
  });

  const whyJoinPoints = [
    "Multiple Government Recognitions & MAKAUT (CCPTR) Affiliation",
    "Affordable Course Fee Structure with Flexible Semester Installments",
    "Mandatory Clinical Hospital Postings & 5-Star Hotel Internships Across India",
    "Comprehensive Industry Exposure & Hospital Administration Rotations",
    "Modern Diagnostic Laboratories & Commercial Kitchen Labs",
    "Emphasis in Skill Development & 360° Practical Clinical Learning",
    "Swami Vivekananda Foundation Scholarship Opportunities & Education Loans",
    "Centre of Excellence for Healthcare Leadership & Practical Grooming",
    "Finest Subject Experts & Hospital Administrators as Faculties",
    "100% Placement Assistance with 1,700+ Placed Students"
  ];

  const awardsList = [
    {
      title: "MAKAUT (CCPTR) Affiliation Recognition",
      organization: "Maulana Abul Kalam Azad University of Technology (CCPTR)",
      citation: "Approved Autonomous Institution for Professional Healthcare Administration, Hospitality, and Computing Curriculums.",
      badge: "University Affiliation"
    },
    {
      title: "Swami Vivekananda Foundation Educational Excellence Honor",
      organization: "Swami Vivekananda Foundation, West Bengal",
      citation: "Recognized for 15+ years of dedicated service in empowering youths with career-ready professional skills.",
      badge: "Educational Trust Citation"
    },
    {
      title: "Excellence in Paramedical Practical Diagnostic Education",
      organization: "West Bengal Allied Health Sciences Forum",
      citation: "Awarded for state-of-the-art pathology laboratories, automated analyzers, and hospital training wings.",
      badge: "Allied Health Award"
    }
  ];

  const testimonialsList = [
    {
      name: "Dr. S. K. Mukherjee",
      role: "Medical Superintendent – City Hospital",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      quote: "CIMS hospital management and paramedical interns demonstrate exceptional clinical discipline, hospital administrative acumen, and patient care ethics during rotations at City Hospital."
    },
    {
      name: "Mr. S. Banerjee",
      role: "General Manager – Luxury Hospitality Partner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      quote: "CIMS is one of the finest institutions in the region grooming future leaders for 5-star hotel operations. Their students are disciplined, groomed, and market-ready even before graduation."
    },
    {
      name: "Riya Sharma",
      role: "Operations Executive – Apollo Hospitals",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      quote: "The hands-on clinical postings at City Hospital and live hospital management case studies gave me the confidence to lead an inpatient ward team right after graduation."
    },
    {
      name: "Amit Patel",
      role: "Guest Service Associate – Marriott Hotels & Resorts",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      quote: "CIMS gave me real-world commercial kitchen labs, beverage masterclasses, and a 6-month industrial internship that landed me a guest service management role at Marriott Hotels."
    },
    {
      name: "Suman Sengupta",
      role: "Diagnostic Lab Technologist – Medica Superspecialty",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      quote: "Working daily with automated biochemistry analyzers and pathology equipment during college made the transition to Medica's diagnostic division seamless."
    },
    {
      name: "Souvik Biswas",
      role: "Associate Software Engineer – TCS (BCA Batch)",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      quote: "The practical rigor of CIMS computing labs and software project mentoring equipped me with modern full-stack development skills, clearing my TCS placement smoothly."
    }
  ];

  // Auto-scroll testimonials carousel
  useEffect(() => {
    if (isTestimonialHovered) return;
    const interval = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsList.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialHovered, testimonialsList.length]);

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsList.length);
  };

  // Filtered Tie-Up Brands and Partners (Point 9: Non-Repetitive)
  const filteredIndustryBrands = INDUSTRY_SUPPORT_BRANDS.filter((brand) => {
    if (activeTieUpTab === 'ALL') return true;
    if (activeTieUpTab === 'HOSPITAL') return brand.category.toLowerCase().includes('hospital');
    if (activeTieUpTab === 'HOTEL') return brand.category.toLowerCase().includes('hospitality');
    return true;
  });

  const filteredPartners = CIMS_PARTNERS.filter((partner) => {
    if (activeTieUpTab === 'ALL') return true;
    if (activeTieUpTab === 'HOSPITAL') return partner.category.toLowerCase().includes('hospital') || partner.category.toLowerCase().includes('healthcare') || partner.category.toLowerCase().includes('skill');
    if (activeTieUpTab === 'HOTEL') return partner.category.toLowerCase().includes('resort') || partner.category.toLowerCase().includes('hotel');
    return true;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION WITH VIDEO BACKGROUND & QUICK ADMISSION FORM
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0d1d42] overflow-hidden min-h-[620px] lg:min-h-[680px] flex items-center">

        {/* Real CIMS Photographic Collage Mosaic Background (Part 2) */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none">
          {/* Asymmetrical 8-Photo Mosaic Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 w-[105%] h-[105%] -m-2 opacity-35 filter brightness-90 contrast-105">
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-001.jpeg" alt="CIMS Campus Building" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-002.jpeg" alt="Culinary Training Lab" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-003.jpeg" alt="Paramedical Pathology" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-004.jpeg" alt="Hospitality Training" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-005.jpeg" alt="Hospital Lecture Hall" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-007.jpeg" alt="Institutional Seminar" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-010.jpeg" alt="Computer Applications Lab" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow">
              <img src="/images/cims-photos/cims-photo-012.jpeg" alt="Convocation Ceremony" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Subtle Deep Navy & Warm Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071129]/95 via-[#0d1d42]/90 to-[#071129]/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
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
                  href={CIMS_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CIMS Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] border border-white/20 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Facebook size={15} className="text-white" />
                </a>
                <a
                  href={CIMS_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CIMS YouTube"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] border border-white/20 hover:border-[#FF0000] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <Youtube size={15} className="text-white" />
                </a>
                <a
                  href={CIMS_INFO.socials.instagram}
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
                Launch Your Professional Career in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc923] via-[#ff9724] to-[#ed8100]">
                  Healthcare, Hospitality, Computing &amp; Aviation
                </span>
              </h1>

              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-xl">
                Join <strong>Cambridge Institute of Management Studies (CIMS Group)</strong>, a premier unit of <strong>Swami Vivekananda Foundation</strong> affiliated to <strong>MAKAUT (CCPTR)</strong>. Experience mandatory clinical rotations at <strong>City Hospital</strong> and paid industrial internships across India&apos;s leading 5-star brand hotels.
              </p>

              {/* Student Community Floating Trust Badge */}
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
                <Link
                  href="/admission"
                  className="btn-shimmer bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Apply Now 2026</span>
                  <ArrowRight size={15} />
                </Link>

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

            {/* Right Hero: Quick Admission Enquiry Form (Matches ISHM Clean Proportions) */}
            <div className="lg:col-span-5" id="admission-form">
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
                      Your admission request has been received. Our senior counselor will call you within 24 hours with complete course fee, syllabus, and scholarship details.
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

                    {formError && (
                      <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Candidate Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter student full name"
                        required
                        className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="10-digit mobile"
                          required
                          className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="student@example.com"
                          required
                          className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Select Program *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleFormChange}
                        className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="BBA in Hospital Management">BBA in Hospital Management (3 Years)</option>
                        <option value="B.Sc in Hospitality & Hotel Administration">B.Sc in Hospitality &amp; Hotel Admin (3 Years)</option>
                        <option value="B.Sc Medical Laboratory Technology (BMLT)">B.Sc Medical Lab Technology - BMLT (3.5 Years)</option>
                        <option value="BCA - Bachelor of Computer Applications">BCA - Computer Applications (3 Years)</option>
                        <option value="B.Sc Medical Radiology & Imaging Technology (BMRIT)">B.Sc Radiology &amp; Imaging - BMRIT (3.5 Years)</option>
                        <option value="B.Sc Operation Theatre Technology (BOTT)">B.Sc Operation Theatre Tech - BOTT (3.5 Years)</option>
                        <option value="Diploma in Medical Laboratory Technology (DMLT)">Diploma in Medical Lab Tech - DMLT (2 Years)</option>
                        <option value="Diploma in Hotel Management & Catering Tech">Diploma in Hotel Management (1–2 Years)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Last Qualification
                        </label>
                        <select
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleFormChange}
                          className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="10+2 / Higher Secondary">Class 12 / Higher Secondary</option>
                          <option value="Class 10 / Madhyamik">Class 10 / Madhyamik</option>
                          <option value="Graduate / Ongoing">Graduate / Ongoing Degree</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          City / District
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          placeholder="e.g. Kolkata, Howrah"
                          className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Any Questions / Message (Optional)
                      </label>
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Inquire about course fee, hostel, or scholarship"
                        className="w-full text-xs p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-[#ed8100] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full bg-[#ed8100] hover:bg-[#d97400] text-white py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 mt-2 disabled:opacity-70 cursor-pointer"
                    >
                      {formSubmitting ? (
                        <span>Submitting Your Enquiry...</span>
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

                    <div className="pt-2 border-t border-gray-100 text-center">
                      <Link
                        href="/admission"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#112555] hover:text-[#ed8100] transition-colors py-1 group"
                      >
                        <GraduationCap size={15} className="text-[#ed8100]" />
                        <span>Fill Complete Online Admission Form 2026-27</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
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

            {/* Box 1 (Orange) */}
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
          4. ALL COURSES SECTION (ISHM "all_courcess" SECTION WITH DOWNLOAD BROCHURE)
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
                    <Link
                      href="/admission"
                      className="bg-[#ed8100] hover:bg-[#d97400] text-white text-[11px] font-bold uppercase px-3.5 py-1.5 rounded shadow transition-all hover:scale-105"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Centered ISHM Signature "DOWNLOAD BROCHURE" Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer bg-[#ed8100] hover:bg-[#d97400] text-white px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <Download size={15} />
              <span>DOWNLOAD BROCHURE</span>
            </a>
            <Link
              href="/courses"
              className="border-2 border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>View All Programs &amp; Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CAMPUS GALLERY SECTION (MATCHES ISHM GALLERY SEQUENCE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-8">
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

          {/* Interactive Category Filter Tabs (Point 6: ISHM Gallery Alignment) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              type="button"
              onClick={() => setActiveGalleryTab('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeGalleryTab === 'ALL'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Gallery
            </button>
            <button
              type="button"
              onClick={() => setActiveGalleryTab('HOSPITAL')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeGalleryTab === 'HOSPITAL'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Hospital Training
            </button>
            <button
              type="button"
              onClick={() => setActiveGalleryTab('HOSPITALITY')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeGalleryTab === 'HOSPITALITY'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Hospitality &amp; Culinary
            </button>
            <button
              type="button"
              onClick={() => setActiveGalleryTab('CAMPUS')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeGalleryTab === 'CAMPUS'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Campus Life &amp; Labs
            </button>
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGalleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryImage(item)}
                className="group relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer bg-gray-900 hover:-translate-y-1.5 border border-gray-200"
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
                  <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#ffc923] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={12} />
                    <span>Click to View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>View Full Campus Photo Archive</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. WHY JOIN CIMS (MATCHES ISHM "#advantage" 2-COLUMN LAYOUT)
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

              {/* Bottom CTA Button matching ISHM */}
              <div className="pt-4 flex items-center gap-3">
                <Link
                  href="/admission"
                  className="bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Apply Now
                </Link>
                <Link
                  href="/about"
                  className="border border-[#112555] text-[#112555] hover:bg-[#112555] hover:text-white px-5 py-3 rounded font-bold text-xs uppercase tracking-wider transition-all"
                >
                  About Our Heritage
                </Link>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#112555] group bg-white relative">
                <img
                  src="/images/hero/cims-building.jpg"
                  alt="CIMS Campus Building – Students on Balconies, Cambridge Institute of Management Studies"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <button
                  onClick={() => setSelectedVideo('campus-tour.mp4')}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#ed8100]/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#ed8100] transition-all cursor-pointer"
                  aria-label="Play Campus Tour Video"
                >
                  <Play size={24} className="fill-current ml-1" />
                </button>
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
          7. DEDICATED TRAINING VIDEOS SECTION (ISHM ".Gallery_Videos" WITH DIAGONAL GRADIENT)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="training-videos"
        className="py-16 border-t border-gray-200 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgb(229, 234, 237) 0%, rgb(229, 234, 237) 59%, rgb(237, 129, 0) 59%, rgb(237, 129, 0) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm mb-2">
              <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
                Hands-On Practical Immersion
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              CIMS TRAINING VIDEOS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-700 mt-2 font-medium">
              Watch our students undergo live clinical hospital rotations, culinary arts production, pathology testing, and software engineering labs.
            </p>
          </div>

          {/* 4 Video Cards Grid matching ISHM Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid.videoFile)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer group flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-video w-full bg-gray-900 overflow-hidden">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#ed8100] text-white flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform duration-300">
                        <Play size={20} className="fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#112555]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      CIMS Training
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug line-clamp-2 uppercase">
                      {vid.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <span className="text-[11px] font-bold text-[#ed8100] flex items-center gap-1 group-hover:underline">
                    <span>Watch Training Video</span>
                    <Play size={10} className="fill-current" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom "View All" Button matching ISHM */}
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#112555] hover:bg-black text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all"
            >
              <span>View All Training Videos &amp; Campus Media</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. HOSPITAL & INDUSTRY TIE-UPS (ORGANIZED & NON-REPETITIVE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200" id="tie-ups">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Practical Rotations &amp; Industry Network
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              HOSPITAL &amp; INDUSTRY TIE-UPS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Mandatory clinical hospital rotations and luxury 5-star hotel brand internships providing extensive hands-on industry exposure across India.
            </p>
          </div>

          {/* Non-repetitive Stream Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTieUpTab('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTieUpTab === 'ALL'
                  ? 'bg-[#112555] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Affiliated Partners
            </button>
            <button
              type="button"
              onClick={() => setActiveTieUpTab('HOSPITAL')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTieUpTab === 'HOSPITAL'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Stethoscope size={13} />
              <span>Clinical Hospital Rotations</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTieUpTab('HOTEL')}
              className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTieUpTab === 'HOTEL'
                  ? 'bg-[#ed8100] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Hotel size={13} />
              <span>5-Star Luxury Hotel Chains</span>
            </button>
          </div>

          {/* Dual Dedicated Stream Showcase */}
          <div className="space-y-12 pt-4">

            {/* Stream A: Clinical Healthcare & Hospital Rotations */}
            {(activeTieUpTab === 'ALL' || activeTieUpTab === 'HOSPITAL') && (
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-[#112555] flex items-center justify-center">
                      <Stethoscope size={16} className="text-[#ed8100]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                      Clinical Healthcare &amp; Hospital Training Partners
                    </h3>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">
                    Bedside patient care, OT observation &amp; automated pathology labs
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                  {INDUSTRY_SUPPORT_BRANDS.filter(b => b.category.toLowerCase().includes('hospital')).map((brand, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#ed8100] hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group min-h-[120px]"
                    >
                      <div className="h-14 w-full flex items-center justify-center p-1 mb-1">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} Hospital`}
                          className="max-h-12 max-w-[110px] w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-heading font-bold text-xs text-[#112555] leading-tight">
                        {brand.name}
                      </h4>
                      <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider mt-1 px-2 py-0.5 bg-emerald-50 rounded">
                        Clinical Rotations
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stream B: Luxury 5-Star Hotel & Resort Internships */}
            {(activeTieUpTab === 'ALL' || activeTieUpTab === 'HOTEL') && (
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="border-b border-gray-200 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-100 text-[#ed8100] flex items-center justify-center">
                      <Hotel size={16} className="text-[#ed8100]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-[#112555]">
                      Luxury 5-Star Hospitality &amp; Hotel Brands
                    </h3>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">
                    6 Months paid internships in culinary production, F&amp;B and front office
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                  {INDUSTRY_SUPPORT_BRANDS.filter(b => b.category.toLowerCase().includes('hospitality')).map((brand, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#ed8100] hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group min-h-[120px]"
                    >
                      <div className="h-14 w-full flex items-center justify-center p-1 mb-1">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} Hotel`}
                          className="max-h-12 max-w-[110px] w-auto h-auto object-contain group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-heading font-bold text-xs text-[#112555] leading-tight">
                        {brand.name}
                      </h4>
                      <span className="text-[9px] font-bold text-blue-700 uppercase tracking-wider mt-1 px-2 py-0.5 bg-blue-50 rounded">
                        5-Star Internship
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Official Training Units Showcase */}
            <div className="pt-6 border-t border-gray-200">
              <div className="mb-6">
                <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
                  Official Training Establishments
                </span>
                <h3 className="font-heading text-xl font-extrabold text-[#112555]">
                  Dedicated Clinical Training Wings &amp; Resort Properties
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
                  >
                    <div className="h-44 bg-gray-100 overflow-hidden relative">
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
                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#112555] group-hover:text-[#ed8100] transition-colors">
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

          <div className="text-center pt-4">
            <Link
              href="/approvals-affiliations"
              className="inline-flex items-center gap-2 bg-[#112555] hover:bg-[#1c3786] text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>View All Approvals &amp; Affiliation Orders</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. AWARDS & ACHIEVEMENTS SECTION (MATCHES ISHM ".award_slider")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="awards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Accreditations &amp; Institutional Honors
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              AWARDS &amp; ACHIEVEMENTS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Recognitions, university affiliations, and excellence honors bestowed upon Cambridge Institute of Management Studies under Swami Vivekananda Foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsList.map((award, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ed8100] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-orange-50 text-[#ed8100] border border-orange-200 tracking-wider">
                      {award.badge}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-[#112555] flex items-center justify-center group-hover:bg-[#ed8100] group-hover:text-white transition-colors">
                      <Trophy size={18} />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-1">
                    {award.organization}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2.5">
                    {award.citation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                  <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>Verified Institutional Honor</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/approvals-affiliations"
              className="inline-flex items-center gap-2 bg-[#112555] hover:bg-[#1c3786] text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>View All Approvals &amp; Affiliation Orders</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. PLACEMENT & RECRUITERS (MATCHES ISHM "PLACEMENT")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-200" id="placement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Career Records &amp; Corporate Relations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              RECENT PLACEMENTS &amp; CORPORATE RECRUITERS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Leading IT conglomerates, luxury 5-star brand hotel chains, and premier multispecialty hospital groups regularly recruit graduating CIMS students.
            </p>
          </div>

          {/* Part A: Corporate & Hotel Recruiter Logos */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
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
                  className="p-3.5 bg-white border border-gray-200 rounded-xl hover:border-[#ed8100] hover:shadow-md transition-all flex flex-col items-center justify-center text-center group min-h-[110px]"
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
              <div className="flex flex-wrap items-center gap-1.5 bg-gray-200/80 p-1 rounded-lg w-max self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('2023-2024')}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    placementFilterYear === '2023-2024'
                      ? 'bg-[#ed8100] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  2023-24 ({CIMS_PLACED_STUDENTS_2023_2024.length})
                </button>
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('2024')}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    placementFilterYear === '2024'
                      ? 'bg-[#112555] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  2024 ({CIMS_PLACED_STUDENTS_2024.length})
                </button>
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('2025')}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    placementFilterYear === '2025'
                      ? 'bg-[#112555] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  2025 ({CIMS_PLACED_STUDENTS_2025.length})
                </button>
                <button
                  type="button"
                  onClick={() => setPlacementFilterYear('all')}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    placementFilterYear === 'all'
                      ? 'bg-[#112555] text-white shadow'
                      : 'text-gray-600 hover:text-[#112555]'
                  }`}
                >
                  All ({ALL_PLACEMENT_RECORDS.length})
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
                      {record.course && (
                        <span className="inline-block px-1.5 py-0.5 mb-1 text-[9px] font-bold uppercase rounded bg-amber-50 text-amber-700 border border-amber-200">
                          {record.course}
                        </span>
                      )}
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
                href="/placement"
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
          11. WHAT INDUSTRY SAYS / TESTIMONIALS CAROUSEL (ISHM "#Testimonials")
      ───────────────────────────────────────────────────────────── */}
      <section 
        className="py-16 bg-white border-t border-gray-200" 
        id="testimonials"
        onMouseEnter={() => setIsTestimonialHovered(true)}
        onMouseLeave={() => setIsTestimonialHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#ed8100] uppercase tracking-wider">
              Student &amp; Mentor Voices
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide">
              WHAT INDUSTRY SAYS
            </h2>
            <div className="w-16 h-1 bg-[#ed8100] mx-auto mt-2 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Hear from our successfully placed alumni, clinical hospital superintendents, and executive hospitality mentors.
            </p>
          </div>

          {/* Testimonials Carousel Slider Controls & Viewport */}
          <div className="relative max-w-5xl mx-auto">
            {/* Slider Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-200 text-[#112555] hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-200 text-[#112555] hover:bg-[#ed8100] hover:text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={22} />
            </button>

            {/* Testimonials Cards Slider View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
              {[0, 1, 2].map((offset) => {
                const itemIdx = (activeTestimonialIdx + offset) % testimonialsList.length;
                const t = testimonialsList[itemIdx];
                return (
                  <div
                    key={`${itemIdx}-${offset}`}
                    className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ed8100] transition-all duration-300 flex flex-col justify-between text-center group"
                  >
                    <div>
                      {/* Round Avatar at top */}
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#ed8100] shadow-md mb-4 bg-white flex items-center justify-center">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* 5 Stars */}
                      <div className="flex items-center justify-center gap-1 text-[#ffc923] text-sm mb-3">
                        {"★★★★★"}
                      </div>

                      {/* Quote */}
                      <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-heading font-extrabold text-sm text-[#112555]">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-[#ed8100] font-bold mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {testimonialsList.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveTestimonialIdx(dotIdx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === activeTestimonialIdx
                      ? 'w-8 bg-[#ed8100]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Bottom "Download Prospectus" Button matching ISHM */}
            <div className="text-center mt-8">
              <a
                href="https://cimsgroup.org/wp-content/uploads/2025/02/Brochure_CIMS_College.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#112555] hover:bg-[#ed8100] text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all"
              >
                Download Prospectus
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. NEWS & NOTICE (MATCHES ISHM "News & Notice")
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
          13. BOTTOM ADMISSION BANNER (MATCHES ISHM FOOTER CTA)
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
            Take the first step towards an exciting professional career in healthcare administration, hospitality, paramedical, or computing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/admission"
              className="btn-shimmer bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Apply Online 2026
            </Link>
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-black max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            <div className="relative pt-[56.25%] w-full bg-black">
              <video
                src={`/videos/${selectedVideo}`}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Placement Record Lightbox Modal */}
      {selectedPlacement && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPlacement(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in zoom-in-95 duration-200"
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                className="bg-[#112555] hover:bg-[#1a3880] text-white text-xs font-bold px-4 py-1.5 rounded transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Image Lightbox Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#ed8100] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#112555] text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-[#ed8100] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                  {selectedGalleryImage.category}
                </span>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-white">
                  {selectedGalleryImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X size={18} />
              </button>
            </div>
            <div className="bg-gray-900 p-2 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={selectedGalleryImage.image}
                alt={selectedGalleryImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded"
              />
            </div>
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">CIMS Campus Media Archive</span>
              <button
                onClick={() => setSelectedGalleryImage(null)}
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
