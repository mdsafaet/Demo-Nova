import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  OrbitControls,
  Sphere,
  Line,
  Html,
} from "@react-three/drei";

import {
  useRef,
} from "react";

import * as THREE from "three";



const locations = [
  {
    name:"Dhaka",
    position:[0.8,0.3,0.5],
  },
  {
    name:"Dubai",
    position:[-0.2,0.7,0.7],
  },
  {
    name:"London",
    position:[-0.7,0.5,0.4],
  },
  {
    name:"Singapore",
    position:[0.5,-0.3,0.8],
  },
];





function Globe(){


const globe = useRef();



useFrame(()=>{
  
  if(globe.current){
    globe.current.rotation.y += 0.002;
  }

});



return(

<group ref={globe}>


{/* Earth */}

<Sphere args={[2,64,64]}>

<meshStandardMaterial
color="#112899"
roughness={0.8}
metalness={0.2}
/>

</Sphere>



{/* Atmosphere */}

<Sphere args={[2.08,64,64]}>

<meshBasicMaterial
color="#4572DA"
transparent
opacity={0.12}
/>

</Sphere>



{/* Markers */}


{
locations.map((item,index)=>(

<group
key={index}
position={item.position.map(
(value)=>value*2
)}
>


<mesh>

<sphereGeometry
args={[0.05,32,32]}
/>

<meshBasicMaterial
color="#FFFFFF"
/>

</mesh>



<Html>

<div
className="
text-white
text-xs
whitespace-nowrap
"
>
{item.name}
</div>

</Html>


</group>

))
}





{/* Connection Arc */}

<Line

points={[
[-1.2,0.8,0.8],
[0,1.5,1.5],
[1.2,-0.5,1]
]}

color="#FFFFFF"

lineWidth={1}

/>



</group>


)


}






export default function GlobalConnection(){


return(

<section
className="
bg-[#0F131F]
py-28
px-6
overflow-hidden
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



{/* Text */}


<div>


<p
className="
uppercase
tracking-[0.45em]
text-xs
text-white/50
font-jost
"
>
Global Presence
</p>



<h2
className="
mt-8
text-white
font-jost
font-semibold
text-4xl
md:text-6xl
leading-tight
"
>

CONNECTED
<br/>
BY AMBITION

</h2>



<p
className="
mt-8
text-white/70
font-jost
text-lg
leading-relaxed
max-w-lg
"
>

Different cities.
Distinct opportunities.

<br/>

One commitment to places
of lasting value.

</p>


</div>





{/* Globe */}


<div
className="
h-[500px]
"
>


<Canvas
camera={{
position:[0,0,6]
}}
>


<ambientLight intensity={1}/>


<Globe/>


<OrbitControls
enableZoom={false}
/>


</Canvas>


</div>




</div>


</section>

)

}