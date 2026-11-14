"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  BookOpen, 
  Bell, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Save, 
  CheckCircle, 
  ExternalLink,
  Search,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { CMSData, Inquiry } from '@/lib/cmsStore';
import { Course, NewsNotice, GalleryItem, INITIAL_COURSES, INITIAL_NEWS, INITIAL_GALLERY, INITIAL_TESTIMONIALS } from '@/lib/data/cimsData';

export default function AdminDashboardPage() {
  const [data, setData] = useState<CMSData | null>(null);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'courses' | 'news' | 'gallery' | 'hero'>('inquiries');
  const [loading, setLoading] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const router = useRouter();

  // News draft state
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Admission' as NewsNotice['category'],
    summary: '',
    content: ''
  });

  // Gallery draft state
  const [newGallery, setNewGallery] = useState({
    title: '',
    category: 'Campus' as GalleryItem['category'],
    image: '',
    description: ''
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/content');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        setData({
          hero: {
            badge: "★ Ranked Leading Institute in West Bengal",
            headline: "Welcome To Cambridge Institute of Management Studies",
            subheadline: "Empowering Next-Generation Leaders in Hospital Management, Hospitality, Allied Health Sciences & Computer Applications under MAKAUT (CCPTR) & Swami Vivekananda Foundation.",
            admissionSeason: "Admissions Open 2026-2027",
            announcementTicker: "📢 Admissions Open for 2026 Academic Session | 100% Placement Assistance"
          },
          courses: INITIAL_COURSES,
          news: INITIAL_NEWS,
          gallery: INITIAL_GALLERY,
          testimonials: INITIAL_TESTIMONIALS,
          inquiries: []
        });
      }
    } catch (err) {
      console.warn('Network issue fetching CMS content, falling back to default data:', err);
      setData({
        hero: {
          badge: "★ Ranked Leading Institute in West Bengal",
          headline: "Welcome To Cambridge Institute of Management Studies",
          subheadline: "Empowering Next-Generation Leaders in Hospital Management, Hospitality, Allied Health Sciences & Computer Applications under MAKAUT (CCPTR) & Swami Vivekananda Foundation.",
          admissionSeason: "Admissions Open 2026-2027",
          announcementTicker: "📢 Admissions Open for 2026 Academic Session | 100% Placement Assistance"
        },
        courses: INITIAL_COURSES,
        news: INITIAL_NEWS,
        gallery: INITIAL_GALLERY,
        testimonials: INITIAL_TESTIMONIALS,
        inquiries: []
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedData: CMSData) => {
    setData(updatedData);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cims_admin_user');
    router.push('/admin/login');
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 border-4 border-[#ed8100] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold text-[#112555]">Loading CIMS Management Portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Top Header */}
      <header className="bg-[#112555] text-white py-3 px-6 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#112555] to-[#1c3786] rounded-lg flex items-center justify-center font-extrabold text-[#ffc923] border border-[#ed8100]">
            CIMS
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-base leading-tight">
              CIMS Administrative Dashboard
            </h1>
            <p className="text-[10px] text-gray-300">
              Content Management &amp; Student Inquiries Control
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {savedSuccess && (
            <span className="flex items-center gap-1 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded">
              <CheckCircle size={13} />
              <span>Saved!</span>
            </span>
          )}
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded transition-colors"
          >
            <ExternalLink size={13} />
            <span>View Website</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-[#ed8100] hover:bg-[#d97400] text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
          >
            <LogOut size={13} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-3">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
              activeTab === 'inquiries' ? 'bg-[#112555] text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Users size={15} />
            <span>Student Inquiries ({data.inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
              activeTab === 'courses' ? 'bg-[#112555] text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <BookOpen size={15} />
            <span>Courses ({data.courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
              activeTab === 'news' ? 'bg-[#112555] text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Bell size={15} />
            <span>News &amp; Notices ({data.news.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
              activeTab === 'gallery' ? 'bg-[#112555] text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <ImageIcon size={15} />
            <span>Gallery ({data.gallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
              activeTab === 'hero' ? 'bg-[#112555] text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Settings size={15} />
            <span>Hero &amp; Ticker Settings</span>
          </button>
        </div>

        {/* Tab 1: Student Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-base text-[#112555]">
                  Student Admission Applications &amp; Inquiries
                </h3>
                <p className="text-xs text-gray-500">
                  Applications received in real-time from the website admission form
                </p>
              </div>
              <span className="text-xs font-bold bg-orange-50 text-[#ed8100] px-3 py-1 rounded-full border border-orange-200">
                Total: {data.inquiries.length}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-600">
                <thead className="bg-gray-50 text-[11px] uppercase tracking-wider text-gray-700 border-b border-gray-200">
                  <tr>
                    <th className="p-3.5">Candidate Name</th>
                    <th className="p-3.5">Contact Details</th>
                    <th className="p-3.5">Selected Course</th>
                    <th className="p-3.5">Qualification / City</th>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-gray-50">
                      <td className="p-3.5 font-bold text-[#112555]">{inq.name}</td>
                      <td className="p-3.5">
                        <div className="font-semibold text-gray-800">{inq.phone}</div>
                        <div className="text-[11px] text-gray-500">{inq.email || '—'}</div>
                      </td>
                      <td className="p-3.5 font-medium text-gray-800">{inq.course}</td>
                      <td className="p-3.5">
                        <div>{inq.qualification || '—'}</div>
                        <div className="text-[11px] text-gray-500">{inq.city || '—'}</div>
                      </td>
                      <td className="p-3.5 text-gray-500">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          inq.status === 'New' ? 'bg-orange-100 text-[#ed8100]' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {inq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Courses Management */}
        {activeTab === 'courses' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-heading font-extrabold text-base text-[#112555] mb-2">
                Academic Programs &amp; Courses Manager
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Update course titles, durations, affiliations, descriptions, and eligibility.
              </p>

              <div className="space-y-6">
                {data.courses.map((course, idx) => (
                  <div key={course.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Course Title</label>
                        <input
                          type="text"
                          value={course.title}
                          onChange={(e) => {
                            const updated = [...data.courses];
                            updated[idx].title = e.target.value;
                            handleSave({ ...data, courses: updated });
                          }}
                          className="w-full text-xs p-2 bg-white border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Duration</label>
                        <input
                          type="text"
                          value={course.duration}
                          onChange={(e) => {
                            const updated = [...data.courses];
                            updated[idx].duration = e.target.value;
                            handleSave({ ...data, courses: updated });
                          }}
                          className="w-full text-xs p-2 bg-white border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Affiliated To</label>
                        <input
                          type="text"
                          value={course.affiliatedTo}
                          onChange={(e) => {
                            const updated = [...data.courses];
                            updated[idx].affiliatedTo = e.target.value;
                            handleSave({ ...data, courses: updated });
                          }}
                          className="w-full text-xs p-2 bg-white border border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">Short Description</label>
                      <textarea
                        rows={2}
                        value={course.shortDesc}
                        onChange={(e) => {
                          const updated = [...data.courses];
                          updated[idx].shortDesc = e.target.value;
                          handleSave({ ...data, courses: updated });
                        }}
                        className="w-full text-xs p-2 bg-white border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: News & Notices */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            {/* Add Notice */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-heading font-extrabold text-base text-[#112555] mb-4">
                Publish New Notice or News Circular
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Notice Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Schedule for University Exam 2026"
                    value={newNotice.title}
                    onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                    className="w-full text-xs p-2 bg-gray-50 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Category</label>
                  <select
                    value={newNotice.category}
                    onChange={(e: any) => setNewNotice({ ...newNotice, category: e.target.value })}
                    className="w-full text-xs p-2 bg-gray-50 border border-gray-300 rounded"
                  >
                    <option value="Admission">Admission</option>
                    <option value="Notice">Notice</option>
                    <option value="Event">Event</option>
                    <option value="Career">Career</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Summary</label>
                <textarea
                  rows={2}
                  placeholder="Short excerpt for homepage ticker and cards"
                  value={newNotice.summary}
                  onChange={(e) => setNewNotice({ ...newNotice, summary: e.target.value })}
                  className="w-full text-xs p-2 bg-gray-50 border border-gray-300 rounded"
                />
              </div>
              <button
                onClick={() => {
                  if (!newNotice.title) return;
                  const item: NewsNotice = {
                    id: `n-${Date.now()}`,
                    title: newNotice.title,
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    category: newNotice.category,
                    summary: newNotice.summary,
                    content: newNotice.summary
                  };
                  handleSave({ ...data, news: [item, ...data.news] });
                  setNewNotice({ title: '', category: 'Admission', summary: '', content: '' });
                }}
                className="bg-[#ed8100] hover:bg-[#d97400] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
              >
                <Plus size={14} />
                <span>Publish Notice</span>
              </button>
            </div>

            {/* Existing Notices List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-heading font-extrabold text-base text-[#112555] mb-4">
                Active Notices ({data.news.length})
              </h3>
              <div className="space-y-3">
                {data.news.map((item) => (
                  <div key={item.id} className="p-3.5 bg-gray-50 rounded-lg border border-gray-200 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-orange-100 text-[#ed8100]">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-400">{item.date}</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#112555]">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.summary}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleSave({ ...data, news: data.news.filter(n => n.id !== item.id) });
                      }}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Delete notice"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Gallery Manager */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-heading font-extrabold text-base text-[#112555] mb-4">
                Add Image to Campus Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Pathology Diagnostic Lab Session"
                    value={newGallery.title}
                    onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                    className="w-full text-xs p-2 bg-gray-50 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Category</label>
                  <select
                    value={newGallery.category}
                    onChange={(e: any) => setNewGallery({ ...newGallery, category: e.target.value })}
                    className="w-full text-xs p-2 bg-gray-50 border border-gray-300 rounded"
                  >
                    <option value="Campus">Campus</option>
                    <option value="Medical Labs">Medical Labs</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Hospital Training">Hospital Training</option>
                    <option value="Events">Events</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">Image URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={newGallery.image}
                    onChange={(e) => setNewGallery({ ...newGallery, image: e.target.value })}
                    className="w-full text-xs p-2 bg-gray-50 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  if (!newGallery.title || !newGallery.image) return;
                  const item: GalleryItem = {
                    id: `g-${Date.now()}`,
                    title: newGallery.title,
                    category: newGallery.category,
                    image: newGallery.image,
                    description: newGallery.title
                  };
                  handleSave({ ...data, gallery: [item, ...data.gallery] });
                  setNewGallery({ title: '', category: 'Campus', image: '', description: '' });
                }}
                className="bg-[#ed8100] hover:bg-[#d97400] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
              >
                <Plus size={14} />
                <span>Add Image</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.gallery.map((g) => (
                <div key={g.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm relative group">
                  <img src={g.image} alt={g.title} className="w-full h-32 object-cover" />
                  <div className="p-2.5">
                    <span className="text-[9px] font-bold uppercase text-[#ed8100] bg-orange-50 px-1.5 py-0.5 rounded">
                      {g.category}
                    </span>
                    <h5 className="font-heading font-bold text-xs text-[#112555] line-clamp-1 mt-1">
                      {g.title}
                    </h5>
                  </div>
                  <button
                    onClick={() => {
                      handleSave({ ...data, gallery: data.gallery.filter(item => item.id !== g.id) });
                    }}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Hero Settings */}
        {activeTab === 'hero' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
            <h3 className="font-heading font-extrabold text-base text-[#112555] mb-2">
              Hero Section &amp; Scrolling Notice Ticker Settings
            </h3>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Top Hero Badge
              </label>
              <input
                type="text"
                value={data.hero.badge}
                onChange={(e) => {
                  handleSave({ ...data, hero: { ...data.hero, badge: e.target.value } });
                }}
                className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Main Hero Headline
              </label>
              <input
                type="text"
                value={data.hero.headline}
                onChange={(e) => {
                  handleSave({ ...data, hero: { ...data.hero, headline: e.target.value } });
                }}
                className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Hero Subheadline / Institutional Intro
              </label>
              <textarea
                rows={3}
                value={data.hero.subheadline}
                onChange={(e) => {
                  handleSave({ ...data, hero: { ...data.hero, subheadline: e.target.value } });
                }}
                className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Continuous Marquee Ticker Announcement
              </label>
              <textarea
                rows={2}
                value={data.hero.announcementTicker}
                onChange={(e) => {
                  handleSave({ ...data, hero: { ...data.hero, announcementTicker: e.target.value } });
                }}
                className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

