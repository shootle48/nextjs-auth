"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const { data: session } = useSession();
  if (session) router.replace("/welcome");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("อีเมลล์หรือรหัสผ่านไม่ถูกต้อง!");
        return;
      }

      router.replace("welcome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#dceff3]">
      <Navbar />
      <div className="container mx-auto  h-screen py-36 flex flex-col items-center">
        <h1 className="text-4xl font-bold my-3">THONTHIN</h1>
        <h3 className="text-2xl">เข้าสู่ระบบ</h3>
        <form onSubmit={handleSubmit}>
          {error && (
            <div role="alert" className="alert alert-error p-2 my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

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
          <button
            type="submit"
            className="bg-[#7598FC] p-2 rounded-md text-white w-full my-4"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <hr className="my-3" />
        <p>
          ยังไม่เป็นสมาชิก?{" "}
          <Link className="text-blue-500 hover:underline" href="/register">
            สมัครสมาชิก
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
