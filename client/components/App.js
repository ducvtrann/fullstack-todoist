import React, { useState, useEffect } from 'react';
import axios from '../helpers/axios';
import { hot } from 'react-hot-loader';
import { Header } from './layout/Header/Header';
import { Content } from './layout/Content/Content';
import { Sidebar } from './layout/Sidebar/Sidebar';
import { categorizesTodos, getProjectList, projectTodos } from '../helpers';
import './App.css';

const App = () => {
  const [activeFilterContent, setActiveFilterContent] = useState('Inbox');
  const [tasks, setTasks] = useState({ Inbox: [], Today: [], Upcoming: [] });

  const fetchData = async () => {
    const todo = await axios.get('/todos');
    const categorizedTodos = categorizesTodos(todo.data);

    const project = await axios.get('/projects');
    const additionalProjectsTodos = projectTodos(project.data);
    setTasks({ ...categorizedTodos, ...additionalProjectsTodos });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Sidebar
        activeFilterContent={activeFilterContent}
        setActiveFilterContent={setActiveFilterContent}
        projects={getProjectList(Object.keys(tasks))}
      />
      <Content
        activeFilterContent={activeFilterContent}
        tasks={tasks[activeFilterContent]}
      />
    </div>
  );
};

export default hot(module)(App);
