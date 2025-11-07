"use client";
import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  gradient: string; // gradient Tailwind class for the number circle
}

interface ProcessProps {
  title: string;
  steps: Step[];
}

export default function Process({ title, steps }: ProcessProps) {
  return (
    <section className="py-24 bg-[#0b0c10] border-t border-gray-800">
      <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-10 text-center">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold shadow-lg mb-6 ${step.gradient}`}
            >
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
