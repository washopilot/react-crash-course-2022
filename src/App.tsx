import React from 'react';
import './App.css';

const Person = () => {
  return (
    <>
      <h1>Name: Jhon</h1>
      <h2>Last Name: Doe</h2>
      <h3>Age: 30</h3>
    </>
  );
};

const App = () => {
  const isUserLoggedIn = true;

  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
};

export default App;
