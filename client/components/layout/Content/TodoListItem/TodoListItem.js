import React, { useState, useEffect } from 'react';
import './TodoListItem.css';
import { FaPencilAlt, FaTrashAlt, FaPen } from 'react-icons/fa';

export const TodoListItem = ({ task, deleteTodo, updateTodo }) => {
  const [editedTodo, setEditedTodo] = useState({});
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setEditedTodo({
      content: task.content,
      complete: task.complete,
    });
  }, []);

  const handleEditingState = () => {
    setEditing(!isEditing);

    if (isEditing) {
      setEditing(!isEditing);
      updateTodo(task.id, editedTodo);
    }
  };

  const handleUpdatingChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <li>
      <a className=" list__item__container">
        <div className="todo__list__item">
          {isEditing ? (
            <input
              className="list__item__edit"
              name="content"
              value={editedTodo.content}
              onChange={(e) => handleUpdatingChange(e)}
            ></input>
          ) : (
            <p>{task.content}</p>
          )}

          <div className="icon__container">
            <button
              type="button"
              className="item__icon"
              onClick={() => handleEditingState()}
            >
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
