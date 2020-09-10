import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import { Header } from './layout/Header';
import { Content } from './layout/Content';

const App = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);

export default hot(module)(App);
