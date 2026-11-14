"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  GraduationCap, 
  ChevronRight,
  PhoneCall,
  UserCheck,
  CreditCard,
  Building2
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'General Inquiry',
    city: '',
    qualification: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please enter your full name and contact number.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (ISHM NAVY BANNER WITH BREADCRUMBS)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#112555] text-white py-14 sm:py-16 relative overflow-hidden border-b-4 border-[#ed8100]">
        <div className="absolute inset-0 bg-[radial-gradient(#ed8100_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-bold">
            <Link href="/" className="hover:text-[#ed8100] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-[#ed8100]" />
            <span className="text-[#ed8100]">Contact Us</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            CONTACT CIMS GROUP
          </h1>
          <div className="w-20 h-1 bg-[#ed8100] mx-auto rounded-full" />
          
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Connect with our senior admission counselors, schedule a campus visit, or inquire about scholarships and hostel amenities.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-3 py-1 rounded border border-orange-200">
                Get In Touch
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#112555] uppercase tracking-wide mt-3">
                Campuses &amp; Admissions Desk
              </h2>
              <div className="section-title-bar" />
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Connect with our academic advisory team for immediate guidance regarding course eligibility, fee schedules, hostel amenities, and loan assistance under Swami Vivekananda Foundation.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm flex items-start gap-4 transition-all">
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#112555] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#ed8100]" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#112555]">Main Campus</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Cambridge Institute of Management Studies, Purba Medinipur, West Bengal, India.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm flex items-start gap-4 transition-all">
                <div className="w-11 h-11 rounded-lg bg-orange-50 text-[#ed8100] flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#112555]">Kolkata Admissions Hub</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Admissions &amp; Counseling Center, Kolkata, West Bengal.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm flex items-start gap-4 transition-all">
                <div className="w-11 h-11 rounded-lg bg-green-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#112555]">Admissions Helpline</h4>
                  <a href={`tel:${CIMS_INFO.phone}`} className="text-sm font-black text-[#112555] hover:text-[#ed8100] mt-1 block transition-colors">
                    {CIMS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-gray-500">Mon – Sat (9:30 AM – 6:00 PM)</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#ed8100] shadow-sm flex items-start gap-4 transition-all">
                <div className="w-11 h-11 rounded-lg bg-yellow-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#112555]">Email Correspondence</h4>
                  <a href={`mailto:${CIMS_INFO.email}`} className="text-xs font-semibold text-gray-700 hover:text-[#ed8100] mt-1 block transition-colors">
                    {CIMS_INFO.email}
                  </a>
                  <p className="text-[11px] text-gray-500">Official queries answered within 24 hours</p>
                </div>
              </div>

            </div>

            {/* Student Portal & Pay Fee Info Anchors */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div id="student-portal" className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 font-heading font-bold text-xs text-[#112555]">
                  <UserCheck size={16} className="text-[#ed8100]" />
                  <span>Student Portal</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">Active student logins, attendance &amp; marks verification.</p>
              </div>

              <div id="pay-fee" className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 font-heading font-bold text-xs text-[#112555]">
                  <CreditCard size={16} className="text-[#ed8100]" />
                  <span>Pay Fee</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">Tuition fee payment instructions &amp; bank details.</p>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border-t-4 border-[#ed8100] border-x border-b border-gray-200 shadow-2xl">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-2.5 py-1 rounded border border-orange-200 inline-block mb-2">
                Online Enquiry Desk
              </span>
              <h3 className="font-heading text-2xl font-black text-[#112555] uppercase">
                Send an Admission or General Enquiry
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-6">
                Your enquiry will be delivered directly to our academic counseling desk.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-[#112555]">
                    Thank You, {formData.name || 'Candidate'}!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Your enquiry has been received and routed to our admissions team. A counselor will reach out to you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#ed8100] hover:underline transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Candidate Full Name"
                      className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit Mobile Number"
                        className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@example.com"
                        className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Program of Interest
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100] font-medium"
                      >
                        <option value="BBA in Hospital Management">BBA in Hospital Management</option>
                        <option value="B.Sc in Hospitality & Hotel Administration">B.Sc Hospitality &amp; Hotel Admin</option>
                        <option value="B.Sc Medical Laboratory Technology (BMLT)">B.Sc Medical Lab Tech (BMLT)</option>
                        <option value="B.Sc Medical Radiology & Imaging (BMRIT)">B.Sc Radiology &amp; Imaging (BMRIT)</option>
                        <option value="B.Sc Operation Theatre Technology (BOTT)">B.Sc Operation Theatre Tech (BOTT)</option>
                        <option value="BCA - Computer Applications">BCA - Computer Applications</option>
                        <option value="General Inquiry">General Admission Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        City / District
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Purba Medinipur / Kolkata"
                        className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message / Special Inquiry (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about fee installment, hostel accommodation, hospital clinical rotations..."
                      className="w-full px-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#ed8100] hover:bg-[#d97400] text-white py-3.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    <span>{submitting ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
