import './App.css';
import React from 'react';
import {marked} from 'marked';

marked.setOptions({
  breaks: true
})
const renderer = new marked.Renderer();
class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      input : initialState,
    }
  }
  handleChange (event){
     this.setState({
      input : event.target.value
    })
  }
  render(){
    return (
      <div className="App text-center">
        <h1 className="go-white">Edit text here</h1>
        <textarea id="editor"
         name ='text'
         rows="10" 
         value={this.state.input}
         onChange={this.handleChange.bind(this)}></textarea>
        <h2 className="go-white">Your preview</h2>
        <Preview markdown={this.state.input} />
      </div>
    );
  }
  }
  function Preview ({markdown}){
    return ( 
      <div
      dangerouslySetInnerHTML={{
        __html : marked(markdown, {renderer:renderer})
      }}
      id = "preview"></div>
    )
  } 
  const initialState=` 
this is a paragraph
# h1!
## h2...
### h3 and now more stuff:
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
you can add links ! [links](https://github.com/MarouenC), and
> Block Quotes!
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
        And last but not least, let's not forget embedded images:

        ![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

export default App;
