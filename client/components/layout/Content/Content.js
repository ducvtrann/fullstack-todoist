import React from 'react';
import './Content.css';
import { TodoList } from '../../TodoList';

export const Content = () => (
  <div className="content">
    <div className="content__board">
      <h2 className="content__board__title">Title</h2>
      <TodoList />
    </div>
  </div>
);
