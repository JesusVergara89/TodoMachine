import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "./TodoContex";

function TodoForm() {
    const { setOpenModal, addTodo } = useContext(TodoContext);

    const [textTodo, settextTodo] = useState('')

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    };

    const labelStyle = {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    };

    const textareaStyle = {
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        resize: 'vertical',
        minHeight: '100px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px 0',
    };

    const cancelButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#f44336',
    };

    const submit = (e) => {
        e.preventDefault()
        addTodo(textTodo)
        setOpenModal(false)
    }

    return (
        <form onSubmit={submit} style={formStyle}>
            <label htmlFor="title" style={labelStyle}>Write your new TODO</label>
            <textarea
                placeholder="Enter your new activity"
                id="title"
                name="title"
                cols="30"
                rows="10"
                value={textTodo}
                onChange={(e) => settextTodo(e.target.value)}
                style={textareaStyle}
            />
≈
            <button
                type="button"
                onClick={() => setOpenModal(false)}
                style={cancelButtonStyle}
            >
                Cancel
            </button>
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    );
}

export { TodoForm };
