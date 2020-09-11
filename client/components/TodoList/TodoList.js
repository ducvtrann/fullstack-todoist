import React from 'react';
import './TodoList.css';
import { TodoListItem } from '../TodoListItem/TodoListItem';
export const TodoList = ({ tasks }) => {
  console.log(tasks);
  return (
    <ul className="todo-list">
      {tasks.map((task, idx) => {
        return <TodoListItem key={idx} task={task} />;
      })}
    </ul>
  );
};
