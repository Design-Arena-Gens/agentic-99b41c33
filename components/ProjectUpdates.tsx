import { projectUpdates } from "@/data/knowledge";

const statusColor: Record<string, string> = {
  Launching: "bg-emerald-50 text-emerald-700",
  "Pre-Launch": "bg-amber-50 text-amber-700",
  "Under Construction": "bg-blue-50 text-blue-700",
  Delivered: "bg-slate-100 text-slate-700"
};

export function ProjectUpdates() {
  return (
    <section id="projects" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip">Active Developments</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">New projects & launch intel</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Track premium launches, tier-1 developer updates, and investment-grade assets with financing, demand, and
              pricing insights.
            </p>
          </div>
          <a href="#consult" className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-soft">
            Request allocation brief
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projectUpdates.map((project) => (
            <article key={project.name} className="card space-y-4">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                  <p className="text-sm text-slate-500">
                    {project.developer} • {project.city}
                  </p>
                </div>
                <span className={`chip ${statusColor[project.status]}`}>{project.status}</span>
              </header>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-700">Launch milestone:</span> {project.launchDate}
                </li>
                <li>
                  <span className="font-semibold text-slate-700">Pricing starts:</span> {project.priceFrom}
                </li>
              </ul>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">Key highlights</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-dashed border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-700">
                Booking desk: {project.contact}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
