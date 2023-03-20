const projectName = "The Markdown Previewer";

function CreatedBy() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", { className: "projectName" }, projectName), /*#__PURE__*/
    React.createElement("p", { className: "created" }, "Created by ", /*#__PURE__*/React.createElement("a", { href: "https://codepen.io/melari-thermes" }, "THermes"))));


}

function Toolbar(props) {
  return /*#__PURE__*/(
    React.createElement("div", { id: "toolbar" }, props.name));

}

function Editor(props) {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { id: "editorbox" }, /*#__PURE__*/
    React.createElement(Toolbar, { name: "Editor" }), /*#__PURE__*/
    React.createElement("textarea", {
      name: "editor",
      id: "editor",
      className: "inputbox",
      value: props.text,
      onChange: props.onChange }))));




}

function Preview(props) {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { id: "previewbox" }, /*#__PURE__*/
    React.createElement(Toolbar, { name: "Preview" }), /*#__PURE__*/
    React.createElement("div", {
      name: "preview",
      id: "preview",
      className: "inputbox",
      dangerouslySetInnerHTML: { __html: props.markdown } }))));




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
    breaks: true });


  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(CreatedBy, null), /*#__PURE__*/
    React.createElement(Editor, { onChange: handleChange, text: text }), /*#__PURE__*/
    React.createElement(Preview, { markdown: markdown })));


}

const root = ReactDOM.createRoot(
document.getElementById('app'));


root.render( /*#__PURE__*/React.createElement(App, null));