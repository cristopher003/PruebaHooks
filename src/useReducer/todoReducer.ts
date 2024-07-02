
export interface Todo {
    id?: number,
    todo?: string,
    done?: boolean
  }

export const todoReducer = (initialState:Todo[]=[], action:any) => {

    switch (action.type) {
        case '[TODO] add Todo':
            return [...initialState,action.payload];
            break;
        case '[TODO] remove Todo':
            return initialState.filter(todo=>todo.id!==action.payload);    
        case '[TODO] Toggle Todo':
            return initialState.map(todo=>{
                if (todo.id===action.payload) {
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo;     
            });
    
        default:
            return initialState;
    }
}
