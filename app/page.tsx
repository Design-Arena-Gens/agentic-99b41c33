import { ConsultForm } from "@/components/ConsultForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InvestmentPlays } from "@/components/InvestmentPlays";
import { KnowledgeBase } from "@/components/KnowledgeBase";
import { MarketPulse } from "@/components/MarketPulse";
import { ProjectUpdates } from "@/components/ProjectUpdates";
import { RegulatoryAlerts } from "@/components/RegulatoryAlerts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <MarketPulse />
        <ProjectUpdates />
        <RegulatoryAlerts />
        <InvestmentPlays />
        <KnowledgeBase />
        <ConsultForm />
      </main>
      <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PakRealty Intel. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:aman@pakrealtyintel.com">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
