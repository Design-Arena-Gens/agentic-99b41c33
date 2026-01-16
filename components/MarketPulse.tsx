import { marketPulse } from "@/data/knowledge";

export function MarketPulse() {
  return (
    <section id="market-pulse" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip">Quarterly Market Pulse</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Real-time intelligence across key cities</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Analyst notes covering absorption trends, pricing, liquidity, and emerging sectors across Pakistan&apos;s
              most active markets.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-700">
            Updated 08 May 2024 • next refresh in 5 days
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {marketPulse.map((item) => (
            <article key={item.city} className="card space-y-4">
              <header className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.city}</h3>
                  <p className="text-sm text-slate-500">YoY growth {item.yoyGrowth}% • Liquidity {item.liquidity}</p>
                </div>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                  {item.avgPrice}
                </span>
              </header>
              <p className="text-sm text-slate-600">{item.commentary}</p>
              <div className="flex flex-wrap gap-2">
                {item.hotSectors.map((sector) => (
                  <span key={sector} className="chip bg-slate-100 text-slate-700">
                    {sector}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
