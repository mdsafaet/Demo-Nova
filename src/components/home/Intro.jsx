import { ArrowUpRight } from "lucide-react";
import { principles, story } from "@/data/siteData";

export default function Intro({ onOpenDetail }) {
  return (
    <section className="section intro" id="company">
      <div>
        <p className="eyebrow blue">THE NOVA PERSPECTIVE</p>
        <h2>Beyond buildings.<br /><em>Into belonging.</em></h2>
      </div>
      <div className="intro-copy">
        <p className="lead">We believe the most meaningful places are the ones that stay with you.</p>
        <p>NOVA Development creates communities, residences and commercial destinations with a clear purpose: to bring lasting value to the way people live, work and connect.</p>
        <p>From the first vision to the finest detail, we bring together local understanding and a shared global standard.</p>
        <button className="text-link" onClick={() => onOpenDetail(story)}>Discover our story <ArrowUpRight size={19} /></button>
      </div>
      <div className="principles">
        {principles.map(([title, text], i) => (
          <div key={title}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
