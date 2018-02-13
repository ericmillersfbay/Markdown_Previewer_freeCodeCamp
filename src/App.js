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
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    return (
      <div>
      <div class="bar">
        <div class="title">
          <h1>Markdown Previewer</h1>
        </div>
      </div>
      <div id="markdownContainer">
        <div id="rawMarkdown">
          <textarea cols="200" rows="50" type="textarea" value={this.state.input} onChange={this.handleChange} placeholder="Test your Github flavored markdown here."></textarea>
        </div>
        <div id="markdownPreview" dangerouslySetInnerHTML={this.getMarkdownText()}/>
      </div>
      </div>
    );
  }
}

export default App;