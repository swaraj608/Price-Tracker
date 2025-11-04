"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C10] text-white flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500 bg-clip-text text-transparent mb-6">
          Track Prices. Save Smarter.
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg mb-8">
          Stay ahead of the market with real-time price tracking and insights.
          Manage your favorite products effortlessly.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:opacity-90 transition px-6 py-3 rounded-lg font-semibold shadow-md">
          Get Started
        </button>
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
