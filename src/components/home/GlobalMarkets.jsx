import { ArrowUpRight } from "lucide-react";
import { markets } from "@/data/siteData";
import Globe from "./Globe";


export default function GlobalMarkets({ onSelectMarket }) {

  return (

    <section
      id="presence"
      className="
      bg-[#0F131F]
      py-28
      px-6
      lg:px-16
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >


        {/* LEFT - Globe */}


        <div
          className="
          h-[520px]
          w-full
          "
        >

          <Globe />

        </div>




        {/* RIGHT - Markets */}


        <div>


          <p
            className="
            font-jost
            uppercase
            tracking-[0.45em]
            text-xs
            text-white/50
            "
          >
            Global Presence
          </p>



          <h2
            className="
            mt-6
            text-white
            font-jost
            font-semibold
            text-4xl
            md:text-5xl
            leading-tight
            "
          >

            FOUR MARKETS.
            <br />

            ONE SHARED VISION.

          </h2>




          <div
            className="
            mt-12
            space-y-5
            "
          >

          {
            markets.map((m)=>(

              <button
                key={m.name}
                onClick={()=>onSelectMarket(m.name)}
                className="
                group
                w-full
                text-left
                border-b
                border-white/20
                pb-6
                flex
                items-center
                justify-between
                "
              >


                <div>


                  <h3
                    className="
                    text-white
                    font-jost
                    text-2xl
                    "
                  >
                    {m.name}
                  </h3>


                  <p
                    className="
                    mt-1
                    text-white/50
                    font-jost
                    text-sm
                    "
                  >
                    {m.country}
                  </p>


                </div>



                <ArrowUpRight
                  size={22}
                  className="
                  text-white/60
                  group-hover:text-white
                  transition
                  "
                />


              </button>


            ))
          }


          </div>


        </div>



      </div>


    </section>

  );

}