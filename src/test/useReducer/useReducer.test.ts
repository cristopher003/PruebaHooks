import { Todo, todoReducer } from "../../useReducer/todoReducer";



describe('Pruebas en todo reducer', () => { 

    const initialState:Todo[]=[{
        id:1,
        todo:'demo todo',
        done:false,
    }];

    const action={
        type:'[TODO] add Todo',
        payload:{
            id:2,
            todo:'nuevo todo',
            done:false,
        }
    }

    test('debe regresar el estado inicial', () => { 
        const newState=todoReducer(initialState,{});
      
        expect(newState).toBe(initialState);

     });


     test('Agewgar un todo', () => { 
        const newState=todoReducer(initialState,action);
      
         expect(newState.length).toBe(2);
         expect(newState).toContain(action.payload);

     });


     test('eliminiar un todo', () => { 
        
        const deleteAction={
            type:'[TODO] remove Todo',
            payload:{
                id:2,
            }
        }
        const newState=todoReducer(initialState,action);
        const newStateAndDelete=todoReducer(initialState,deleteAction);

        expect(newState.length).toBe(2);
        expect(newStateAndDelete.length).toBe(1);
    
    });

    test('realizar el togle del todo', () => { 
        
        const ToggleAction={
            type:'[TODO] Toggle Todo',
            payload:{
                id:1,
            }
        }
        const newState=todoReducer(initialState,{});
        const newStateToggleTodo=todoReducer(initialState,ToggleAction);

        expect(newState.length).toBe(1);
        expect(newStateToggleTodo[0].done).toBeFalsy();
    
    });


 })