
function TodoSearch({ setInput, input }) {

    

    const divStyle = {
      margin: '10px 0',
    };

    console.log(input)
  
    const inputStyle = {
      padding: '10px',
      width: '100%',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px'
    };
  
    return (
      <div style={divStyle}>
        <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Find a todo"
        style={inputStyle} />
      </div>
    );
  }
  
  export { TodoSearch };