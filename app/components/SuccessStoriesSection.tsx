"use client";

import Image from "next/image";

const stories = [
  {
    id: 1,
    image: "/images/story/story-1.jpg",
    title: "เคลมสำเร็จ 1.2 ล้านบาท",
    subtitle: "ประกันโรคร้ายแรง",
    description:
      "คุณสมชาย ได้รับเงินเคลมครบถ้วนภายใน 3 วัน หลังจากได้รับการวินิจฉัยโรคมะเร็ง",
  },
  {
    id: 2,
    image: "/images/story/story-2.jpg",
    title: "เคลมสำเร็จ 800,000 บาท",
    subtitle: "ประกันอุบัติเหตุ",
    description:
      "คุณมาลี ได้รับเงินชดเชยจากการประสบอุบัติเหตุ พร้อมความช่วยเหลือตลอดกระบวนการ",
  },
  {
    id: 3,
    image: "/images/story/story-3.jpg",
    title: "เคลมสำเร็จ 500,000 บาท",
    subtitle: "ประกันสุขภาพ",
    description:
      "คุณณัฐ ได้รับเงินค่ารักษาพยาบาลครบถ้วน จากการผ่าตัดหัวใจ",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          เรื่องราวความสำเร็จ
        </h2>
        <p
          className="mb-12"
          style={{ color: "var(--color-neutral)", fontSize: "var(--text-body)" }}
        >
          ลูกค้าของเราได้รับการดูแลอย่างดีที่สุด
        </p>

        {/* การ์ด */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s) => (
            <div key={s.id} className="flex flex-col">
              {/* รูป + overlay */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-left text-white">
                  <h3
                    className="font-bold"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ fontSize: "var(--text-caption)" }}
                  >
                    {s.subtitle}
                  </p>
                </div>
              </div>

              {/* คำอธิบายด้านล่าง */}
              <p
                className="mt-4 text-center"
                style={{ color: "var(--color-neutral)", fontSize: "var(--text-body)" }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
