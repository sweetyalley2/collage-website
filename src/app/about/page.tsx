import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Award, 
  Target, 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  PhoneCall, 
  Download,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles,
  Quote,
  Clock,
  Compass,
  FileCheck2
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export const metadata = {
  title: "About Us | Cambridge Institute of Management Studies (CIMS Group)",
  description: "Learn about CIMS Group - 17 years of industry experience under Swami Vivekananda Foundation. Discover our leadership, mission, vision, curriculum and academic mentors.",
};

export default function AboutPage() {
  // Academic Mentors & Administration - Exact official designations
  const facultyMembers = [
    { name: "Rupak Dutta Mitra", designation: "Principal", department: "Academic Leadership & Administration" },
    { name: "Mr. Kushal Dutta Roy", designation: "Head of Department (Hospitality & Hotel Management)", department: "Hospitality & Hotel Administration" },
    { name: "Mrs. Arpita Das", designation: "Head of Department (Hospital Management)", department: "Hospital Management" },
    { name: "Mrs. Pampa Das", designation: "Head of Department (Computer Application)", department: "Computer Application (BCA)" },
    { name: "Mr. Rajesh Jana", designation: "Head of Department (Allied Health Science)", department: "Allied Health Sciences & Paramedical" },
    { name: "Mr. Sourav Roy", designation: "Training & Placement Officer", department: "Corporate Relations & Placement Cell" },
    { name: "Mrs. Satabdi Mukherjee", designation: "Administrator", department: "College Administration & Student Affairs" },
    { name: "Mrs. Aditi Ghanta", designation: "Accountant", department: "Accounts & Financial Administration" }
  ];

  // Top 10 Reasons to Join CIMS - Exact points from official brief
  const top10Reasons = [
    {
      num: "01",
      title: "Experienced Leadership",
      desc: "CIMS is led by a team of successful management professionals with over 15 years of industry experience, ensuring expert guidance and mentorship."
    },
    {
      num: "02",
      title: "Value-Based Career Development",
      desc: "We offer a holistic approach to career development, focusing on values that help students live fulfilling, successful, and meaningful lives."
    },
    {
      num: "03",
      title: "Advanced Digital Infrastructure",
      desc: "Our classrooms are equipped with cutting-edge audio-video facilities, enhancing the learning experience and keeping students engaged."
    },
    {
      num: "04",
      title: "Up-to-Date Curriculum",
      desc: "We continuously update our curriculum to align with current market demands and global trends. Each day begins with the National Anthem, followed by grooming sessions and topic discussions to foster personal and professional growth."
    },
    {
      num: "05",
      title: "Earn While You Learn",
      desc: "CIMS provides casual training opportunities where students can apply their skills in real-world settings and earn an income alongside their studies."
    },
    {
      num: "06",
      title: "100% Job Assistance",
      desc: "We guarantee job assistance in top sectors, including hospitals, 5-star hotels, resorts, cruise lines, ship catering, banks, MNCs abroad, and more."
    },
    {
      num: "07",
      title: "Multiple Placement Opportunities",
      desc: "Students benefit from multiple placement options and lifetime support with our \"Lifetime Guaranteed Placement Card,\" ensuring ongoing career assistance even after graduation."
    },
    {
      num: "08",
      title: "Practical Exposure",
      desc: "Gain hands-on experience through fieldwork, mini-projects, and industrial visits, bridging the gap between classroom learning and real-world application."
    },
    {
      num: "09",
      title: "Affordable Fees with Flexible Payment Options",
      desc: "Our courses are offered at reasonable rates, with easy installment plans to ensure education is accessible to all."
    },
    {
      num: "10",
      title: "Scholarship Opportunities",
      desc: "We provide three types of scholarships to support deserving students, making education more affordable for those in need."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. PAGE HEADER BANNER (ISHM NAVY BANNER WITH BREADCRUMBS)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#112555] text-white py-14 sm:py-16 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">About Us</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ABOUT CIMS GROUP
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            A Premier Seat of Higher Education under <strong>Swami Vivekananda Foundation</strong> • 17 Years of Industry Experience • Estd. 2011
          </p>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERITAGE & INSTITUTIONAL PROFILE
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
              17 YEARS OF INDUSTRY EXPERIENCE • ESTD. 2011
            </span>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] leading-tight uppercase">
              Transforming Lives Through University Education &amp; Practical Training
            </h2>
            <div className="section-title-bar" />

            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Cambridge Institute of Management Studies (CIMS Group)</strong> is a premier academic institution operating under the governance of <strong>Swami Vivekananda Foundation</strong> with <strong>17 years of industry experience</strong> in delivering professional healthcare, hospitality, IT, and allied sciences education.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Founded in 2011, CIMS was established to revolutionize professional education in Eastern India. Blending rigorous university academic curricula with live practical immersion, CIMS requires every student to undergo structured clinical rotations at <strong>City Hospital</strong> and full-time industrial internships across India&apos;s leading 5-star brand hotels and corporate IT centers.
            </p>

            {/* 4 Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3.5 bg-orange-50 border-t-3 border-[#ed8100] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-[#ed8100]">1700+</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Placements Done</div>
              </div>
              <div className="p-3.5 bg-blue-50 border-t-3 border-[#112555] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-[#112555]">17+ Yrs</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Industry Experience</div>
              </div>
              <div className="p-3.5 bg-red-50 border-t-3 border-[#bb2226] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-[#bb2226]">Easy</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Education Loan</div>
              </div>
              <div className="p-3.5 bg-yellow-50 border-t-3 border-[#ffc923] rounded-lg text-center">
                <div className="font-heading font-black text-2xl text-amber-600">SVF</div>
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-wider mt-0.5">Foundation Trust</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/#admission-form"
                className="inline-flex items-center gap-2 bg-[#ed8100] hover:bg-[#d97400] text-white px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Apply for Admission 2026</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: CIMS Campus Building Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#112555] bg-white group">
              <img
                src="/images/hero/cims-building.jpg"
                alt="CIMS Campus Building – Cambridge Institute of Management Studies"
                className="w-full h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112555]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg shadow border-l-4 border-[#ed8100] text-gray-800 text-xs pointer-events-none">
                <div className="font-bold text-[#112555] text-sm">CIMS Campus Building</div>
                <div className="text-[11px] text-gray-600">Purba Medinipur, West Bengal • Under Swami Vivekananda Foundation</div>
              </div>
            </div>
            
            {/* 17+ Years Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#ed8100] text-white p-3.5 rounded-xl shadow-xl hidden sm:block">
              <div className="font-heading font-black text-2xl leading-none">17+ Years</div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider mt-1">Industry Experience</div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. VISION & MISSION CARDS (ISHM MODERN CARDS)
        ───────────────────────────────────────────────────────────── */}
        <div id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#112555] text-white p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#ed8100] space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#ffc923] border border-white/20">
              <Target size={26} />
            </div>
            <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide">
              Our Vision
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              To be the benchmark academic institution in Eastern India for Healthcare Management, Hospitality, Paramedical and Computer Applications education—fostering globally competent, socially responsible, and ethically grounded leaders.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#ed8100] border-x border-b border-gray-200 space-y-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ed8100] border border-orange-200">
              <Award size={26} />
            </div>
            <h3 className="font-heading text-2xl font-black uppercase text-[#112555] tracking-wide">
              Our Mission
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              To deliver practical, high-impact professional education through modern diagnostic laboratories, simulated hospital administration suites, active hotel industrial trainings, and continuous mentorship by industry experts.
            </p>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. DIRECTOR'S DESK SECTION (REUSED FROM PREVIOUS CIMS SITE)
        ───────────────────────────────────────────────────────────── */}
        <div id="director-desk" className="bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-[#ed8100]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Director's Profile Column */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-[#112555] shadow-xl bg-[#112555] mx-auto">
                  <img
                    src="/images/hero/cims-building.jpg"
                    alt="Director – Cambridge Institute of Management Studies"
                    className="w-full h-full object-cover object-center filter brightness-95"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 bg-[#ffc923] text-[#112555] font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded shadow-md whitespace-nowrap">
                  Founder Director
                </div>
              </div>
              
              <div className="pt-2">
                <h4 className="font-heading font-black text-xl text-[#112555]">
                  Prasenjit Manna
                </h4>
                <p className="text-xs font-bold text-[#ed8100] uppercase tracking-wider mt-0.5">
                  Founder &amp; Director
                </p>
                <p className="text-[11px] text-gray-500">
                  Cambridge Institute of Management Studies (CIMS Group)
                </p>
                <p className="text-[10px] text-gray-400">
                  Swami Vivekananda Foundation
                </p>
              </div>
            </div>

            {/* Director's Message Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Quote size={28} className="text-[#ed8100] shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
                  Leadership &amp; Vision
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#112555] uppercase tracking-tight">
                From the Director&apos;s Desk
              </h3>
              <div className="w-16 h-1 bg-[#ed8100] rounded-full" />

              <div className="text-gray-700 text-xs sm:text-sm leading-relaxed space-y-3 pt-1">
                <p className="italic text-gray-800 font-medium border-l-3 border-[#ed8100] pl-3">
                  &ldquo;Choosing the right institution for your higher education is one of the most important decisions you will ever make. At Cambridge Institute of Management Studies (CIMS), we understand this, and we are equally selective in choosing our students. Just as you are looking for a place that will shape your future, we are looking for bright, motivated individuals ready to embrace the journey of learning and transformation.&rdquo;
                </p>
                <p>
                  This prospectus is designed to guide you in making an informed decision. It provides detailed information about our academic programs, as well as a glimpse into the vibrant and supportive campus life we offer. At CIMS, we aim to nurture not just professionals, but well-rounded individuals equipped to thrive in a dynamic and ever-evolving global environment.
                </p>
                <p>
                  We are committed to providing an academically rigorous, professionally enriching, and personally fulfilling education. Our programs challenge students to think critically, act ethically, and lead innovatively. We believe in transforming today&apos;s youth into skilled, confident professionals ready to meet the demands of the modern world through intensive training, expert guidance, structured discipline, and a holistic approach to education.
                </p>
                <p>
                  As a proud part of the growing CIMS family, I assure you that your journey with us will be one of growth, discovery, and opportunity. CIMS stands among the finest training institutions in West Bengal, and we are dedicated to helping you realize your full potential. I welcome you to explore what makes CIMS a truly special place to learn, grow, and succeed.
                </p>
                <p className="font-bold text-[#ed8100] pt-1">
                  Your bright future starts here.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. CURRICULUM & ACADEMIC METHODOLOGY SECTION
        ───────────────────────────────────────────────────────────── */}
        <div id="curriculum" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
              Academic Methodology
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-2">
              CURRICULUM &amp; PEDAGOGY
            </h2>
            <div className="section-title-bar-center" />
            <p className="text-gray-600 text-xs sm:text-sm">
              An outcome-based academic framework combining university syllabi with real-world industry immersion and personality development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ed8100] flex items-center justify-center">
                <BookOpen size={22} />
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#112555]">
                Up-to-Date Curriculum
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regularly refreshed course structures aligned with current industry standards, emerging healthcare protocols, and digital technologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#112555] flex items-center justify-center">
                <Compass size={22} />
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#112555]">
                Daily Morning Grooming
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every academic day commences with the National Anthem, followed by professional grooming sessions, debate topics, and soft-skills drills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Building2 size={22} />
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#112555]">
                Practical Exposure
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mandatory rotations at City Hospital, commercial culinary kitchen training, diagnostic lab practices, and high-speed computer programming.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 text-amber-600 flex items-center justify-center">
                <FileCheck2 size={22} />
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#112555]">
                Continuous Evaluation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Semester-wise credit assessments, viva examinations, industrial project presentations, and personalized mentoring by department heads.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            6. TOP 10 REASONS TO JOIN CIMS (COMPLETE REDESIGN MATCHING REFERENCE)
            - Dark blue background (#112555)
            - Yellow heading box (#ffc923)
            - Yellow point headings (#ffc923)
            - White descriptions
            - Clean 1-10 numbered layout
        ───────────────────────────────────────────────────────────── */}
        <div id="why-cims" className="bg-[#112555] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border-2 border-[#ed8100]/30 text-white">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#ffc923]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#ed8100]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading Box */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 relative z-10">
            <div className="inline-block bg-[#ffc923] text-[#112555] font-black uppercase text-xs sm:text-sm px-5 py-2 rounded-md shadow-lg tracking-wider mb-3">
              TOP 10 REASONS TO JOIN CIMS
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Why Choose CIMS Group?
            </h2>
            <div className="w-20 h-1 bg-[#ffc923] mx-auto mt-3 rounded-full" />
            <p className="text-gray-200 text-xs sm:text-sm mt-3 leading-relaxed">
              Discover what makes Cambridge Institute of Management Studies the preferred higher education institute for ambitious students across West Bengal and Eastern India.
            </p>
          </div>

          {/* 10 Points Numbered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            {top10Reasons.map((reason) => (
              <div 
                key={reason.num}
                className="bg-[#0b1b42]/80 hover:bg-[#0b1b42] p-5 sm:p-6 rounded-2xl border border-blue-400/20 hover:border-[#ffc923]/70 transition-all duration-300 shadow-md group hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  {/* Number Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#ffc923] text-[#112555] font-heading font-black text-base flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    {reason.num}
                  </div>
                  
                  {/* Point Content */}
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#ffc923] leading-snug group-hover:text-yellow-300 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-gray-100 text-xs sm:text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            7. ACADEMIC MENTORS & ADMINISTRATION
        ───────────────────────────────────────────────────────────── */}
        <div id="faculty" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
              Institutional Leadership
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-2">
              ACADEMIC MENTORS &amp; ADMINISTRATION
            </h2>
            <div className="section-title-bar-center" />
            <p className="text-gray-600 text-xs sm:text-sm">
              Distinguished academicians, hospital administrators, department heads, and training specialists steering CIMS Group.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((fac, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-[#112555] group-hover:bg-[#ed8100] text-white font-heading font-black text-lg flex items-center justify-center transition-colors">
                  {fac.name.replace(/^(Mr\.|Mrs\.)\s*/, '')[0]}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#112555] group-hover:text-[#ed8100] transition-colors leading-snug">
                    {fac.name}
                  </h4>
                  <p className="text-xs font-bold text-[#ed8100] uppercase tracking-wider mt-1">
                    {fac.designation}
                  </p>
                </div>
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                  {fac.department}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            8. ADMISSION CTA BANNER (ISHM FOOTER CTA STYLE)
        ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#112555] to-[#1c3786] text-white p-8 sm:p-12 rounded-2xl text-center space-y-4 border-t-4 border-[#ed8100] shadow-2xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#ffc923] bg-white/10 px-3 py-1 rounded">
            Admissions Session 2026-27
          </span>
          <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase text-white">
            Begin Your Career Journey at CIMS Group
          </h3>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-gray-200 leading-relaxed">
            Admissions officially open for July 2026 batch. Merit scholarships and education loan approval assistance available under Swami Vivekananda Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-3">
            <Link
              href="/#admission-form"
              className="bg-[#ed8100] hover:bg-[#d97400] text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Apply Online 2026
            </Link>
            <a
              href="/documents/cims-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CIMS-Brochure.pdf"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow"
            >
              <Download size={14} className="text-[#ffc923]" />
              <span>Download Brochure</span>
            </a>
            <a
              href={`tel:${CIMS_INFO.phone}`}
              className="bg-white hover:bg-gray-100 text-[#112555] px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow"
            >
              <PhoneCall size={14} className="text-[#ed8100]" />
              <span>Call Helpline: {CIMS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
