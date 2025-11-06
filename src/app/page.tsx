"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C10] text-white flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar />

{/* Hero Section */}
<section className="flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#0B0C10] via-[#0E1016] to-[#101218]">
  <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 leading-tight">
    Track Prices. Save Smarter.
  </h1>

  <p className="text-gray-300 max-w-2xl text-lg mb-10">
    Stay ahead of the market with real-time product tracking, detailed insights,
    and instant alerts when prices drop.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link
      href="/dashboard"
      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition px-8 py-3 rounded-lg font-semibold shadow-md"
    >
      Start Tracking
    </Link>
    <Link
      href="#features"
      className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition"
    >
      Learn More
    </Link>
  </div>

  {/* <div className="mt-14 w-full flex justify-center">
    <div className="relative bg-[#0E1016] border border-gray-800 rounded-2xl p-6 max-w-4xl shadow-lg hover:border-cyan-500/40 transition">
      <p className="text-gray-400 text-sm mb-3 text-left">Example Preview</p>
      <div className="h-40 flex items-center justify-center text-gray-500 text-sm bg-[#101218] rounded-lg">
        📊 Live Price Graphs Coming Soon
      </div>
    </div>
  </div> */}
</section>


      {/* Features Section */}
      <section className="py-20 bg-[#101218]">
        <h2 className="text-center text-3xl font-bold mb-12">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-10">
          <FeatureCard
            title="Real-Time Tracking"
            description="Monitor live product prices and get instant updates."
            icon="📈"
          />
          <FeatureCard
            title="Smart Analytics"
            description="Analyze price trends and get predictive insights."
            icon="🤖"
          />
          <FeatureCard
            title="Custom Alerts"
            description="Receive alerts when prices drop or match your target."
            icon="🔔"
          />
        </div>
      </section>
      {/* How It Works Section */}
<section className="py-24 bg-[#0b0c10] border-t border-gray-800">
  <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    How It Works
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-10 text-center">
    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold shadow-lg mb-6">
        1
      </div>
      <h3 className="text-xl font-semibold mb-3">Paste Product Link</h3>
      <p className="text-gray-400">
        Copy the link of your favorite product from Amazon, Flipkart, or any supported store.
      </p>
    </div>  

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold shadow-lg mb-6">
        2
      </div>
      <h3 className="text-xl font-semibold mb-3">Track & Analyze</h3>
      <p className="text-gray-400">
        We fetch live price data, track fluctuations, and generate visual insights for you.
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-teal-500 to-purple-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold shadow-lg mb-6">
        3
      </div>
      <h3 className="text-xl font-semibold mb-3">Get Smart Alerts</h3>
      <p className="text-gray-400">
        Receive instant notifications when prices drop to your desired target.
      </p>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </main>
  );
}