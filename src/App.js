import React from 'react'
import './App.css';
import marked from "react-marked"

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
    var marked = require('marked');
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    return (
      <div>
          <textarea cols="50" rows="4" type="textarea" value={this.state.input} onChange={this.handleChange}>
          </textarea>
        <h1 id="size">{marked(this.state.input)}</h1>
      </div>
    );
  }
}

export default App;
