"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { data: session } = useSession();
  if (session) redirect("/welcome");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน!");
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError("กรุณาใส่ข้อมูลให้ครบถ้วน!");
      return;
    }

    try {
      const resCheckUser = await fetch("/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resCheckUser.json();

      if (user) {
        setError("มีบัญชีผู้ใช้นี้อยู่แล้ว!");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        setError("");
        setSuccess("สมัครสมาชิกแล้ว!");
        form.reset();
      } else {
        console.log("Error registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="bg-[#dceff3]">
      <Navbar />
      <div className="container mx-auto h-screen py-36 flex flex-col items-center">
        <h1 className="text-4xl font-bold my-3"  >THONTHIN</h1>
        <h3 className="text-2xl">ลงทะเบียน</h3>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500 text-sm text-white py-1 px-3 rounded-md mt-2 w-full text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500 text-sm text-white py-1 px-3 rounded-md mt-2 w-full text-center">
              {success}
            </div>
          )}

          <div class="relative">
            <label className="font-semibold opacity-40">ชื่อผู้ใช้</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 w-6 h-6 absolute left-2 top-10 "
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              onChange={(e) => setName(e.target.value)}
              className="block p-2 pl-10 my-2 rounded-md "
              type="text"
            />
          </div>

          <div class="relative">
            <label className="font-semibold opacity-40">อีเมลล์</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 w-6 h-6 absolute left-2 top-10"
            >
              <path
                fill-rule="evenodd"
                d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2 pl-10 my-2 rounded-md "
              type="email"
            />
          </div>
          <div class="relative">
            <label className="font-semibold opacity-40">รหัสผ่าน</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 w-6 h-6 absolute left-2 top-10"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="block p-2 pl-10 my-2 rounded-md "
              type="password"
            />
          </div>
          <div class="relative">
            <label className="font-semibold opacity-40">ยืนยันรหัสผ่าน</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 w-6 h-6 absolute left-2 top-10"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block p-2 pl-10 my-2 rounded-md "
              type="password"
            />
          </div>
          <button
            type="submit"
            className="bg-[#7598FC] p-2 rounded-md text-white w-full my-4"
          >
            สมัครสมาชิก
          </button>
        </form>
        <hr className="my-3" />
        <p>
          มีบัญชีแล้ว?{" "}
          <Link className="text-blue-500 hover:underline" href="/login">
            เข้าสู่ระบบ
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
