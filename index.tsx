import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
