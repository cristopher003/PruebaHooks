const initialSate=[{
  id:1,
  todo:'comprar leche',
  done:false,
}]


// Suggested code may be subject to a license. Learn more: ~LicenseLog:2798629205.
const todoReducer=(state=initialSate,action={})=>{

  if (action.type==='[TODO] add') {
    return [...state,action.payload]
  }

  return action;
}


let todos=todoReducer();

const newTodo={
  id:2,
  todo:'comprar pan',
  done:false,
}

const addTodoAction={
  type:'[TODO] add',
  payload:newTodo
}

todos=todoReducer(todos,addTodoAction);


