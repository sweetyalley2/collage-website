"use client";
import React from 'react';

/**
 * Simple pure‑CSS background animation – floating semi‑transparent circles.
 * Rendered only on the client via dynamic import (ssr: false).
 */
export default function BackgroundAnimation() {
  const circles = [
    { size: 500, top: '-15%', left: '5%', delay: 0 },
    { size: 600, top: '25%', left: '-25%', delay: 2 },
    { size: 550, top: '70%', left: '70%', delay: 4 },
    { size: 450, top: '10%', left: '55%', delay: 1 },
    { size: 350, top: '45%', left: '35%', delay: 3 },
    { size: 300, top: '80%', left: '-10%', delay: 5 },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0.1; }
          50% { transform: translateY(-20%) translateX(20%); opacity: 0.2; }
          100% { transform: translateY(0) translateX(0); opacity: 0.1; }
        }
        .float-circle { animation: float 20s ease-in-out infinite; }
      `}</style>
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {circles.map((c, i) => (
          <div
            key={i}
            className="bg-[#ff9900] opacity-80 rounded-full float-circle"
            style={{
              width: c.size,
              height: c.size,
              top: c.top,
              left: c.left,
              position: 'absolute',
              animationDelay: `${c.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
