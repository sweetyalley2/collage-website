export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'Hospital Management' | 'Hospitality' | 'Allied Health' | 'Computer Applications';
  degree: string;
  duration: string;
  eligibility: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  careerProspects: string[];
  affiliatedTo: string;
}

export interface NewsNotice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Notice' | 'Event' | 'Career';
  summary: string;
  content: string;
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Medical Labs' | 'Hospitality' | 'Hospital Training' | 'Events';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  course: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface Recruiter {
  name: string;
  logo: string;
  sector: string;
}

export interface PlacementRecord {
  id: string;
  studentName: string;
  location: string;
  company: string;
  image: string;
  year: '2024' | '2025';
  sector: 'Healthcare' | 'Hospitality' | 'IT / Corporate';
}

export interface IndustrySupportBrand {
  name: string;
  logo: string;
  category: 'Hospital' | 'Hospitality' | 'IT / Corporate';
}

export const CIMS_INFO = {
  name: "Cambridge Institute of Management Studies",
  shortName: "CIMS Group",
  tagline: "Leading Management & Paramedical College in West Bengal",
  parentOrg: "A Unit of Swami Vivekananda Foundation",
  affiliation: "Affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT) under CCPTR",
  established: 2011,
  experienceYears: "15+",
  phone: "+91 8158881234",
  altPhone: "+91 9007070004",
  email: "cambridge567@gmail.com",
  adminEmail: "admin@cimsgroup.org",
  address: "Purba Medinipur Campus, West Bengal, India",
  kolkataOffice: "Kolkata Admissions & Counseling Hub, West Bengal",
  stats: {
    placementsDone: "1,700+",
    internshipsDone: "2,700+",
    yearsExcellence: "15+",
    loanScholarship: "100%",
    recruitersCount: "120+",
    studentSatisfaction: "98%",
  },
  socials: {
    facebook: "https://facebook.com/cimsgroup",
    twitter: "https://twitter.com/cimsgroup",
    linkedin: "https://linkedin.com/company/cimsgroup",
    instagram: "https://instagram.com/cimsgroup",
    youtube: "https://youtube.com/cimsgroup",
  },
};

