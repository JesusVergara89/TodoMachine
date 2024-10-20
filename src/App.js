import { CreateTodoBtn } from "./CreateTodoBtn";
import { TodoProvider } from "./TodoContex";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from "./TodoContex";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function App() {
  return (
    <TodoProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TodoContext.Consumer>
          {({ completedTodos, totalTodos }) => (
            <TodoCounter
              completedTodos={completedTodos.length}
              totalTodos={totalTodos}
            />
          )}
        </TodoContext.Consumer>

        <TodoContext.Consumer>
          {({ input, setInput }) => (
            <TodoSearch setInput={setInput} input={input} />
          )}
        </TodoContext.Consumer>

        <TodoContext.Consumer>
          {({ loading, error, searchTodos, deleteTodo, completeTodo }) => (
            <TodoList>
              {loading && <h1>Loading...</h1>}
              {error && <h1>Error...</h1>}
              {!loading && searchTodos.length === 0 && (
                <h1>Crea tu primer todo</h1>
              )}
              {searchTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>

        <CreateTodoBtn />

        <TodoContext.Consumer>
        {({ openModal }) => (
          openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )
        )}
      </TodoContext.Consumer>


      </div>
    </TodoProvider>
  );
}

export default App;
