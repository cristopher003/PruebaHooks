import {  act, renderHook } from "@testing-library/react";
import { useForm } from "../hooks/useForm";


describe('Pruebas del form', () => { 

    const initialState={
        username:'',
        email:'',
        password:""
    }

    test('regresar valores por defecto', () => { 
        const {result}=renderHook(()=> useForm(initialState));
       
        
        expect(result.current).toEqual({
            
                formState: { username: initialState.username,
                 email: initialState.email, 
                 password: initialState.password},
                handleInputChange: expect.any(Function),
                onResetForm: expect.any(Function)    
        });
     })


     test('debe de cambiar el nombre del formulario', () => { 

        const nuevoNombre="cristopher";
        const {result}=renderHook(()=> useForm(initialState));
        const event = { target: { name: 'username', value: nuevoNombre } } as React.ChangeEvent<HTMLInputElement>;

       
       
        act(()=>{
            result.current.handleInputChange(event);
            });
        
        const {formState}=result.current;

        expect(formState).toEqual(
                { username: nuevoNombre,
                 email: initialState.email, 
                 password: initialState.password},
        );
     })

     test('debe recetear el formulario', () => { 

        const nuevoNombre="cristopher";
        const {result}=renderHook(()=> useForm(initialState));
        const event = { target: { name: 'username', value: nuevoNombre } } as React.ChangeEvent<HTMLInputElement>;

       
       
        act(()=>{
            result.current.handleInputChange(event);
            result.current.onResetForm();
            });
        
        const {formState}=result.current;

        expect(formState).toEqual(
                { username: initialState.username,
                 email: initialState.email, 
                 password: initialState.password},
        );
     })

 })