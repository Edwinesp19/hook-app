import { useLayoutEffect, useRef, useState } from "react"

export const CharacterCard = ({image,name,status,location, gender,species}) => {

    const pRef = useRef();

    const [boxSize, setboxSize] = useState({width:0,height:0})

    useLayoutEffect(()=>{
      const {height,width} = pRef.current.getBoundingClientRect();
        setboxSize({height,width})
    },[name])


  return (
    <>
    <div className="group relative transition-all ease-in-out duration-200">
            <div className="animate-fade animate-duration-[1200ms]  animate-once animate-ease-in-out transition-all ease-in-out duration-200 group-hover:opacity-80  z-[0] opacity-0 scale-110 top-0 absolute h-auto rounded-lg filter blur-xl">
                <img className="  h-full w-[370px]" src={image} alt="" />
            </div>
    <article className="transition-all ease-in-out duration-200 group relative z-[9999] p-3 pb-5 gap-3 flex flex-col items-center justify-start  bg-white shadow-lg rounded-xl h-fit max-w-[325px]">
            <div className="relative object-cover overflow-hidden h-auto w-full rounded-lg">
                <img className="object-cover    relative h-auto w-full rounded-lg " src={image} alt="" />
                <div className="absolute w-fit bottom-2 right-2 shadow-sm h-[32px] flex items-center justify-center  center  select-none whitespace-nowrap rounded-lg bg-white py-2 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none text-gray-500">
                {status}
                </div>
            </div>

            <div className=" bg-white w-full gap-2 flex flex-col align-start">
                 <h2 ref={pRef} className="mb-2 font-bold font-mono text-2xl">{name}</h2>
                 <p className="text-sm text-gray-400">Specie / Gender</p>
            <div className="flex flex-wrap gap-2">
                <div className="w-fit h-[32px] flex items-center justify-center  center relative select-none whitespace-nowrap rounded-lg bg-gray-500 py-2 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                {species}<span className="text-white/70 font-bold px-2"> / </span> {gender}
                </div>
                <div className="w-fit h-[32px] flex gap-3 items-center justify-center relative select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                <svg className="w-4" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd"> <g id="location-outline" fill="currentColor" transform="translate(106.666667, 42.666667)"> <path d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                {location}
                </div>

            </div>
            </div>

        </article>

        <h5>{JSON.stringify(boxSize)}</h5>
        </div>

    </>
         ) 
}
