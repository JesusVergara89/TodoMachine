function TodoCounter({ completedTodos, totalTodos }) {
    const counterStyle = {
      fontSize: '24px',
      color: '#333',
      fontWeight: 'bold',
      margin: '10px 0'
    };

    let textToRender = `Haz completado ${completedTodos} de ${totalTodos} todos`
    if (completedTodos === totalTodos) {
      textToRender = '¡Felicidades! ¡Has completado todos los todos!'
    } 
  
    return <h1 style={counterStyle}>{textToRender}</h1>;
  }
  
  export { TodoCounter };