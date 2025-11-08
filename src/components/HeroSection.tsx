"use client";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  backgroundImage?: string; 
}

export default function HeroSection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#0B0C10] via-[#0E1016] to-[#101218]"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 leading-tight">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 max-w-2xl text-lg mb-10">{subtitle}</p>

    {/* Search bar  */}

      <div className="flex items-center bg-[#101218] border border-gray-700 rounded-lg px-3 py-3 my-4 w-120  focus-within:border-cyan-500 transition">
            <Search size={18} className="text-gray-400 mx-1" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-200 w-44 w-full"
            />
      </div>



      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryButton.href}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition px-8 py-3 rounded-lg font-semibold shadow-md"
        >
          {primaryButton.label}
        </Link>

        {secondaryButton && (
          <Link
            href={secondaryButton.href}
            className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition"
          >
            {secondaryButton.label}
          </Link>
        )}
      </div>
    </section>
  );
}
