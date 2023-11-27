import { TodoList } from "./TodoList";
import { TodoClock } from "./TodoClock";
import { WelcomeText } from "./WelcomeText";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/index";


export default function TodoApp() {

    const {todos, todosCount, completedTodos ,  backgroundImage, handleNewTodo,handleDeleteTodo,handleCheckedTodo} = useTodos();


    return (
    <>
   
     <section className="relative bg-center w-screen flex fle items-center justify-center gap-3 h-full lg:h-screen">
       <img className=" absolute w-screen h-screen object-cover" src={backgroundImage} alt="wallpaper" />
     <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] h-screen md:h-full md:p-4 md:pb-6 w-full gap-4 max-w-[1300px]">
       <TodoClock/>
            <div className="animate-fade-up md:animate-fade-left animate-delay-100 animate-once animate-ease-in-out animate-alternate h-screen md:h-[95vh] w-full grid grid-rows-[100px,auto,50px] md:grid-rows-[120px,auto,50px] gap-2 p-2 md:p-6 md:border-[1px] md:border-white/20 bg-black/30 backdrop-blur-lg md:rounded-3xl">
                <div className="h-[100px] md:h-[120px] flex flex-col w-full items-center justify-between p-5">
                    <span className="flex justify-between items-center w-full">
                        <h2 className="drop-shadow-lg animate-fade-up animate-once animate-ease-in-out   w-auto text-white top-0 text-xl md:text-3xl">Things To do</h2>
                        
                        {
                            todos.length >0?<p className="  w-fit text-white  font-bold text-md md:text-lg bg-white/10 px-3 py-1 rounded-xl">{completedTodos} / {todosCount}</p>:''
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
