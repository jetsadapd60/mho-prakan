"use client";

import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            มั่นใจได้... ลูกค้าของเราได้รับกรมธรรม์จริง
          </h2>
          <p className="text-gray-600" style={{ fontSize: "var(--text-body)" }}>
            ทุกกรมธรรม์มีส่งมอบถึงมือลูกค้า พร้อมรอยยิ้มและความมั่นใจ
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Image + Overlay */}
          {["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg", "g6.jpg"].map(
            (img, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow"
              >
                <Image
                  src={`/images/gallery/${img}`}
                  alt={`Gallery ${i}`}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover  group-hover:scale-105 transition"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white px-4 py-2 text-sm">
                  {i === 0 && "มั่นใจทุกขั้นตอน"}
                  {i === 1 && "ปลอดภัยมั่นคง"}
                </div>
              </div>
            )
          )}
        </div>

        <div className="lg:px-50">
          {/* Testimonial Highlight */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-12">
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/story/story-1.jpg"
                alt="ลูกค้ารับกรมธรรม์"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <p className="text-3xl text-pink-500 mb-4">“</p>
              <p className="italic text-gray-700 mb-6 leading-relaxed">
                ขอบคุณทีมงานที่ดูแล ตั้งแต่เริ่มกรมธรรม์ ได้รับกรมธรรม์ในมือ
                บริการดีมาก ประทับใจจริงๆ
              </p>
              <div>
                <p className="font-semibold text-gray-900">คุณสมใจ ใจดี</p>
                <p className="text-sm text-gray-500">ลูกค้าประกันชีวิต</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <span
                className="material-symbols-outlined text-4xl mb-3 p-4 rounded-full  text-primary bg-primary/20"

              >
                groups
              </span>
              <h3
                className="font-bold mb-1"
                style={{
                  fontSize: "var(--text-h3)",
                  color: "var(--color-neutral)",
                }}
              >
                ลูกค้ากว่า 1,000 คน
              </h3>
              <p className="text-gray-600">ได้รับกรมธรรม์ส่งถึงมือจริง</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <span
                className="material-symbols-outlined text-4xl mb-3 p-4 rounded-full text-secondary bg-secondary/20"
              >
                local_shipping
              </span>
              <h3
                className="font-bold mb-1"
                style={{
                  fontSize: "var(--text-h3)",
                  color: "var(--color-neutral)",
                }}
              >
                บริการส่งตรงถึงบ้าน
              </h3>
              <p className="text-gray-600">มั่นใจในบริการส่งกรมธรรม์</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-10 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-2">
            อยากได้รับคำปรึกษาและกรมธรรม์เหมือนลูกค้าของเราหรือไม่?
          </h3>
          <p className="mb-6 text-white/90">
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย พร้อมแผนประกันที่เหมาะกับคุณ
          </p>
          <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
            นัดปรึกษาฟรี
          </button>
        </div>
      </div>
    </section>
  );
}
