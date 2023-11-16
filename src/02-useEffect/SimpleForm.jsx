import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Edwin',
        email:'edwin@gmail.com'
    });

    const {username,email} = formState; //desesctructurar el objeto del formstate

    const onInputChange=({target})=>{

        const {name,value} = target; //desestructurar el event del input

        setformState({
            ...formState,
            [name]:value
        });
    }


    useEffect(() => {
      // console.log('UseEffect called!')
    
    },[] );

    useEffect(() => {
        // console.log('formState changed!')
      
      },[formState] );

    useEffect(() => {
        // console.log('email changed!')
      
    },[email] );
    

  return (
    <>
  
    <div className="w-full h-full flex flex-col gap-3 items-center ">
    <h1 className="text-4xl">Formulario Simple</h1>
    <hr />
  <form className="bg-white shadow-lg w-full rounded px-8 pt-6 pb-8 mb-4 max-w-xs">
  <div className="flex flex-col gap-4 items-start mb-6">
  
    <div className="w-full">
      <input 
      type="text"
       placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
         className="transition ease-in-out duration-300 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
    </div>
    <div className="w-full">
      <input 
      type="email"
       placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
         className="transition ease-in-out duration-300 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
    </div>
  </div>
   
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Enviar
      </button>
  </form>

  {(username=='Edwin')&&<Message/>}
    </div>

    </>
  )
}
