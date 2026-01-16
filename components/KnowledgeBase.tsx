import { knowledgeBase } from "@/data/knowledge";

export function KnowledgeBase() {
  return (
    <section id="knowledge" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip">Analyst Knowledge Hub</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Answers to critical investment questions</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Proprietary research distilled into concise, actionable guidance covering compliance, financing, and market
              strategies across Pakistan.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">
            Ask a question via aman@pakrealtyintel.com for bespoke analysis.
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {knowledgeBase.map((entry) => (
            <article key={entry.question} className="card space-y-3">
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span key={tag} className="chip bg-white text-brand-600">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{entry.question}</h3>
              <p className="text-sm text-slate-600">{entry.answer}</p>
              <p className="text-xs text-slate-400">Updated {entry.updated}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
