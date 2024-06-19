import { useState } from "react";


const useForm = (InitialForm={}) => {

    const [formState, setFormState] = useState(InitialForm)


    const handleInputChange = ({target}) => {
        const {name,value} = target;
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

export default useForm