export const INITIAL_COURSES: Course[] = [
  {
    id: "c-1",
    slug: "hospital-management",
    title: "BBA in Hospital Management",
    category: "Hospital Management",
    degree: "Undergraduate Degree (BBA-HM)",
    duration: "3 Years / 4 Years Honours",
    eligibility: "10+2 passed in any stream from recognized Board",
    image: "/images/experience-life/CIMS_Campus_Gallery_Photos/campus-students-group.jpg",
    shortDesc: "Comprehensive program preparing leaders for the burgeoning healthcare and hospital administrative sectors.",
    fullDesc: "CIMS College is recognized as one of the premier Hospital Management institutes in West Bengal. The BBA in Hospital Management equips students with strategic operational skills, patient care administration, healthcare finance, hospital information systems (HIS) and NABH accreditation protocols.",
    highlights: [
      "Rigorous hospital clinical rotations & administrative internships",
      "NABH & NABL regulatory compliance training",
      "Practical exposure at City Hospital & leading multispecialty chains",
      "100% placement assistance in leading hospitals across India"
    ],
    careerProspects: [
      "Hospital Operations Executive",
      "Quality Assurance & NABH Coordinator",
      "Healthcare Marketing Manager",
      "Patient Relationship & Floor Manager",
      "Medical Tourism Executive"
    ],
    affiliatedTo: "MAKAUT (CCPTR)"
  },
  {
    id: "c-2",
    slug: "hospitality-hotel-management",
    title: "B.Sc in Hospitality & Hotel Administration",
    category: "Hospitality",
    degree: "Undergraduate Degree (B.Sc HHA)",
    duration: "3 Years",
    eligibility: "10+2 in any stream from recognized Board",
    image: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg",
    shortDesc: "World-class hospitality training encompassing culinary arts, front office operations, food & beverage, and hotel management.",
    fullDesc: "Step into the vibrant global hospitality industry with CIMS. Acclaimed as the leading Hospitality and Hotel Management college in West Bengal, CIMS combines rigorous practical kitchen labs, simulated front desk suites, mock bar setups, and mandatory 6-month industrial internships in 5-star luxury hotels.",
    highlights: [
      "Industrial training in luxury 5-star brand hotels (Taj, Marriott, Hyatt)",
      "Hands-on Food Production, Bakery & International Culinary Labs",
      "Wine tasting, banquet management & mixology workshops",
      "Direct international internship & career opportunities"
    ],
    careerProspects: [
      "Hotel General Manager Track",
      "Executive Chef & Food Production Manager",
      "Front Office Manager",
      "Aviation & Cabin Crew / Cruise Line Executive",
      "Event & Banquet Operations Director"
    ],
    affiliatedTo: "Recognized by MAKAUT & Tourism Councils"
  },
  {
    id: "c-3",
    slug: "allied-health-science",
    title: "Allied Health Sciences & Paramedical (BMLT / BMRIT / BOTT)",
    category: "Allied Health",
    degree: "B.Sc & Diploma Programs",
    duration: "3 - 4 Years (incl. Internship)",
    eligibility: "10+2 with Physics, Chemistry, Biology (PCB)",
    image: "/images/experience-life/CIMS_Campus_Gallery_Photos/cims-campus-group-photo.jpg",
    shortDesc: "High-demand clinical paramedical programs delivering hands-on pathology, radiology imaging, and operation theatre expertise.",
    fullDesc: "Allied Health professionals are the backbone of modern healthcare delivery. CIMS Paramedical College in West Bengal provides advanced clinical exposure in BMLT (Medical Lab Technology), BMRIT (Medical Radiology & Imaging), and BOTT (Operation Theatre Technology) backed by modern diagnostic laboratories and daily clinical rotations.",
    highlights: [
      "Real clinical rotations in active hospital pathology & diagnostic wings",
      "Advanced automated biochemistry, microbiology & hematology analyzers",
      "Comprehensive training in digital X-ray, CT Scan & MRI protocols",
      "High placement rate in diagnostic centres, government & private hospitals"
    ],
    careerProspects: [
      "Medical Laboratory Technologist",
      "Radiologic Technologist / MRI Technician",
      "Operation Theatre Surgical Assistant",
      "Critical Care & Emergency Technician",
      "Diagnostic Wing Supervisor"
    ],
    affiliatedTo: "State Paramedical Faculty & MAKAUT Framework"
  },
  {
    id: "c-4",
    slug: "bca",
    title: "BCA - Bachelor of Computer Applications",
    category: "Computer Applications",
    degree: "Undergraduate Degree (BCA)",
    duration: "3 Years / 4 Years Honours",
    eligibility: "10+2 with Mathematics / Computer Science / Statistics / Information Practices",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Cutting-edge computing education in software engineering, cloud computing, web development, and modern AI algorithms.",
    fullDesc: "The BCA program at CIMS College empowers aspiring tech leaders with robust programming foundations, modern cloud computing architectures, full-stack web and mobile development, and data analytics. Equipped with high-tech computer labs and industry live-project mentorship.",
    highlights: [
      "Modern high-speed computing lab with latest dev stacks",
      "Hands-on projects in Python, Java, React, Next.js, and Cloud",
      "Campus placement drives with leading IT and consulting firms",
      "Tech hackathons, code sprints, and certifications"
    ],
    careerProspects: [
      "Full-Stack Software Developer",
      "Cloud & DevOps Engineer",
      "Database Administrator",
      "Systems Analyst",
      "Mobile App Developer"
    ],
    affiliatedTo: "MAKAUT (CCPTR)"
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "g-1",
    title: "Hospital Management Practical Simulation Lab",
    category: "Hospital Training",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop",
    description: "Students simulating hospital desk, patient admission, and health informatics operations."
  },
  {
    id: "g-2",
    title: "Culinary & Food Production Training Kitchen",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop",
    description: "Hands-on commercial culinary training supervised by master hospitality chefs."
  },
  {
    id: "g-3",
    title: "Advanced Paramedical Diagnostic Laboratory",
    category: "Medical Labs",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=900&auto=format&fit=crop",
    description: "Clinical pathology, biochemistry, and microscopy practical sessions."
  },
  {
    id: "g-4",
    title: "Modern Air-Conditioned Computer Application Lab",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
    description: "High-spec workstations with cloud development, programming, and web engineering tools."
  },
  {
    id: "g-5",
    title: "Clinical Exposure & Hospital Rounds",
    category: "Hospital Training",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=900&auto=format&fit=crop",
    description: "Rotational learning and patient records coordination in partner multispecialty hospitals."
  },
  {
    id: "g-6",
    title: "Annual Cultural Fest & Freshers Welcome",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop",
    description: "Vibrant student life, cultural performances, and felicitation ceremonies at CIMS."
  },
  // New campus life photographs
  {
    id: "g-7",
    title: "Campus Students Group Activity",
    category: "Campus",
    image: "/images/gallery/campus-life/campus-students-group.jpg",
    description: "Students gathered for campus activities and community events."
  },
  {
    id: "g-8",
    title: "CIMS Building and Infrastructure",
    category: "Campus",
    image: "/images/gallery/campus-life/cims-building-students.jpg",
    description: "Modern campus facilities and building architecture."
  },
  {
    id: "g-9",
    title: "CIMS Campus Group Photo",
    category: "Campus",
    image: "/images/gallery/campus-life/cims-campus-group-photo.jpg",
    description: "Group photo of students and faculty on campus."
  },
  {
    id: "g-10",
    title: "Institute Profile Photo",
    category: "Campus",
    image: "/images/gallery/campus-life/institute-profile-photo.jpg",
    description: "Official institute profile showcasing leadership."
  },
  {
    id: "g-11",
    title: "Culinary and Hospitality Practical Activities",
    category: "Hospitality",
    image: "/images/gallery/campus-life/culinary-hospitality-students.jpg",
    description: "Students engaged in culinary and hospitality training."
  }
];

