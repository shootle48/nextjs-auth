"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {
  const { data: session } = useSession();
  console.log(session);

  const imgURL =
    "https://images.unsplash.com/photo-1635127003481-953905b07419?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (!session) redirect("/login");

  return (
    <div>
      <Navbar session={session} />
      <div className="container mx-auto">
        <h3 className="text-3xl my-3">Welcome {session?.user?.name}</h3>
        <hr className="my-3" />
        <div className="grid grid-cols-2 mx-auto gap-10 ">
          {/* item1 */}
          <a href="" className="hover:shadow-2xl">
            <div className="flex flex-col items-starts gap-6 p-6 border-2 border-slate-600 rounded-xl ">
              <div className="">
                <img src={imgURL} alt="" />
              </div>
              <div className="context">
                <h3 className="text-2xl font-medium">สถานีรถไฟ ฮิโรชิมะ</h3>
                <p className="text-slate-600">
                  เป็นสถานีรถไฟหลักของนครฮิโรชิมะ ประเทศญี่ปุ่น
                  ดำเนินงานโดยบริษัทรถไฟญี่ปุ่นตะวันตก (JR ตะวันตก)
                  สถานีแห่งนี้ให้บริการรถไฟหลายสาย รวมทั้งซันโย ชิงกันเซ็ง
                  สถานีรถไฟแห่งนี้เคยถูกทำลายไปจากการทิ้งระเบิดนิวเคลียร์โดยสหรัฐในช่วงสงครามโลกครั้งที่สอง
                </p>
              </div>
            </div>
          </a>
          {/* item2 */}
          <a href="" className="hover:shadow-2xl ">
            <div className="flex flex-col items-start gap-6 p-6 border-2 border-slate-600 rounded-xl">
              <div className="">
                <img src={imgURL} alt="" />
              </div>
              <div className="context">
                <h3 className="text-2xl font-medium">สถานีรถไฟ ฮิโรชิมะ</h3>
                <p className="text-slate-600">
                  เป็นสถานีรถไฟหลักของนครฮิโรชิมะ ประเทศญี่ปุ่น
                  ดำเนินงานโดยบริษัทรถไฟญี่ปุ่นตะวันตก (JR ตะวันตก)
                  สถานีแห่งนี้ให้บริการรถไฟหลายสาย รวมทั้งซันโย ชิงกันเซ็ง
                  สถานีรถไฟแห่งนี้เคยถูกทำลายไปจากการทิ้งระเบิดนิวเคลียร์โดยสหรัฐในช่วงสงครามโลกครั้งที่สอง
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
