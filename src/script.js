const projectName = "The Markdown Previewer"

function CreatedBy() {
  return (
    <>
    <h1 className="projectName">{projectName}</h1>
    <p className="created">Created by <a href="https://codepen.io/melari-thermes">THermes</a></p>
    </>
  );
}

function Toolbar(props) {
  return (
      <div id="toolbar">{props.name}</div>
  )
}

function Editor(props) {
    return (
      <>
        <div id="editorbox">
          <Toolbar name='Editor' />
          <textarea 
            name="editor" 
            id="editor" 
            className="inputbox"
            value={props.text}
            onChange={props.onChange}
           ></textarea>
        </div>
      </>
    )
}

function Preview(props) {
    return (
      <>
        <div id="previewbox">
          <Toolbar name='Preview' />
          <div
            name="preview" 
            id="preview" 
            className="inputbox"
            dangerouslySetInnerHTML={{__html: props.markdown}}
            ></div>
        </div>
      </>
    )
}


function App() {
  
  const [text, setText] = React.useState(`
  # Welcome to my Markdown Previewer
  ## Feel free to try some cool stuff!
  ### This project was created for the freeCodeCamp Front End Development Libraries certification.
  
  Here you can convert inline code like, \`<div></div>\` 
  
  Or a multiline block quote, check this one out:
  
  \`\`\`
  function niceCode() {
  return 'beautiful code snippet'
  }
  \`\`\`
  
  You can also make lists, such as:
  
  - Firsts first
  - Seconds second
  - Thirds third
  
  > If you reached this far visit my *GitHub* profile for **more of my work**!
  
![GitHub Logo](https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png)
  
  [My GitHub] (https://github.com/TMHermes)
  
  `);
  
  
  function handleChange(event) {
    setText(event.target.value);
  }
  
  const markdown = marked.parse(text);
  
  marked.setOptions({
    breaks: true
  })
  
  return (
    <>
      <CreatedBy />
      <Editor onChange={handleChange} text={text}/>
      <Preview markdown={markdown} />
    </>    
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('app')
);

root.render(<App />);