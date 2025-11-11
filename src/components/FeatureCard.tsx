"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  gradient = "from-cyan-500 to-blue-500",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -4,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent hover:from-cyan-500/50 hover:to-blue-600/30 transition-all duration-500"
    >
      <div className="relative bg-[#0b0c10]/90 rounded-2xl p-6 border border-gray-800 shadow-[0_0_20px_-5px_rgba(0,255,255,0.2)] hover:shadow-cyan-500/30 transition-all duration-300 text-center">
        {/* Animated Icon Background */}
        <div
          className={`absolute -top-8 right-4 w-24 h-24 bg-gradient-to-tr ${gradient} rounded-full blur-3xl opacity-20`}
        />

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-5`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Text */}
        <h3 className="text-lg font-semibold mb-2 text-white tracking-wide">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Shimmer line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-[pulse_3s_infinite]" />
      </div>
    </motion.div>
  );
}
