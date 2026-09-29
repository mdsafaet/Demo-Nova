import Counter from "../common/Counter";


const stats = [
  {
    value: 17,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 45,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 3200,
    suffix: "",
    label: "Acres Developed",
  },
  {
    value: 4,
    suffix: "",
    label: "Global Markets",
  },
];


export default function ExperienceStats() {

  return (

    <section
      className="
      bg-white
      py-28
      px-6
      overflow-hidden
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >


        {/* Experience Header */}

        <div
          className="
          text-center
          mb-20
          "
        >

          <p
            className="
            font-jost
            uppercase
            tracking-[0.45em]
            text-xs
            text-[#112899]
            "
          >
            Experience
          </p>


          <h2
            className="
            mt-6
            font-jost
            font-semibold
            text-[#0F131F]
            text-3xl
            md:text-[42px]
            leading-tight
            "
          >
            Creating value through
            <br />
            vision and excellence
          </h2>


        </div>



        {/* Counter Section */}

        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          border-y
          border-black/10
          "
        >

          {
            stats.map((item,index)=>(

              <div
                key={index}
                className={`
                py-14
                px-6

                ${
                  index !== stats.length - 1
                  ?
                  "lg:border-r border-black/10"
                  :
                  ""
                }

                `}
              >

                <Counter
                  {...item}
                />

              </div>

            ))
          }


        </div>





        {/* Our Standard */}

        <div
          className="
          mt-32
          flex
          flex-col
          items-center
          justify-center
          text-center
          "
        >


          <p
            className="
            font-jost
            uppercase
            tracking-[0.5em]
            text-xs
            text-[#112899]
            "
          >
            Our Standard
          </p>




          <h3
            className="
            mt-8
            max-w-5xl
            font-jost
            font-semibold
            text-[#0F131F]
            text-4xl
            md:text-5xl
            lg:text-[56px]
            leading-[1.15]
            "
          >

            Design. Engineering.
            <br />

            Governance. Stewardship.

          </h3>




          <div
            className="
            mt-10
            h-[1px]
            w-24
            bg-[#112899]
            "
          />


        </div>



      </div>


    </section>

  );

}