import React from 'react';
import './App.css';

const App = () => {
  const name = 'Jhon';
  const isNameShowing = true;

  return (
    <div>
      <h1>Hello, {isNameShowing ? name : 'someone else'}</h1>
    </div>
  );
};

export default App;
