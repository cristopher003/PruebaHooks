import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoForm = ({onNewTodo}) => {

   const {formState,handleInputChange,onResetForm }=useForm({
    id:new Date().getTime(),
    todo:'',
    done:false,
   });
 
   function onFormSubmit(event) {
    event.preventDefault();
    // console.log(formState);return;
    if (!formState.todo) return;
    onNewTodo(formState);
    onResetForm();
    }


  return (
    <>
          <form onSubmit={onFormSubmit}>
            <input type="text" 
            name='todo'
            value={formState?.todo}
            onChange={handleInputChange}
            />
            <button  >
                Agregar
                </button>
        </form>
    </>
  )
}
