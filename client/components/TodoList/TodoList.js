import React, { useState } from 'react';
import axios from '../../helpers/axios';
import './TodoList.css';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { MdAddBox } from 'react-icons/md';

export const TodoList = ({ tasks, isUpdating, setIsUpdating }) => {
  const [todo, setTodo] = useState('');

  const addTodo = async (e) => {
    const projectId = tasks[0].projectId;
    const newTodo = {
      content: todo,
      projectId: projectId,
    };

    event.preventDefault();
    await axios.post('/todos', newTodo);
    setIsUpdating(!isUpdating);
    setTodo('');
  };

  const updateTodo = async (todoId, updatedTodo) => {
    try {
      event.preventDefault();
      await axios.patch(`/todos/${todoId}`, {
        ...updatedTodo,
      });
      setIsUpdating(!isUpdating);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoId) => {
    event.preventDefault();
    await axios.delete(`/todos/${todoId}`);
    setIsUpdating(!isUpdating);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todo__list__container">
      <ul className="todo__list">
        {tasks.map((task, idx) => {
          return (
            <TodoListItem
              key={idx}
              task={task}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </ul>

      <form className="add__todo__container" onSubmit={(e) => addTodo(e)}>
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
