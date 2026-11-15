import fs from 'fs';
import path from 'path';
import { 
  CIMS_INFO, 
  INITIAL_COURSES, 
  INITIAL_NEWS, 
  INITIAL_GALLERY, 
  INITIAL_TESTIMONIALS,
  Course,
  NewsNotice,
  GalleryItem,
  Testimonial
} from './data/cimsData';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  qualification?: string;
  city?: string;
  message?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Archived';
}

export interface AdmissionApplication {
  id: string;
  applicationNo: string;
  createdAt: string;
  
  // Office Use Only (Authorized Staff Only)
  officeUse: {
    batch: string;
    enrollmentNo?: string;
    verificationDate?: string;
    verifiedBy?: string;
    status: 'Pending Review' | 'Verified' | 'Fee Paid' | 'Enrolled' | 'Rejected';
    others: string;
  };

  // Student Photograph
  photoBase64?: string;
  photoFileName?: string;

  // Student Details
  studentName: string;
  guardianName: string;
  motherName?: string;
  idType: string;
  idNumberMasked: string;
  dob: string;
  telephoneNumber: string;
  alternativeNumber?: string;
  email: string;
  bloodGroup: string;
  gender: string;
  category?: string;
  nationality: string;

  // Address Details
  presentAddress: string;
  permanentAddress: string;
  city: string;
  district: string;
  state: string;
  pinCode: string;

  // Academic Details & Course Selection
  appliedCourse: string;
  session: string;
  hostelRequired: boolean;
  transportRequired: boolean;

  // Educational Qualifications
  class10: {
    board: string;
    institution: string;
    passingYear: string;
    percentage: string;
  };
  class12: {
    board: string;
    stream: string;
    institution: string;
    passingYear: string;
    percentage: string;
  };

  // Declaration
  declarationAccepted: boolean;
  applicantSignature: string;
}

export interface CMSData {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    admissionSeason: string;
    announcementTicker: string;
  };
  courses: Course[];
  news: NewsNotice[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  inquiries: Inquiry[];
  applications?: AdmissionApplication[];
}

const DB_FILE = path.join(process.cwd(), 'cms_database.json');

const DEFAULT_DATA: CMSData = {
  hero: {
    badge: "★ Ranked Leading Institute in West Bengal",
    headline: "Welcome To Cambridge Institute of Management Studies",
    subheadline: "Empowering Next-Generation Leaders in Hospital Management, Hospitality, Allied Health Sciences & Computer Applications under MAKAUT (CCPTR) & Swami Vivekananda Foundation.",
    admissionSeason: "Admissions Open 2026-2027",
    announcementTicker: "📢 Admissions Open for 2026 Academic Session in Hospital Management, Hospitality, Paramedical & BCA | 100% Placement Assistance | Direct Admission Helpline: +91 8158881234 | Special Scholarship Available for Meritorious Students!"
  },
  courses: INITIAL_COURSES,
  news: INITIAL_NEWS,
  gallery: INITIAL_GALLERY,
  testimonials: INITIAL_TESTIMONIALS,
  inquiries: [
    {
      id: "inq-1",
      name: "Rohit Banerjee",
      email: "rohit.b@gmail.com",
      phone: "+91 9830012345",
      course: "BBA in Hospital Management",
      qualification: "12th Science",
      city: "Kolkata",
      message: "Interested in admission fee structure and hospital training details.",
      createdAt: new Date().toISOString(),
      status: "New"
    }
  ]
};

let memoryCache: CMSData | null = null;

export function getCMSData(): CMSData {
  if (memoryCache) {
    if (!memoryCache.applications) memoryCache.applications = [];
    return memoryCache;
  }
  try {
    if (fs.existsSync(DB_FILE)) {
      const fileData = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(fileData);
      if (!parsed.applications) parsed.applications = [];
      memoryCache = parsed;
      return parsed;
    }
  } catch (err) {
    console.warn("Error reading local CMS database, using defaults:", err);
  }
  memoryCache = { ...DEFAULT_DATA, applications: [] };
  return memoryCache;
}

export function saveCMSData(data: CMSData): boolean {
  memoryCache = data;
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn("Filesystem read-only (serverless environment), stored in memory cache:", err);
    return true;
  }
}

export function addInquiry(inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  const current = getCMSData();
  const newInq: Inquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'New'
  };
  current.inquiries.unshift(newInq);
  saveCMSData(current);
  return newInq;
}

export function addApplication(appData: Omit<AdmissionApplication, 'id' | 'applicationNo' | 'createdAt'>): AdmissionApplication {
  const current = getCMSData();
  if (!current.applications) current.applications = [];
  
  const randNum = Math.floor(10000 + Math.random() * 90000);
  const applicationNo = `CIMS-2026-${randNum}`;
  const newApp: AdmissionApplication = {
    ...appData,
    id: `app-${Date.now()}`,
    applicationNo,
    createdAt: new Date().toISOString()
  };

  current.applications.unshift(newApp);
  saveCMSData(current);
  return newApp;
}

export function updateApplicationOffice(
  id: string, 
  officeUse: AdmissionApplication['officeUse']
): AdmissionApplication | null {
  const current = getCMSData();
  if (!current.applications) current.applications = [];
  
  const idx = current.applications.findIndex(a => a.id === id || a.applicationNo === id);
  if (idx !== -1) {
    current.applications[idx].officeUse = {
      ...current.applications[idx].officeUse,
      ...officeUse
    };
    saveCMSData(current);
    return current.applications[idx];
  }
  return null;
}

export function getApplications(): AdmissionApplication[] {
  const current = getCMSData();
  return current.applications || [];
}

export function updateCourse(course: Course): Course {
  const current = getCMSData();
  const idx = current.courses.findIndex(c => c.id === course.id);
  if (idx !== -1) {
    current.courses[idx] = course;
  } else {
    current.courses.push(course);
  }
  saveCMSData(current);
  return course;
}

export function updateNews(newsItem: NewsNotice): NewsNotice {
  const current = getCMSData();
  const idx = current.news.findIndex(n => n.id === newsItem.id);
  if (idx !== -1) {
    current.news[idx] = newsItem;
  } else {
    current.news.unshift(newsItem);
  }
  saveCMSData(current);
  return newsItem;
}

export function deleteNews(id: string): boolean {
  const current = getCMSData();
  current.news = current.news.filter(n => n.id !== id);
  return saveCMSData(current);
}

export function updateHero(hero: CMSData['hero']): boolean {
  const current = getCMSData();
  current.hero = hero;
  return saveCMSData(current);
}
