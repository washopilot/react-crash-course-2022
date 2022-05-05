import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contador: 0,
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ contador: this.state.contador - 1 })}>-</button>
        <h1>{this.state.contador}</h1>
        <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>+</button>
      </div>
    );
  }
}

export default App;
