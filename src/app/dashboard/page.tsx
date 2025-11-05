"use client";

import { useState } from "react";
import { Plus, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      currentPrice: 1199,
      previousPrice: 1249,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      currentPrice: 349,
      previousPrice: 379,
    },
  ]);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white px-6 pt-12 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0c10] via-[#0f1118] to-[#0b0c10]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Monitor your tracked products and spot the best deals instantly.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 px-5 py-2 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-cyan-500/20 transition-all">
          <Plus size={18} /> Add Product
        </button>
      </header>

      {/* Products */}
      {products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const isPriceDown = p.currentPrice < p.previousPrice;
            const priceDiff = Math.abs(p.previousPrice - p.currentPrice);
            const priceChangePercent = (
              (priceDiff / p.previousPrice) *
              100
            ).toFixed(1);

            return (
              <div
                key={p.id}
                className="relative bg-[#101218]/90 border border-gray-800 rounded-2xl p-5 shadow-lg hover:border-cyan-500/40 transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold tracking-wide">
                    {p.name}
                  </h2>
                  {isPriceDown ? (
                    <TrendingDown className="text-green-400" />
                  ) : (
                    <TrendingUp className="text-red-400" />
                  )}
                </div>

                <div className="space-y-1 text-sm">
                  <p className="text-gray-400">
                    Current Price:{" "}
                    <span className="text-cyan-400 font-medium">
                      ${p.currentPrice}
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    Previous: ${p.previousPrice}
                  </p>
                  <p
                    className={`text-xs font-semibold ${
                      isPriceDown ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isPriceDown ? "↓" : "↑"} {priceChangePercent}%{" "}
                    {isPriceDown ? "cheaper" : "increase"}
                  </p>
                </div>

                {/* Simulated Graph Placeholder */}
                <div className="mt-4 h-24 rounded-xl bg-gradient-to-t from-gray-800 to-[#0b0c10] flex items-center justify-center text-gray-500 text-sm">
                  📊 Mini Chart Coming Soon
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Empty State
        <div className="text-center text-gray-400 mt-20 animate-fadeIn">
          <p className="text-lg font-medium">No products added yet 🚀</p>
          <p className="text-sm text-gray-500 mt-1">
            Start tracking your first product to see insights here.
          </p>
          <Link
            href="#"
            className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Add Your First Product
          </Link>
        </div>
      )}
    </main>
  );
}
