"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Brain, Bell } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C10] text-white flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar />


<HeroSection
  title="Track Prices. Save Smarter."
  subtitle="Stay ahead of the market with real-time product tracking, detailed insights, and instant alerts when prices drop."
  primaryButton={{ label: "Get Started", href: "/signup" }}
  secondaryButton={{ label: "Login", href: "/login" }}
  backgroundImage="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=80"
/>



  {/* <div className="mt-14 w-full flex justify-center">
    <div className="relative bg-[#0E1016] border border-gray-800 rounded-2xl p-6 max-w-4xl shadow-lg hover:border-cyan-500/40 transition">
      <p className="text-gray-400 text-sm mb-3 text-left">Example Preview</p>
      <div className="h-40 flex items-center justify-center text-gray-500 text-sm bg-[#101218] rounded-lg">
        📊 Live Price Graphs Coming Soon
      </div>
    </div>
  </div> */}



{/* Features Section */}
<section className="py-20 bg-[#101218]">
  <h2 className="text-center text-3xl font-bold mb-12">
    Powerful Features
  </h2>
  <div className="grid md:grid-cols-3 gap-8 px-10">
    <FeatureCard
      title="Real-Time Tracking"
      description="Monitor live product prices and get instant updates."
      icon={<TrendingUp size={32} />}
    />
    <FeatureCard
      title="Smart Analytics"
      description="Analyze price trends and get predictive insights."
      icon={<Brain size={32} />}
    />
    <FeatureCard
      title="Custom Alerts"
      description="Receive alerts when prices drop or match your target."
      icon={<Bell size={32} />}
    />
  </div>
</section>

<Process
  title="Start Tracking in Minutes"
  subtitle="From sign-up to smart price alerts — everything happens effortlessly."
  steps={[
    {
      number: 1,
      title: "Create Your Account",
      description:
        "Join thousands of smart shoppers using PriceTracker. Set up your dashboard in seconds.",
      icon: "UserPlus",
      color: "from-cyan-400 to-blue-500",
    },
    {
      number: 2,
      title: "Paste Product Links",
      description:
        "Add products from Amazon, Flipkart, or any online store. We’ll fetch and monitor prices automatically.",
      icon: "Link",
      color: "from-blue-500 to-violet-500",
    },
    {
      number: 3,
      title: "Relax & Get Alerts",
      description:
        "Receive instant alerts when prices drop — via email or dashboard notifications.",
      icon: "BellRing",
      color: "from-violet-500 to-pink-500",
    },
  ]}
/>



      {/* Footer */}
      <Footer />
    </main>
  );
}