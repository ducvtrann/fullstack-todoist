import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import './TodoListItem.css';

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
      <a className=" list_item_container">
        <div className="todo_list_item">
          {isEditing ? (
            <input
              className="list_item_edit"
              name="content"
              value={editedTodo.content}
              onChange={(e) => handleUpdatingChange(e)}
            ></input>
          ) : (
            <p>{task.content}</p>
          )}

          <div className="icon_container">
            <button
              type="button"
              className="item_icon"
              onClick={() => handleEditingState()}
            >
              <FaPencilAlt />
            </button>
            <button
              type="button"
              className="item_icon"
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
