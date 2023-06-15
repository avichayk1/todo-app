import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { getTodos, getTodosByID } from '../API/todos';
import { UserContext } from '../context/UserContext';
import Todo from './Todo';
const Todos = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const [sorting, setSorting] = useState('All'); // default sorting option
  const isLoading = useRef(true);
  // const [newTodoItem, setnewTodoItem] = useState('');
  // const [newTodoTitle, setnewTodoTitle] = useState('');
  const handleTodoClick = (id) => {
    const newTodoList = [...todoList];
    const todoItemForChange = newTodoList.find((todo) => todo.id === id);
    const index = newTodoList.indexOf(todoItemForChange);
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  // const handleAdd = (event) => {
  //   const key = event.target.id;
  //   let newTodoList = [...todoList];
  //   const newTodo = {
  //     userId: user.id,
  //     id: todoList.length + 1,
  //     title: newTodoItem,
  //     completed: false,
  //   };

  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  //   console.log(newTodoList);

  //   console.log(todoList);
  // };
  // const handleChange = (event) => {
  //   const key = event.target.id;

  //   if (key === 'edit') {
  //     const newTodoList = [...todoList];
  //     const todoItemForChange = newTodoList.find((todo) => todo.id === key);
  //     const index = newTodoList.indexOf(todoItemForChange);
  //     newTodoList[index].title = newTodoTitle;
  //     setTodoList(newTodoList);
  //   } else if (key === 'delete') {
  //     let newTodoList = todoList.filter((todo) => todo.id === event.target.id);
  //     setTodoList(newTodoList);
  //     console.log(todoList);
  //   }
  // };

  const sortTodos = () => {
    if (sorting === 'Completed') {
      return todoList.filter((todo) => todo.completed);
    } else if (sorting === 'Active') {
      return todoList.filter((todo) => !todo.completed);
    } else {
      return todoList.sort((a, b) => a.id - b.id);
    }
  };

  useEffect(() => {
    // if (isLoading.current) {
    getTodosByID(user.id)
      .then((data) => {
        setTodoList(data);
      })
      .catch((error) => {
        console.log('Error fetching users:', error);
      });
    //   isLoading.current = false;
    // } else {
    //   sortTodos();
    // }
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 display-4 fw-bold text-white  p-3 rounded">
        TodoList
      </h1>
      {/* <form className="mb-3">
        <div className="input-group">
          <input
            value={newTodoItem}
            onChange={(event) => setnewTodoItem(event.target.value)}
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
            autoComplete="off"
          />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleChange}
            id="add"
          >
            Add
          </button>
        </div>
      </form> */}
      <div
        className="btn-group mb-3"
        role="group"
        aria-label="Task Filters"
      >
        <button
          type="button"
          className={`btn btn-outline-primary ${
            sorting === 'All' ? 'active' : ''
          }`}
          onClick={() => {
            setSorting('All');
          }}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => {
            setSorting('Active');
          }}
          className={`btn btn-outline-primary ${
            sorting === 'Active' ? 'active' : ''
          }`}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn btn-outline-primary ${
            sorting === 'Completed' ? 'active' : ''
          }`}
          onClick={() => {
            setSorting('Completed');
          }}
        >
          Completed
        </button>
      </div>
      <h2 className="mb-4 display-4 fw-bold text-white p-3 rounded">Tasks</h2>
      <div className="mb-4">
        {sortTodos().map((todo, index) => (
          <Todo
            key={todo.id}
            handleTodoClick={handleTodoClick}
            todoItem={todo}
            // handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
