import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { hot } from 'react-hot-loader';
import { Header } from './layout/Header/Header';
import { Content } from './layout/Content/Content';
import { Sidebar } from './layout/Sidebar/Sidebar';

const App = () => {
  const [activeFilterContent, setActiveFilterContent] = useState('Inbox');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/todos');
      console.log(response.data);
      setTasks(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Sidebar
        activeFilterContent={activeFilterContent}
        setActiveFilterContent={setActiveFilterContent}
      />
      <Content activeFilterContent={activeFilterContent} />
    </div>
  );
};

export default hot(module)(App);
