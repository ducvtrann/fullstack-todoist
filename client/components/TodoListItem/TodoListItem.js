import React from 'react';
import './TodoListItem.css';
import { FaPencilAlt, FaTrashAlt, FaPen } from 'react-icons/fa';

export const TodoListItem = ({ task, deleteTodo }) => {
  return (
    <li>
      <a className=" list__item__container">
        <div className="todo__list__item">
          <p>{task.content}</p>
          <div className="icon__container">
            <button type="button" className="item__icon">
              <FaPencilAlt />
            </button>
            <button
              type="button"
              className="item__icon"
              onClick={() => deleteTodo(task.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </a>
    </li>
  );
};