// ------------------------------------------------------------
// Partners – Authentic Units from https://cimsgroup.org/partners/
// ------------------------------------------------------------
export const CIMS_PARTNERS: Partner[] = [
  {
    id: "partner-city-hospital",
    name: "CITY Hospital",
    category: "Hospital",
    image: "/images/partners/partner-city-hospital.jpg",
    description: "Premier multi-specialty clinical training hospital providing extensive clinical hospital rotations, patient administration experience, and OT exposure for CIMS students."
  },
  {
    id: "partner-coconut-beach",
    name: "Coconut Beach Resorts",
    category: "Resort & Hotel",
    image: "/images/partners/partner-coconut-beach-resorts.jpg",
    description: "Luxury hospitality resort destination offering practical internships in food production, front office management, guest relations, and tourism operations."
  },
  {
    id: "partner-cims-skill",
    name: "CIMS Skill",
    category: "Skill & Healthcare",
    image: "/images/partners/partner-cims-skill.jpg",
    description: "Specialized vocational skill enhancement wing providing hands-on competency certifications, soft skills, and career readiness training."
  },
  {
    id: "partner-dillons",
    name: "Dillons 24×7 HD",
    category: "Skill & Healthcare",
    image: "/images/partners/partner-dillons-24x7-hd.jpeg",
    description: "Advanced 24x7 automated diagnostic healthcare facility and pathology laboratory training partner for paramedical and allied health students."
  },
  {
    id: "partner-nakshatra",
    name: "Nakshatra",
    category: "Resort & Hotel",
    image: "/images/partners/partner-nakshatra.jpg",
    description: "Prominent banquet, catering, and event hospitality training wing offering live exposure to large-scale culinary arts and event management."
  }
];

// ------------------------------------------------------------
// Corporate & Hotel Recruiters – from https://cimsgroup.org/training-placements/
// ------------------------------------------------------------
export const TOP_RECRUITERS: Recruiter[] = [
  {
    name: "IBM",
    logo: "/images/placement/recruiter-ibm.png",
    sector: "IT / Corporate"
  },
  {
    name: "TCS (Tata Consultancy Services)",
    logo: "/images/placement/recruiter-tcs.jpg",
    sector: "IT / Corporate"
  },
  {
    name: "Wipro Technologies",
    logo: "/images/placement/recruiter-wipro.png",
    sector: "IT / Corporate"
  },
  {
    name: "Infosys",
    logo: "/images/placement/recruiter-infosys.jpg",
    sector: "IT / Corporate"
  },
  {
    name: "Cognizant",
    logo: "/images/placement/recruiter-cognizant.png",
    sector: "IT / Corporate"
  },
  {
    name: "Taj Hotels Resorts and Palaces",
    logo: "/images/placement/recruiter-hotel-taj.jpg",
    sector: "Hospitality"
  },
  {
    name: "ITC Hotels (Responsible Luxury)",
    logo: "/images/placement/recruiter-hotel-itc.jpg",
    sector: "Hospitality"
  },
  {
    name: "Hyatt Hotels & Resorts",
    logo: "/images/placement/recruiter-hotel-hyatt.jpg",
    sector: "Hospitality"
  },
  {
    name: "JW Marriott",
    logo: "/images/placement/recruiter-hotel-marriott.jpg",
    sector: "Hospitality"
  },
  {
    name: "Accor Hotels",
    logo: "/images/placement/recruiter-hotel-accor.jpg",
    sector: "Hospitality"
  },
  {
    name: "The Lalit Hotels",
    logo: "/images/placement/recruiter-hotel-lalit.jpg",
    sector: "Hospitality"
  },
  {
    name: "Westin Hotels & Resorts",
    logo: "/images/placement/recruiter-hotel-westin.jpg",
    sector: "Hospitality"
  }
];

