import { investmentPlays } from "@/data/knowledge";

export function InvestmentPlays() {
  return (
    <section id="strategies" className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100">
              Playbooks
            </span>
            <h2 className="mt-4 text-3xl font-semibold">Investment theses vetted by institutional desks</h2>
            <p className="mt-2 max-w-3xl text-white/70">
              Blend cash-flow opportunities with strategic land and logistics plays tailored to Pakistan&apos;s evolving
              macro landscape.
            </p>
          </div>
          <div className="text-sm text-brand-100 md:text-right">
            Benchmark assumptions validated against SBP data and developer disclosures.
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {investmentPlays.map((play) => (
            <article key={play.strategy} className="flex h-full flex-col rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-brand-200">{play.idealInvestor}</p>
                <h3 className="text-xl font-semibold text-white">{play.strategy}</h3>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-brand-100">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-brand-300">Hold Period</dt>
                  <dd className="mt-1 font-semibold text-white">{play.holdPeriod}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-brand-300">Target Yield/IRR</dt>
                  <dd className="mt-1 font-semibold text-emerald-300">{play.yoc}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-white/80">{play.snapshot}</p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase text-brand-200">Execution Notes</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-100">
                  {play.recommendations.map((item) => (
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
