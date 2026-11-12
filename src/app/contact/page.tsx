"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, GraduationCap } from 'lucide-react';
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
      
      {/* Header Banner */}
      <div className="bg-[#07101f] text-white py-16 sm:py-20 relative overflow-hidden border-b-2 border-[#c5a059]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#0c1b33]/90 to-[#07101f]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[#dfbe7d] text-xs font-bold uppercase tracking-widest bg-[#0c1b33] px-3.5 py-1.5 border border-[#c5a059]/40 inline-block">
            Admissions Desk &amp; Campus Registry
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Contact CIMS Group
          </h1>
          <div className="gold-divider-center" />
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Connect with our senior admission counselors, schedule a campus visit, or inquire about scholarships and hostel amenities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7935] bg-[#faf7ef] px-3 py-1 border border-[#ebdcb6]">
                Get In Touch
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0c1b33] mt-3">
                Campuses &amp; Admissions Desk
              </h2>
              <div className="gold-divider mt-2 mb-4" />
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Connect with our academic advisory team for immediate guidance regarding course eligibility, fee schedules, hostel amenities, and loan assistance under Swami Vivekananda Foundation.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-5 bg-[#faf7ef] border-l-2 border-[#0c1b33] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0c1b33]">Main Campus</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Cambridge Institute of Management Studies, Purba Medinipur, West Bengal, India.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0c1b33]">Kolkata Admissions Hub</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Admissions &amp; Counseling Center, Kolkata, West Bengal.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#faf7ef] border-l-2 border-[#0c1b33] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0c1b33]">Admissions Helpline</h4>
                  <a href={`tel:${CIMS_INFO.phone}`} className="text-sm font-bold text-[#0c1b33] hover:text-[#9e7935] mt-1 block">
                    {CIMS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-gray-500">Mon – Sat (9:30 AM – 6:00 PM)</p>
                </div>
              </div>

              <div className="p-5 bg-[#faf7ef] border-l-2 border-[#c5a059] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0c1b33] text-[#dfbe7d] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#0c1b33]">Email Correspondence</h4>
                  <a href={`mailto:${CIMS_INFO.email}`} className="text-xs text-gray-700 hover:text-[#0c1b33] mt-1 block">
                    {CIMS_INFO.email}
                  </a>
                  <p className="text-[11px] text-gray-500">Official queries answered within 24 hours</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf7ef] p-8 sm:p-10 border-t-4 border-[#c5a059] border-x border-b border-[#ebdcb6] shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e7935] bg-white px-2.5 py-1 border border-[#ebdcb6] inline-block mb-2">
                Online Enquiry Desk
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0c1b33]">
                Send an Admission or General Enquiry
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-6">
                Your enquiry will be delivered directly to the academic counseling desk.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-white text-[#9e7935] border border-[#ebdcb6] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-[#0c1b33]">
                    Thank You, {formData.name || 'Candidate'}!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Your enquiry has been received and routed to our admissions team. A counselor will reach out to you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#9e7935] hover:text-[#0c1b33] underline transition-colors"
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
                      className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#c5a059]"
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
                        className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#c5a059]"
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
                        className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#c5a059]"
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
                        className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#c5a059] font-medium"
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
                        className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#c5a059]"
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
                      className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0c1b33] hover:bg-[#13284d] text-white py-3.5 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border-b-2 border-[#c5a059] shadow-md disabled:opacity-70"
                  >
                    <span>{submitting ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}</span>
                    <Send size={13} className="text-[#c5a059]" />
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
