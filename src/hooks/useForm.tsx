import { useState } from "react";


export const useForm = (InitialForm={}) => {

    const [formState, setFormState] = useState(InitialForm)




    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm= () => {
        setFormState(InitialForm);
    }

  return {
    formState,
    handleInputChange,
    onResetForm
  }
   
}
