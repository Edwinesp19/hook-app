import { useState } from "react"


export const TodoItem = ({id,description,done,onDeleteTodo,onCheckedTodo}) => {

  return (
    <div className="animate-fade-up animate-duration-300 animate-once animate-ease-in-out flex gap-2">
    <label className=" hover:bg-white/10 transition-all ease-in-out duration-200 cursor-pointer flex  rounded-2xl p-3 px-4 gap-4 h-auto w-full bg-white/5 " htmlFor={`todo-${id}`}>
    <input onClick={()=>onCheckedTodo(id)} className="peer" type="checkbox" value={done} id={`todo-${id}`}  name={`todo-${id}`}></input>
    <p className="break-all select-none peer-checked:line-through peer-checked:text-white/60 transition-all ease-in-out duration-200 text-white">{description}</p>
        </label>

        <button onClick={()=>onDeleteTodo(id)} className="group flex w-7 items-center justify-center">
        <svg className="w-7 text-white/70 group-hover:text-white transition-all ease-in-out duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z" stroke="currentcolor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </button>

    </div>
  )
}
