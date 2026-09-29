import { ArrowUpRight, Globe2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/common/Tabs";
import { markets } from "@/data/siteData";

export default function Presence({ market, onMarketChange }) {
  return (
    <section className="presence section" id="presence">
      <div className="presence-intro">
        <p className="eyebrow">CONNECTED BY AMBITION</p>
        <h2>Global reach.<br /><em>Local understanding.</em></h2>
        <p>Different cities. Distinct opportunities.<br />One commitment to places of lasting value.</p>
        <Globe2 className="presence-globe" strokeWidth={0.6} aria-hidden="true" />
      </div>

      <div className="market-details">
        <Tabs value={market} onValueChange={onMarketChange}>
          <TabsList className="city-tabs" aria-label="Explore our markets">
            {markets.map((m, i) => (
              <TabsTrigger key={m.name} className="city-tab" value={m.name}><small>0{i + 1}</small>{m.name}</TabsTrigger>
            ))}
          </TabsList>
          {markets.map((m) => (
            <TabsContent value={m.name} key={m.name} className="city-panel">
              <div className="city-heading">
                <span className="eyebrow">{m.country}</span>
                <span className="status">{m.status}</span>
              </div>
              <h3>{m.name}<ArrowUpRight strokeWidth={1} /></h3>
              <p>{m.text}</p>
              <div className="city-address">
                <span className="eyebrow">CORPORATE OFFICE</span>
                <p>{m.address}</p>
              </div>
              <a href="#contact" className="text-link light">Connect with our team <ArrowUpRight size={18} /></a>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
