"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CreditCard,
  Building2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  Phone,
  Send,
  Download,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { CIMS_INFO } from '@/lib/data/cimsData';

export default function PayFeePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    studentName: '',
    rollNo: '',
    course: 'BBA in Hospital Management',
    semester: 'Semester 1',
    amount: '',
    transactionId: '',
    paymentMode: 'NEFT / RTGS / IMPS',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">

      {/* Banner */}
      <section className="bg-gradient-to-r from-[#0d1d42] via-[#112555] to-[#1a3880] text-white py-10 border-b-4 border-[#ed8100] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#ffc923] shadow-md bg-white flex-shrink-0">
              <Image
                src="/images/logo/svf-logo.jpg"
                alt="Swami Vivekananda Foundation Logo"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                  CIMS <span className="text-[#ed8100]">FEE PAYMENT PORTAL</span>
                </span>
                <span className="bg-[#ed8100] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                  Official Gateway
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-0.5">
                Official Account of Swami Vivekananda Foundation • Cambridge Institute of Management Studies
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-bold text-gray-300 hover:text-white px-3 py-1.5 rounded border border-white/20 hover:border-white transition-colors"
            >
              &larr; Return to Home
            </Link>
            <Link
              href="/student-portal"
              className="text-xs font-bold bg-[#ed8100] hover:bg-[#d97400] text-white px-3.5 py-1.5 rounded transition-all flex items-center gap-1.5 shadow"
            >
              <span>Student Portal Login</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Official Bank Account & UPI Details */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-heading font-extrabold text-base text-[#112555] flex items-center gap-2">
                  <Building2 size={18} className="text-[#ed8100]" />
                  <span>Institutional Bank Details</span>
                </h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Verified Trust Account
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">Beneficiary Name</span>
                    <span className="font-bold text-[#112555] text-sm">Swami Vivekananda Foundation</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("Swami Vivekananda Foundation", "name")}
                    className="p-1.5 text-gray-500 hover:text-[#ed8100] transition-colors"
                    title="Copy"
                  >
                    {copiedField === "name" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">Bank Name</span>
                    <span className="font-bold text-[#112555] text-sm">State Bank of India (SBI)</span>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">Current Account Number</span>
                    <span className="font-mono font-bold text-[#112555] text-sm">394820100481</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("394820100481", "acc")}
                    className="p-1.5 text-gray-500 hover:text-[#ed8100] transition-colors"
                    title="Copy Account Number"
                  >
                    {copiedField === "acc" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">IFSC Code</span>
                    <span className="font-mono font-bold text-[#ed8100] text-sm">SBIN0001234</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("SBIN0001234", "ifsc")}
                    className="p-1.5 text-gray-500 hover:text-[#ed8100] transition-colors"
                    title="Copy IFSC Code"
                  >
                    {copiedField === "ifsc" ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">Branch &amp; MICR</span>
                    <span className="font-bold text-[#112555]">Kolkata Main Branch • 700001002</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-500 space-y-1">
                <p>• Accepted Modes: <strong>NEFT, RTGS, IMPS, Net Banking, Demand Draft (DD)</strong>.</p>
                <p>• In the transaction remarks, please enter your <strong>Student Roll No. &amp; Full Name</strong>.</p>
              </div>
            </div>

            {/* Helpline Card */}
            <div className="p-5 bg-gradient-to-br from-[#112555] to-[#1a3880] text-white rounded-2xl shadow-md space-y-2">
              <span className="text-[10px] font-extrabold uppercase text-[#ffc923] tracking-wider">
                Accounts &amp; Fee Support Cell
              </span>
              <h4 className="font-heading font-bold text-sm">
                Need Verification or Receipt Assistance?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Our accounts department confirms all NEFT/IMPS transfers within 2 to 4 business hours.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${CIMS_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffc923] hover:underline"
                >
                  <Phone size={13} />
                  <span>{CIMS_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Payment Confirmation & Receipt Intimation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border-t-4 border-[#ed8100] border-x border-b border-gray-200 shadow-xl">
              
              <div className="mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ed8100] bg-orange-50 px-2.5 py-1 rounded border border-orange-200 inline-block mb-1.5">
                  Fee Payment Confirmation
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#112555]">
                  Submit Transfer Details &amp; Request Receipt
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  After initiating your bank transfer, submit the details below to receive your official stamp-verified invoice.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-[#112555]">
                    Payment Details Submitted Successfully!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.studentName}</strong>. Your transaction reference <strong>{formData.transactionId || 'UTR'}</strong> has been recorded. The accounts desk will verify the credit and email your official fee receipt within 4 hours.
                  </p>
                  <div className="pt-3 flex justify-center gap-3">
                    <Link
                      href="/student-portal"
                      className="bg-[#112555] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm"
                    >
                      Go to Student Portal
                    </Link>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#ed8100] hover:underline px-3 py-2.5"
                    >
                      Submit Another Receipt
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Full Name as on ID Card"
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Roll / Enrollment No. *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.rollNo}
                        onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                        placeholder="e.g. CIMS/2024/HM-104"
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Academic Program *
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      >
                        <option value="BBA in Hospital Management">BBA in Hospital Management</option>
                        <option value="B.Sc in Hospitality & Hotel Administration">B.Sc Hospitality &amp; Hotel Admin</option>
                        <option value="B.Sc Medical Laboratory Technology (BMLT)">B.Sc Medical Lab Tech (BMLT)</option>
                        <option value="B.Sc Radiology & Imaging (BMRIT)">B.Sc Radiology &amp; Imaging (BMRIT)</option>
                        <option value="BCA - Computer Applications">BCA - Computer Applications</option>
                        <option value="Masters in Hospital Administration (MHA)">Masters in Hospital Administration</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Semester / Installment *
                      </label>
                      <select
                        value={formData.semester}
                        onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      >
                        <option value="Admission / Initial Booking">Admission / Initial Booking</option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                        <option value="Semester 3">Semester 3</option>
                        <option value="Semester 4">Semester 4</option>
                        <option value="Semester 5">Semester 5</option>
                        <option value="Semester 6">Semester 6</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Amount Paid (₹) *
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        placeholder="e.g. 35000"
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Bank Transaction Ref / UTR No. *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.transactionId}
                        onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                        placeholder="12-digit UTR / Reference No."
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Additional Remarks / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Paid via PNB net banking on 15 May"
                      className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-shimmer w-full bg-[#ed8100] hover:bg-[#d97400] text-white py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Verifying &amp; Submitting...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Payment Proof for Verification</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center leading-tight">
                    Payments are reconciled directly against the Swami Vivekananda Foundation account.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
