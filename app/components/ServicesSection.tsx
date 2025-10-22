"use client";

export default function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          บริการของเรา
        </h2>
        <p className="text-gray-600 mb-12">
          ครอบคลุมทุกความต้องการด้านประกันชีวิต
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* การ์ดซ้าย */}
          <div className="bg-blue-50 rounded-2xl shadow p-8">
            <div className="flex flex-col items-center mb-6">
              <span className="bg-sky p-7 rounded-full material-symbols-outlined text-white mb-2" style={{fontSize: '40px'}}>
                handshake
              </span>
              <h3 className="font-medium text-xl text-neutral">
                ปรึกษาเคลมทุกบริษัท
              </h3>
            </div>

            {/* flow icons */}
            <div className="flex justify-center items-center gap-6 mb-6 text-sky">
              <div className="flex flex-col items-center">
                <span className="bg-white p-2 rounded-full drop-shadow material-symbols-outlined text-3xl">
                  description
                </span>
                <span className="text-sm mt-1 text-neutral">ตรวจสอบ</span>
              </div>
              <span className="text-xl">→</span>
              <div className="flex flex-col items-center">
                <span className="bg-white p-2 rounded-full drop-shadow material-symbols-outlined text-3xl">
                  search
                </span>
                <span className="text-sm mt-1 text-neutral">วิเคราะห์</span>
              </div>
              <span className="text-xl">→</span>
              <div className="flex flex-col items-center">
                <span className="bg-white text-green-500 p-2 rounded-full drop-shadow material-symbols-outlined text-3xl">
                  check
                </span>
                <span className="text-sm mt-1 text-neutral">สำเร็จ</span>
              </div>
            </div>

            {/* list */}
            <ul className="space-y-6 text-gray-700 mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                ตรวจสอบสิทธิ์การเคลมฟรี
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                ช่วยเหลือการยื่นเอกสาร
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                ติดตามผลการเคลม
              </li>
            </ul>

            <button className="w-full bg-sky text-white py-3 rounded-full font-medium shadow hover:bg-blue-600">
              เริ่มปรึกษาเคลม
            </button>
          </div>

          {/* การ์ดขวา */}
          <div className="bg-green-50 rounded-2xl shadow p-8">
            <div className="flex flex-col items-center mb-6">
              <span className="bg-green-500 p-7 rounded-full material-symbols-outlined text-white mb-2" style={{fontSize: '40px'}}>
                shield
              </span>
              <h3 className="font-medium text-xl text-neutral">
                เคลมกับแรบบิท ประกันชีวิต
              </h3>
            </div>

            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  star
                </span>
                <div>
                  <p className="font-medium">เคลมเร็วที่สุด</p>
                  <p className="text-sm text-gray-500">
                    ระบบเคลมอัตโนมัติ ได้เงินภายใน 24 ชั่วโมง
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  favorite
                </span>
                <div>
                  <p className="font-medium">ดูแลตลอดชีวิต</p>
                  <p className="text-sm text-gray-500">
                    ทีมงานพร้อมให้คำปรึกษา 24 ชั่วโมง 7 วัน
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  add_circle
                </span>
                <div>
                  <p className="font-medium">ครอบคลุมสูงสุด</p>
                  <p className="text-sm text-gray-500">
                    คุ้มครองโรคร้ายแรงกว่า 50 โรค
                  </p>
                </div>
              </li>
            </ul>

            <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium shadow hover:bg-green-700">
              ดูผลิตภัณฑ์แรบบิท
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
