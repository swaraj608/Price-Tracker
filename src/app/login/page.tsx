"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
      const res = await axios.post(`${BACKEND_URL}/user/signin`,{
        email ,
        password
      })
      console.log("user loged in successfully");
      toast.success("login successfull !", {
        position: "top-center",
      })
      router.push("/dashboard");
    } catch(err){
      toast.error("error while login !",{
        position: "top-center"
      })
      console.error("error while login : ", err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0C10]">
      <div className="bg-[#101218] border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-[#0E1016] border border-gray-700 rounded-lg text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-[#0E1016] border border-gray-700 rounded-lg text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-cyan-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
