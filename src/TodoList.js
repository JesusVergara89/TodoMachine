function TodoList(props) {
    const listStyle = {
      listStyleType: 'none',
      padding: 0
    };
  
    return <ul style={listStyle}>{props.children}</ul>;
  }
  
  export { TodoList };