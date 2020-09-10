import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import { Header } from './layout/Header/Header';
import { Content } from './layout/Content/Content';
import { Sidebar } from './layout/Sidebar/Sidebar';

const App = () => (
  <div className="App">
    <Header />
    <Sidebar />
    <Content />
  </div>
);

export default hot(module)(App);
