import { useContext } from "react";
import { TodoContext } from "./TodoContex";

function CreateTodoBtn() {
    const { setOpenModal, openModal } = useContext(TodoContext);
    const buttonStyle = {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px 0'
    };
  
    return <button onClick={() => setOpenModal(!openModal)} style={buttonStyle}>Open modal</button>;
  }
  
  export { CreateTodoBtn };