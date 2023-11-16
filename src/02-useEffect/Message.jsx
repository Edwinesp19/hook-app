import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})

    useEffect(() => {

        const onMouseMove = ({x,y})=>{
            // const coords ={x,y};
            setCoords({x,y});
            console.log(coords)
        }

    //   console.log('Message Mounted')
        window.addEventListener('mousemove',onMouseMove);
        return () => {
            console.log('Message Unmounted')
            window.addEventListener('mousemove',onMouseMove);
        }
    }, [])
    

  return (
    <>
    <h3>usuario ya existe</h3>
    {JSON.stringify(coords)}
    </>
  )
}
