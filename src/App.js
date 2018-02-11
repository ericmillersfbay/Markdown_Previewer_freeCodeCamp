import React from 'react'
import './App.css';
import marked from "marked"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  getMarkdownText() {
    var rawMarkup = marked(this.state.input);
    return { __html: rawMarkup };
  }
  render() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    return (
      <div>
          <textarea cols="50" rows="4" type="textarea" value={this.state.input} onChange={this.handleChange}></textarea>
        <div id="size" dangerouslySetInnerHTML={this.getMarkdownText()}/>
      </div>
    );
  }
}

export default App;
