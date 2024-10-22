"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function Navbar({ session }) {
  return (
    <nav className="bg-[#333] text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/"><p className="text-xl font-semibold">THONTHIN</p></Link>
          </div>
          <ul className="flex">
            {!session ? (
              <>
                <li className="mx-3 hover:bg-[#7598FC] text-white border py-2 px-3 rounded-md text-lg my-2">
                  <Link href="/login">เข้าสู่ระบบ </Link>
                </li>
                <li className="mx-3 bg-[#7598FC] text-white border py-2 px-3 rounded-md text-lg my-2">
                  <Link href="/register">สมัครสมาชิก </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mx-3">
                  <a
                    href="/welcome"
                    className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                  >
                    Blogs
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    onClick={() => signOut()}
                    className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                  >
                    ออกจากระบบ
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
