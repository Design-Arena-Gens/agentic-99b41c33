import Link from "next/link";

const navigation = [
  { name: "Market Pulse", href: "#market-pulse" },
  { name: "Projects", href: "#projects" },
  { name: "Regulation", href: "#regulation" },
  { name: "Strategies", href: "#strategies" },
  { name: "Knowledge Base", href: "#knowledge" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
            PR
          </span>
          <div>
            <span className="block text-lg font-semibold text-slate-900">PakRealty Intel</span>
            <span className="block text-xs text-slate-500">
              Real estate advisory for Pakistan&apos;s growth corridors
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-brand-600 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>
        <a
          href="#consult"
          className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 md:inline-flex"
        >
          Schedule Strategy Call
        </a>
      </div>
    </header>
  );
}
