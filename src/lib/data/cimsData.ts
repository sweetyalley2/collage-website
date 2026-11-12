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
  category: 'Hospital' | 'Resort & Hotel' | 'Skill & Healthcare';
  image: string;
  description: string;
}

export interface Recruiter {
  name: string;
  logo: string;
  sector: 'Healthcare' | 'Hospitality' | 'IT / Corporate';
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
  }
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
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Comprehensive program preparing leaders for the burgeoning healthcare and hospital administrative sectors.",
    fullDesc: "CIMS College is recognized as one of the premier Hospital Management institutes in West Bengal. The BBA in Hospital Management equips students with strategic operational skills, patient care administration, healthcare finance, hospital information systems (HIS), and NABH accreditation protocols.",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop",
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

export const INITIAL_NEWS: NewsNotice[] = [
  {
    id: "n-1",
    title: "Admissions Open for 2026-27 Academic Session: Hospital Management & Hospitality",
    date: "March 15, 2026",
    category: "Admission",
    isImportant: true,
    summary: "Applications are officially invited for BBA Hospital Management, B.Sc Hospitality, Paramedical and BCA programs for July 2026 batch.",
    content: "Cambridge Institute of Management Studies (CIMS Group) invites applications for admission into its flagship undergraduate and diploma courses for the 2026-27 academic session. Early applicants are eligible for special institutional merit scholarships and education loan assistance."
  },
  {
    id: "n-2",
    title: "Sky-High Careers: Hospital Management & Healthcare Industry Outlook 2026",
    date: "February 28, 2026",
    category: "Career",
    isImportant: false,
    summary: "Healthcare administration continues to be one of India's fastest-growing employment sectors with rising demand for NABH certified executives.",
    content: "With the dramatic expansion of super-specialty hospitals, health tech ecosystems, and medical tourism hubs in Eastern India, graduates in Hospital Management enjoy unprecedented career growth."
  },
  {
    id: "n-3",
    title: "Annual Hospital & 5-Star Hotel Internship Placement Drive Concludes",
    date: "February 10, 2026",
    category: "Event",
    isImportant: true,
    summary: "Over 95% of the final year batch secured paid industrial training and internship placements in premier luxury hotels and hospital chains.",
    content: "CIMS Training & Placement Cell proudly announces successful completion of the winter placement cycle. Students secured placements in Apollo Hospitals, Fortis, Marriott, and The Taj Group."
  },
  {
    id: "n-4",
    title: "Notice Regarding Swami Vivekananda Merit-cum-Means Scholarship Verification",
    date: "January 20, 2026",
    category: "Notice",
    isImportant: false,
    summary: "Eligible students are requested to submit their scholarship renewal documents at the college registrar desk before the deadline.",
    content: "All enrolled students eligible for state and institutional scholarships under Swami Vivekananda Foundation are notified to verify their documentation at the campus academic office."
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
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Subhajit Roy",
    role: "Operations Executive",
    company: "Apollo Hospitals",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote: "The practical hospital exposure at CIMS was instrumental in kickstarting my career. Handling real patient documentation and NABH guidelines during college made me immediately productive on the job.",
    course: "BBA in Hospital Management (Batch 2023)"
  },
  {
    id: "t-2",
    name: "Priyanka Mondal",
    role: "Front Office Associate",
    company: "JW Marriott",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    quote: "CIMS provides unmatched grooming, communication enhancement, and world-class hospitality training. Getting placed at a global 5-star brand was my dream come true.",
    course: "B.Sc in Hospitality & Hotel Administration"
  },
  {
    id: "t-3",
    name: "Dr. Anirban Sengupta",
    role: "Medical Superintendent & Industry Mentor",
    company: "City Hospital",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    quote: "CIMS students consistently demonstrate remarkable discipline, professional ethics, and sound clinical management knowledge during their rotational training at our hospital.",
    course: "Industry Advisor"
  }
];

export const CIMS_PARTNERS: Partner[] = [
  {
    id: "p-1",
    name: "CITY Hospital",
    category: "Hospital",
    image: "https://cimsgroup.org/wp-content/uploads/2025/02/City-Hospital.jpg",
    description: "Premier healthcare facility providing round-the-clock clinical training and live patient administration exposure for CIMS students."
  },
  {
    id: "p-2",
    name: "Coconut Beach Resorts",
    category: "Resort & Hotel",
    image: "https://cimsgroup.org/wp-content/uploads/2025/02/Coconut-Beach-Resorts.jpg",
    description: "Luxury coastal hospitality resort partner offering hands-on guest service, food & beverage, and resort operations training."
  },
  {
    id: "p-3",
    name: "CIMS Skill",
    category: "Skill & Healthcare",
    image: "https://cimsgroup.org/wp-content/uploads/2025/02/CIMS-Skill.jpg",
    description: "Vocational enhancement division delivering specialized skill certifications and industry-aligned technical workshops."
  },
  {
    id: "p-4",
    name: "Dillons 24×7 HD",
    category: "Hospital",
    image: "https://cimsgroup.org/wp-content/uploads/2025/02/Dillons-24%C3%977-HD.jpeg",
    description: "Critical care and 24/7 health diagnostics partner providing emergency response and intensive healthcare administration training."
  },
  {
    id: "p-5",
    name: "Nakshatra",
    category: "Resort & Hotel",
    image: "https://cimsgroup.org/wp-content/uploads/2025/02/Nakshatra.jpg",
    description: "Hospitality partner providing event, banquet management, and premier accommodations training for hotel management students."
  }
];

export const TOP_RECRUITERS: Recruiter[] = [
  { name: "Apollo Hospitals", sector: "Healthcare", logo: "🏥" },
  { name: "Fortis Healthcare", sector: "Healthcare", logo: "⚕️" },
  { name: "AMRI Hospitals", sector: "Healthcare", logo: "🏥" },
  { name: "The Taj Group", sector: "Hospitality", logo: "🏨" },
  { name: "JW Marriott", sector: "Hospitality", logo: "⭐" },
  { name: "Hyatt Regency", sector: "Hospitality", logo: "🏨" },
  { name: "ITC Hotels", sector: "Hospitality", logo: "✨" },
  { name: "Medica Superspecialty", sector: "Healthcare", logo: "🏥" },
  { name: "Peerless Hospital", sector: "Healthcare", logo: "⚕️" },
  { name: "Radisson Blu", sector: "Hospitality", logo: "🏨" },
  { name: "Narayana Health", sector: "Healthcare", logo: "🏥" },
  { name: "Wipro", sector: "IT / Corporate", logo: "💻" },
  { name: "TCS", sector: "IT / Corporate", logo: "💼" },
  { name: "Novotel", sector: "Hospitality", logo: "🏨" }
];
