import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
 
const init=()=>{
    return JSON.parse(localStorage.getItem('todos')) ||[]; // carga el listado desde el localstorage, si no hay pues lo deja vacio 
}

const images = [
    'https://images.unsplash.com/photo-1420745981456-b95fe23f5753?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MzEwNDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NzA0NDZ8&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1500829243541-74b677fecc30?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const randomIndex = Math.floor(Math.random() * images.length);

const backgroundImage = images[randomIndex];

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    let todosCount= todos.length;
    let completedTodos= todos.filter(td=>td.done).length;

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos)); //guarda el listado en el local storage
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

  return {
    todos,
    todosCount, 
    completedTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCheckedTodo,
    backgroundImage
  }
   
  
}
