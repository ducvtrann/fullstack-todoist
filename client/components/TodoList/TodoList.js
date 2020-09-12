import React, { useState } from 'react';
import axios from '../../helpers/axios';
import './TodoList.css';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { MdAddBox } from 'react-icons/md';
export const TodoList = ({ tasks, isUpdating, setIsUpdating }) => {
  const [todo, setTodo] = useState('');

  const submitData = async (e) => {
    event.preventDefault();
    await axios.post('/todos', {
      content: todo,
    });
    setIsUpdating(!isUpdating);
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todo__list__container">
      <ul className="todo__list">
        {tasks.map((task, idx) => {
          return <TodoListItem key={idx} task={task} />;
        })}
      </ul>

      <form className="add__todo__container" onSubmit={(e) => submitData(e)}>
        <input
          className="add__todo__input"
          type="text"
          placeholder="Add task"
          value={todo}
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="add__todo__btn" type="submit">
          <MdAddBox className="add__todo__icon" />
        </button>
      </form>
    </div>
  );
};
