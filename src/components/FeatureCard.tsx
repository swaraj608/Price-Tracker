import React from "react";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gradient-to-b from-[#1A1C22] to-[#0B0C10] border border-gray-800 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
