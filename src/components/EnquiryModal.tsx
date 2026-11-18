"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'BBA in Hospital Management',
    qualification: '10+2 / Higher Secondary',
    city: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        setFormError(data.error || 'Unable to submit enquiry. Please try again.');
      }
    } catch {
      setFormError('Network connection issue. Please check your internet or call helpline.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormSubmitted(false);
      setFormError('');
    }, 300);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#112555] to-[#1e3a8a] text-white p-5 sm:p-6 relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors cursor-pointer"
            aria-label="Close Enquiry Form"
          >
            <X size={20} />
          </button>
          <span className="text-[#ffc923] text-xs font-extrabold uppercase tracking-wider block mb-1">
            Admissions 2026–2027
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold">
            CIMS Admission Enquiry
          </h3>
          <p className="text-xs text-gray-200 mt-1">
            Submit your query. Our academic counsellor will contact you within 24 hours.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {formSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#112555]">
                Enquiry Submitted Successfully!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-[#112555]">{formData.name}</span>. Your details have been delivered to the CIMS Admissions Office. Our team will get in touch at <span className="font-bold text-[#112555]">{formData.phone}</span> shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-[#112555] hover:bg-[#0c1b3f] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Candidate Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Candidate Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sen"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit number"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@email.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Course of Interest */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Course of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all bg-white"
                >
                  <option value="BBA in Hospital Management">BBA in Hospital Management (MAKAUT CCPTR)</option>
                  <option value="B.Sc Hospitality & Hotel Administration">B.Sc Hospitality &amp; Hotel Administration (MAKAUT)</option>
                  <option value="Bachelor of Computer Application (BCA)">Bachelor of Computer Application (BCA)</option>
                  <option value="Allied Health Sciences & Paramedical">Allied Health Sciences &amp; Paramedical (BMLT/BMRIT)</option>
                </select>
              </div>

              {/* Qualification & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Qualification
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all bg-white"
                  >
                    <option value="10+2 / Higher Secondary">10+2 / Higher Secondary</option>
                    <option value="Graduation Passed / Appearing">Graduation Passed / Appearing</option>
                    <option value="Secondary (10th)">Secondary (10th)</option>
                    <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    City / District
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Kolkata / Medinipur"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message (Optional) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  Message / Any Question (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your questions regarding admission, hostel or fees..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#ed8100] focus:ring-1 focus:ring-[#ed8100] outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#ed8100] to-[#ff9724] hover:from-[#d97400] hover:to-[#ed8100] text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {formSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1">
                <Link 
                  href="/contact#enquiry" 
                  onClick={handleClose}
                  className="text-[11px] text-gray-500 hover:text-[#ed8100] underline"
                >
                  Or visit the full Enquiry Desk page &rarr;
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
