"use client";

import { useMemo, useState } from "react";
import { knowledgeBase } from "@/data/knowledge";
import { matchQueries } from "@/lib/search";
import { Dialog, DialogContent } from "./ui/Dialog";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return matchQueries(query, knowledgeBase).slice(0, 5);
  }, [query]);

  return (
    <>
      <div className="relative">
        <input
          type="search"
          placeholder="Search anything: e.g. Lahore LDA approval, DHA rental yield, SBCA escrow"
          className="w-full rounded-full border border-slate-200 bg-white px-6 py-4 text-base shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 md:inline-flex"
        >
          Explore Intel
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="knowledge-query" className="block text-xs font-semibold uppercase text-slate-400">
                Knowledge Search
              </label>
              <input
                id="knowledge-query"
                type="search"
                autoFocus
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find investment guides, regulations, or city market playbooks"
              />
            </div>

            {results.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
                Start typing to discover curated intelligence from analysts covering all major Pakistani markets.
              </div>
            ) : (
              <ul className="space-y-4">
                {results.map((item) => (
                  <li key={item.question} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-brand-500">{item.tags.join(" • ")}</p>
                    <h3 className="mt-1 text-base font-semibold text-slate-900">{item.question}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                    <p className="mt-2 text-xs text-slate-400">Updated {item.updated}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
