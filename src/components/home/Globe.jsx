import {
  Canvas,
  useFrame
} from "@react-three/fiber";

import {
  Sphere,
  OrbitControls,
  Html
} from "@react-three/drei";

import {
  useRef
} from "react";


const locations=[
  {
    name:"Dubai",
    position:[1.2,0.5,1.4]
  },
  {
    name:"Dhaka",
    position:[0.4,0.8,1.8]
  },
  {
    name:"London",
    position:[-1.1,0.9,1.4]
  },
  {
    name:"New York",
    position:[-1.8,0.3,0.8]
  }
];



function Earth(){


const ref=useRef();



useFrame(()=>{

 if(ref.current){
  ref.current.rotation.y +=0.002;
 }

});



return (

<group ref={ref}>


<Sphere args={[2,64,64]}>

<meshStandardMaterial
color="#112899"
metalness={0.3}
roughness={0.8}
/>

</Sphere>



{
locations.map((item,index)=>(

<group
key={index}
position={item.position}
>

<mesh>

<sphereGeometry
args={[
0.05,
32,
32
]}
/>


<meshBasicMaterial
color="#FFFFFF"
/>


</mesh>


<Html>

<span
className="
text-white
text-xs
font-jost
"
>
{item.name}
</span>

</Html>


</group>

))
}


</group>

)

}



export default function Globe(){

return(

<Canvas
camera={{
position:[0,0,6]
}}
>


<ambientLight
intensity={1}
/>


<Earth />


<OrbitControls
enableZoom={false}
/>


</Canvas>

)

}