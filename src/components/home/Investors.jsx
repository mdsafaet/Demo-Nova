import { ArrowUpRight } from "lucide-react";
import { newsletter } from "@/assets";

export default function Investors() {
  return (
    <section className="investors section" id="investors">
      <div className="investment-image">
        <img src={newsletter} alt="Light-filled contemporary living space" loading="lazy" />
        <span>THOUGHTFULLY DESIGNED. BUILT TO ENDURE.</span>
      </div>
      <div className="investment-copy">
        <p className="eyebrow blue">PARTNER WITH NOVA</p>
        <h2>A shared vision.<br /><em>A longer view.</em></h2>
        <p>Lasting value begins with the right partnership. We bring market knowledge, development expertise and a disciplined approach to every opportunity.</p>
        <ul>
          <li>Local insight across four markets</li>
          <li>Integrated planning and development</li>
          <li>A commitment to long-term stewardship</li>
        </ul>
        <a href="#contact" className="button button-blue">Discuss a partnership <ArrowUpRight size={19} /></a>
      </div>
    </section>
  );
}
