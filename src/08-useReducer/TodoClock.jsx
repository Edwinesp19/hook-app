import { useEffect, useState } from "react";

const date = new Date().toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'long' });

export const TodoClock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString("es-ES", { hour: 'numeric', minute: 'numeric', hour12: true }));

    useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString("es-ES", { hour: 'numeric', minute: 'numeric', hour12: true }));
        }, 1000);
        return () => {
          clearInterval(timer);
        };
      }, []);  

  return (
    <div className="animate-once animate-ease-in-out animate-normal hidden lg:flex flex-row  lg:flex-col items-start lg:items-end justify-between lg:justify-start h-full  lg:gap-6 ">

    <div className="px-4 animate-fade-up animate-delay-75 animate-once animate-ease-in-out animate-normal drop-shadow-md flex gap-2 pt-2 lg:py-8 items-center justify-start w-full ">
<svg className="w-7 text-white drop-shadow-xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path> </g></svg>
<h1 className="text-2xl drop-shadow-sm text-white font-bold py-4 font-Comfortaa">TodoApp</h1>
   </div>

<div className="md:pr-4 lg:p-4 h-full flex-items-center justify-center drop-shadow-2xl w-full bg-transparent">
<h4 className="animate-fade-up animate-delay-100 animate-once animate-ease-in-out animate-normal text-end md:text-start text-[40px] lg:text-[130px]  font-bold text-white drop-shadow-lg">
  {time.slice(0,5)}<span className="font-bold text-2xl">{time.slice(5,10)}</span>
</h4>


<h3 className="animate-fade-up  animate-delay-200 animate-once animate-ease-in-out animate-normal capitalize  md:text-start md:text-md lg:text-2xl font-bold text-white drop-shadow-lg">
  { date }
</h3>

</div>


</div>
  )
}
