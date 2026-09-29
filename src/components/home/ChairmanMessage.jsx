import { ArrowUpRight } from "lucide-react";
import chairmanImage from "../../assets/images/chairmen.jpeg";


export default function ChairmanMessage() {

  return (

    <section
      className="
      bg-[#0F131F]
      py-28
      px-6
      md:px-12
      lg:px-20
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >


        {/* Section Heading */}

        <div
          className="
          mb-20
          "
        >

          <p
            className="
            font-jost
            uppercase
            tracking-[0.45em]
            text-xs
            text-white/50
            "
          >
            Chairman Message
          </p>


          <h2
            className="
            mt-6
            max-w-4xl
            font-jost
            font-semibold
            text-white
            text-4xl
            md:text-[52px]
            leading-tight
            "
          >
            Building spaces that
            inspire generations.
          </h2>


        </div>





        {/* Content */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >



          {/* Image */}

          <div
            className="
            relative
            overflow-hidden
            "
          >

            <img
              src={chairmanImage}
              alt="Chairman"
              className="
              w-full
              h-[520px]
              object-cover
              "
            />


          </div>





          {/* Message */}

          <div>


            <p
              className="
              font-jost
              text-white/80
              text-lg
              leading-relaxed
              "
            >
              At NOVA, we believe every development
              represents more than architecture.
              It represents a vision, a responsibility,
              and a commitment to creating meaningful
              places for people and communities.
            </p>



            <p
              className="
              mt-8
              font-jost
              text-white/80
              text-lg
              leading-relaxed
              "
            >
              Through thoughtful design, innovation,
              and excellence, we continue to shape
              environments that deliver lasting value
              for generations.
            </p>





            {/* Signature */}

            <div
              className="
              mt-12
              border-t
              border-white/20
              pt-8
              "
            >

              <h3
                className="
                font-jost
                text-white
                text-2xl
                font-semibold
                "
              >
                Chairman Name
              </h3>


              <p
                className="
                mt-2
                font-jost
                text-white/50
                "
              >
                Chairman & Founder
              </p>




              <button
                className="
                mt-8
                flex
                items-center
                gap-3
                text-[#112899]
                uppercase
                tracking-[0.25em]
                text-xs
                "
              >

                Read Full Message

                <ArrowUpRight size={18}/>

              </button>


            </div>



          </div>



        </div>



      </div>


    </section>

  );

}