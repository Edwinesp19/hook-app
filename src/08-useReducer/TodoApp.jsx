import { TodoList } from "./TodoList";
import { TodoClock } from "./TodoClock";
import { WelcomeText } from "./WelcomeText";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/index";


export default function TodoApp() {

    const {todos, backgroundImage, handleNewTodo,handleDeleteTodo,handleCheckedTodo} = useTodos();


    return (
    <>
   
     <section className="relative bg-center w-screen flex items-center justify-center gap-3 h-screen">
       <img className=" absolute w-full h-full" src={backgroundImage} alt="wallpaper" />
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
