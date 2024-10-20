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

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError("Please complete all fields!");
      return;
    }

    try {
      // Check if the user already exists
      const resCheckUser = await fetch("/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resCheckUser.json();

      if (user) {
        setError("User already exists!");
        return;
      }

      // Proceed with registration
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
        setError("");
        setSuccess("User registered successfully!");
        e.target.reset(); // Clear form after success
      } else {
        const { message } = await res.json();
        setError(message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
      setError("An error occurred during registration.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-5">
        <h3>Register Page</h3>
        <hr className="my-3" />
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
              {success}
            </div>
          )}

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="text"
            placeholder="Enter your name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            placeholder="Confirm your password"
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md text-white"
          >
            Sign Up
          </button>
        </form>
        <hr className="my-3" />
        <p>
          Already have an account? Go to{" "}
          <Link className="text-blue-500 hover:underline" href="/login">
            Login
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
