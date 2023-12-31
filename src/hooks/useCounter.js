import { useState } from "react";

export const useCounter =(initialValue=10) =>
{
    const [counter, setCounter] = useState(initialValue);

    const increment = (value=1) =>{
        setCounter(counter+value);
    }
    const decrement = (value=1) =>{
      if  (counter==initialValue) return
        setCounter(counter-value);
    }
    const reset = () =>{
        setCounter(initialValue);
    }

    return{
         counter, // seria lo mismo que counter: counter
         increment,
         decrement,
         reset
    };
}

