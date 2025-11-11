"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Link as LinkIcon,
  BellRing,
  ArrowDownCircle,
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ProcessProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

const iconMap: Record<string, any> = {
  UserPlus,
  Link: LinkIcon,
  BellRing,
  ArrowDownCircle,
};

export default function Process({ title, subtitle, steps }: ProcessProps) {
  return (
    <section className="relative py-28 bg-[#0B0C10] border-t border-gray-800 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,255,0.08),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Timeline Style Layout */}
        <div className="relative flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0">
          {/* Connector Line */}
          <div className="absolute hidden md:block top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 -translate-y-1/2" />

          {steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center md:w-1/3 px-6"
              >
                <div
                  className={`mb-6 w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,255,255,0.2)]`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
