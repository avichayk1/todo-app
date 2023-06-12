import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const Todo = ({
  todoItem,
  clickToToggle,
  clickToDelete,
  handleTodoClick,
  handleChange,
}) => {
  const penStyle = { color: 'blue' };
  const trashStyle = { color: 'red' };

  return (
    <div
      className={`card mb-3 ${todoItem.completed ? 'bg-success' : 'bg-info'}`}
    >
      <div className="card-body">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => handleTodoClick(todoItem.id)}
          />
          <label
            className={`form-check-label ${
              todoItem.completed ? 'text-white' : ''
            }`}
            style={{ fontSize: 'large', fontWeight: 'bold' }}
          >
            {todoItem.title}
          </label>
        </div>
        <button
          name="edit"
          className="btn btn-link"
          onClick={clickToToggle}
        >
          <FaPen style={penStyle} />
        </button>
        <button
          name="delete"
          className="btn btn-link"
          onClick={handleChange}
        >
          <FaTrash style={trashStyle} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