// ------------------------------------------------------------
// Verified Industry Support Brands – from CIMS Homepage
// ------------------------------------------------------------
export const INDUSTRY_SUPPORT_BRANDS: IndustrySupportBrand[] = [
  {
    name: "Marriott",
    logo: "/images/partners/industry-support-marriott.jpg",
    category: "Hospitality"
  },
  {
    name: "Ramada",
    logo: "/images/partners/industry-support-ramada.jpg",
    category: "Hospitality"
  },
  {
    name: "Hyatt",
    logo: "/images/partners/industry-support-hyatt.jpg",
    category: "Hospitality"
  },
  {
    name: "KIMS Hospitals",
    logo: "/images/partners/industry-support-kims.jpg",
    category: "Hospital"
  },
  {
    name: "Taj Hotels",
    logo: "/images/partners/industry-support-taj.jpg",
    category: "Hospitality"
  },
  {
    name: "Medica Hospitals",
    logo: "/images/partners/industry-support-medica.jpg",
    category: "Hospital"
  },
  {
    name: "AMRI Hospitals",
    logo: "/images/partners/industry-support-amri.jpg",
    category: "Hospital"
  },
  {
    name: "Apollo Hospitals",
    logo: "/images/partners/industry-support-apollo.jpg",
    category: "Hospital"
  },
  {
    name: "Infosys",
    logo: "/images/placement/recruiter-infosys.jpg",
    category: "IT / Corporate"
  },
  {
    name: "Wipro",
    logo: "/images/placement/recruiter-wipro.png",
    category: "IT / Corporate"
  },
  {
    name: "TCS",
    logo: "/images/placement/recruiter-tcs.jpg",
    category: "IT / Corporate"
  },
  {
    name: "IBM",
    logo: "/images/placement/recruiter-ibm.png",
    category: "IT / Corporate"
  }
];

// ------------------------------------------------------------
// Original CIMS Placement Records ("OUR PLACED STUDENT 2024" + 2025)
// ------------------------------------------------------------
export const CIMS_PLACED_STUDENTS_2024: PlacementRecord[] = [
  {
    id: "placed-2024-01",
    studentName: "Ujjwal Pal",
    location: "Tamluk",
    company: "Lord Budhha Khosi Medical College, Saharsa, Bihar",
    image: "/images/placement/placed-student-2024-01.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-02",
    studentName: "Taniya Dhara",
    location: "Kolaghat",
    company: "Lord Budhha Khosi Medical College, Saharsa, Bihar",
    image: "/images/placement/placed-student-2024-02.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-03",
    studentName: "Subhasis Bhakta",
    location: "Pingla",
    company: "Lord Budhha Khosi Medical College, Saharsa, Bihar",
    image: "/images/placement/placed-student-2024-03.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-04",
    studentName: "SK Sabiruddin",
    location: "Bhatora, Joypur",
    company: "Lord Budhha Khosi Medical College, Saharsa, Bihar",
    image: "/images/placement/placed-student-2024-04.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-05",
    studentName: "Rakib Rahaman Dewan",
    location: "Bhatora, Joypur",
    company: "Lord Budhha Khosi Medical College, Saharsa, Bihar",
    image: "/images/placement/placed-student-2024-05.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-06",
    studentName: "Sima Panda",
    location: "Egra",
    company: "KIMS Hospital, Secunderabad",
    image: "/images/placement/placed-student-2024-06.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-07",
    studentName: "Sebabrata Maity",
    location: "Nandakumar",
    company: "Eskag Sanjeevani Hospital, Kolkata",
    image: "/images/placement/placed-student-2024-07.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-08",
    studentName: "Kalyani Pal",
    location: "Tamluk",
    company: "ILS Howrah",
    image: "/images/placement/placed-student-2024-08.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-09",
    studentName: "Madhumita Paul",
    location: "Tamluk",
    company: "KIMS Hospital, Secunderabad",
    image: "/images/placement/placed-student-2024-09.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-10",
    studentName: "Subhadip Bera",
    location: "Chandrakona",
    company: "KIMS Hospital, Secunderabad",
    image: "/images/placement/placed-student-2024-10.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-11",
    studentName: "Subir Mal",
    location: "Chandrakona",
    company: "Sun Hospital, Uluberia",
    image: "/images/placement/placed-student-2024-11.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-12",
    studentName: "Pranit Jana",
    location: "Kolaghat",
    company: "Sun Hospital, Uluberia",
    image: "/images/placement/placed-student-2024-12.png",
    year: "2024",
    sector: "Healthcare"
  },
  {
    id: "placed-2024-13",
    studentName: "Puja Dasgupta",
    location: "Bankura",
    company: "Ruby General Hospital, Kolkata",
    image: "/images/placement/placed-student-2024-13.png",
    year: "2024",
    sector: "Healthcare"
  }
];

