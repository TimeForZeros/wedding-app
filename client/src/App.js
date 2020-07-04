import React from 'react';
import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './App.css';

const App = () => {
  return (
    <div>
      <Dashboard />
      <SignUp />
      <Login />
    </div>
  );
};

export default App;
