import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

  const {counter,increment,decrement,reset} = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>

      <button onClick={()=> decrement(2)}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={()=>increment(2)}>+1</button>
    </>
  )
}
