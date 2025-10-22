"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* คอลัมน์ 1: โลโก้ + คำอธิบาย */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/logo.jpg" alt="Mho Prakan" width={50} height={50} />
            <span className="text-lg font-bold">Mho Prakan</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            ทีมผู้เชี่ยวชาญด้านแผนประกันชีวิต พร้อมให้คำแนะนำและให้คำปรึกษาด้านประกันชีวิต
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
              <Image src="/icons/youtube.png" alt="line icon" width={22} height={22} />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
              <Image src="/icons/line.png" alt="line icon" width={22} height={22} />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
              <Image src="/icons/facebook.png" alt="line icon" width={22} height={22} />
            </a>
          </div>
        </div>

        {/* คอลัมน์ 2: เมนูหลัก */}
        <div>
          <h4 className="font-semibold mb-4">เมนูหลัก</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/">หน้าแรก</Link></li>
            <li><Link href="/services">บริการ</Link></li>
            <li><Link href="/products">ผลิตภัณฑ์</Link></li>
          </ul>
        </div>

        {/* คอลัมน์ 3: ติดต่อเรา */}
        <div>
          <h4 className="font-semibold mb-4">ติดต่อเรา</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">call</span>
              0123456789
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              mho_prakan@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              58/95 ถ.หอการค้าไทย ต.บางตะไนย์ อ.ปากเกร็ด จ.นนทบุรี 11120
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © 2025 Mho Pakan. สงวนลิขสิทธิ์ทุกประการ
      </div>
    </footer>
  );
}
