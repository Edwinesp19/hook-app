import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const {counter, increment, decrement} = useCounter(1);

    const [show,setShow] =useState(true);

    
  return (
    <>

    <h1 className="text-2xl">Counter: <Small value={counter}/></h1>

    <hr />

    <button className="rounded-lg bg-cyan-600 text-white px-3 py-2" onClick={()=>increment(1)}>
      +1
    </button>
    <button className="rounded-lg bg-cyan-600 text-white px-3 py-2" onClick={()=>setShow(!show)}>
      show / hide {JSON.stringify(show)}
    </button>
        
    </>
  )
}
