"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@cimsgroup.org');
  const [password, setPassword] = useState('Sweety@123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('cims_admin_user', JSON.stringify(data.user));
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1d42] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-[#ed8100]">
        
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-[#112555] to-[#1c3786] rounded-xl flex items-center justify-center text-white mx-auto shadow-md border-2 border-[#ed8100] mb-3">
            <span className="font-extrabold text-2xl text-[#ffc923]">CIMS</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-[#112555]">
            CMS Admin Portal
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Cambridge Institute of Management Studies
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Admin Email / Username
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@cimsgroup.org"
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Admin Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ed8100]"
              />
            </div>
          </div>

          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-[11px] text-[#112555]">
            <strong>Authorized Access Only:</strong> Preconfigured with institutional credentials:
            <div className="mt-1 font-mono text-[10px] text-gray-600">
              Email: <span className="font-bold text-gray-800">admin@cimsgroup.org</span> | Password: <span className="font-bold text-gray-800">Sweety@123</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ed8100] hover:bg-[#d97400] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight size={15} />
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-gray-500 hover:text-[#ed8100] font-semibold">
            &larr; Back to CIMS Website
          </Link>
        </div>

      </div>
    </div>
  );
}

