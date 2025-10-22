"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          ติดต่อเรา
        </h2>
        <p
          className="mb-8"
          style={{
            color: "var(--color-neutral)",
            fontSize: "var(--text-body)",
          }}
        >
          ได้รับคำปรึกษาฟรี ตอบกลับภายใน 30 นาที
        </p>

        {/* การ์ดฟอร์ม */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-neutral">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-neutral">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-neutral">
                อีเมล
              </label>
              <input
                type="email"
                name="email"
                placeholder="กรุณากรอกอีเมล"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-neutral">
                ข้อความ
              </label>
              <textarea
                name="message"
                placeholder="กรุณากรอกข้อความหรือคำถาม"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-white shadow transition bg-primary hover:opacity-90 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">send</span>
              ส่งข้อมูล
            </button>
          </form>

          {/* Social / Contact */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm">
            <a href="#" className="flex items-center gap-2 text-success">
              {/* <span className="material-symbols-outlined text-lg">chat</span>{" "} */}
              <Image src="/icons/line.png" alt="line icon" width={22} height={22} />
              Line: @mho-prakan
            </a>
            <a href="#" className="flex items-center gap-2 text-sky">
              {/* <span className="material-symbols-outlined text-lg">
                facebook
              </span>{" "} */}
              <Image src="/icons/facebook.png" alt="line icon" width={22} height={22} />
              mho-prakan
            </a>
            <a
              href="tel:021234567"
              className="flex items-center gap-2 text-primary"
            >
              <span className="material-symbols-outlined text-lg">call</span>{" "}
              02-123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
