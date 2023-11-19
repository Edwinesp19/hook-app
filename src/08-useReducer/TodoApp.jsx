import { useReducer, useEffect, useState} from "react"
import { todoReducer } from "./todoReducer";

const date = new Date().toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'long' });


const initialState = [
    {
        id:new Date().getTime(),
        description:'Recolectar la piedra del alma',
        done:false,
    },
    {
        id:new Date().getTime()*3,
        description:'Recolectar la piedra del alma',
        done:false,
    }
];



export default function TodoApp() {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const [time, setTime] = useState(new Date().toLocaleTimeString("es-ES", { hour: 'numeric', minute: 'numeric', hour12: true }));

    useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString("es-ES", { hour: 'numeric', minute: 'numeric', hour12: true }));
        }, 1000);
        return () => {
          clearInterval(timer);
        };
      }, []);  


      const getSaludo=(name='Edwin')=> {
          const hora = new Date().getHours();
          let saludo = '';

          if (hora >= 6 && hora < 12) {
              saludo = 'Buenos días';
          } else if (hora >= 12 && hora < 18) {
              saludo = 'Buenas tardes';
          } else {
              saludo = 'Buenas noches';
          }

          return <p className="text-xl font-normal  text-white drop-shadow-xl w-full">{saludo}, {name} 👋🏼</p>;
      }

  return (
    <>
     <section className="bg-[url(https://images.unsplash.com/photo-1500829243541-74b677fecc30?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center w-screen flex items-center justify-center gap-3 p-4  h-screen ">


     <div className="grid grid-cols-[1fr,1fr] h-full w-full gap-4 max-w-[1300px]">
        <div className=" flex flex-col items-end justify-start h-full  gap-6 ">

           
                {/* <img className="h-full w-full  min-w-full object-cover " src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                  <div className="drop-shadow-md flex gap-2 py-8 items-center justify-start w-full ">
         <svg className="w-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path> </g></svg>
        <h1 className="text-2xl text-white font-bold py-4 font-Comfortaa">TodoApp</h1>

            
                 </div>
       
            <div className=" p-4  h-full flex-items-center justify-center drop-shadow-2xl w-full bg-transparent">
            <h3 className="text-[130px]  font-bold text-white drop-shadow-xl">
                {time.slice(0,4)}<span className="font-bold text-2xl">{time.slice(4,10)}</span>
            </h3>
            

            <h3 className=" capitalize text-2xl font-bold text-white drop-shadow-xl">
                { date }
            </h3>

            </div>
           


            

        
    </div>
            <div className="h-full w-full grid grid-rows-[120px,auto,58px] gap-2 p-3 border-[1px] border-white/20 bg-black/20 backdrop-blur-lg rounded-3xl overflow-y-auto">
                <div className="flex flex-col w-full items-center justify-between p-5">
                <h2 className="w-full text-white top-0 text-3xl">To do</h2>
                {getSaludo()}

                </div>
                <div className="h-full">

                <label className=" cursor-pointer flex rounded-2xl p-3 px-4 gap-4 h-auto w-full bg-white/10 " htmlFor="todo">


                <input className="peer " type="checkbox" id="todo" name="todo"></input>
                   <span className="peer-checked:line-through peer-checked:text-white/60 transition-all ease-in-out duration-200 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                    </label>
                </div>
          
                    <div className="w-full gap-2 relative flex items-center justify-between rounded-2xl p-1.5 h-[58px] bg-white/5  text-white border-[1px] border-white/20">
            <input 
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="placeholder:text-white/60 group w-full min-w-[300px] pl-4  h-full bg-transparent outline-none border-transparent ring-transparent focus:border-transparent" />

            <button className="m-0 px-4 font-bold rounded-xl h-full bg-white text-gray-600">Agregar</button>
        </div>
            </div>

        </div>
      
    </section>
    </>
  )
}
