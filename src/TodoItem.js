import { useContext } from "react";
import { TodoContext } from "./TodoContex";
function TodoItem({todo}) {
    const { deleteTodo, completeTodo } = useContext(TodoContext);
    const itemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: todo.completed ? '#e0ffe0' : '#ffe0e0'
    };
  
    const textStyle = {
      fontSize: '16px',
      color: '#333'
    };
  
    return (
      <li style={itemStyle}>
        <span>{todo.id}</span>
        <p style={textStyle}>{todo.title}</p>
        <div>
            <button onClick={()=> deleteTodo(todo.id)}>Eliminar</button>
            <button onClick={()=> completeTodo(todo.id)}>{ todo.completed ? 'Hacer' : 'Completar'}</button>
        </div>
      </li>
    );
  }
  
  export { TodoItem };