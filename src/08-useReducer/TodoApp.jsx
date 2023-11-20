import { useReducer, useEffect, useState} from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoClock } from "./TodoClock";
import { WelcomeText } from "./WelcomeText";
import { TodoAdd } from "./TodoAdd";




const initialState = [
    // {
    //     id:new Date().getTime(),
    //     description:'Recolectar la piedra del alma',
    //     done:false,
    // },
];
 
const init=()=>{
    return JSON.parse(localStorage.getItem('todos')) ||[];
}

export default function TodoApp() {

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    
    }, [todos])
    

    const handleNewTodo =(todo)=>{
        const action = {
            type:'[TODO] Add Todo',
            payload:todo,
        }

         dispatch(action);
    }

    const handleDeleteTodo=(id)=>{
        dispatch({
            type:'[TODO] Remove Todo',
            payload:id,
        });
    }

    const handleCheckedTodo=(id)=>{
        dispatch({
            type:'[TODO] Checked Todo',
            payload:id,
        });
    }


  return (
    <>
     <section className="bg-[url(https://images.unsplash.com/photo-1500829243541-74b677fecc30?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center w-screen flex items-center justify-center gap-3 h-screen ">


     <div className="grid grid-cols-[1fr,1fr] h-full p-4 pb-6 w-full gap-4 max-w-[1300px]">
       <TodoClock/>
            <div className="animate-fade-left animate-delay-100 animate-once animate-ease-in-out animate-alternate h-[95vh] w-full grid grid-rows-[120px,auto,50px] gap-2 p-6 border-[1px] border-white/20 bg-black/25 backdrop-blur-lg rounded-3xl">
                <div className=" h-[120px] flex flex-col w-full items-center justify-between p-5">
                    <span className="flex justify-between items-center w-full">
                        <h2 className="animate-fade-up animate-once animate-ease-in-out   w-auto text-white top-0 text-3xl">Things To do</h2>
                        
                        {
                            todos.length >0?<p className="  w-fit text-white  font-bold text-lg bg-white/10 px-3 py-1 rounded-xl">{todos.filter(td=>td.done).length} / {todos.length}</p>:''
                        }

                    </span>
                <WelcomeText/>

                </div>

               <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onCheckedTodo={handleCheckedTodo}/>

                <TodoAdd onNewTodo={handleNewTodo} />
          
            </div>

        </div>
      
    </section>
    </>
  )
}
