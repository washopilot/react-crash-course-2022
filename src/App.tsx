import { Component } from 'react';
import './App.css';

interface Estado {
  contador: number;
}

class App extends Component<{}, Estado> {
  constructor(props: any) {
    super(props);
    this.state = {
      contador: 10,
    };
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState((state, props) => ({
              contador: state.contador - 1,
            }));
          }}>
          -
        </button>
        <h1>{this.state.contador}</h1>
        <button
          onClick={() => {
            this.setState((state, props) => ({
              contador: state.contador + 1,
            }));
          }}>
          +
        </button>
      </div>
    );
  }
}

export default App;
