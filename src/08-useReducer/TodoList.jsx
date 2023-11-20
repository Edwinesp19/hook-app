import { TodoItem } from "./TodoItem"


export const TodoList = ({todos=[], onDeleteTodo,onCheckedTodo}) => {
  return (
    <div className="animate-fade-up animate-once animate-ease-in-out animate-delay-200 h-auto flex flex-col gap-2 overflow-y-auto">

    {
      todos.map(todo=>(
        <TodoItem
          key={todo.id} 
          id={todo.id} 
          description={todo.description}
          done={todo.done} 
          onDeleteTodo={onDeleteTodo}
          onCheckedTodo={onCheckedTodo}
          />
      ))
    }

{
todos.length<=0?(<div className="select-none animate-fade-down animate-once animate-duration-700 animate-delay-150 animate-ease-in-out animate-normal absolute border-[1.5px] bg-white/5 transition-all ease-in-out duration-200 rounded-2xl border-white/20 bottom-4 flex w-1/2 flex-col gap-3 p-4 items-start justify-start">
  <span className="flex gap-3 w-full  items-center py-1">
<svg className="h-12 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5.5L3.21429 7L7.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 12.5L3.21429 14L7.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 19.5L3.21429 21L7.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22 12H17M12 12H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path> <path d="M12 19H17M20.5 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path> <path d="M22 5L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
 
  <p className="text-white/80 font-normal py-3">¡Parece que no tienes tareas por hacer!</p>

  </span>
  <p className="text-white font-bold py-2 flex gap-3"><svg className="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 19.5L7 14.5M12 19.5L17 14.5M12 19.5L12 13M12 9.5C12 7.83333 13 4.5 17 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Agrega una nueva tarea</p>
</div>):''
}

</div>
  )
}
