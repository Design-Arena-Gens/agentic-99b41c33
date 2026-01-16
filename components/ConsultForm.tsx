export function ConsultForm() {
  return (
    <section id="consult" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-3xl bg-slate-900 p-10 text-white md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100">
              Advisory Desk
            </span>
            <h2 className="text-3xl font-semibold">Engage Pakistan&apos;s real estate intelligence specialists</h2>
            <p className="text-white/70">
              Get bespoke investment roadmaps, developer due diligence, rental yield modeling, and regulatory guidance
              tailored to your capital stack. Our analysts sit across Karachi, Lahore, Islamabad, and Gwadar delivering
              on-ground insights and weekly dashboards.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• 48-hour turnaround on developer validation</li>
              <li>• Access to primary sales allocations from trusted partners</li>
              <li>• Scenario modeling for PKR/USD exposure and financing</li>
            </ul>
          </div>
          <form className="space-y-4 rounded-2xl bg-white p-6 text-slate-900 shadow-soft">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">Name</label>
              <input
                type="text"
                required
                placeholder="Ahsan Khan"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Investment Focus
              </label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                <option>Karachi Waterfront Rentals</option>
                <option>Lahore Smart Communities</option>
                <option>Islamabad Commercial Offices</option>
                <option>Gwadar Long-term Land</option>
                <option>Logistics & Warehousing</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Capital Allocation (PKR)
              </label>
              <input
                type="number"
                min={0}
                placeholder="50000000"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Objectives
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="Tell us about your goals, timeline, and risk appetite."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Request Strategy Call
            </button>
            <p className="text-xs text-slate-500">
              By submitting you agree to our compliance policy. We respond within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
