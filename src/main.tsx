import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { SimpleFormWithCustom } from './useEffect/SimpleFormWithCustom'
// import { MultipleCustomHooks } from './example/MultipleCustomHooks'

// import { Padre } from "./tarea-memo/Padre";
import { TodoApp } from "./useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <TodoApp/>
  </React.StrictMode>,
)
