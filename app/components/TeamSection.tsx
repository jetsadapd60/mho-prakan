"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "คุณรัญรดา(ลูกหว้า) สรวมรัมย์",
    phone: "6701034771",
    role: "เชี่ยวชาญการเคลมและการแก้ไขปัญหา",
    image: "/images/team/lukwa.jpg",
  },
  {
    name: "คุณรัญญานันต์(กระแต) สรวมรัมย์",
    phone: "6701029746",
    role: "ผู้เชี่ยวชาญด้านประกันชีวิต",
    image: "/images/team/kratae.jpg",
  },
  {
    name: "คุณวิชารัตน์(วี) สรวมรัมย์",
    phone: "6701001210",
    role: "ผู้เชี่ยวชาญด้านประกันชีวิต",
    image: "/images/team/vee.jpg",
  },
  {
    name: "คุณเจริญชัย(นัทตี้) มุ่งดี",
    phone: "6701019401",
    role: "ผู้เชี่ยวชาญด้านประกันชีวิต",
    image: "/images/team/pokti.jpg",
  },
  {
    name: "คุณสายธาร(เมเปิ้ล) เลิศเดชะ",
    phone: "6801005043",
    role: "ผู้เชี่ยวชาญด้านประกันชีวิต",
    image: "/images/team/maple.jpg",
  },
  {
    name: "คุณจุฬารัตน์(แนน) ลือ่อ้นรัมย์",
    phone: "6701019399",
    role: "ผู้เชี่ยวชาญด้านประกันชีวิต",
    image: "/images/team/nam.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          ทีมผู้เชี่ยวชาญ
        </h2>
        <p className="text-gray-600 mb-12">
          ประสบการณ์กว่า 10 ปี ในการให้บริการประกันชีวิต
        </p>

        {/* Grid ของสมาชิกทีม */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full object-cover size-24 mb-4"
              />
              <h3 className="font-semibold text-lg text-neutral text-center">
                {member.name}
              </h3>
              <p className="text-primary font-medium mt-1">{member.phone}</p>
              <p className="text-sm text-gray-500 mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
