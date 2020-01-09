import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      value: 'JS File'
    };
  }
  change = () => {
    // api
    // onSucc
    //   this.setState({
    //     name: "Mani23424"
    //   })
    //   221
  }
  render() {
    //if (succs): return <div> </
    return (
      <div>
      Sample Text
        <Hello val={this.state.name} val2="valll" />
        <p>
          Start editing to see some magic happen :)
          
        </p>
        <h1 onClick={this.change}> {this.state.value} </h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
