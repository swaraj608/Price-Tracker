import { TrendingDown, TrendingUp } from "lucide-react";

export default function ProductGrid({ products }) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-6 text-gray-200">Tracked Products</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => {
          const isDown = p.currentPrice < p.previousPrice;
          const diff = Math.abs(p.previousPrice - p.currentPrice);
          const pct = ((diff / p.previousPrice) * 100).toFixed(1);

          return (
            <div
              key={p.id}
              className="relative bg-[#101218]/90 border border-gray-800 rounded-2xl p-5 shadow-lg hover:border-cyan-500/40 transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold tracking-wide">{p.name}</h2>
                {isDown ? (
                  <TrendingDown className="text-green-400" />
                ) : (
                  <TrendingUp className="text-red-400" />
                )}
              </div>

              <div className="space-y-1 text-sm">
                <p className="text-gray-400">
                  Current: <span className="text-cyan-400 font-medium">${p.currentPrice}</span>
                </p>
                <p className="text-gray-500 text-xs">Previous: ${p.previousPrice}</p>
                <p
                  className={`text-xs font-semibold ${
                    isDown ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isDown ? "↓" : "↑"} {pct}% {isDown ? "cheaper" : "increase"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
