import { TrendingDown, TrendingUp } from "lucide-react";

export default function RecentChanges({ products }) {
  return (
    <div className="bg-[#101218]/80 rounded-2xl border border-gray-800 p-5 shadow-md hover:border-cyan-500/30 transition-all">
      <h3 className="text-lg font-semibold mb-4 text-gray-200">Recent Price Changes</h3>
      <div className="space-y-3">
        {products.map((p) => {
          const isDown = p.currentPrice < p.previousPrice;
          const diff = Math.abs(p.previousPrice - p.currentPrice);
          const pct = ((diff / p.previousPrice) * 100).toFixed(1);
          return (
            <div key={p.id} className="flex justify-between items-center">
              <p className="text-gray-300">{p.name}</p>
              <span
                className={`flex items-center gap-1 text-sm ${
                  isDown ? "text-green-400" : "text-red-400"
                }`}
              >
                {isDown ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                {isDown ? "-" : "+"}${diff} ({pct}%)
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
