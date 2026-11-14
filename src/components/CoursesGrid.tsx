// CoursesGrid component – displays a set of course cards with optional student picture overlay
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Sample course definition – replace with your real data or fetch from an API
const courses = [
  {
    id: "bba-hospital-management",
    title: "BBA in Hospital Management",
    badge: "Hospital Management",
    price: "Free",
    image: "/gallery/hospital-management.jpg", // placeholder – you can use any image from public/gallery
    studentPic: "/gallery/student1.jpg",
    link: "/courses/bba-hospital-management",
  },
  {
    id: "bsc-hospitality",
    title: "B.Sc in Hospitality & Hotel Administration",
    badge: "Hospitality",
    price: "Free",
    image: "/images/experience-life/CIMS_Campus_Gallery_Photos/culinary-hospitality-students.jpg",
    studentPic: "/gallery/student2.jpg",
    link: "/courses/bsc-hospitality",
  },
  {
    id: "bsc-medical-lab",
    title: "B.Sc Medical Laboratory Technology",
    badge: "Allied Health",
    price: "Free",
    image: "/gallery/medical-lab.jpg",
    studentPic: "/gallery/student3.jpg",
    link: "/courses/bsc-medical-lab",
  },
];

export default function CoursesGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c) => (
            <div
              key={c.id}
              className="relative group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              {/* Course image */}
              <Image
                src={c.image}
                alt={c.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              {/* Student picture overlay – appears in the bottom‑right corner */}
              {c.studentPic && (
                <Image
                  src={c.studentPic}
                  alt="Student"
                  width={60}
                  height={60}
                  className="absolute bottom-2 right-2 rounded-full border-2 border-white shadow"
                />
              )}
              <div className="p-6 flex flex-col justify-between h-48">
                <div>
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {c.badge}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    {c.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    {c.price}
                  </span>
                  <Link
                    href={c.link}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