export const CIMS_PLACED_STUDENTS_2025: PlacementRecord[] = [
  {
    id: "placed-2025-01",
    studentName: "Nalini Mahata",
    location: "Salboni",
    company: "Pride Plaza, Ahmedabad",
    image: "/images/placement/placed-student-2025-01.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-02",
    studentName: "Sourav Debsingha",
    location: "Salboni",
    company: "Pride Plaza, Ahmedabad",
    image: "/images/placement/placed-student-2025-02.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-03",
    studentName: "Rahul Debsingha",
    location: "Salboni",
    company: "Club Mahindra Assonora, Goa",
    image: "/images/placement/placed-student-2025-03.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-04",
    studentName: "Priyabrata Bera",
    location: "Medinipur",
    company: "The Pride Hotel, Bangalore",
    image: "/images/placement/placed-student-2025-04.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-05",
    studentName: "Suman Bera",
    location: "Jhargram",
    company: "The Pride Hotel, Chennai",
    image: "/images/placement/placed-student-2025-05.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-06",
    studentName: "Bishal Roy",
    location: "Kharagpur",
    company: "Sayaji Hotels, Indore",
    image: "/images/placement/placed-student-2025-06.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-07",
    studentName: "Subhojit Sen",
    location: "Haldia",
    company: "Sayaji Hotels, Pune",
    image: "/images/placement/placed-student-2025-07.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-08",
    studentName: "Sayan Mandal",
    location: "Contai",
    company: "The Leela Palace, Chennai",
    image: "/images/placement/placed-student-2025-08.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-09",
    studentName: "Anirban Ghosh",
    location: "Tamluk",
    company: "Radisson Blu, Mumbai",
    image: "/images/placement/placed-student-2025-09.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-10",
    studentName: "Debjit Das",
    location: "Mecheda",
    company: "JW Marriott, Kolkata",
    image: "/images/placement/placed-student-2025-10.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-11",
    studentName: "Rakesh Maity",
    location: "Ghatal",
    company: "The Fern Hotels & Resorts, Jaipur",
    image: "/images/placement/placed-student-2025-11.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-12",
    studentName: "Subrata Jana",
    location: "Panskura",
    company: "Fortune Park Hotels, Ahmedabad",
    image: "/images/placement/placed-student-2025-12.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-13",
    studentName: "Avik Roy",
    location: "Kolkata",
    company: "Novotel Hotels & Resorts, Goa",
    image: "/images/placement/placed-student-2025-13.jpg",
    year: "2025",
    sector: "Hospitality"
  },
  {
    id: "placed-2025-14",
    studentName: "Souvik Samanta",
    location: "Bagnan",
    company: "Holiday Inn Express, Hyderabad",
    image: "/images/placement/placed-student-2025-14.jpg",
    year: "2025",
    sector: "Hospitality"
  }
];

