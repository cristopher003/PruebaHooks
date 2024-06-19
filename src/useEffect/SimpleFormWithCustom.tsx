import { useEffect, useState } from "react"
import useForm from "../hooks/useForm";


export const SimpleFormWithCustom = () => {

 
  const {formState, handleInputChange,onResetForm}=useForm( {
    username:'',
    email:'',
    password:""
  })
  

    const {username, email,password} = formState;
 
    useEffect(() => {
      return () => {
      }
    }, [formState])

    
    
  return (
    <>
    <h1>Simple form {username}</h1>
    <hr/>
    <input onChange={handleInputChange} value={username} type="text" name="username" placeholder="username"/>
    <input onChange={handleInputChange} value={email} type="email" name="email" placeholder="cris@hotmail.com"/>
    <input onChange={handleInputChange} value={password} type="password" name="password" placeholder="****"/>

    {
       (username==='cristopher') && <Message></Message>
    }
    <button onClick={onResetForm}>reset</button>
    </>
  )
}
