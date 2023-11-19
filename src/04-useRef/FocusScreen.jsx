import { useRef } from "react"


export const FocusScreen = () => {

  const inputRef = useRef()

  const onClick=()=>{
    // document.querySelector('input').select();
    inputRef.current.select();
  }
  return (
    <>
    <h1>FocusScreen</h1>
    <hr />
    <input 
    className="py-2 px-3 bg-gray-100 text-black ring-gray-100 rounded-xl"
     type="text"
      placeholder="Ingrese su nombre"
      ref={inputRef}
      />

    <button className="rounded-lg bg-cyan-600 text-white px-3 py-2" onClick={onClick}>
      Set Focus
    </button>
    </>
  )
}
