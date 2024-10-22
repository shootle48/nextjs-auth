"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {
  const { data: session } = useSession();
  console.log(session);

  const imgURL1 =
    "https://images.unsplash.com/photo-1635127003481-953905b07419?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imgURL2 =
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imgURL3 =
    "https://images.unsplash.com/photo-1677279150226-67d306ecdc80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imgURL4 =
    "https://images.unsplash.com/photo-1705578365106-855388de2ebb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (!session) redirect("/login");

  return (
    <div>
      <Navbar session={session} />
      <div className="container mx-auto h-screen">
        <h3 className="text-3xl my-3">Welcome {session?.user?.name}</h3>

        <div className="carousel">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="hover:shadow-2xl flex flex-col items-starts gap-6 p-6 border-2 border-slate-600 rounded-xl ">
              <div className="w-full h-80">
                <img
                  src={imgURL1}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="context flex flex-col justify-between gap-4">
                <h3 className="text-2xl font-medium">สถานีรถไฟ ฮิโรชิมะ</h3>
                <p className="text-slate-600">
                  เป็นสถานีรถไฟหลักของนครฮิโรชิมะ ประเทศญี่ปุ่น
                  ดำเนินงานโดยบริษัทรถไฟญี่ปุ่นตะวันตก (JR ตะวันตก)
                  สถานีแห่งนี้ให้บริการรถไฟหลายสาย รวมทั้งซันโย ชิงกันเซ็ง
                  สถานีรถไฟแห่งนี้เคยถูกทำลายไปจากการทิ้งระเบิดนิวเคลียร์โดยสหรัฐในช่วงสงครามโลกครั้งที่สอง
                </p>
                <a
                  target="_blank"
                  href="https://th.wikipedia.org/wiki/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%AE%E0%B8%B4%E0%B9%82%E0%B8%A3%E0%B8%8A%E0%B8%B4%E0%B8%A1%E0%B8%B0#:~:text=%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%AE%E0%B8%B4%E0%B9%82%E0%B8%A3%E0%B8%8A%E0%B8%B4%E0%B8%A1%E0%B8%B0%20(%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%3A%20%E5%BA%83%E5%B3%B6%E9%A7%85%3B,%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%87"
                >
                  <button className="btn btn-outline btn-info w-fit">
                    รายละเอียดเพิ่มเติม
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="hover:shadow-2xl flex flex-col items-starts gap-6 p-6 border-2 border-slate-600 rounded-xl ">
              <div className="w-full h-80">
                <img
                  src={imgURL2}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="context flex flex-col justify-between gap-4">
                <h3 className="text-2xl font-medium">โตเกียวทาวเวอร์</h3>
                <p className="text-slate-600">
                  การมองไปยังแถบสีแดงและขาวของโตเกียวทาวเวอร์จะบ่งบอกว่าคุณได้เดินทางมาถึงมหานครโตเกียวแล้ว
                  โตเกียวทาวเวอร์เป็นทั้งสถานที่ทำการแพร่สัญญาณที่ยังใช้งานอยู่
                  และสถานที่ในอุดมคติเพื่อให้นักท่องเที่ยวชมทิวทัศน์เมืองที่วุ่นวายด้านล่าง
                  คุณสามารถชื่นชมเสน่ห์แบบสมัยใหม่ของโครงสร้างนี้ได้จากข้างนอกเมื่อหอคอยนี้ส่องแสงสว่างในเวลากลางคืน
                  แต่ความตื่นเต้นที่แท้จริงนั้นเกิดขึ้นเมื่อคุณปีนไปยังจุดสูงสุดเพื่อชมทิวทัศน์ของเมือง
                  ในฐานของหอคอย
                  คุณจะพบกับห้องสรรพสินค้าชื่อฟุตทาวน์ซึ่งมีร้านค้าและร้านอาหารนานาชาติจำนวนมาก
                </p>
                <a
                  href="https://www.japan.travel/th/spot/1709/"
                  target="_blank"
                >
                  <button className="btn btn-outline btn-info w-fit">
                    รายละเอียดเพิ่มเติม
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="hover:shadow-2xl flex flex-col items-starts gap-6 p-6 border-2 border-slate-600 rounded-xl ">
              <div className="w-full h-80">
                <img
                  src={imgURL3}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="context flex flex-col justify-between gap-4">
                <h3 className="text-2xl font-medium">อากิฮาบาระ</h3>
                <p className="text-slate-600">
                  เมืองแห่งเครื่องใช้ไฟฟ้าอากิฮาบาระ
                  เริ่มจากการเป็นจุดศูนย์กลางของตลาดมืดหลังสงครามโลกครั้งที่สอง
                  ได้กลายเป็นสถานที่ศูนย์รวมของเทคโนโลยีญี่ปุ่น
                  หนาแน่นไปด้วยร้านจำหน่ายเครื่องใช้ไฟฟ้าและสินค้า IT
                  ทุกชนิดสำหรับผู้คนที่พากันมาจากทั่วทุกมุมโลก
                  อีกทั้งเมื่อไม่นานมานี้ยังได้กลายมาเป็นศูนย์กลางทางวัฒนธรรมของบรรดาแฟนพันธุ์แท้ของเกม
                  การ์ตูน และอนิเมะ หรือที่เรียกกันว่าโอตาคุอีกด้วย
                  อากิฮาบาระเป็นดินแดนศักดิ์สิทธิ์สำหรับผู้ที่หลงใหลในวัฒนธรรมย่อยของญี่ปุ่น
                  เช่น พอปไอดอลหรือคอสเพลย์ด้วย
                </p>
                <a
                  href="https://www.gotokyo.org/th/destinations/central-tokyo/akihabara/index.html"
                  target="_blank"
                >
                  <button className="btn btn-outline btn-info w-fit">
                    รายละเอียดเพิ่มเติม
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="hover:shadow-2xl flex flex-col items-starts gap-6 p-6 border-2 border-slate-600 rounded-xl ">
              <div className="w-full h-80">
                <img
                  src={imgURL4}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="context flex flex-col justify-between gap-4">
                <h3 className="text-2xl font-medium">
                  Gundam Factory Yokohama
                </h3>
                <p className="text-slate-600">
                  เป็นศูนย์บันเทิงที่ตั้งอยู่ที่ท่าเรือยามาชิตะในเมืองโยโกฮามา
                  ประเทศญี่ปุ่น จุดเด่นหลักของที่นี่คือ Gundam
                  ที่สามารถเคลื่อนไหวได้ ซึ่งเป็น "หุ่นยนต์" ขนาด 18 เมตร
                  ที่ควบคุมโดยนักบินจากภายใน เป็นหุ่นยนต์ขนาดใหญ่ (mech)
                  จากแฟรนไชส์อนิเมะญี่ปุ่น Gundam
                  และเป็นหุ่นยนต์เคลื่อนไหวได้ประเภทแรกของโลก
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Gundam_Factory_Yokohama"
                  target="_blank"
                >
                  <button className="btn btn-outline btn-info w-fit">
                    รายละเอียดเพิ่มเติม
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
