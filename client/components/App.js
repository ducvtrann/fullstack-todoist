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
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/todos');
      setTasks(response.data);
    };

    fetchData();
  }, [isUpdating]);

  const filteredTodo = () => {
    return filteredGroup(activeFilterContent, tasks);
  };

  return (
    <div className="App">
      <Header />
      <Sidebar
        activeFilterContent={activeFilterContent}
        setActiveFilterContent={setActiveFilterContent}
      />
      <Content
        activeFilterContent={activeFilterContent}
        tasks={filteredTodo()}
        isUpdating={isUpdating}
        setIsUpdating={setIsUpdating}
      />
    </div>
  );
};

export default hot(module)(App);
