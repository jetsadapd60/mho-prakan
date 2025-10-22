"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "หน้าแรก", href: "/" },
  { name: "บริการ", href: "/services" },
  { name: "ผลิตภัณฑ์", href: "/products" },
];

const socialLinks = [
  { name: "facebook", icon: "/icons/facebook.png", href: "https://facebook.com" },
  { name: "youtube", icon: "/icons/youtube.png", href: "https://youtube.com" },
  { name: "line", icon: "/icons/line.png", href: "https://line.me" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ route ปัจจุบัน

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-primary/30">
      <div className="max-w-7xl h-[80px] mx-auto flex items-center justify-between px-4 py-2">
        {/* โลโก้ */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="Logo" width={45} height={45} className="size-12" />
        </Link>

        {/* เมนู Desktop */}
        <ul className="hidden md:flex gap-6 font-medium text-neutral">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "bg-primary text-white px-4 py-1 rounded-full shadow"
                      : "hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Social + CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={social.icon} alt={social.name} width={22} height={22} />
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-primary text-white font-medium shadow hover:opacity-90"
          >
            ปรึกษาเลย
          </Link>
        </div>

        {/* Mobile: Social + Hamburger */}
        <div className="flex items-center gap-3 md:hidden ml-auto">
          {/* Social icons (mobile only) */}
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={social.icon} alt={social.name} width={28} height={28} />
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col p-4 gap-4 text-neutral font-medium">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="flex">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block ${
                      isActive
                        ? "bg-primary text-white px-4 py-2 rounded-full shadow text-center"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
