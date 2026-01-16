import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          <span className="chip">Pakistan Real Estate Expert Desk</span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Actionable intelligence for Pakistan&apos;s property markets, curated by analysts with boots on the
            ground.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Navigate investments, monitor mega-projects, and stay compliant with evolving regulations across Karachi,
            Lahore, Islamabad, Gwadar, and emerging economic zones. Updated weekly with developer briefings, policy
            alerts, and proprietary demand signals.
          </p>
          <div className="max-w-2xl">
            <SearchBar />
          </div>
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Projects tracked", value: "190+" },
              { label: "Verified developers", value: "70" },
              { label: "Average yield models", value: "35" },
              { label: "Policy notes", value: "420" }
            ].map((item) => (
              <div key={item.label} className="card text-center">
                <dt className="text-xs uppercase tracking-wide text-slate-400">{item.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex-1">
          <div className="card h-full space-y-6">
            <h2 className="text-xl font-semibold text-slate-900">This week&apos;s analyst takeaways</h2>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-brand-600">Karachi waterfront:</span> escrow enforcement is throttling
                speculative flips; prioritize developer-backed rental guarantees.
              </li>
              <li>
                <span className="font-semibold text-brand-600">Lahore smart zones:</span> solarized mixed-use towers are
                clearing bookings 18% faster; capture early-phase installments.
              </li>
              <li>
                <span className="font-semibold text-brand-600">Islamabad vertical:</span> CDA fast-track approvals create
                tailwind for branded residences near the Expressway knowledge corridor.
              </li>
            </ul>
            <div className="rounded-xl border border-dashed border-brand-200 bg-brand-50/70 p-4 text-sm text-slate-600">
              <p className="font-semibold text-brand-700">Signal highlight</p>
              <p>
                Foreign Direct Investment into real estate surged 14% QoQ driven by RDA inflows. Expect premium apartment
                rentals to tighten over summer as corporate relocations finalize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
