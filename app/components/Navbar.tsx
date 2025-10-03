"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "หน้าแรก", href: "/", isActive: true },
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

  return (
    <nav className="w-full bg-white shadow-sm border-b border-primary/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* โลโก้ */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-lg text-neutral">ประกัน</span>
        </Link>

        {/* เมนู Desktop */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-neutral">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={
                  item.isActive
                    ? "px-4 py-1 rounded-full bg-primary text-white font-medium shadow-sm"
                    : "hover:text-primary transition-colors"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col p-4 gap-4 text-neutral font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    item.isActive
                      ? "block px-4 py-2 rounded-full bg-primary text-white text-center shadow-sm"
                      : "hover:text-primary transition-colors"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 rounded-full bg-primary text-white font-medium shadow"
              >
                ปรึกษาเลย
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 px-4 pb-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank">
                <Image src={social.icon} alt={social.name} width={28} height={28} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
