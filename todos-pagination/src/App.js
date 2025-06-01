import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const indexOfLast = currentPage * todosPerPage;
  const indexOfFirst = indexOfLast - todosPerPage;
  const currentTodos = todos.slice(indexOfFirst, indexOfLast);

  const goToPage = (pageNum) => setCurrentPage(pageNum);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="app">
      <h1>Paginated Todos</h1>
      <ul className="todo-list">
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.id}.</strong> {todo.title}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              style={{
                backgroundColor: currentPage === page ? "#007bff" : "#f0f0f0",
                color: currentPage === page ? "#fff" : "#000",
              }}
            >
              {page}
            </button>
          );
        })}

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