export const ALL_PLACEMENT_RECORDS: PlacementRecord[] = [
  ...CIMS_PLACED_STUDENTS_2024,
  ...CIMS_PLACED_STUDENTS_2025
];

// ------------------------------------------------------------
// Testimonials – previously exported as INITIAL_TESTIMONIALS
// ------------------------------------------------------------
export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Riya Sharma",
    role: "Alumni – BBA Hospital Management",
    company: "Apollo Hospitals",
    avatar: "/images/testimonials/riya.jpg",
    quote:
      "The hands‑on clinical exposure and industry‑led projects prepared me to lead a hospital operations team right after graduation.",
    course: "BBA Hospital Management"
  },
  {
    id: "t-2",
    name: "Amit Patel",
    role: "Alumni – B.Sc Hospitality",
    company: "Marriott Hotels",
    avatar: "/images/testimonials/amit.jpg",
    quote:
      "CIMS gave me real‑world kitchen labs and a 6‑month internship that landed me a management role at a 5‑star hotel.",
    course: "B.Sc Hospitality"
  }
];

export const INITIAL_NEWS: NewsNotice[] = [
  {
    id: "n-1",
    title: "Admission Open 2026 in Kolkata Colleges: Your Guide to Hotel Management & Computer Applications",
    date: "April 2026",
    category: "Admission",
    isImportant: true,
    summary: "Official admission notice for 2026-27 academic session: Applications open for BBA in Hospital Management, B.Sc in Hospitality & Hotel Administration, Paramedical (BMLT/BMRIT/BOTT), and BCA under MAKAUT (CCPTR).",
    content: "Admission Open 2026 in Kolkata Colleges: The Path to a Global Career. As we step into the 2026 academic year, Cambridge Institute of Management Studies (CIMS Group), under Swami Vivekananda Foundation and affiliated with MAKAUT (CCPTR), invites applications for its premier undergraduate and diploma programs. Early applicants receive dedicated counseling, merit scholarship opportunities, and education loan approval support."
  },
  {
    id: "n-2",
    title: "Sky-High Careers: B.Sc Hotel Management Kolkata Admissions 2026 & Aviation Guide",
    date: "March 2026",
    category: "Career",
    isImportant: true,
    summary: "The future of service industries in 2026: Career roadmaps in luxury hotel chains, international hospitality management, and airline catering/aviation operations.",
    content: "Introduction: The Future of Service Industries in 2026. The landscape of higher education and employment is evolving rapidly with high demand for groomed professionals. CIMS provides 6 months mandatory industrial exposure in 5-star properties like Taj, ITC, Marriott, Hyatt, and Westin, delivering a direct pathway to global careers."
  },
  {
    id: "n-3",
    title: "MAKAUT (CCPTR) Affiliated Admission Notice 2026-27: Direct Counseling & Document Verification",
    date: "March 2026",
    category: "Admission",
    isImportant: false,
    summary: "Document verification and direct seat allotment for BBA Hospital Management, BMLT, BMRIT, and BCA programs are now active at the campus desk.",
    content: "Candidates seeking admission under MAKAUT CCPTR approved curriculums for the 2026-27 session can visit the CIMS campus or Kolkata counseling office with their 10th and 10+2 mark sheets for spot document verification and seat confirmation."
  },
  {
    id: "n-4",
    title: "Annual Hospital & 5-Star Hotel Internship Placement Drive Concludes with 100% Placement Record",
    date: "February 2026",
    category: "Event",
    isImportant: false,
    summary: "Over 95% of final year students secured immediate industrial training and executive placements in premier multispecialty hospitals and luxury hotel brands.",
    content: "CIMS Training & Placement Cell proudly announces successful conclusion of the campus placement cycle. Top recruiting partners include Apollo Hospitals, Medica Superspecialty, Fortis, KIMS, The Taj Group, JW Marriott, Hyatt, and Wipro."
  },
  {
    id: "n-5",
    title: "Notice Regarding Swami Vivekananda Merit-cum-Means & Institutional Scholarship Verification",
    date: "January 2026",
    category: "Notice",
    isImportant: false,
    summary: "Eligible students are notified to submit their scholarship renewal and verification documents at the college academic office.",
    content: "All enrolled students eligible for state-level merit scholarships and Swami Vivekananda Foundation financial trust grants are requested to submit requisite verification documents before the announced deadline."
  }
];