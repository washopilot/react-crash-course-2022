import React from 'react';
import './App.css';

const Person = (props: any) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  );
};

const App = () => {
  const isUserLoggedIn = true;

  return (
    <div className="App">
      <Person name="Jhon" lastName="Doe" age={25} />
      <Person name="Jane" age={2 + 2} />
      <Person name="Mary" lastName="Poppins" />
    </div>
  );
};

export default App;
