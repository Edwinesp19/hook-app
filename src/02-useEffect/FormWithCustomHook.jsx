// import { useState } from 'react'
// import { Message } from "./Message";
import { useForm } from "../hooks";

export const FormWithCustomHook = () => {

  const {onResetForm, onInputChange,username,email,password} = useForm({
    username: '',
    email:'',
    password:''
});

// const {username,email,password} = formState; //desesctructurar el objeto del formstate


    

  return (
    <>
  
    <div className="w-full h-full flex flex-col gap-3 items-center ">
    <h1 className="text-4xl">Formulario con Custom Hook Simple</h1>
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
    <div className="w-full">
      <input 
      type="password"
       placeholder="********"
        name="password"
        value={password}
        onChange={onInputChange}
         className="transition ease-in-out duration-300 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
    </div>
  </div>
   
      <button onClick={onResetForm} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Eliminar
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Enviar
      </button>
  </form>

    </div>

    </>
  )
}
