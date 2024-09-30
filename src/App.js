import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/" exact>
                {" "}
                Home{" "}
              </Link>
            </li>

            <li>
              <Link to="/todos"> Todo List </Link>
            </li>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todos" element={<TodoList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
