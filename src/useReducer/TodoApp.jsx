import { TodoList } from "./TodoList"
import { TodoForm } from './TodoForm'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const {todos,handlerNewTodo,handledeleteTodo,handleToggleTodo}= useTodo({});

    return (
    <>
    <div>
        <h2>Todo App {todos.length}, <small>Pendientes {todos.filter(todo=>!todo.done).length}</small></h2>
        <hr></hr>

        <TodoList todos={todos} 
        onDeleteTodo={handledeleteTodo}
        onToggleTodo={handleToggleTodo}
        ></TodoList>
   
    </div>

    <div>
        <h3>Ingressar Todo</h3>
        <TodoForm onNewTodo={handlerNewTodo} ></TodoForm>
    </div>
    </>
  )
}
