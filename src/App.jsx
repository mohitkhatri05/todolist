import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState();
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if(!todo.trim() )return;
    setTodos([...todos, { id: uuidv4(),todo, isCompleted: false }]);
    settodo("");
  };
  const handleDelete = (id) => {
    let newTodos = todos.filter(item =>{ return item.id !== id

    })
    setTodos(newTodos)

  };
  
  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    settodo(t[0].todo);
    let newTodos = todos.filter(item =>{ return item.id !== id;})
    setTodos(newTodos)
  };
  
const handleCheckbox = (e) => {}

  const handleChange = (e) => {
    settodo(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="body h-screen bg-yellow-100">
      <div className="mx-3 md:container md:mx-auto rounded-xl p-5  md:w-[100%] ">
        <div className="addTodo">
          <h2 className="font-semibold text-xl ">Add To Do</h2>
          <button
            onClick={handleAdd}
            className="bg-yellow-300 rounded-lg px-4 font-bold mt-8 mr-3"
          >
            Add
          </button>
          <input
            onChange={handleChange}
            value={todo}
            className="rounded-lg w-3/4 pl-3 ml-40"
            type="text"
          />
        </div>
        <h2 className="font-semibold text-xl mt-5">your todos</h2>
        <div className="todos justify-between w-1/2 ">
          {todos.map((item) => (
            <div className="todo flex justify-between ">
           
              <div className={item.isCompleted ? "" : " pt-4"}>
                {item.todo}
              </div>
              
              <div className="buttons my-5 mr-5 pl-20 flex ">
                <button
                  onClick={(e) => handleEdit(e, item.id)}
                  className="edit bg-yellow-300 rounded-lg font-bold mr-3 px-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className=" delete bg-yellow-300 rounded-lg  font-bold mr-3 px-3"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );

}
export default App;








