import { useMemo, useState } from "react";
import { useCounter } from "../hooks"


const heavyStuff = (iterationNumber=100)=>{
  for(let i=0; i<iterationNumber;i++){
    console.log('aho vamos...');
  }

  return`${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, increment, } = useCounter(4000);

    const [show,setShow] =useState(true);

    const memorizedValue = useMemo(()=>heavyStuff(counter),[counter])

  return (
    <>

    <h1 className="text-2xl">Counter: <small >{counter}</small></h1>

    <hr />

    <h4>{memorizedValue}</h4>

    <button className="rounded-lg bg-cyan-600 text-white px-3 py-2" onClick={()=>increment(1)}>
      +1
    </button>
    <button className="rounded-lg bg-cyan-600 text-white px-3 py-2" onClick={()=>setShow(!show)}>
      show / hide {JSON.stringify(show)}
    </button>
        
    </>
  )
}
