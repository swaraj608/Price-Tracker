"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

//  Monthly Data
const data = [
  { name: "Jan", price: 1200 },
  { name: "Feb", price: 1180 },
  { name: "Mar", price: 1150 },
  { name: "Apr", price: 1100 },
  { name: "May", price: 1080 },
  { name: "Jun", price: 1120 },
  { name: "Jul", price: 1075 },
  { name: "Aug", price: 1050 },
  { name: "Sep", price: 1020 },
  { name: "Oct", price: 980 },
  { name: "Nov", price: 960 },
  { name: "Dec", price: 940 },
];

export default function PriceTrendChart() {
  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-[#101218] to-[#0b0c10] border border-gray-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        📈 Monthly Price Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#94a3b8" }}
            itemStyle={{ color: "#06b6d4" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="url(#colorPrice)"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}