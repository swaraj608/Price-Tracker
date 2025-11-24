"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Brain, Bell } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import Process from "@/components/Process";

export default function Home() {
  const features = [
    {
      title: "Real-Time Tracking",
      description:
        "Monitor live product prices across multiple stores with instant updates whenever they change.",
      icon: TrendingUp,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Smart Analytics",
      description:
        "Visualize detailed price history and AI-powered insights to know the best time to buy.",
      icon: Brain,
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      title: "Custom Alerts",
      description:
        "Set your target price and get notified instantly when it drops — never overpay again.",
      icon: Bell,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0C10] text-white flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
     <HeroSection
        title="Track Prices. Save Smarter."
        subtitle="Stay ahead of the market with real-time product tracking, detailed insights, and instant alerts when prices drop."
        primaryButton={{ label: "Get Started", href: "/signup" }}
        secondaryButton={{ label: "Login", href: "/login" }}
        backgroundImage="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Features Section */}
      <section className="relative py-24 bg-[#0b0c10] overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cyan-500/10 blur-3xl rounded-full -z-10" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Everything you need to make smarter shopping decisions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid gap-10 px-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
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
