import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

export const metadata: Metadata = {
  title: "Cambridge Institute of Management Studies (CIMS Group) | Best Management & Paramedical College",
  description: "Join CIMS Group - Premier Institute in West Bengal offering BBA in Hospital Management, B.Sc Hospitality & Hotel Administration, Allied Health Sciences & Paramedical (BMLT/BMRIT), and BCA under MAKAUT (CCPTR) & Swami Vivekananda Foundation.",
  keywords: "CIMS Group, Cambridge Institute of Management Studies, Hospital Management College in Kolkata, Best Hotel Management College in Purba Medinipur, Paramedical College in West Bengal, BMLT, BCA admission 2026, MAKAUT CCPTR",
  openGraph: {
    title: "Cambridge Institute of Management Studies (CIMS Group)",
    description: "Empowering Next-Gen Leaders in Healthcare, Hospitality, Paramedical & Computing. 100% Placement Assistance & 5-Star Hotel / Hospital Internships.",
    url: "https://cimsgroup.org",
    siteName: "CIMS Group",
    type: "website",
  },
};

import dynamic from 'next/dynamic';
const BackgroundAnimation = dynamic(() => import('@/components/layout/BackgroundAnimation'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#ed8100] selection:text-white">
        <TopBar />
        <Navbar />
        <BackgroundAnimation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
