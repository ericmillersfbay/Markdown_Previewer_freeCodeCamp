import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      
      <div>
          <textarea cols="50" rows="4" type="textarea" value={this.state.input} onChange={this.handleChange}>
          </textarea>
        <h1 id="size">{this.state.input}</h1>
      </div>
    );
  }
}

export default App;
