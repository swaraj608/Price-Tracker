"use client";
import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const res = await axios.post(`${BACKEND_URL}/user/signup`,{
      email: form.email,
      name: form.name,
      password: form.password
      })
      console.log("signup successfull")
      toast.success("signup successfull !",{
        position : "top-center"
      });
      router.push("/login")
    } catch(err) {
      toast.error("error while signup",{
        position: "top-center"
      });
      console.error("signup failed : ", err)
    }
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
