"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle signup logic
    console.log(form);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0C10]">
      <div className="bg-[#101218] border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-[#0E1016] border border-gray-700 rounded-lg text-white"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-[#0E1016] border border-gray-700 rounded-lg text-white"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-[#0E1016] border border-gray-700 rounded-lg text-white"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
