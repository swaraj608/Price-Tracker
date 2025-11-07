"use client";

import { useState } from "react";
import KPISection from "@/components/Dashboard/KPISection";
import PriceTrendChart from "@/components/Dashboard/PriceTrendChart";
import ProductGrid from "@/components/Dashboard/ProductGrid";
import RecentChanges from "@/components/Dashboard/RecentChanges";

export default function Dashboard() {
  const [products] = useState([
    { id: 1, name: "iPhone 15 Pro", currentPrice: 1199, previousPrice: 1249 },
    { id: 2, name: "Sony WH-1000XM5", currentPrice: 349, previousPrice: 379 },
    { id: 3, name: "MacBook Air M3", currentPrice: 1299, previousPrice: 1399 },
    { id: 4, name: "Apple Watch Ultra", currentPrice: 799, previousPrice: 849 },
  ]);

  // ---- Derived Analytics ----
  const totalProducts = products.length;
  const avgChange =
    products.reduce((acc, p) => acc + (p.currentPrice - p.previousPrice), 0) / totalProducts;
  const drops = products.filter((p) => p.currentPrice < p.previousPrice).length;
  const highestSavings = Math.max(
    ...products.map((p) => p.previousPrice - p.currentPrice)
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#090b10] via-[#0d1118] to-[#090b10]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          A holistic view of your price-tracking performance & market trends.
        </p>
      </header>

      {/* KPI Cards */}
      <KPISection
        totalProducts={totalProducts}
        avgChange={avgChange}
        drops={drops}
        highestSavings={highestSavings}
      />

      {/* Charts Section */}
      <section className="grid md:grid-cols-2 gap-6 my-10">
        <PriceTrendChart />
        <RecentChanges products={products} />
      </section>

      {/* Product Grid */}
      <ProductGrid products={products} />
    </main>
  );
}
