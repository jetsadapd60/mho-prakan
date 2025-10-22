"use client";

const testimonials = [
  {
    id: 1,
    name: "คุณแอน",
    text: "บริการดีเยี่ยมยอดมาก ให้คำแนะนำละเอียด เข้าใจง่าย ทำให้มั่นใจในการตัดสินใจซื้อประกัน",
    color: "var(--color-primary)",
    bg: "bg-primary/10",
  },
  {
    id: 2,
    name: "คุณมาร์ค",
    text: "มั่นคงค่ะ เงินกองทุน 3 พันล้าน ทำให้รู้สึกปลอดภัยและวางใจได้จริง ๆ",
    color: "var(--color-secondary)",
    bg: "bg-secondary/10",
  },
  {
    id: 3,
    name: "คุณนิด",
    text: "ตั้งแต่ทำประกันชีวิตมา มีลูกหนี้แนะนำและคุยได้ตลอด ดูแลดีมาก ๆ",
    color: "var(--color-success)",
    bg: "bg-success/10",
  },
];

const chats = [
  {
    id: 1,
    from: "customer",
    text: "สนใจประกันสุขภาพค่ะ ช่วยแนะนำหน่อย",
  },
  {
    id: 2,
    from: "admin",
    text: "ยินดีค่ะ จะแนะนำแผนที่เหมาะกับคุณเลย",
  },
  {
    id: 3,
    from: "customer",
    text: "มันเกิดจากความซื่อสัตย์และจริงใจของหนูเองด้วยค่ะ ประกันใจมาก",
  },
  {
    id: 4,
    from: "admin",
    text: "ขอบคุณค่ะ เราพร้อมดูแลคุณตลอดไป",
  },
  {
    id: 5,
    from: "customer",
    text: "บริการดีเยี่ยมยอดมาก ให้คำปรึกษาละเอียดมาก",
  },
];

export default function CustomerVoices() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          ลูกค้าพูดถึงเราอย่างไร?
        </h2>
        <p
          className="mb-12"
          style={{
            fontSize: "var(--text-body)",
            color: "var(--color-neutral)",
          }}
        >
          เสียงจริงจากผู้ใช้บริการประกันชีวิตและสุขภาพ
        </p>
        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: t.color }}
                >
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="ml-3">
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--color-neutral)" }}
                  >
                    {t.name}
                  </h3>
                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-base"
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className={`p-4 rounded-xl ${t.bg} text-sm leading-relaxed`}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Chat Simulation */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-12 max-w-3xl mx-auto text-left">
          <h3
            className="font-semibold mb-4 text-center"
            style={{
              fontSize: "var(--text-h3)",
              color: "var(--color-neutral)",
            }}
          >
            การสนทนาจริงกับลูกค้า
          </h3>
          {/* Chat Container */}
          <div className="p-6 space-y-4">
            {chats.map((c) => (
              <div
                key={c.id}
                className={`flex items-start gap-3 ${
                  c.from === "admin" ? "justify-end" : "justify-start"
                }`}
              >
                {/* ลูกค้า */}
                {c.from === "customer" && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                      <span className="material-symbols-outlined text-sm">
                        person
                      </span>
                    </div>
                    <p
                      className="px-4 py-2  rounded-bl-xl rounded-r-xl text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {c.text}
                    </p>
                  </div>
                )}

                {/* แอดมิน */}
                {c.from === "admin" && (
                  <div className="flex items-center gap-2">
                    <p
                      className="px-4 py-2 rounded-l-xl rounded-br-xl bg-gray-300"
                    >
                      {c.text}
                    </p>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                      <span className="material-symbols-outlined text-sm">
                        support_agent
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center text-white shadow-lg"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
          }}
        >
          <h3 className="font-bold mb-2" style={{ fontSize: "var(--text-h3)" }}>
            อยากได้รับคำปรึกษาเหมือนลูกค้าของเราไหม?
          </h3>
          <p className="mb-6" style={{ fontSize: "var(--text-body)" }}>
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย พร้อมแผนประกันที่เหมาะกับคุณ
          </p>
          <button className="px-6 py-3 rounded-full font-medium bg-white text-primary shadow hover:opacity-90 transition">
            <span className="material-symbols-outlined align-middle mr-2">
              event
            </span>
            นัดปรึกษาฟรี
          </button>
        </div>
      </div>
    </section>
  );
}
