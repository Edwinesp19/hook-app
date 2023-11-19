import {memo} from "react";

// eslint-disable-next-line react/display-name
export const ShowIncrement = memo(({increment}) => {

    console.log('me volvi a generar :(');

  return (
    <button className="rounded-lg bg-cyan-600 text-white px-3 py-2" onClick={()=>increment(5)}>
      Incrementar
    </button>
  )
})
