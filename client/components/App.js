import React, { useState, useEffect } from 'react';
import { filteredGroup } from '../helpers';
import axios from '../helpers/axios';
import './App.css';
import { hot } from 'react-hot-loader';
import { Header } from './layout/Header/Header';
import { Content } from './layout/Content/Content';
import { Sidebar } from './layout/Sidebar/Sidebar';

const App = () => {
  const [activeFilterContent, setActiveFilterContent] = useState('Inbox');
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isProjectCollapse, setProjectCollapse] = useState(true);
  const [isFilterProjectTodo, setFilterProjectTodo] = useState(false);

  const fetchTodos = async () => {
    const response = await axios.get('/todos');
    setTasks(response.data);
  };

  const fetchProjects = async () => {
    const response = await axios.get('/projects');
    setProjects(response.data);
  };

  useEffect(() => {
    fetchTodos();
    fetchProjects();
  }, [isUpdating]);

  const filteredTodo = () => {
    return filteredGroup(activeFilterContent, tasks);
  };

  const fetchProjectTodos = () => {
    const project = projects.find(
      (project) => project.name === activeFilterContent
    );
    return project.Todos;
  };

  return (
    <div className="App">
      <Header />
      <Sidebar
        activeFilterContent={activeFilterContent}
        setActiveFilterContent={setActiveFilterContent}
        isProjectCollapse={isProjectCollapse}
        projects={projects}
        setProjectCollapse={setProjectCollapse}
        isFilterProjectTodo={isFilterProjectTodo}
        setFilterProjectTodo={setFilterProjectTodo}
      />
      <Content
        activeFilterContent={activeFilterContent}
        tasks={isFilterProjectTodo ? fetchProjectTodos() : filteredTodo()}
        isUpdating={isUpdating}
        setIsUpdating={setIsUpdating}
      />
    </div>
  );
};

export default hot(module)(App);
