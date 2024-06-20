


export const TodoItem = ({id,todo,done,onDeleteTodo,onToggleTodo}) => {
  return (
    <>
      <li> <span onClick={()=>onToggleTodo(id)} style={done?{textDecoration:'line-through'}:null}>{ todo} </span>
       <button key={id} onClick={()=>onDeleteTodo(id)}>X</button>
       </li>
      <hr></hr>
    </>
  )
}
