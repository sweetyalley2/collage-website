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
  if (memoryCache) return memoryCache;
  try {
    if (fs.existsSync(DB_FILE)) {
      const fileData = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(fileData);
      memoryCache = parsed;
      return parsed;
    }
  } catch (err) {
    console.warn("Error reading local CMS database, using defaults:", err);
  }
  memoryCache = DEFAULT_DATA;
  return DEFAULT_DATA;
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
