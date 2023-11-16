import { useState } from "react";

export const useForm = (initialForm={}) => {
    
    const [formState, setformState] = useState(initialForm);

 
    const onInputChange=({target})=>{

        const {name,value} = target; //desestructurar el event del input

        setformState({
            ...formState,
            [name]:value
        });
    }


    const onResetForm = ()=>{
        setformState(initialForm);
      }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
