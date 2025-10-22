const products = [
  {
    id: 1,
    icon: "favorite",
    color: "--color-sky",
    title: "ประกันลดหย่อนภาษี",
    description: "ลดหย่อนภาษีได้สูงสุด 100,000 บาท",
    highlight: "เริ่มต้น 10,500 บาท/เดือน",
    button: "ดูรายละเอียด",
  },
  {
    id: 2,
    icon: "shield",
    color: "--color-warning",
    title: "ประกันบำนาญ",
    description: "คุ้มครองชีวิต พร้อมได้รับเงินบำนาญ",
    highlight: "15 % ต่อปี",
    button: "ดูรายละเอียด",
  },
  {
    id: 3,
    icon: "directions_car",
    color: "--color-success",
    title: "ประกันอุบัติเหตุส่วนบุคคล",
    description: "คุ้มครองครบท้วน ราคาประหยัด",
    highlight: "เริ่มต้น 1,300 บาท/เดือน",
    button: "ดูรายละเอียด",
  },
  {
    id: 4,
    icon: "savings",
    color: "--color-secondary",
    title: "ประกันเพื่อการลงทุน",
    description: "วางชีวิตให้ราบรื่นแบบ Passive Income",
    highlight: "15 % ทุกปี",
    button: "ดูรายละเอียด",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          ผลิตภัณฑ์แนะนำ
        </h2>
        <p
          className="mb-12"
          style={{ color: "var(--color-neutral)", fontSize: "var(--text-body)" }}
        >
          เลือกแผนประกันที่เหมาะกับคุณ
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border-t-4"
              style={{ borderColor: `var(${p.color})` }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <span
                  className="material-symbols-outlined text-5xl mb-4 p-4 rounded-full"
                  style={{
                    color: `var(${p.color})`,
                    backgroundColor: `color-mix(in srgb, var(${p.color}) 20%, transparent)`, // ✅ พื้นหลังจาง (opacity)
                  }}
                >
                  {p.icon}
                </span>
                <h3
                  className="font-semibold mb-2"
                  style={{ fontSize: "var(--text-h3)", color: "var(--color-neutral)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="mb-3"
                  style={{ fontSize: "var(--text-caption)", color: "var(--color-info)" }}
                >
                  {p.description}
                </p>
                <p className="mb-6" style={{ color: `var(${p.color})`, fontWeight: 500 }}>
                  {p.highlight}
                </p>
                <button
                  className="w-full py-3 rounded-full font-medium shadow hover:opacity-90 transition"
                  style={{ backgroundColor: `var(${p.color})`, color: "var(--color-white)" }}
                >
                  {p.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
