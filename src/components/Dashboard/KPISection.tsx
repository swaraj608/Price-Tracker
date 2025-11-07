import { TrendingDown, TrendingUp, ShoppingBag, DollarSign } from "lucide-react";

export default function KPISection({ totalProducts, avgChange, drops, highestSavings }) {
  const kpis = [
    {
      label: "Tracked Products",
      value: totalProducts,
      icon: <ShoppingBag className="text-cyan-400" size={22} />,
    },
    {
      label: "Avg Price Change",
      value: `${avgChange.toFixed(2)} USD`,
      icon:
        avgChange < 0 ? (
          <TrendingDown className="text-green-400" size={22} />
        ) : (
          <TrendingUp className="text-red-400" size={22} />
        ),
    },
    {
      label: "Products with Drop",
      value: drops,
      icon: <TrendingDown className="text-green-400" size={22} />,
    },
    {
      label: "Highest Savings",
      value: `$${highestSavings}`,
      icon: <DollarSign className="text-yellow-400" size={22} />,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="p-5 bg-[#101218]/80 rounded-2xl border border-gray-800 hover:border-cyan-500/30 shadow-md hover:shadow-cyan-500/10 transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">{kpi.label}</span>
            {kpi.icon}
          </div>
          <p className="text-2xl font-bold text-white">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}
