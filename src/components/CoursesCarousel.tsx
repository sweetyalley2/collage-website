"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Course data for the carousel – replace with real data later
const courses = [
  {
    id: "new-slide",
    title: "New Course",
    badge: "Featured",
    price: "Free",
    image: "/gallery/added-slide.jpg",
    studentPic: "/gallery/student1.jpg",
    link: "/courses/new-course",
  },
  {
    id: "slide-bg",
    title: "Featured Course",
    badge: "Featured",
    price: "Free",
    image: "/gallery/slide-bg.jpg",
    studentPic: "/gallery/student1.jpg",
    link: "/courses/featured",
  },
  {
    id: "bba-hospital-management",
    title: "BBA in Hospital Management",
    badge: "Hospital Management",
    price: "Free",
    image: "/gallery/hospital-management.jpg",
    studentPic: "/gallery/student1.jpg",
    link: "/courses/bba-hospital-management",
  },
  {
    id: "bsc-hospitality",
    title: "B.Sc in Hospitality & Hotel Administration",
    badge: "Hospitality",
    price: "Free",
    image: "/gallery/hospitality.jpg",
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

export default function CoursesCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const currentCourse = courses[index];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Courses Carousel
        </h2>
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
          {/* Image */}
          <Image
            src={currentCourse.image}
            alt={currentCourse.title}
            width={800}
            height={450}
            className="w-full h-64 object-cover"
          />
          {/* Student picture overlay */}
          {currentCourse.studentPic && (
            <Image
              src={currentCourse.studentPic}
              alt="Student"
              width={70}
              height={70}
              className="absolute bottom-3 right-3 rounded-full border-2 border-white shadow"
            />
          )}
          {/* Details overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {currentCourse.badge}
            </span>
            <h3 className="mt-2 text-xl font-bold">
              {currentCourse.title}
            </h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-medium">
                {currentCourse.price}
              </span>
              <Link
                href={currentCourse.link}
                className="text-indigo-200 hover:text-white font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
