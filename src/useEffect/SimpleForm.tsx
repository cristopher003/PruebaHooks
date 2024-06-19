import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'cristopher1',
        email:''
    })

    const {username, email} = formState;

    const handleInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


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
    {
       (username==='cristopher') && <Message></Message>
    }
    <button>Submit</button>
    </>
  )
}
