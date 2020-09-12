import React from 'react';
import './TodoList.css';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { MdAddBox } from 'react-icons/md';
export const TodoList = ({ tasks }) => {
  return (
    <div className="todo__list__container">
      <ul className="todo__list">
        {tasks.map((task, idx) => {
          return <TodoListItem key={idx} task={task} />;
        })}
      </ul>
      <div className="add__todo__container">
        <input className="add__todo__input" placeholder="Add task"></input>
        <button className="add__todo__btn">
          <MdAddBox className="add__todo__icon" />
        </button>
      </div>
    </div>
  );
};
