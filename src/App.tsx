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
        <button onClick={() => console.log('click')}>-</button>
        <h1>{this.state.contador}</h1>
      </div>
    );
  }
}

export default App;
