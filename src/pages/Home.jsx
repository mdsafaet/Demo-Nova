import { useState } from "react";
import Hero from "@/components/home/Hero";
import MarketStrip from "@/components/home/MarketStrip";
import Intro from "@/components/home/Intro";
import Portfolio from "@/components/home/Portfolio";
import Presence from "@/components/home/Presence";
import Investors from "@/components/home/Investors";
import Responsibility from "@/components/home/Responsibility";
import Journal from "@/components/home/Journal";
import Contact from "@/components/home/Contact";
import DetailDialog from "@/components/common/DetailDialog";
import ExperienceStats from "../components/home/ExperienceStats";

import GlobalMarkets from "../components/home/GlobalMarkets";

export default function Home() {
  // State shared between sections lives here.
  const [market, setMarket] = useState("Dubai");
  const [detail, setDetail] = useState(null);

  return (
    <>
      <Hero />
   
      <MarketStrip onSelectMarket={setMarket} />
      <Intro onOpenDetail={setDetail} />
      <ExperienceStats />
      {/* <ChairmanMessage /> */}
      {/* <GlobalConnection /> */}
      {/* <GlobalMarkets onSelectMarket={setMarket}/> */}
      <Portfolio onOpenDetail={setDetail} />
      <Presence market={market} onMarketChange={setMarket} />
      <Investors />
      <Responsibility />
      <Journal onOpenDetail={setDetail} />
      <Contact />
      <DetailDialog detail={detail} onClose={() => setDetail(null)} />
    </>
  );
}
