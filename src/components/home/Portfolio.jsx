import { ArrowUpRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/common/Tabs";
import { projects, portfolioFilters } from "@/data/siteData";

export default function Portfolio({ onOpenDetail }) {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="section-heading">
        <div>
          <p className="eyebrow blue">OUR PORTFOLIO</p>
          <h2>Distinctive places.<br /><em>Extraordinary possibilities.</em></h2>
        </div>
        <p>A considered collection of land estates,<br />residences and commercial destinations.</p>
      </div>

      <Tabs defaultValue="All" className="portfolio-tabs">
        <TabsList className="filter-list" aria-label="Filter developments by market">
          {portfolioFilters.map((t) => (
            <TabsTrigger className="filter" value={t} key={t}>{t === "All" ? "All developments" : t}</TabsTrigger>
          ))}
        </TabsList>

        {portfolioFilters.map((t) => (
          <TabsContent value={t} key={t}>
            <div className="project-grid">
              {projects.filter((p) => t === "All" || p.market === t).map((p) => (
                <button
                  key={p.name}
                  className="project-card"
                  onClick={() => onOpenDetail({ title: p.name, text: p.text, image: p.image, meta: `${p.city} · ${p.type}` })}
                >
                  <div className="project-image">
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <span className="project-location">{p.market}</span>
                    <span className="project-open"><ArrowUpRight size={22} /></span>
                  </div>
                  <div className="project-info">
                    <p className="eyebrow">{p.type}</p>
                    <h3>{p.name}</h3>
                    <span>{p.city}</span>
                  </div>
                </button>
              ))}
            </div>
            {t === "UK" && (
              <div className="empty-market">
                <h3>A new chapter in the United Kingdom.</h3>
                <p>Our UK presence is developing. Speak with our team for the latest project information.</p>
                <a className="text-link" href="#contact">Contact the team <ArrowUpRight size={18} /></a>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
