import { ArrowUpRight } from "lucide-react";
import { markets } from "@/data/siteData";

export default function MarketStrip({ onSelectMarket }) {
  return (
    <div className="market-strip" aria-label="Our four markets">
      <span className="strip-title">FOUR MARKETS.<br />ONE SHARED VISION.</span>
      {markets.map((m) => (
        <a key={m.name} href="#presence" onClick={() => onSelectMarket(m.name)}>
          <span>{m.name}</span>
          <small>{m.country}</small>
          <ArrowUpRight size={18} />
        </a>
      ))}
    </div>
  );
}
