import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { todos } from '../API/todos';
import { UserContext } from '../context/UserContext.js';

const Todo = (props) => {
  // const user = useUser();
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();
        setTodoList(data); // Update the state with the fetched data
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);
  const [user, setUser] = useContext(UserContext);
  let penStyle = { color: 'blue' };
  let trashStyle = { color: 'red' };
  // const t = fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
  //   res.json()
  // );
  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <form>
        <h2 className="label-wrapper">
          <label
            htmlFor="new-todo-input"
            className="label__lg"
          >
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn__primary btn__lg"
        >
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="true"
        >
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="false"
        >
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed="false"
        >
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todoList
          .filter((todo) => todo.userId === user.id)
          .map((todo, index) => (
            <li
              className="todo stack-small"
              key={index}
            >
              <div className="c-cb">
                <input
                  id={`todo-${index}`}
                  type="checkbox"
                  defaultChecked={todo.completed}
                />
                <label
                  className="todo-label"
                  htmlFor={`todo-${index}`}
                >
                  {todo.title}
                </label>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn"
                >
                  Edit <span className="visually-hidden">{todo.title}</span>
                </button>
                <button
                  type="button"
                  className="btn btn__danger"
                >
                  Delete <span className="visually-hidden">{todo.title}</span>
                </button>
              </div>
            </li>
          ))}
        <li className="todo stack-small">
          <div className="c-cb">
            <input
              id="todo-0"
              type="checkbox"
              defaultChecked={true}
            />
            <label
              className="todo-label"
              htmlFor="todo-0"
            >
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn"
            >
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button
              type="button"
              className="btn btn__danger"
            >
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input
              id="todo-1"
              type="checkbox"
            />
            <label
              className="todo-label"
              htmlFor="todo-1"
            >
              Sleep
            </label>
            <button
              type="button"
              className="btn"
            >
              <FaPen style={penStyle} />
              <span className="visually-hidden">Sleep</span>
            </button>
            <button
              type="button"
              className="btn btn__danger"
            >
              <FaTrash style={trashStyle} />
              <span className="visually-hidden">Sleep</span>
            </button>
          </div>
          <div className="btn-group"></div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input
              id="todo-2"
              type="checkbox"
            />
            <label
              className="todo-label"
              htmlFor="todo-2"
            >
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn"
            >
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button
              type="button"
              className="btn btn__danger"
            >
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Todo;
