import { ArrowUpRight, ArrowDown } from "lucide-react";
import HeroVideo from "@/components/home/HeroVideo";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <HeroVideo />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow"><span /> A GLOBAL VISION. A PERSONAL SENSE OF PLACE.</p>
        <h1 id="hero-title">Places for a life<br /><em>well lived.</em></h1>
        <p className="hero-description">Exceptional places. Enduring value.<br />A new perspective on living, from NOVA.</p>
        <a href="#portfolio" className="button button-white">Discover our developments <ArrowUpRight size={19} /></a>
      </div>
      <div className="hero-bottom">
        <span>LAND · RESIDENCES · COMMERCIAL</span>
        <a href="#company">Explore NOVA <ArrowDown size={16} /></a>
        <span className="hero-index">01 <i /> A world of possibilities</span>
      </div>
    </section>
  );
}
