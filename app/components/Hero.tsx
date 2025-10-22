"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "ประกันชีวิตที่จริงใจ เพื่อความสบายใจในทุกวัน",
    desc: "ให้คำปรึกษาเคลมประกันชีวิตทุกบริษัท",
    image: "/images/team-hero.png",
    ctas: [
      {
        label: "ปรึกษาเลย",
        icon: "call",
        href: "/contact",
        style: "bg-primary text-white",
      },
      {
        label: "ดูวิดีโอแนะนำ",
        icon: "play_arrow",
        href: "/products",
        style: "bg-white/90 text-neutral",
      },
    ],
  },
  {
    id: 2,
    title: "แผนประกันสุขภาพ",
    desc: "ดูแลสุขภาพของคุณและครอบครัว ด้วยแผนที่คุ้มค่าและยืดหยุ่น",
    image: "/images/health-hero.jpg",
    ctas: [
      {
        label: "ดูแผนสุขภาพ",
        icon: "favorite",
        href: "/products",
        style: "bg-primary text-white",
      },
    ],
  },
  {
    id: 3,
    title: "วางแผนการเงินระยะยาว",
    desc: "วางแผนการเงิน เพื่ออนาคตที่มั่นคงและสบายใจ",
    image: "/images/finance-hero.jpg",
    ctas: [
      {
        label: "เริ่มวางแผน",
        icon: "trending_up",
        href: "/services",
        style: "bg-primary text-white",
      },
    ],
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* BG Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center gap-y-7 md:gap-y-10 h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-medium text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl drop-shadow">
              {slide.desc}
            </p>
            <div className="mt-6 flex gap-4 flex-wrap justify-center">
              {slide.ctas.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className={`flex items-center shadow-2xl gap-2 px-6 py-3 rounded-full font-medium hover:opacity-90 transition ${cta.style}`}
                >
                  <span className="material-symbols-outlined text-lg">
                    {cta.icon}
                  </span>
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Indicators (แบบ capsule) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-500 ${
              idx === current ? "w-6 bg-primary" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
