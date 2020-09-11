import React from 'react';
import './TodoListItem.css';

export const TodoListItem = ({ task }) => {
  return (
    <li>
      <a className="todo-list-item">{task.content}</a>
    </li>
  );
};
