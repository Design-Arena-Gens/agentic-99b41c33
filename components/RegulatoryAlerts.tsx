import { regulatoryAlerts } from "@/data/knowledge";

export function RegulatoryAlerts() {
  return (
    <section id="regulation" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="chip">Policy & Compliance Watch</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Regulatory signals that shape returns</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Stay ahead of SBCA, LDA, CDA, and FBR directives with distilled takeaways and direct implications for active
            investors, developers, and brokers.
          </p>
        </div>
        <div className="space-y-6">
          {regulatoryAlerts.map((alert) => (
            <article key={alert.title} className="card space-y-4 border-l-4 border-brand-500">
              <header className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{alert.title}</h3>
                  <p className="text-sm text-slate-500">
                    Issued by {alert.issuedBy} • Effective {alert.effectiveFrom}
                  </p>
                </div>
              </header>
              <p className="text-sm text-slate-600">{alert.summary}</p>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">Actionables</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {alert.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
