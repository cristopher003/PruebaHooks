import  {renderHook}  from "@testing-library/react";
import useCounter from "../hooks/useCounter";
import { act } from "react";

describe('Pruebas el useCounter', () => { 

    test('retonar valores por defecto', () => { 
        const {result}=renderHook(()=> useCounter());
        const {counter,increment,decrement,reset}=result.current;
 
        expect(counter).toBe(10); 
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
     });


     test('debe regresar el counter con el valor de 100', () => { 
        const {result}=renderHook(()=> useCounter(100));
        const {counter}=result.current;
        expect(counter).toBe(100); 
      })

      test('debe regresar el counter +1', () => { 
        const {result}=renderHook(()=> useCounter());
        const {increment}=result.current;
        
        act(()=>{
        increment();
        });

        expect(result.current.counter).toBe(11); 
      })



      test('debe regresar el counter -1', () => { 
        const {result}=renderHook(()=> useCounter());
        const {decrement}=result.current;
        
        act(()=>{
        decrement();
        });

        expect(result.current.counter).toBe(9); 
      })
   
      test('debe restablecer el counter', () => { 
        const {result}=renderHook(()=> useCounter());
        const {decrement,reset}=result.current;
        
        act(()=>{
        decrement();
        reset(); 
        });

        expect(result.current.counter).toBe(10); 
      })
 })

 