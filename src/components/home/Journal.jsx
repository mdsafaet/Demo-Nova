import { ArrowUpRight } from "lucide-react";
import { news } from "@/data/siteData";

export default function Journal({ onOpenDetail }) {
  return (
    <section className="journal section" id="journal">
      <div className="section-heading">
        <div>
          <p className="eyebrow blue">THE NOVA JOURNAL</p>
          <h2>New perspectives.</h2>
        </div>
        <p>Stories, milestones and the next chapter.</p>
      </div>
      <div className="news-grid">
        {news.map((n) => (
          <button
            className="news-card"
            key={n.title}
            onClick={() => onOpenDetail({ title: n.title, text: n.text, image: n.image, meta: `${n.place} · ${n.date}` })}
          >
            <div className="news-image"><img src={n.image} alt="NOVA architectural inspiration" loading="lazy" /></div>
            <p className="eyebrow">{n.place}<span>{n.date}</span></p>
            <h3>{n.title}</h3>
            <span className="text-link">Read story <ArrowUpRight size={18} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}
