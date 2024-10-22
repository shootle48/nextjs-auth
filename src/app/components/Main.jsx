import React from "react";
import Link from "next/link";

function Main() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
          <p className="mb-5">
            ค้นพบสถานที่ท่องเที่ยวที่น่าตื่นตาตื่นใจไปกับเรา
            ไม่ว่าจะเป็นสถานที่ที่ซ่อนอยู่หรือจุดชมวิวที่น่าประทับใจ
            เรามีทุกอย่างเพื่อคุณ เริ่มต้นการผจญภัยของคุณวันนี้!
          </p>
          <Link href="/login">
            <button className="btn btn-primary">เริ่มต้นการเดินทาง</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
