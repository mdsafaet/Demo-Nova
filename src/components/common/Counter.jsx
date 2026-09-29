import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


export default function Counter({
  value,
  suffix="",
  label
}) {


  const {
    ref,
    inView
  } = useInView({
    triggerOnce:true,
    threshold:0.3
  });



  return (

    <div
      ref={ref}
      className="
      text-center
      "
    >


      <h3
        className="
        font-jost
        text-[#0F131F]
        text-5xl
        md:text-6xl
        font-semibold
        tracking-tight
        "
      >

        {
          inView ?

          <CountUp
            start={0}
            end={value}
            duration={2.5}
          />

          :

          "0"

        }

        {suffix}


      </h3>



      <p
        className="
        mt-5
        font-jost
        uppercase
        tracking-[0.25em]
        text-xs
        text-black/50
        "
      >

        {label}

      </p>


    </div>

  );

}