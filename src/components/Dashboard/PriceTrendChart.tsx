"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSearchParams } from "next/navigation";

const data = [
  { name: "Mon", avg: 1250 },
  { name: "Tue", avg: 1200 },
  { name: "Wed", avg: 1180 },
  { name: "Thu", avg: 1175 },
  { name: "Fri", avg: 1190 },
  { name: "Sat", avg: 1160 },
  { name: "Sun", avg: 1150 },
];
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function PriceTrendChart() {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  useEffect(() => {
    axios.post(`${BACKEND_URL}/api/v1/products/find`, { url })
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className="bg-[#101218]/80 rounded-2xl border border-gray-800 p-5 shadow-md hover:border-cyan-500/30 transition-all">
      <h3 className="text-lg font-semibold mb-4 text-gray-200">Weekly Price Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip contentStyle={{ backgroundColor: "#111", borderColor: "#333" }} />
          <Line type="monotone" dataKey="avg" stroke="#06b6d4" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
