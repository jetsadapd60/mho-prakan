"use client";

const testimonials = [
  {
    id: 1,
    name: "คุณสุดา จันทร์ศรี",
    text: "ทีมแรบบิทดูแลดีมาก เวลาเคลมได้เงินเร็ว ไม่ต้องรอนาน แนะนำเลยค่ะ",
  },
  {
    id: 2,
    name: "คุณวิทยา สมบูรณ์",
    text: "บริการเยี่ยม ให้คำปรึกษาดี ช่วยเหลือตั้งแต่เริ่มต้นจนได้เงินเคลม",
  },
  {
    id: 3,
    name: "คุณประยุทธ มั่นคง",
    text: "ไว้ใจได้ครับ ทีมมืออาชีพ รู้จริง ช่วยได้จริง ขอบคุณมากครับ",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          ความคิดเห็นลูกค้า
        </h2>
        <p
          className="mb-12"
          style={{ color: "var(--color-neutral)", fontSize: "var(--text-body)" }}
        >
          ฟังเสียงจากลูกค้าจริงของเรา
        </p>

        {/* การ์ด */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <h3
                className="font-semibold mb-2"
                style={{ fontSize: "var(--text-body)", color: "var(--color-neutral)" }}
              >
                {t.name}
              </h3>
              {/* ดาว */}
              <div className="flex mb-3 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl">
                    star
                  </span>
                ))}
              </div>
              {/* ข้อความรีวิว */}
              <p className="italic text-gray-700">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
