import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    // this.headerClick = this.headerClick.bind(this);
    this.state = {title: "", age: 22}
  }

  headerClick(msg) {
    this.setState({title: msg, age: this.state.age + 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header msg={'🤪'} title={'helo'} onHeaderClick={this.headerClick.bind(this)}>
            <h1>hello MFE</h1>
          </Header>
          <h1>{this.state.title + this.state.age}</h1>
        </header>
      </div>
    );
  }
}

export default App;
