import React from 'react';
import './Content.css';
import { TodoList } from '../../TodoList/TodoList';

export const Content = ({
  activeFilterContent,
  tasks,
  isUpdating,
  setIsUpdating,
}) => {
  console.log(tasks);
  return (
    <div className="content">
      <div className="content__board">
        <h2 className="content__board__title">{activeFilterContent}</h2>
        <TodoList
          tasks={tasks}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
        />
      </div>
    </div>
  );
};
