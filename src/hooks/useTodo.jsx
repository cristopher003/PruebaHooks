
import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../useReducer/todoReducer'

export const useTodo = (initialState=[]) => {

    const init=()=>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    }  

    const [todos, dispatch] = useReducer(todoReducer, initialState,init)

 
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])


    const handlerNewTodo=(todo)=>{

        const action={
            type:'[TODO] add Todo',
            payload:todo
        }

        dispatch(action);
        console.log(todo);
    };
    
    const handledeleteTodo=(id)=>{
        dispatch({
            type:'[TODO] remove Todo',
            payload:id
        })
    };


    const handleToggleTodo=(id)=>{
        dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
        })
    };

    return {
        todos,
        handlerNewTodo,
        handledeleteTodo,
        handleToggleTodo
  }
}
