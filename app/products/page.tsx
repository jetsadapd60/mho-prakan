"use client";

import { useState } from "react";

const categories = [
  { id: "investment", name: "ประกันเพื่อการลงทุน" },
  { id: "accident", name: "ประกันอุบัติเหตุ" },
  { id: "tax", name: "ประกันลดหย่อนภาษี" },
  { id: "pension", name: "ประกันบำนาญ" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

type Product = {
  id: number;
  icon: string;
  color: string;
  title: string;
  benefits: string[];
};

const products: Record<CategoryId, Product[]> = {
  investment: [
    {
      id: 1,
      icon: "favorite",
      color: "primary",
      title: "ดีล 3/1 รับเงินคืน แบบมากกว่า",
      benefits: [
        "รับเงินคืน 2% ทุกปี",
        "ชำระเบี้ยครั้งเดียว",
        "คุ้มครองชีวิตสูง 105%",
      ],
    },
    {
      id: 2,
      icon: "shield",
      color: "secondary",
      title: "ใจ ใจ 15/6 สะสมทรัพย์ง่าย ๆ",
      benefits: [
        "คุ้มครองชีวิตสูงสุด 610%",
        "รับเงินคืนบ่อยครั้ง ทุกปี 7%",
        "รวมผลประโยชน์ตลอดสัญญา 698%",
        "ลดหย่อนภาษีได้สูงสุด 100,000 บาท",
      ],
    },
    {
      id: 3,
      icon: "home",
      color: "accent",
      title: "ใจ ใจ 25/9 คุ้มครองและออมเงิน",
      benefits: [
        "คุ้มครองชีวิตสูงสุด 210 %",
        "รับเงินคืนชีวิต 2%",
        "ผลประโยชน์ตลอดสัญญา 258%",
        "ลดหย่อนภาษีได้สูงสุด 100,000 บาท",
      ],
    },
  ],
  accident: [],
  tax: [],
  pension: [],
};

export default function ProductsPage() {
  const [active, setActive] = useState<CategoryId>("investment");

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-neutral mb-2">
          ผลิตภัณฑ์ของเรา
        </h2>
        <p className="text-gray-600 mb-6">
          แนะนำประกันที่ตอบโจทย์ชีวิตคุณ พร้อมคำปรึกษาจากผู้เชี่ยวชาญ
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:opacity-90 mb-10">
          ปรึกษาแผนที่เหมาะสม
        </button>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-10 border-b border-gray-200">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`pb-2 font-medium ${
                active === c.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products[active]?.map((p) => (
            <div
              key={p.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4"
              style={{ borderColor: `var(--color-${p.color})` }}
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[color:var(--color-${p.color})]/20`}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: `var(--color-${p.color})` }}
                >
                  {p.icon}
                </span>
              </div>
              <h3 className="font-semibold mb-3 text-neutral text-lg">{p.title}</h3>

              <ul className="text-sm text-gray-600 mb-6 space-y-1 text-left">
                {p.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-success text-base">
                      check_circle
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                ดูรายละเอียด
              </button>
            </div>
          ))}
        </div>

        {/* Why choose */}
        <div className="mt-16 bg-white rounded-xl shadow p-8 text-left flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                favorite
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-neutral mb-1">
                ความคุ้มครองยาวนาน
              </h4>
              <p className="text-gray-600 text-sm">
                คุ้มครองตลอดชีวิต มอบความมั่นใจให้กับครอบครัว
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-success/20">
              <span className="material-symbols-outlined text-success text-2xl">
                trending_up
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-neutral mb-1">สร้างมูลค่าเพิ่ม</h4>
              <p className="text-gray-600 text-sm">
                ได้ทั้งคุ้มครองและการสะสมเงินในแผนเดียว
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
