import React, { useState } from 'react';
import axios from '../../../../helpers/axios';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { MdAddBox } from 'react-icons/md';
import './TodoList.css';

export const TodoList = ({ tasks, activeFilterContent, fetchData }) => {
  const [todo, setTodo] = useState('');

  const addTodo = async (e) => {
    const newTodo = {
      content: todo,
      projectName: activeFilterContent,
    };

    event.preventDefault();
    await axios.post('/todos', newTodo);
    fetchData();
    setTodo('');
  };

  const updateTodo = async (todoId, updatedTodo) => {
    try {
      event.preventDefault();
      await axios.patch(`/todos/${todoId}`, {
        ...updatedTodo,
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoId) => {
    event.preventDefault();
    await axios.delete(`/todos/${todoId}`);
    fetchData();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todo_list_container">
      <ul className="todo_list">
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

      <form className="add_todo_container" onSubmit={(e) => addTodo(e)}>
        <input
          className="add_todo_input"
          type="text"
          placeholder="Add task"
          value={todo}
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="add_todo_btn" type="submit">
          <MdAddBox className="add_todo_icon" />
        </button>
      </form>
    </div>
  );
};
